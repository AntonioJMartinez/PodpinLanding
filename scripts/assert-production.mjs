// Refuses to ship a local preview build. Preview builds are noindex, use a
// 127.0.0.1 canonical and an empty sitemap, which de-indexes the whole site.
import fs from 'node:fs/promises';

const expected = process.env.SITE_URL || 'https://getpodpin.com';
const manifest = JSON.parse(await fs.readFile(new URL('../dist/build-manifest.json', import.meta.url), 'utf8'));
const home = await fs.readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const sitemap = await fs.readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
const problems = [];
if (manifest.preview) problems.push('dist/ is a noindex preview build');
if (manifest.origin !== expected) problems.push(`dist/ origin is ${manifest.origin}, expected ${expected}`);
if (/name="robots" content="noindex/i.test(home)) problems.push('homepage has noindex');
if (!home.includes(`<link rel="canonical" href="${expected}/"`)) problems.push('homepage canonical does not point to production');
if (!/<loc>/.test(sitemap)) problems.push('sitemap.xml has no URLs');
if (problems.length) {
  console.error(`Refusing to deploy:\n- ${problems.join('\n- ')}\nRun: SITE_URL=${expected} npm run build:site`);
  process.exit(1);
}
console.log(`Production build OK: ${manifest.pages.length} pages for ${manifest.origin}.`);
