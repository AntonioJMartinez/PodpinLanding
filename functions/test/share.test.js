import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { episodeShareID, normalizeFeedURL, podcastShareID } from '../src/shareId.js';
import { extractEpisode } from '../src/feed.js';
import { formatTimestamp, legacyAppURL, renderSharePage } from '../src/render.js';
import { createHandler, validateRegistration } from '../src/handler.js';
import { createMemoryStore as memoryStore } from '../src/memoryStore.js';

const vectors = JSON.parse(fs.readFileSync(new URL('../../shared/share-id-vectors.json', import.meta.url), 'utf8'));

test('share IDs match the shared golden vectors', () => {
  for (const item of vectors.episodes) {
    assert.equal(normalizeFeedURL(item.feedURL), item.normalizedFeedURL, item.feedURL);
    assert.equal(episodeShareID(item.feedURL, item.guid, item.audioURL), item.id, item.feedURL);
  }
  for (const item of vectors.podcasts) assert.equal(podcastShareID(item.feedURL), item.id);
});

const FEED = `<?xml version="1.0"?><rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"><channel>
<title><![CDATA[The <b>Show</b> &amp; Co]]></title><itunes:image href="https://img.example.com/show.jpg"/>
<item><title>Other</title><guid>ep-1</guid><enclosure url="https://cdn.example.com/1.mp3" type="audio/mpeg"/></item>
<item><title>Ep &lt;2&gt; "quoted"</title><guid isPermaLink="false">ep-2</guid><description><![CDATA[<p>Hello <script>alert(1)</script> world</p>]]></description>
<itunes:image href="https://img.example.com/ep2.jpg"/><enclosure url="https://cdn.example.com/2.mp3?a=1&amp;b=2" length="1" type="audio/mpeg"/></item>
<item><title>No guid</title><enclosure url="http://CDN.example.com/3.mp3"/></item>
</channel></rss>`;

test('extracts the matching episode by GUID, then by enclosure', () => {
  const byGUID = extractEpisode(FEED, { guid: 'ep-2' }, normalizeFeedURL);
  assert.equal(byGUID.podcastTitle, 'The Show & Co');
  assert.equal(byGUID.title, 'Ep <2> "quoted"');
  assert.equal(byGUID.artworkURL, 'https://img.example.com/ep2.jpg');
  assert.equal(byGUID.audioURL, 'https://cdn.example.com/2.mp3?a=1&b=2');
  assert.match(byGUID.description, /^Hello alert\(1\) world$/);
  const byAudio = extractEpisode(FEED, { guid: null, audioURL: 'https://cdn.example.com/3.mp3' }, normalizeFeedURL);
  assert.equal(byAudio.title, 'No guid');
  assert.equal(byAudio.artworkURL, 'https://img.example.com/show.jpg');
  assert.equal(extractEpisode(FEED, { guid: 'missing' }, normalizeFeedURL), null);
});

test('renders escaped, crawler-ready HTML', () => {
  const html = renderSharePage({
    shareURL: 'https://getpodpin.com/e/abc?t=754',
    appURL: legacyAppURL({ feedURL: 'https://f.example.com/a b', guid: 'g&1' }),
    episode: { title: '<script>x</script>', podcastTitle: 'Show "1"', description: 'd', artworkURL: 'https://img.example.com/a.jpg', audioURL: 'https://cdn.example.com/a.mp3' },
    timestamp: 754,
  });
  assert.ok(!html.includes('<script>x'));
  assert.match(html, /<meta property="og:title" content="&lt;script&gt;x&lt;\/script&gt; · 12:34">/);
  assert.match(html, /<meta property="og:image" content="https:\/\/img.example.com\/a.jpg">/);
  assert.match(html, /app-id=6760191862, app-argument=https:\/\/getpodpin.com\/e\/abc\?t=754/);
  assert.match(html, /podpin:\/\/episode\?feed=https%3A%2F%2Ff.example.com%2Fa%20b&amp;guid=g%261/);
  assert.match(html, /noindex/);
  assert.match(html, /src="https:\/\/cdn.example.com\/a.mp3#t=754"/);
  assert.equal(formatTimestamp(3725), '1:02:05');
});

