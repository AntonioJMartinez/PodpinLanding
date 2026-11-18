// Regenerates shared/share-id-vectors.json. Copy the output into the Podpin app repo
// (PodcastTests/Fixtures/share-id-vectors.json) whenever the algorithm changes.
import fs from 'node:fs/promises';
import { episodeShareID, normalizeFeedURL, podcastShareID } from '../functions/src/shareId.js';

const episodes = [
  { feedURL: 'https://feeds.example.com/show.xml', guid: 'episode-42', audioURL: null },
  { feedURL: 'HTTP://Feeds.Example.com:80/show.xml#frag', guid: '  episode-42\n', audioURL: null },
  { feedURL: 'https://feeds.example.com:443/show.xml', guid: 'episode-42', audioURL: 'https://cdn.example.com/a.mp3' },
  { feedURL: 'https://feeds.example.com/show.xml?format=rss&id=7', guid: 'urn:uuid:5D3F3E3A-1B2C-4D5E-9F00-ABCDEF012345', audioURL: null },
  { feedURL: 'https://feeds.example.com', guid: '', audioURL: 'https://CDN.example.com/audio/ep%2042.mp3?x=1#t=3' },
  { feedURL: 'https://feeds.example.com/', guid: null, audioURL: 'http://cdn.example.com/audio/ep%2042.mp3?x=1' },
  { feedURL: 'https://feeds.example.com/ünïcode/feed', guid: 'Épisode — 7 🎧', audioURL: null },
  { feedURL: 'ftp://feeds.example.com/show.xml', guid: 'x', audioURL: null },
  { feedURL: 'https://user@feeds.example.com/show.xml', guid: 'x', audioURL: null },
  { feedURL: 'https://feeds.example.com/show.xml', guid: '   ', audioURL: null },
];
const vectors = {
  version: 1,
  algorithm: 'base64url(SHA-256("e1\\n" + normalizedFeed + "\\n" + ("g:" + guid | "a:" + normalizedAudio))[0..<12]); podcasts use "p1\\n" + normalizedFeed',
  episodes: episodes.map(item => ({ ...item, normalizedFeedURL: normalizeFeedURL(item.feedURL), id: episodeShareID(item.feedURL, item.guid, item.audioURL) })),
  podcasts: ['https://feeds.example.com/show.xml', 'http://FEEDS.example.com/show.xml', 'https://feeds.example.com/other.xml'].map(feedURL => ({ feedURL, id: podcastShareID(feedURL) })),
};
await fs.writeFile(new URL('./share-id-vectors.json', import.meta.url), `${JSON.stringify(vectors, null, 2)}\n`);
console.log(JSON.stringify(vectors.episodes.map(item => item.id)));
