import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DOMParser, parseHTML } from 'linkedom';

export async function auditSite(directory = fileURLToPath(new URL('../dist/', import.meta.url))) {
  const manifest = JSON.parse(await fs.readFile(path.join(directory, 'build-manifest.json'), 'utf8'));
  const errors = [];
  const docs = new Map();
  const titles = new Set();
  const descriptions = new Set();
  const check = (condition, message) => { if (!condition) errors.push(message); };
  for (const page of manifest.pages) {
    const html = await fs.readFile(path.join(directory, page.path.slice(1), 'index.html'), 'utf8');
    const { document } = parseHTML(html);
    docs.set(page.path, document);
    check(document.querySelectorAll('h1').length === 1, `${page.path}: expected one H1`);
    check(document.querySelectorAll('main').length === 1, `${page.path}: expected one main`);
    check(document.querySelector('main')?.textContent.trim().length > 150, `${page.path}: empty page`);
    check(document.querySelector('html')?.lang, `${page.path}: missing language`);
    check(document.querySelector('title')?.textContent.trim(), `${page.path}: missing title`);
    check(document.querySelector('meta[name="description"]')?.content, `${page.path}: missing description`);
    check(document.querySelector('link[rel="canonical"]')?.href === `${manifest.origin}${page.path}`, `${page.path}: wrong canonical`);
    const title = document.querySelector('title')?.textContent.trim();
    const description = document.querySelector('meta[name="description"]')?.content;
    check(!titles.has(title), `${page.path}: duplicate title`);
    check(!descriptions.has(description), `${page.path}: duplicate description`);
    titles.add(title);
    descriptions.add(description);
    check(document.querySelectorAll('link[rel="canonical"]').length === 1, `${page.path}: expected one canonical`);
    check(document.querySelectorAll('script[type="application/ld+json"]').length > 0, `${page.path}: missing structured data`);
    const robots = document.querySelector('meta[name="robots"]')?.content || '';
    check(manifest.preview ? robots.includes('noindex') : !robots.includes('noindex'), `${page.path}: wrong indexing policy`);
    check(document.querySelector('.nav-disclosure')?.hasAttribute('open'), `${page.path}: no-JS navigation unavailable`);
    for (const node of document.querySelectorAll('script[type="application/ld+json"]')) {
      try { check(JSON.parse(node.textContent)['@graph']?.length > 0, `${page.path}: missing schema graph`); }
      catch { errors.push(`${page.path}: invalid JSON-LD`); }
    }
    for (const img of document.querySelectorAll('img')) check(img.hasAttribute('alt') && Number(img.width) > 0 && Number(img.height) > 0, `${page.path}: image missing alt/dimensions`);
    check(!document.querySelector('script[src^="https:"]'), `${page.path}: remote script before consent`);
    check(!/\b(?:undefined|TODO|PLACEHOLDER)\b/.test(document.querySelector('main').textContent), `${page.path}: unresolved content`);
  }
  for (const [route, document] of docs) {
    for (const node of document.querySelectorAll('a[href],link[href],img[src],script[src]')) {
      const href = node.getAttribute('href') || node.getAttribute('src');
      const url = new URL(href, `${manifest.origin}${route}`);
      if (url.origin !== manifest.origin) continue;
      const target = docs.get(url.pathname);
      if (target) {
        if (url.hash) check(target.getElementById(decodeURIComponent(url.hash.slice(1))), `${route}: missing anchor ${href}`);
      } else {
        check(manifest.files.includes(url.pathname.slice(1)), `${route}: broken internal resource ${href}`);
      }
    }
    for (const node of document.querySelectorAll('link[hreflang]')) {
      const target = docs.get(new URL(node.href).pathname);
      check(target, `${route}: missing alternate ${node.href}`);
      if (target && node.hreflang !== 'x-default') {
        check(node.getAttribute('hreflang') === target.documentElement.lang, `${route}: wrong alternate language`);
        check([...target.querySelectorAll('link[hreflang]')].some(item => item.href === `${manifest.origin}${route}`), `${route}: nonreciprocal hreflang`);
      }
    }
    for (const img of document.querySelectorAll('img[srcset]')) for (const source of img.getAttribute('srcset').split(',')) check(manifest.files.includes(source.trim().split(' ')[0].slice(1)), `${route}: missing responsive image`);
  }
  const reachable = new Set(['/']);
  for (const route of reachable) for (const anchor of docs.get(route)?.querySelectorAll('a[href]') || []) {
    const url = new URL(anchor.href, `${manifest.origin}${route}`);
    if (url.origin === manifest.origin && docs.has(url.pathname)) reachable.add(url.pathname);
  }
  check(reachable.size === docs.size, `Orphan pages: ${[...docs.keys()].filter(route => !reachable.has(route)).join(', ')}`);
  const sitemap = await fs.readFile(path.join(directory, 'sitemap.xml'), 'utf8');
  const xml = new DOMParser().parseFromString(sitemap, 'text/xml');
  const locations = [...xml.querySelectorAll('url > loc')].map(node => node.textContent);
  const expected = manifest.preview ? [] : [...docs.keys()].map(route => `${manifest.origin}${route}`);
  check(locations.length === expected.length && new Set(locations).size === locations.length && expected.every(url => locations.includes(url)), 'Sitemap URLs must exactly match canonical pages');
  const robotsFile = await fs.readFile(path.join(directory, 'robots.txt'), 'utf8');
  check(manifest.preview ? !/^Sitemap:/m.test(robotsFile) : robotsFile.includes(`Sitemap: ${manifest.origin}/sitemap.xml`), 'Wrong robots sitemap declaration');
  check(manifest.files.includes('.nojekyll'), 'Missing GitHub Pages .nojekyll file');
  if (!manifest.preview) {
    check(manifest.files.includes('CNAME'), 'Missing GitHub Pages CNAME file');
    check((await fs.readFile(path.join(directory, 'CNAME'), 'utf8')).trim() === new URL(manifest.origin).hostname, 'CNAME does not match production origin');
  }
  const { document: missing } = parseHTML(await fs.readFile(path.join(directory, '404.html'), 'utf8'));
  check(missing.querySelector('meta[name="robots"]')?.content.includes('noindex'), '404 must be noindex');
  check(!manifest.files.some(file => /^(metadata|growth|content|\.env)\//.test(file)), 'Private/source files in publish output');
  return { pages: docs.size, preview: manifest.preview, errors };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const result = await auditSite();
  console.log(JSON.stringify(result, null, 2));
  if (result.errors.length) process.exitCode = 1;
}
