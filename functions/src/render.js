export const APP_STORE_ID = '6760191862';
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;

const escape = value => String(value ?? '')
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#39;');

export function formatTimestamp(seconds) {
  const total = Math.max(0, Math.floor(seconds));
  const h = Math.floor(total / 3600), m = Math.floor((total % 3600) / 60), s = total % 60;
  const pad = n => String(n).padStart(2, '0');
  return h ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

const STYLE = `:root{color-scheme:light dark;--bg:#f6f4ef;--card:#fff;--ink:#16130f;--muted:#6b645a;--line:rgba(22,19,15,.12);--accent:#16130f;--on-accent:#fff}
@media (prefers-color-scheme:dark){:root{--bg:#100f0d;--card:#1b1a17;--ink:#f4f1ea;--muted:#a59e92;--line:rgba(244,241,234,.14);--accent:#f4f1ea;--on-accent:#16130f}}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);color:var(--ink);font:16px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;display:flex;flex-direction:column;align-items:center;padding:24px 16px}
header{width:100%;max-width:560px;display:flex;align-items:center;gap:10px;margin-bottom:24px}header img{width:32px;height:32px;border-radius:8px}header a{color:inherit;text-decoration:none;font-weight:600}
main{width:100%;max-width:560px;background:var(--card);border:1px solid var(--line);border-radius:20px;padding:24px}
.art{width:100%;aspect-ratio:1;object-fit:cover;border-radius:14px;background:var(--line);display:block}
.show{margin:20px 0 4px;color:var(--muted);font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:.04em}
h1{margin:0 0 8px;font:600 26px/1.2 "New York",ui-serif,Georgia,serif}
.moment{display:inline-block;margin:0 0 12px;padding:2px 10px;border-radius:999px;border:1px solid var(--line);font-size:14px;color:var(--muted)}
p.desc{color:var(--muted);margin:0 0 20px}audio{width:100%;margin:0 0 20px}
.actions{display:flex;flex-wrap:wrap;gap:12px}.button{flex:1 1 200px;text-align:center;padding:14px 18px;border-radius:999px;font-weight:600;text-decoration:none;border:1px solid var(--line);color:var(--ink)}
.button.primary{background:var(--accent);color:var(--on-accent);border-color:transparent}footer{margin-top:24px;color:var(--muted);font-size:13px;text-align:center;max-width:560px}footer a{color:inherit}`;

/**
 * Server-rendered share page. Crawlers (iMessage, WhatsApp, Slack, X…) do not run JS,
 * so every preview field is in the HTML. All feed-derived text is escaped.
 */
export function renderSharePage({ shareURL, appURL, episode, timestamp }) {
  const moment = Number.isFinite(timestamp) && timestamp > 0 ? formatTimestamp(timestamp) : null;
  const hasEpisode = Boolean(episode?.title);
  const title = hasEpisode ? episode.title : 'A podcast episode shared from Podpin';
  const showTitle = hasEpisode ? episode.podcastTitle : '';
  const description = hasEpisode
    ? (episode.description || `Listen to ${episode.title}${showTitle ? ` from ${showTitle}` : ''} in Podpin.`)
    : 'Open this episode in Podpin, the podcast player for transcripts, pins and highlights.';
  const ogTitle = moment ? `${title} · ${moment}` : title;
  const image = episode?.artworkURL || 'https://getpodpin.com/assets/app-icon.png';
  const audioSrc = episode?.audioURL ? `${episode.audioURL}${moment ? `#t=${Math.floor(timestamp)}` : ''}` : null;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escape(ogTitle)}${showTitle ? ` – ${escape(showTitle)}` : ''} | Podpin</title>
<meta name="description" content="${escape(description)}">
<meta name="robots" content="noindex,follow">
<link rel="canonical" href="${escape(shareURL)}">
<meta name="apple-itunes-app" content="app-id=${APP_STORE_ID}, app-argument=${escape(shareURL)}">
<meta property="og:site_name" content="Podpin">
<meta property="og:type" content="website">
<meta property="og:url" content="${escape(shareURL)}">
<meta property="og:title" content="${escape(ogTitle)}">
<meta property="og:description" content="${escape(showTitle ? `${showTitle} · ${description}` : description)}">
<meta property="og:image" content="${escape(image)}">
${audioSrc ? `<meta property="og:audio" content="${escape(episode.audioURL)}">` : ''}
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${escape(ogTitle)}">
<meta name="twitter:description" content="${escape(description)}">
<meta name="twitter:image" content="${escape(image)}">
<link rel="icon" href="/assets/favicon-32x32.png"><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<style>${STYLE}</style></head>
<body><header><img src="/assets/app-icon.png" alt="" width="32" height="32"><a href="/">Podpin</a></header>
<main>
${episode?.artworkURL ? `<img class="art" src="${escape(episode.artworkURL)}" alt="" width="512" height="512" referrerpolicy="no-referrer">` : ''}
${showTitle ? `<p class="show">${escape(showTitle)}</p>` : ''}
<h1>${escape(title)}</h1>
${moment ? `<p class="moment">Starts at ${escape(moment)}</p>` : ''}
<p class="desc">${escape(description)}</p>
${audioSrc ? `<audio controls preload="none" src="${escape(audioSrc)}"></audio>` : ''}
<div class="actions">
${appURL ? `<a class="button primary" href="${escape(appURL)}">Open in Podpin</a>` : ''}
<a class="button${appURL ? '' : ' primary'}" href="${APP_STORE_URL}">Get Podpin on the App Store</a>
</div></main>
<footer>Episode details come from the podcast's public feed. <a href="/">About Podpin</a></footer>
</body></html>`;
}

/** Legacy custom-scheme URL so the page's button works where universal links do not fire. */
export function legacyAppURL({ feedURL, guid, audioURL }) {
  const params = new URLSearchParams({ feed: feedURL });
  if (guid) params.set('guid', guid); else if (audioURL) params.set('audio', audioURL);
  return `podpin://episode?${params.toString().replaceAll('+', '%20')}`;
}
