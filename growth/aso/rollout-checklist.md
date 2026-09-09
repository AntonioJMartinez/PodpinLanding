# ASO rollout checklist

Use this checklist for a future editable App Store version. The current v1.2 metadata is a read-only baseline: App Store state is `WAITING_FOR_REVIEW`, the latest iOS review submission is `WAITING_FOR_REVIEW`, and release type is `MANUAL`.

## 1. Preconditions and ownership

- [ ] Confirm the owner has approved the candidate locale set: en-US, es-ES, de-DE, and fr-FR.
- [ ] Confirm the exact target version and editable App Store state. Do not edit or submit v1.2 from this audit.
- [ ] Confirm product fit for every proposed term; remove any term the shipped build cannot prove.
- [ ] Confirm native-language review for each proposed localized field.
- [ ] Confirm no paid campaign, review submission, release, or live metadata mutation is bundled into this rollout.

## 2. URL and trust surfaces

- [ ] Replace the current `supportUrl` Notion URL with a stable HTTPS production support page when the domain is ready.
- [ ] Populate `marketingUrl` only with the verified production domain; do not invent a URL or use a temporary landing page.
- [ ] Test support, marketing, privacy, and Terms links from the live product page on mobile and desktop.
- [ ] Confirm the privacy URL is still intentional; the current value is a Notion page.
- [ ] Recheck App Privacy publication in App Store Connect; the public API cannot verify its publish state.

## 3. Metadata QA

- [ ] Copy the approved candidate into the new version's canonical metadata directory; keep the v1.2 export unchanged.
- [ ] Run `asc metadata validate --dir ./metadata` and record zero errors.
- [ ] Recalculate exact lengths: name <=30, subtitle <=30, keywords <=100; target >=90 characters for keywords and >=20 for subtitles where natural.
- [ ] Confirm no spaces after keyword commas, semicolons, pipes, empty segments, or repeated name/subtitle terms.
- [ ] Re-run the metadata keyword audit and review every warning, including the known underfilled non-Latin locales.
- [ ] Generate a non-mutating metadata plan/diff and obtain human approval before any apply step.
- [ ] Keep the description natural and localized; it is a conversion aid, not an indexed keyword field.

## 4. Astro measurement setup

- [ ] Re-fetch `get_app_keywords` for each target store immediately before final selection; the baseline CSV is dated 2026-08-30.
- [ ] Check every candidate against current tracking before adding it; do not add exact duplicates.
- [ ] Add missing candidates to Astro only after approval, store by store; never remove tracked keywords without explicit confirmation.
- [ ] Refresh the US competitor extraction before relying on it: its returned `lastUpdate` is 2026-02-27, older than the other scoped results.
- [ ] Record keyword, store, popularity, difficulty, current rank, previous rank, and last-update timestamp for the final set.
- [ ] Establish a pre-change ranking snapshot and a post-change observation window; do not claim demand from an unscored term.

## 5. Screenshot experiment

- [ ] Inspect/download the current control images; filenames alone do not establish caption copy.
- [ ] Produce one localized treatment per target store using the brief in `screenshots-experiment-brief.md`.
- [ ] Verify every caption against the shipped UI; remove unsupported claims such as books, offline, CarPlay, Siri, or clips when not visible or available.
- [ ] Validate image dimensions and ordering locally before upload.
- [ ] Record control/treatment checksums, traffic allocation, start/end dates, primary KPI, sample threshold, and decision rule.
- [ ] Keep metadata, screenshot, pricing, paywall, and onboarding changes separated for attribution.

## 6. Release and readout

- [ ] If v1.2 is approved, remember release type is manual; release only after the owner confirms the treatment and metadata are ready.
- [ ] Monitor product-page conversion, install-to-trial/paywall start, early retention, crash/support signals, and review sentiment by locale.
- [ ] Declare a winner only after the pre-registered sample and confidence rule are met; otherwise retain the control.
- [ ] Archive the final canonical metadata, validation output, experiment configuration, and decision notes with their dates.
- [ ] Refresh the Astro baseline after the observation window and compare rank and conversion changes by store.

## Audit artifacts

- Canonical live export: `metadata/app-info/*.json` and `metadata/version/1.2/*.json`
- Astro baseline: `keyword-baseline.csv` (177 rows across us, es, de, fr)
- Candidate metadata: `recommended-metadata.json`
- Human-readable candidate diff: `recommended-metadata.diff`
- Screenshot plan: `screenshots-experiment-brief.md`

