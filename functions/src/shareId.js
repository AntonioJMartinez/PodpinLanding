import { createHash } from 'node:crypto';

// Must stay byte-for-byte identical to Podpin's ShareIdentity.swift.
// Golden vectors in shared/share-id-vectors.json are checked by both test suites.

/**
 * String-level normalization (no URL parser) so Swift and Node agree exactly:
 * lowercase scheme/host, http → https, drop default port, fragment and an empty path.
 */
export function normalizeFeedURL(raw) {
  if (typeof raw !== 'string') return null;
  const value = raw.trim();
  const separator = value.indexOf('://');
  if (separator <= 0) return null;
  const scheme = value.slice(0, separator).toLowerCase();
  if (scheme !== 'http' && scheme !== 'https') return null;
  let rest = value.slice(separator + 3);
  const fragment = rest.indexOf('#');
  if (fragment >= 0) rest = rest.slice(0, fragment);
  const end = rest.search(/[/?]/);
  let authority = end >= 0 ? rest.slice(0, end) : rest;
  let remainder = end >= 0 ? rest.slice(end) : '';
  if (!authority || authority.includes('@') || /\s/.test(authority)) return null;
  authority = authority.toLowerCase().replace(/:(443|80)$/, '');
  if (!remainder.startsWith('/')) remainder = `/${remainder}`;
  return `https://${authority}${remainder}`;
}

export function episodeKey(guid, audioURL) {
  const trimmedGUID = typeof guid === 'string' ? guid.trim() : '';
  if (trimmedGUID) return `g:${trimmedGUID}`;
  const audio = normalizeFeedURL(audioURL);
  return audio ? `a:${audio}` : null;
}

function digestID(input) {
  return createHash('sha256').update(input, 'utf8').digest().subarray(0, 12).toString('base64url');
}

export function episodeShareID(feedURL, guid, audioURL) {
  const feed = normalizeFeedURL(feedURL);
  const key = episodeKey(guid, audioURL);
  if (!feed || !key) return null;
  return digestID(`e1\n${feed}\n${key}`);
}

export function podcastShareID(feedURL) {
  const feed = normalizeFeedURL(feedURL);
  return feed ? digestID(`p1\n${feed}`) : null;
}

export const SHARE_ID_PATTERN = /^[A-Za-z0-9_-]{16}$/;
