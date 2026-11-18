import { SHARE_ID_PATTERN, episodeShareID, normalizeFeedURL } from './shareId.js';
import { extractEpisode, fetchFeedText } from './feed.js';
import { legacyAppURL, renderSharePage } from './render.js';

export const SITE_ORIGIN = 'https://getpodpin.com';
// Hosts that serve this function through Firebase Hosting. Links and canonical URLs use the
// host the request arrived on, so the web.app test domain produces web.app links.
const ALLOWED_HOSTS = new Set(['getpodpin.com', 'www.getpodpin.com', 'podcast-ajms.web.app', 'podcast-ajms.firebaseapp.com']);

export function originFor(req) {
  const header = req.get?.('x-forwarded-host') ?? req.headers?.['x-forwarded-host'] ?? '';
  const host = String(header).split(',')[0].trim().toLowerCase();
  if (host === 'www.getpodpin.com') return SITE_ORIGIN;
  return ALLOWED_HOSTS.has(host) ? `https://${host}` : SITE_ORIGIN;
}
const META_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const MAX_TIMESTAMP = 48 * 60 * 60;

const isHTTPURL = value => typeof value === 'string' && value.length <= 2048 && normalizeFeedURL(value) !== null;

function parseTimestamp(value) {
  if (value == null || !/^\d{1,6}(\.\d+)?$/.test(value)) return null;
  const seconds = Number(value);
  return seconds > 0 && seconds <= MAX_TIMESTAMP ? seconds : null;
}

/** Validates a registration body and recomputes its ID so callers cannot alias IDs. */
export function validateRegistration(body) {
  if (!body || typeof body !== 'object') return { error: 'invalid body' };
  const { id, kind, feedURL } = body;
  const guid = typeof body.guid === 'string' ? body.guid.trim() : '';
  const audioURL = typeof body.audioURL === 'string' ? body.audioURL.trim() : '';
  if (kind !== 'episode') return { error: 'unsupported kind' };
  if (!SHARE_ID_PATTERN.test(id ?? '')) return { error: 'invalid id' };
  if (!isHTTPURL(feedURL)) return { error: 'invalid feedURL' };
  if (guid.length > 512) return { error: 'invalid guid' };
  if (!guid && !isHTTPURL(audioURL)) return { error: 'guid or audioURL required' };
  if (episodeShareID(feedURL, guid, audioURL) !== id) return { error: 'id mismatch' };
  return {
    record: {
      kind,
      feedURL: feedURL.trim(),
      guid: guid || null,
      audioURL: guid ? null : audioURL,
    },
  };
}

/**
 * Routes Hosting-rewritten requests:
 *   GET  /e/{id}[?t=seconds]  share page (HTML)
 *   GET  /api/shares/{id}     resolve for the app (JSON)
 *   POST /api/shares          idempotent registration (JSON)
 * `store` abstracts Firestore so the routing is testable without emulators.
 */
export function createHandler({ store, loadFeed = fetchFeedText, now = () => Date.now() }) {
  // A store outage must still yield a usable share page rather than a 500.
  async function lookup(id) {
    if (!SHARE_ID_PATTERN.test(id)) return null;
    try {
      return await store.get(id);
    } catch {
      return null;
    }
  }

  async function episodeMetadata(id, record) {
    if (record.meta && now() - (record.metaFetchedAt ?? 0) < META_TTL_MS) return record.meta;
    try {
      const xml = await loadFeed(record.feedURL);
      const meta = extractEpisode(xml, record, normalizeFeedURL);
      if (meta) await store.saveMeta(id, meta, now()).catch(() => {});
      return meta ?? record.meta ?? null;
    } catch {
      return record.meta ?? null;
    }
  }

  return async function handle(req, res) {
    const path = (req.path || req.url || '/').split('?')[0].replace(/\/+$/, '');
    res.set('X-Content-Type-Options', 'nosniff');

    if (req.method === 'POST' && path === '/api/shares') {
      res.set('Cache-Control', 'no-store');
      const { error, record } = validateRegistration(req.body);
      if (error) return res.status(400).json({ error });
      await store.create(req.body.id, record, now());
      return res.status(200).json({ id: req.body.id, url: `${originFor(req)}/e/${req.body.id}` });
    }

    const apiMatch = path.match(/^\/api\/shares\/([^/]+)$/);
    if (req.method === 'GET' && apiMatch) {
      const id = apiMatch[1];
      const record = await lookup(id);
      if (!record) {
        res.set('Cache-Control', 'public, max-age=30, s-maxage=30');
        return res.status(404).json({ error: 'not found' });
      }
      res.set('Cache-Control', 'public, max-age=3600, s-maxage=86400');
      return res.status(200).json({ id, kind: record.kind, feedURL: record.feedURL, guid: record.guid ?? null, audioURL: record.audioURL ?? null });
    }

    const pageMatch = path.match(/^\/e\/([^/]+)$/);
    if ((req.method === 'GET' || req.method === 'HEAD') && pageMatch) {
      const id = pageMatch[1];
      const timestamp = parseTimestamp(req.query?.t);
      const shareURL = `${originFor(req)}/e/${id}${timestamp ? `?t=${Math.floor(timestamp)}` : ''}`;
      const record = await lookup(id);
      const episode = record ? await episodeMetadata(id, record) : null;
      res.set('Content-Type', 'text/html; charset=utf-8');
      res.set('Cache-Control', episode ? 'public, max-age=300, s-maxage=86400' : 'public, max-age=60, s-maxage=60');
      return res.status(200).send(renderSharePage({ shareURL, appURL: record ? legacyAppURL(record) : null, episode, timestamp }));
    }

    res.set('Cache-Control', 'no-store');
    return res.status(404).json({ error: 'not found' });
  };
}
