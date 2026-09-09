import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { isIP } from 'node:net';
import site from '../site.config.mjs';
import english from '../content/pages.en.mjs';
import localized from '../content/pages.localized.mjs';
import trust from '../content/pages.trust.mjs';
import ui from '../content/ui.mjs';
import home from '../content/home-overrides.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = path.join(root, 'dist');
const preview = process.argv.includes('--preview');
const rawOrigin = site.siteUrl || (preview ? 'http://127.0.0.1:3000' : '');
if (!rawOrigin) throw new Error('SITE_URL is required. Set the confirmed HTTPS production origin, or use npm run build:preview.');
const origin = new URL(rawOrigin);
const host = origin.hostname.replace(/^\[|\]$/g, '');
const reservedHost = isIP(host) || !host.includes('.') || /(^|\.)(localhost|local|test|invalid|example|internal)$/.test(host) || /(^|\.)example\.(com|org|net)$/.test(host);
if (origin.username || origin.password || origin.pathname !== '/' || origin.search || origin.hash || (!preview && (origin.protocol !== 'https:' || origin.port || reservedHost))) throw new Error('SITE_URL must be a public HTTPS origin with no port, path, credentials, query, or fragment.');
const gaId = process.env.GA_MEASUREMENT_ID?.trim() || '';
if (gaId && !/^G-[A-Z0-9]+$/.test(gaId)) throw new Error('Invalid GA_MEASUREMENT_ID.');
const provider = process.env.APP_STORE_PROVIDER_TOKEN?.trim() || '';
if (provider && !/^\d+$/.test(provider)) throw new Error('APP_STORE_PROVIDER_TOKEN must be numeric.');
const manifest = JSON.parse(await fs.readFile(path.join(root, 'assets/optimized/manifest.json'), 'utf8'));
const locales = new Map(site.locales.map(locale => [locale.code, locale]));
const content = [...english, ...localized, ...trust];
const route = (slug = '', locale = 'en') => `/${locale === 'en' ? '' : `${locale}/`}${slug ? `${slug}/` : ''}`;
const abs = pathname => new URL(pathname, origin).href;
const e = value => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const json = value => JSON.stringify(value).replaceAll('<', '\\u003c');
const external = url => { if (!/^https:\/\//.test(url)) throw new Error(`External link must use HTTPS: ${url}`); return e(url); };
const homes = site.locales.map(locale => ({ slug: '', locale: locale.code, group: 'home', title: locale.title, heading: home[locale.code].heading, description: locale.description, intro: home[locale.code].intro }));
const hubMetadata = {
  en: {
    features: ['Podcast Player Features for iPhone & Mac | Podpin', 'Explore Podpin podcast transcripts, AI summaries, bookmarks, and notes. Find the features and supported devices that fit the way you listen.'],
    guides: ['Podcast Transcripts, Notes & Listening Guides | Podpin', 'Learn how to find podcast quotes, take useful notes, and revisit episode ideas with practical guides to transcripts, bookmarks, and podcast listening.'],
    compare: ['Compare Podcast Apps and AI Features | Podpin', 'Compare podcast apps for transcripts, notes, privacy, and Apple devices. Understand the differences and choose a player for your listening habits.'],
  },
  es: {
    features: ['Funciones del reproductor de podcasts | Podpin', 'Explora las transcripciones, los resúmenes con IA, los marcadores y las notas de Podpin. Consulta las funciones y los dispositivos compatibles.'],
    guides: ['Guías de transcripción y notas de podcasts | Podpin', 'Aprende a encontrar citas en podcasts y a guardar ideas de cada episodio. Guías prácticas sobre transcripciones, notas y marcadores en Podpin.'],
  },
  de: {
    features: ['Podcast-Funktionen für iPhone und Mac | Podpin', 'Entdecke Transkripte, KI-Zusammenfassungen, Lesezeichen und Notizen in Podpin. Erfahre, welche Funktionen und Geräte zu deinen Hörgewohnheiten passen.'],
    guides: ['Anleitungen für Podcast-Transkripte und Notizen | Podpin', 'Finde Podcast-Zitate und halte wichtige Ideen fest. Praktische Anleitungen zu Transkripten, Notizen und Lesezeichen beim Podcast-Hören mit Podpin.'],
  },
  fr: {
    features: ['Fonctions du lecteur de podcasts | Podpin', 'Découvrez les transcriptions, résumés IA, signets et notes de Podpin. Consultez les fonctions disponibles et les appareils Apple compatibles.'],
    guides: ['Guides de transcription et de notes de podcasts | Podpin', 'Apprenez à retrouver une citation et à conserver les idées de vos podcasts. Des guides pratiques sur les transcriptions, les notes et les signets.'],
  },
};
const hubs = [...new Set(content.map(page => page.locale))].flatMap(locale => ['features', 'guides', 'compare'].filter(group => content.some(page => page.locale === locale && page.group === group)).map(group => ({ slug: group, locale, group: 'hub', collection: group, title: hubMetadata[locale][group][0], heading: ui[locale][group], description: hubMetadata[locale][group][1] })));
const pages = [...homes, ...content, ...hubs];
const pageMap = new Map();
for (const page of pages) {
  if (!locales.has(page.locale) || (page.slug && !/^[a-z0-9]+(?:[-/][a-z0-9]+)*$/.test(page.slug))) throw new Error(`Invalid page identity: ${page.slug}/${page.locale}`);
  const key = route(page.slug, page.locale);
  if (pageMap.has(key)) throw new Error(`Duplicate route: ${key}`);
  pageMap.set(key, page);
}
const resolve = (slug, locale) => pageMap.get(route(slug, locale)) || pageMap.get(route(slug));
const link = (slug, locale) => { const page = resolve(slug, locale); if (!page) throw new Error(`Missing linked page: ${slug} (${locale})`); return route(page.slug, page.locale); };
const variants = page => pages.filter(item => item.slug === page.slug);
function appLink(page, placement) {
  const url = new URL(site.appStoreUrl);
  if (provider) { url.searchParams.set('pt', provider); url.searchParams.set('ct', `${page.locale}_${page.slug.replaceAll('/', '_') || 'home'}_${placement}`.slice(0, 100)); url.searchParams.set('mt', '8'); }
  return e(url.href);
}
function screenshot(name, alt, eager = false) {
  const data = manifest[name];
  if (!data?.widths || !alt) throw new Error(`Image/alt missing: ${name}`);
  return `<img src="/assets/optimized/${name}-640.webp" srcset="${data.widths.map(width => `/assets/optimized/${name}-${width}.webp ${width}w`).join(', ')}" sizes="(max-width: 768px) 72vw, 320px" width="${data.width}" height="${data.height}" alt="${e(alt)}" loading="${eager ? 'eager' : 'lazy'}" ${eager ? 'fetchpriority="high"' : ''} decoding="async" />`;
}
const cta = (page, placement = 'body') => `<a class="button button-primary" href="${appLink(page, placement)}" data-event="app_store_clicked" data-placement="${placement}">${e(ui[page.locale].download)} <span aria-hidden="true">↗</span></a>`;
function languageMenu(page) {
  if (variants(page).length < 2) return '';
  return `<details class="locale-switcher"><summary class="locale-current">${e(locales.get(page.locale).nativeLabel)} <span aria-hidden="true">▾</span></summary><div class="locale-menu">${variants(page).map(item => `<a class="locale-link" href="${route(item.slug, item.locale)}" lang="${locales.get(item.locale).htmlLang}" hreflang="${locales.get(item.locale).htmlLang}" ${item.locale === page.locale ? 'aria-current="page"' : ''}>${e(locales.get(item.locale).nativeLabel)}</a>`).join('')}</div></details>`;
}
function nav(page) {
  const t = ui[page.locale];
  return `<a class="skip-link" href="#main">${e(t.skip)}</a><header><nav class="nav scrolled" aria-label="${e(t.menu)}"><a class="nav-logo" href="${route('', page.locale)}"><img src="/assets/app-icon.png" alt="" width="36" height="36" />Podpin</a><details class="nav-disclosure" open><summary>${e(t.menu)} <span aria-hidden="true">☰</span></summary><div class="site-nav-links">${['features', 'guides', 'compare'].map(slug => `<a href="${link(slug, page.locale)}">${e(t[slug])}</a>`).join('')}<a href="${link('support', page.locale)}">${e(t.support)}</a>${cta(page, 'nav')}</div></details></nav></header>`;
}
function footer(page) {
  const t = ui[page.locale];
  return `<footer class="footer"><div class="site-footer"><div><a class="footer-brand" href="${route('', page.locale)}">Podpin</a><p>${e(t.footerTagline)}</p></div><nav class="footer-links" aria-label="${e(t.menu)}">${['about', 'support', 'privacy', 'compatibility', 'pricing'].map(slug => `<a href="${link(slug, page.locale)}" ${page.locale !== 'en' ? 'lang="en"' : ''}>${e(t[slug])}${page.locale !== 'en' ? ' (EN)' : ''}</a>`).join('')}<a href="/editorial/" lang="en">Editorial</a><a href="/terms/" lang="en">Terms</a></nav>${languageMenu(page)}<p class="footer-copy">© 2026 Podpin</p></div></footer>`;
}
function crumbs(page) {
  if (page.group === 'home') return [];
  const items = [{ name: ui[page.locale].home, path: route('', page.locale) }];
  if (['features', 'guides', 'compare'].includes(page.group)) items.push({ name: ui[page.locale][page.group], path: link(page.group, page.locale) });
  return [...items, { name: page.heading, path: route(page.slug, page.locale) }];
}
function schema(page) {
  const canonical = abs(route(page.slug, page.locale));
  const org = { '@type': 'Organization', '@id': abs('/#organization'), name: 'Podpin', url: abs('/'), logo: { '@type': 'ImageObject', url: abs('/assets/app-icon.png'), width: manifest['app-icon'].width, height: manifest['app-icon'].height }, sameAs: [site.appStoreUrl] };
  const website = { '@type': 'WebSite', '@id': abs('/#website'), url: abs('/'), name: 'Podpin', publisher: { '@id': org['@id'] } };
  const graph = [org, website, { '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: page.heading, description: page.description, inLanguage: locales.get(page.locale).htmlLang, isPartOf: { '@id': website['@id'] } }];
  if (['home', 'features'].includes(page.group)) graph.push({ '@type': 'SoftwareApplication', '@id': abs('/#app'), name: 'Podpin', applicationCategory: 'MultimediaApplication', operatingSystem: 'iOS 26+, iPadOS 26+, macOS 26+, watchOS 11.6+', url: abs('/'), downloadUrl: site.appStoreUrl, screenshot: abs('/assets/optimized/player-640.webp'), description: home.en.intro, publisher: { '@id': org['@id'] } });
  if (crumbs(page).length) graph.push({ '@type': 'BreadcrumbList', itemListElement: crumbs(page).map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: abs(item.path) })) });
  if (['guides', 'compare'].includes(page.group)) graph.push({ '@type': 'Article', '@id': `${canonical}#article`, headline: page.heading, description: page.description, image: abs('/assets/app-icon.png'), dateModified: page.updated, author: { '@type': 'Organization', name: 'Podpin', url: abs('/about/') }, publisher: { '@id': org['@id'] }, mainEntityOfPage: { '@id': `${canonical}#webpage` }, inLanguage: locales.get(page.locale).htmlLang });
  return json({ '@context': 'https://schema.org', '@graph': graph });
}
function head(page, noindex = false) {
  const canonical = abs(route(page.slug, page.locale));
  const locale = locales.get(page.locale);
  const tags = [
    ['name', 'description', page.description], ['name', 'robots', preview || noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1'],
    ['property', 'og:type', ['guides', 'compare'].includes(page.group) ? 'article' : 'website'], ['property', 'og:site_name', 'Podpin'], ['property', 'og:title', page.title], ['property', 'og:description', page.description], ['property', 'og:url', canonical], ['property', 'og:locale', locale.ogLocale], ['property', 'og:image', abs('/assets/app-icon.png')], ['property', 'og:image:width', manifest['app-icon'].width], ['property', 'og:image:height', manifest['app-icon'].height], ['property', 'og:image:alt', 'Podpin app icon'],
    ['name', 'twitter:card', 'summary'], ['name', 'twitter:title', page.title], ['name', 'twitter:description', page.description], ['name', 'twitter:image', abs('/assets/app-icon.png')], ['name', 'theme-color', '#0a0a0a'], ['name', 'apple-itunes-app', `app-id=${site.appStoreId}`],
    ['name', 'google-site-verification', preview ? '' : process.env.GOOGLE_SITE_VERIFICATION], ['name', 'msvalidate.01', preview ? '' : process.env.BING_SITE_VERIFICATION],
  ];
  return `<!doctype html><html lang="${locale.htmlLang}"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>${e(page.title)}</title>${tags.filter(([, , value]) => value).map(([type, name, value]) => `<meta ${type}="${name}" content="${e(value)}" />`).join('')}<link rel="canonical" href="${e(canonical)}" />${variants(page).map(item => `<link rel="alternate" hreflang="${locales.get(item.locale).htmlLang}" href="${abs(route(item.slug, item.locale))}" />`).join('')}${variants(page).length ? `<link rel="alternate" hreflang="x-default" href="${abs(route(page.slug))}" />` : ''}<link rel="icon" href="/assets/favicon-32x32.png" sizes="32x32" /><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" /><link rel="stylesheet" href="/styles.css" /><link rel="stylesheet" href="/seo.css" /><script type="application/ld+json">${schema(page)}</script><script type="application/json" id="podpin-config">${json({ gaId: preview ? '' : gaId, page: route(page.slug, page.locale), locale: page.locale, group: page.group })}</script><script defer src="/script.js"></script></head><body data-page-type="${page.group}">${nav(page)}`;
}
function cards(items, page) {
  const headingTag = page.group === 'hub' ? 'h2' : 'h3';
  return `<div class="resource-grid">${items.map(item => `<a class="resource-card" href="${route(item.slug, item.locale)}" lang="${locales.get(item.locale).htmlLang}"><span class="eyebrow">${e(ui[page.locale][item.group] || ui[page.locale].learnMore)}${item.locale !== page.locale ? ` · ${locales.get(item.locale).nativeLabel}` : ''}</span><${headingTag}>${e(item.heading)}</${headingTag}><p>${e(item.description)}</p><span aria-hidden="true">↗</span></a>`).join('')}</div>`;
}
function faq(page) {
  return page.faq?.length ? `<section class="faq-section" id="faq"><h2>${e(ui[page.locale].faq)}</h2>${page.faq.map(({ q, a }) => `<details class="faq-item"><summary>${e(q)}</summary><p>${e(a)}</p></details>`).join('')}</section>` : '';
}
function renderHome(page) {
  const locale = locales.get(page.locale), copy = home[page.locale];
  const features = [
    { ...locale.transcripts, id: 'transcripts', name: 'episode-detail', slug: 'on-device-podcast-transcription', bullets: [locale.transcripts.bullets[0], copy.search, locale.transcripts.bullets[2], copy.privacy] },
    { ...locale.insights, id: 'insights', name: 'podcast-page', slug: 'ai-podcast-player' },
    { ...locale.highlights, id: 'features', name: 'library-light', slug: 'podcast-app-with-notes' },
  ];
  const picks = ['private-ai-podcast-player', 'podcast-app-with-notes', 'podcast-app-for-mac', 'guides/find-a-podcast-quote'].map(slug => resolve(slug, page.locale));
  return `${head(page)}<main id="main"><section class="hero"><h1 class="home-heading">${e(copy.heading)}</h1><p class="subtitle">${e(copy.intro)}</p><div class="hero-cta-group">${cta(page, 'hero')}<a class="text-link" href="${link('features', page.locale)}">${e(ui[page.locale].features)} ↓</a></div><div class="hero-devices"><div class="phone-mockup phone-left">${screenshot('podcast-detail-dark', locale.platforms.imageAlts[1])}</div><div class="phone-mockup phone-center">${screenshot('player', site.heroImages[1].alt[page.locale] || (page.locale === 'pt' ? 'Tela de reprodução do Podpin' : 'Podpin 播放界面'), true)}</div><div class="phone-mockup phone-right">${screenshot('library-dark', locale.platforms.imageAlts[0])}</div></div></section>${features.map((feature, i) => `<section class="section" id="${feature.id}"><div class="section-inner"><div class="feature-row${i % 2 ? ' reversed' : ''}"><div class="feature-text"><p class="eyebrow">${e(feature.label)}</p><h2>${feature.title.map(e).join(' ')}</h2><p>${e(feature.description)}</p><ul class="feature-list">${feature.bullets.map(bullet => `<li><span aria-hidden="true">✓</span>${e(bullet)}</li>`).join('')}</ul><a class="text-link" href="${link(feature.slug, page.locale)}">${e(ui[page.locale].learnMore)}${resolve(feature.slug, page.locale).locale !== page.locale ? ' (English)' : ''} ↗</a></div><div class="feature-visual"><div class="feature-phone">${screenshot(feature.name, feature.imageAlt)}</div></div></div></div></section>`).join('')}<section class="section section-compact" id="platforms"><div class="section-inner"><p class="eyebrow">${e(locale.platforms.label)}</p><h2>${locale.platforms.title.map(e).join(' ')}</h2><p>${e(copy.sync)}</p><div class="platform-tags">${locale.platforms.tags.map(tag => `<span class="platform-tag">${e(tag)}</span>`).join('')}</div><p class="fine-print">${e(copy.note)}</p><a class="text-link" href="/compatibility/" lang="en">${e(ui[page.locale].compatibility)}${page.locale !== 'en' ? ' (English)' : ''} ↗</a></div></section><section class="section section-compact"><div class="section-inner"><h2>${e(ui[page.locale].learnMore)}</h2>${cards(picks, page)}</div></section><section class="cta-section" id="download"><h2>${locale.cta.title.map(e).join(' ')}</h2><p class="subtitle">${e(copy.intro)}</p>${cta(page, 'footer')}</section></main>${footer(page)}</body></html>`;
}
function sectionHTML(section, i) {
  return `<section id="section-${i}"><h2>${e(section.heading)}</h2>${(section.paragraphs || []).map(text => `<p>${e(text)}</p>`).join('')}${section.bullets ? `<ul>${section.bullets.map(text => `<li>${e(text)}</li>`).join('')}</ul>` : ''}${section.steps ? `<ol>${section.steps.map(text => `<li>${e(text)}</li>`).join('')}</ol>` : ''}${section.table ? `<div class="table-scroll" tabindex="0" role="region" aria-label="${e(section.heading)}"><table><thead><tr>${section.table.headers.map(text => `<th scope="col">${e(text)}</th>`).join('')}</tr></thead><tbody>${section.table.rows.map(row => `<tr>${row.map((text, j) => j ? `<td>${e(text)}</td>` : `<th scope="row">${e(text)}</th>`).join('')}</tr>`).join('')}</tbody></table></div>` : ''}</section>`;
}
function renderContent(page) {
  const t = ui[page.locale], related = (page.related || []).map(slug => resolve(slug, page.locale));
  if (related.some(item => !item)) throw new Error(`Unresolved related page on ${page.slug}`);
  return `${head(page)}<main id="main" class="content-shell"><nav class="breadcrumbs" aria-label="${e(t.home)}">${crumbs(page).map((item, i, all) => i === all.length - 1 ? `<span aria-current="page">${e(item.name)}</span>` : `<a href="${item.path}">${e(item.name)}</a><span aria-hidden="true">/</span>`).join('')}</nav><article><header class="article-header"><p class="eyebrow">${e(t[page.group] || 'Podpin')}</p><h1>${e(page.heading)}</h1><p class="article-intro">${e(page.intro)}</p><p class="byline"><a href="/editorial/">Podpin</a> · ${e(t.updated)} <time datetime="${page.updated}">${page.updated}</time></p>${page.group === 'features' ? cta(page, 'hero') : ''}</header><div class="article-layout"><div class="article-body">${(page.sections || []).map(sectionHTML).join('')}${faq(page)}${page.sources?.length ? `<section class="sources"><h2>${e(t.sourceHeading)}</h2><ul>${page.sources.map(source => `<li><a href="${external(source.url)}" rel="noopener noreferrer">${e(source.label)} ↗</a></li>`).join('')}</ul></section>` : ''}</div><aside class="article-aside"><nav aria-label="${e(t.contents)}"><p class="eyebrow">${e(t.contents)}</p>${(page.sections || []).map((section, i) => `<a href="#section-${i}">${e(section.heading)}</a>`).join('')}${page.faq?.length ? `<a href="#faq">${e(t.faq)}</a>` : ''}</nav>${page.image ? `<figure class="article-screenshot">${screenshot(page.image, page.imageAlt)}<figcaption>${e(page.imageAlt)}</figcaption></figure>` : ''}${cta(page, 'aside')}</aside></div></article>${related.length ? `<section class="related-content"><h2>${e(t.related)}</h2>${cards(related, page)}</section>` : ''}<section class="inline-cta"><h2>${e(home[page.locale].heading)}</h2>${cta(page, 'footer')}</section></main>${footer(page)}</body></html>`;
}
function renderHub(page) {
  return `${head(page)}<main id="main" class="content-shell"><header class="article-header"><p class="eyebrow">Podpin</p><h1>${e(page.heading)}</h1><p class="article-intro">${e(home[page.locale].intro)}</p></header>${cards(content.filter(item => item.locale === page.locale && item.group === page.collection), page)}</main>${footer(page)}</body></html>`;
}
const written = [];
async function write(relative, contents) {
  if (relative.startsWith('/') || relative.split('/').includes('..')) throw new Error('Invalid output path');
  await fs.mkdir(path.dirname(path.join(out, relative)), { recursive: true });
  await fs.writeFile(path.join(out, relative), contents);
  written.push(relative);
}
for (const page of pages) await write(`${route(page.slug, page.locale).slice(1)}index.html`, page.group === 'home' ? renderHome(page) : page.group === 'hub' ? renderHub(page) : renderContent(page));
const missing = { slug: '404', locale: 'en', group: 'error', title: 'Page not found | Podpin', heading: 'This page is off the air.', description: 'Find your way back to Podpin podcast features and guides.' };
await write('404.html', `${head(missing, true)}<main id="main" class="content-shell"><header class="article-header"><p class="eyebrow">404</p><h1>${missing.heading}</h1><p>${missing.description}</p><a class="button button-primary" href="/">Back to Podpin</a></header></main>${footer(missing)}</body></html>`);
await write('robots.txt', `User-agent: *\nAllow: /\n\n${preview ? '# Local preview: all HTML pages are noindex.\n' : `Sitemap: ${abs('/sitemap.xml')}\n`}`);
await write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${(preview ? [] : pages).map(page => `<url><loc>${e(abs(route(page.slug, page.locale)))}</loc>${page.updated ? `<lastmod>${page.updated}</lastmod>` : ''}${variants(page).map(item => `<xhtml:link rel="alternate" hreflang="${locales.get(item.locale).htmlLang}" href="${e(abs(route(item.slug, item.locale)))}" />`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${e(abs(route(page.slug)))}" /></url>`).join('')}</urlset>\n`);
await write('.nojekyll', '');
if (!preview) await write('CNAME', `${origin.hostname}\n`);
for (const name of ['styles.css', 'seo.css', 'script.js']) await write(name, await fs.readFile(path.join(root, name)));
for (const name of ['app-icon.png', 'apple-touch-icon.png', 'favicon-32x32.png']) await write(`assets/${name}`, await fs.readFile(path.join(root, 'assets', name)));
for (const name of (await fs.readdir(path.join(root, 'assets/optimized'))).filter(name => name.endsWith('.webp'))) await write(`assets/optimized/${name}`, await fs.readFile(path.join(root, 'assets/optimized', name)));
await write('_headers', '/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n/assets/*\n  Cache-Control: public, max-age=86400, must-revalidate\n');
let previous = [];
try { previous = JSON.parse(await fs.readFile(path.join(out, 'build-manifest.json'), 'utf8')).files; } catch (error) { if (error.code !== 'ENOENT') throw error; }
for (const file of previous) if (!written.includes(file) && !file.startsWith('/') && !file.split('/').includes('..')) await fs.rm(path.join(out, file), { force: true });
await write('build-manifest.json', JSON.stringify({ preview, origin: origin.origin, pages: pages.map(page => ({ path: route(page.slug, page.locale), group: page.group, locale: page.locale })), files: written }, null, 2));
console.log(`Built ${pages.length} pages to dist/ (${preview ? 'NOINDEX PREVIEW' : origin.origin}).`);
