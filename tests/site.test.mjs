import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import { spawnSync } from 'node:child_process';
import { parseHTML } from 'linkedom';
import { auditSite } from '../scripts/check-site.mjs';

const build = (env = {}, preview = false) => spawnSync(process.execPath, ['scripts/build-site.mjs', ...(preview ? ['--preview'] : [])], { encoding: 'utf8', env: { ...process.env, SITE_URL: '', GA_MEASUREMENT_ID: '', APP_STORE_PROVIDER_TOKEN: '', GOOGLE_SITE_VERIFICATION: '', BING_SITE_VERIFICATION: '', ...env } });

test('production origin guards, production SEO, campaign attribution, and preview isolation', async () => {
  try {
    for (const SITE_URL of ['', 'http://podpin.com', 'https://example.com', 'https://podpin.test', 'https://podpin.invalid', 'https://127.0.0.1', 'https://[::1]', 'https://podpin.com/path', 'https://podpin.com/?token=secret']) assert.notEqual(build({ SITE_URL }).status, 0, SITE_URL);
    // Fixture only; no network request or deployment to this hostname.
    const result = build({ SITE_URL: 'https://podpin-build-fixture.com', GA_MEASUREMENT_ID: 'G-TEST123', APP_STORE_PROVIDER_TOKEN: '123456', GOOGLE_SITE_VERIFICATION: 'fixture-google-token' });
    assert.equal(result.status, 0, result.stderr);
    assert.deepEqual((await auditSite()).errors, []);
    const html = await fs.readFile('dist/index.html', 'utf8');
    assert.equal((await fs.readFile('dist/CNAME', 'utf8')).trim(), 'podpin-build-fixture.com');
    assert.equal(parseHTML(html).document.querySelector('head meta[name="google-site-verification"]')?.content, 'fixture-google-token');
    const sitemap = await fs.readFile('dist/sitemap.xml', 'utf8');
    await fs.writeFile('dist/sitemap.xml', sitemap.replace('<loc>https://podpin-build-fixture.com/</loc>', '<loc>https://wrong-host.com/</loc>'));
    assert.ok((await auditSite()).errors.includes('Sitemap URLs must exactly match canonical pages'));
    await fs.writeFile('dist/sitemap.xml', sitemap);
    assert.match(html, /pt=123456/);
    assert.match(html, /ct=en_home_hero/);
    assert.match(html, /"gaId":"G-TEST123"/);
  } finally {
    const result = build({ GOOGLE_SITE_VERIFICATION: 'fixture-google-token' }, true);
    assert.equal(result.status, 0, result.stderr);
  }
  const result = await auditSite();
  assert.equal(parseHTML(await fs.readFile('dist/index.html', 'utf8')).document.querySelector('meta[name="google-site-verification"]'), null);
  assert.equal(result.preview, true);
  assert.equal(result.pages, 52);
  assert.deepEqual(result.errors, []);
  assert.match(await fs.readFile('dist/index.html', 'utf8'), /"gaId":""/);
});

const source = await fs.readFile('script.js', 'utf8');
function harness({ id = 'G-TEST123', stored, dnt = false, mobile = false } = {}) {
  const { window, document } = parseHTML(`<html><head><script id="podpin-config" type="application/json">${JSON.stringify({ gaId: id, page: '/features/', group: 'hub', locale: 'en' })}</script></head><body><details class="nav-disclosure" open><summary>Menu</summary><a href="/">Home</a></details><a data-event="app_store_clicked" data-placement="hero" href="https://apps.apple.com/app/id6760191862">Download</a><details class="faq-item"><summary>Question</summary><p>Answer</p></details><footer class="site-footer"></footer></body></html>`);
  const values = new Map(stored ? [['podpin-analytics-consent', stored]] : []);
  const events = [];
  let reloads = 0;
  document.cookie = '';
  Object.defineProperty(document, 'referrer', { value: 'https://referrer.com/private?q=secret' });
  window.matchMedia = () => ({ matches: mobile, addEventListener() {} });
  window.addEventListener('podpin:analytics', event => events.push(event.detail));
  const location = { origin: 'https://podpin-build-fixture.com', hostname: 'podpin-build-fixture.com', reload() { reloads++; } };
  vm.runInNewContext(source, { document, window, navigator: { doNotTrack: dnt ? '1' : '0' }, location, URL, CustomEvent: window.CustomEvent, localStorage: { getItem: key => values.get(key), setItem: (key, value) => values.set(key, value) } });
  return { document, window, values, events, get reloads() { return reloads; }, vendor: () => document.querySelectorAll('script[src^="https:"]').length };
}

test('no analytics before consent; decline persists without loading vendor', () => {
  const h = harness();
  assert.equal(h.vendor(), 0);
  h.document.querySelectorAll('.consent-actions button')[1].click();
  assert.equal(h.vendor(), 0);
  assert.equal(h.values.get('podpin-analytics-consent'), 'denied');
});
test('accept loads once, sanitizes location/referrer, attributes CTA, revokes', () => {
  const h = harness();
  h.document.querySelector('.consent-actions button').click();
  assert.equal(h.vendor(), 1);
  const config = [...h.window.dataLayer].map(args => [...args]).find(args => args[0] === 'config')[2];
  assert.equal(config.page_location, 'https://podpin-build-fixture.com/features/');
  assert.equal(config.page_referrer, 'https://referrer.com');
  assert.equal(config.send_page_view, false);
  h.document.querySelector('[data-event]').click();
  assert.equal(h.events.filter(event => event.name === 'page_view').length, 1);
  assert.equal(h.events.at(-1).properties.placement, 'hero');
  h.document.querySelector('.consent-settings').click();
  h.document.querySelectorAll('.consent-actions button')[1].click();
  assert.equal(h.reloads, 1);
  assert.equal(h.window['ga-disable-G-TEST123'], true);
});
test('disabled configuration and privacy signal suppress analytics', () => {
  for (const options of [{ id: '' }, { dnt: true, stored: 'granted' }]) {
    const h = harness(options);
    assert.equal(h.vendor(), 0);
    assert.equal(h.document.querySelector('.consent-panel'), null);
  }
});
test('return consent choices honored, mobile menu closes on navigation', () => {
  assert.equal(harness({ stored: 'granted' }).vendor(), 1);
  assert.equal(harness({ stored: 'denied' }).vendor(), 0);
  const h = harness({ mobile: true });
  const menu = h.document.querySelector('.nav-disclosure');
  assert.equal(menu.open, false);
  menu.open = true;
  menu.querySelector('a').click();
  assert.equal(menu.open, false);
});
