import { lookup } from 'node:dns/promises';
import { isIP } from 'node:net';

const MAX_BYTES = 8 * 1024 * 1024;
const MAX_REDIRECTS = 3;
const TIMEOUT_MS = 6000;

function isPrivateAddress(address) {
  if (isIP(address) === 4) {
    const [a, b] = address.split('.').map(Number);
    return a === 0 || a === 10 || a === 127 || (a === 100 && b >= 64 && b <= 127) || (a === 169 && b === 254)
      || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || a >= 224;
  }
  const value = address.toLowerCase();
  if (value.startsWith('::ffff:')) return isPrivateAddress(value.slice(7));
  return value === '::' || value === '::1' || value.startsWith('fc') || value.startsWith('fd') || value.startsWith('fe80');
}

async function assertPublicHost(url) {
  if (url.protocol !== 'https:' && url.protocol !== 'http:') throw new Error('unsupported scheme');
  if (url.username || url.password) throw new Error('credentials not allowed');
  if (url.port && !['80', '443'].includes(url.port)) throw new Error('port not allowed');
  const addresses = await lookup(url.hostname, { all: true });
  if (!addresses.length || addresses.some(entry => isPrivateAddress(entry.address))) throw new Error('host not allowed');
}

/** Fetches an untrusted feed with SSRF, redirect, time and size limits. */
export async function fetchFeedText(feedURL, fetchImpl = fetch) {
  let url = new URL(feedURL);
  for (let hop = 0; hop <= MAX_REDIRECTS; hop += 1) {
    await assertPublicHost(url);
    const response = await fetchImpl(url, {
      redirect: 'manual',
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { 'user-agent': 'PodpinShare/1.0 (+https://getpodpin.com)', accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.5' },
    });
    if (response.status >= 300 && response.status < 400 && response.headers.get('location')) {
      url = new URL(response.headers.get('location'), url);
      continue;
    }
    if (!response.ok || !response.body) throw new Error(`feed status ${response.status}`);
    const reader = response.body.getReader();
    const chunks = [];
    let size = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BYTES) { await reader.cancel(); throw new Error('feed too large'); }
      chunks.push(value);
    }
    return Buffer.concat(chunks).toString('utf8');
  }
  throw new Error('too many redirects');
}

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
function decode(text) {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, entity) => {
      if (entity[0] === '#') {
        const code = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10);
        return Number.isFinite(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : '';
      }
      return ENTITIES[entity.toLowerCase()] ?? match;
    });
}
function plain(text, limit) {
  const value = decode(decode(text ?? '').replace(/<\/?[a-zA-Z!][^>]*>/g, ' ')).replace(/<\/?[a-zA-Z!][^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return value.length > limit ? `${value.slice(0, limit - 1).trimEnd()}…` : value;
}
function tag(xml, name) {
  const match = xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i'));
  return match ? match[1] : null;
}
function attribute(xml, name, attr) {
  const match = xml.match(new RegExp(`<${name}\\s[^>]*?${attr}\\s*=\\s*["']([^"']+)["']`, 'i'));
  return match ? decode(match[1]).trim() : null;
}
function httpsURL(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null;
  } catch {
    return null;
  }
}

/**
 * Extracts only the fields the share page needs. Matching uses the same identity
 * as the app: GUID when present, otherwise the enclosure URL.
 */
export function extractEpisode(xml, { guid, audioURL }, normalize) {
  const channelHead = xml.split(/<item[\s>]/i)[0] ?? '';
  const podcast = {
    title: plain(tag(channelHead, 'title'), 200),
    artworkURL: httpsURL(attribute(channelHead, 'itunes:image', 'href') ?? decode(tag(tag(channelHead, 'image') ?? '', 'url') ?? '').trim()),
  };
  const wantedGUID = guid?.trim() || null;
  const wantedAudio = wantedGUID ? null : normalize(audioURL);
  for (const match of xml.matchAll(/<item[\s>][\s\S]*?<\/item>/gi)) {
    const item = match[0];
    const itemGUID = decode(tag(item, 'guid') ?? '').trim();
    const enclosure = attribute(item, 'enclosure', 'url');
    const matches = wantedGUID ? itemGUID === wantedGUID : (enclosure && normalize(enclosure) === wantedAudio);
    if (!matches) continue;
    return {
      podcastTitle: podcast.title,
      title: plain(tag(item, 'title'), 300),
      description: plain(tag(item, 'itunes:summary') ?? tag(item, 'description') ?? tag(item, 'content:encoded'), 400),
      artworkURL: httpsURL(attribute(item, 'itunes:image', 'href')) ?? podcast.artworkURL,
      audioURL: httpsURL(enclosure),
    };
  }
  return null;
}
