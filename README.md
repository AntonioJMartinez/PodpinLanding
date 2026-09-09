# Podpin website and organic growth implementation

Static, multilingual marketing site for Podpin, built with Node.js. The production publish directory is **`dist/` only**. Legacy HTML at the repository root is not the new build and must not be used as the hosting source. No deployment or App Store mutation was made as part of this implementation.

## Run locally

Use Node.js 24 or newer and npm.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:3000`. Local preview builds are deliberately `noindex` and have an empty sitemap and disabled analytics. `npm run preview` serves the already-built output. `npm test` temporarily builds against a fixture origin, checks it, and restores a noindex preview; run tests before the final production build, never after it as a deployment step.

## Production release

1. Confirm the actual production domain and hosting project. Neither is known yet. Configure HTTPS and choose one canonical host; redirect the other host and HTTP with permanent redirects.
2. Configure the environment values shown in `.env.example`, or create an ignored `.env` file. `SITE_URL` is mandatory and must be the confirmed HTTPS origin, without a path or trailing URL parameters. Do not deploy a placeholder domain.
3. Run `npm ci`, `npm test`, `npm run build:site`, then `npm run check:site` in that order. Verify `dist/build-manifest.json` has `preview: false` and the real origin.
4. Publish **only `dist/`**. Do not serve the repository root, metadata, launch drafts, dependencies, or environment files. The website has no backend and needs no SPA fallback.
5. Configure directory index handling, redirect `/path` and `/path/index.html` to `/path/`, and return a real HTTP 404 with `404.html` for missing paths. Never rewrite unknown URLs to the homepage with status 200. The local server tests this behavior but is not a production server.
6. Apply security headers from `dist/_headers` if the host supports that convention; otherwise copy their equivalent into the host settings. Do not assume an arbitrary host reads that file.
7. Check the live homepage, one feature, one guide, one localized page, `robots.txt`, `sitemap.xml`, missing-page status, and App Store CTA. Confirm no preview `noindex` remains and canonical/hreflang URLs resolve on the chosen origin.
8. Verify Google Search Console and Bing Webmaster Tools using account-provided codes or DNS. Submit the live sitemap and inspect a small representative set of URLs. Submission is not a guarantee of indexing or rankings.
9. Add the confirmed marketing URL to a future editable App Store version after reviewing the ASO handoff. Version 1.2 was waiting for review on 2026-08-30; do not withdraw it merely to apply keyword changes.

The existing full privacy policy is still hosted on Notion. `/privacy/` is a factual overview, not a completed legal-policy migration. Review privacy disclosures and processing providers before enabling optional analytics or changing store policy URLs. Review the localized copy with native speakers before public launch.

## What is implemented

- 52 crawlable static routes: 7 localized homepages; 17 English feature/guide/comparison pages; 12 matching Spanish, German, and French pages; 7 trust/help pages; and 9 section hubs.
- Absolute canonical, Open Graph, and image URLs; reciprocal same-topic hreflang links; XML sitemap; robots policy; semantic headings; breadcrumbs; contextual internal links; custom 404 page.
- Organization, WebSite, WebPage, SoftwareApplication, Article, and BreadcrumbList JSON-LD where appropriate. No invented ratings, prices, awards, FAQs rich-result promises, or podcast catalog markup.
- Responsive navigation, keyboard focus, skip links, readable no-JS content, native FAQ disclosure controls, reduced-motion styling, and responsive images.
- Seven source screenshots optimized to three WebP widths. The seven 640px variants total 481,706 bytes versus 12,584,614 source PNG bytes (96.2% smaller for that asset set; not a measured page-speed improvement).
- Optional consent-gated GA4 and App Store campaign attribution. Neither is activated without configuration. Google/Bing verification tags are also opt-in.
- ASO export, evidence, future metadata candidates, screenshot test brief, query-to-page map, 90-day operating calendar, outreach drafts, research protocol, and review-request specification.

The SEO/content/schema skills informed the structure and claim checks. In particular, the copy distinguishes on-device transcription, optional cloud AI, and optional CloudKit sync rather than claiming every feature is offline or that the app sends no telemetry.

## Source layout

| Location | Purpose |
| --- | --- |
| `site.config.mjs` | Shared app identity and legacy localized homepage content |
| `content/home-overrides.mjs` | Current positioning and device/privacy qualifications |
| `content/pages.en.mjs` | English feature, learning, and comparison pages |
| `content/pages.localized.mjs` | Spanish, German, and French equivalents |
| `content/pages.trust.mjs` | About, support, privacy overview, compatibility, pricing, editorial, terms directory |
| `content/ui.mjs` | Navigation and interface labels |
| `scripts/build-site.mjs` | HTML, JSON-LD, metadata, sitemap, and output allowlist |
| `scripts/check-site.mjs` | Full generated-site integrity audit |
| `tests/site.test.mjs` | Build safety, SEO, consent, and navigation regression tests |
| `growth/measurement.md` | Event contract and account setup checklist |
| `growth/aso/README.md` | Live store evidence and safe next-release rollout |
| `growth/launch/README.md` | Editorial, research, and outreach operating kit |
| `metadata/` | Read-only snapshot of App Store metadata, not a deployment asset |

Edit the structured content modules rather than generated HTML. Keep one primary intent per route; update existing pages instead of creating near-duplicate keyword variants. Only link translated alternatives when they actually exist. Change `updated` when the page is materially reviewed, not on every build. Run `npm run optimize:images` when source screenshots change, then inspect their visual quality and rerun tests.

## Verification and remaining work

See `growth/QA.md` for the test record. Local implementation does not establish a search ranking. Search engine indexing, authority building, original research, outreach responses, native editorial review, App Store screenshot experiments, and ranking gains require real post-launch work and measured evidence.

Still needed from the owner: production domain/hosting target; Search Console/Bing property access or verification tokens; an optional analytics decision and account ID; App Store campaign provider token if attribution is desired; approval of privacy disclosures and localized editorial copy. No outreach was sent, no study results were fabricated, and no review/release was triggered.