test('registration rejects mismatched or malformed input', () => {
  const feedURL = 'https://feeds.example.com/show.xml';
  const id = episodeShareID(feedURL, 'episode-42', null);
  assert.deepEqual(validateRegistration({ id, kind: 'episode', feedURL, guid: 'episode-42' }).record,
    { kind: 'episode', feedURL, guid: 'episode-42', audioURL: null });
  assert.equal(validateRegistration({ id, kind: 'episode', feedURL, guid: 'other' }).error, 'id mismatch');
  assert.equal(validateRegistration({ id, kind: 'episode', feedURL: 'file:///etc/passwd', guid: 'x' }).error, 'invalid feedURL');
  assert.equal(validateRegistration({ id: '../x', kind: 'episode', feedURL, guid: 'x' }).error, 'invalid id');
  assert.equal(validateRegistration({ id, kind: 'podcast', feedURL }).error, 'unsupported kind');
});

function call(handler, { method = 'GET', path, query = {}, body, headers = {} }) {
  const res = { statusCode: 0, headers: {}, payload: null };
  res.set = (key, value) => { res.headers[key.toLowerCase()] = value; return res; };
  res.status = code => { res.statusCode = code; return res; };
  res.json = value => { res.payload = value; return res; };
  res.send = value => { res.payload = value; return res; };
  return handler({ method, path, query, body, headers }, res).then(() => res);
}

test('register → resolve → render round trip with metadata caching', async () => {
  const store = memoryStore();
  let fetches = 0;
  const handler = createHandler({ store, loadFeed: async () => { fetches += 1; return FEED; }, now: () => 1000 });
  const feedURL = 'https://feeds.example.com/show.xml';
  const id = episodeShareID(feedURL, 'ep-2', null);

  const registered = await call(handler, { method: 'POST', path: '/api/shares', body: { id, kind: 'episode', feedURL, guid: 'ep-2' } });
  assert.equal(registered.statusCode, 200);
  assert.equal(registered.payload.url, `https://getpodpin.com/e/${id}`);
  await call(handler, { method: 'POST', path: '/api/shares', body: { id, kind: 'episode', feedURL, guid: 'ep-2' } });
  assert.equal(store.docs.size, 1);

  const resolved = await call(handler, { path: `/api/shares/${id}` });
  assert.deepEqual(resolved.payload, { id, kind: 'episode', feedURL, guid: 'ep-2', audioURL: null });

  const page = await call(handler, { path: `/e/${id}/`, query: { t: '90' } });
  assert.equal(page.statusCode, 200);
  assert.match(page.payload, /Ep &lt;2&gt;/);
  assert.match(page.payload, /Starts at 1:30/);
  assert.match(page.headers['cache-control'], /s-maxage=86400/);
  await call(handler, { path: `/e/${id}` });
  assert.equal(fetches, 1, 'metadata is cached in the store');
});

test('links use the allowed request host and ignore spoofed hosts', async () => {
  const handler = createHandler({ store: memoryStore(), loadFeed: async () => FEED });
  const feedURL = 'https://feeds.example.com/show.xml';
  const id = episodeShareID(feedURL, 'ep-2', null);
  const body = { id, kind: 'episode', feedURL, guid: 'ep-2' };
  const viaWebApp = await call(handler, { method: 'POST', path: '/api/shares', body, headers: { 'x-forwarded-host': 'podcast-ajms.web.app' } });
  assert.equal(viaWebApp.payload.url, `https://podcast-ajms.web.app/e/${id}`);
  const spoofed = await call(handler, { path: `/e/${id}`, headers: { 'x-forwarded-host': 'evil.example' } });
  assert.match(spoofed.payload, /<link rel="canonical" href="https:\/\/getpodpin.com\/e\//);
});

test('unknown IDs still render a friendly page and bad paths 404', async () => {
  const handler = createHandler({ store: memoryStore(), loadFeed: async () => { throw new Error('no'); } });
  const page = await call(handler, { path: '/e/AAAAAAAAAAAAAAAA', query: { t: '-5' } });
  assert.equal(page.statusCode, 200);
  assert.match(page.payload, /shared from Podpin/);
  assert.ok(!page.payload.includes('Open in Podpin'));
  assert.match(page.headers['cache-control'], /s-maxage=60/);
  assert.equal((await call(handler, { path: '/api/shares/nope' })).statusCode, 404);
  assert.equal((await call(handler, { path: '/other' })).statusCode, 404);
});
