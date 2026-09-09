# Screenshot experiment brief

## Decision and scope

This is a planning brief only. Do not upload, replace, or create App Store screenshot experiments while version 1.2 is `WAITING_FOR_REVIEW` and the latest iOS review submission is `WAITING_FOR_REVIEW` (submitted 2026-08-27). Re-check the App Store state before execution and use an editable future version or an explicitly eligible Product Page Optimization surface.

The experiment tests screenshot messaging and ordering, not the candidate keyword fields in `recommended-metadata.json`. Keep metadata and screenshots changes separated so attribution is interpretable.

## Current ASC screenshot baseline

Inventory read from `asc screenshots list` on 2026-08-30 for version 1.2:

| Locale | iPhone 6.7 set | iPhone 6.7 files | Additional sets |
|---|---:|---|---|
| en-US | 5 | english5.jpg, english2.jpg, english1.jpg, english4.jpg, english3.jpg | iPad Pro 12.9: 2; Apple Watch Ultra: 2 |
| es-ES | 5 | Spanish1.jpg–Spanish5.jpg | None observed |
| de-DE | 5 | german1.jpg–german5.jpg | None observed |
| fr-FR | 5 | french1.jpg, french2.jpg, french3.jpg, french5.jpg, french4.jpg | None observed |

This inventory does not infer the current caption copy from filenames. Download or inspect the actual images before finalizing the control copy.

## Hypothesis

A first-screen promise about the outcome—turning a long podcast into searchable, saveable knowledge—will improve product-page conversion versus a feature-list sequence, because the promise is immediately paired with proof from the transcript and episode-detail UI.

## Treatment concept

Keep the current five-screen control unchanged. Build a localized treatment with one idea per frame and a visible proof point:

1. **Read while you listen** — transcript view; use the locale's natural term for transcription.
2. **Save the moments that matter** — highlight/bookmark interaction.
3. **Find the ideas again** — chapters, search, or saved notes.
4. **Explore books and references** — only if the shown UI and shipped feature support this claim.
5. **Discover and listen anywhere** — discovery, CarPlay, or Siri only when that exact flow is shown and supported.

Caption copy should be short, legible, and naturally localized. Use OCR-indexable product language where it fits the visual, but do not stack keyword variants or add competitor names. Candidate terms to validate against the visual include `transcripts/transcripción/Transkript/Transcription`, `notes/notas/Notizen/notes`, `chapters/capítulos/Kapitel/chapitres`, and `books/libros/Bücher/livres`.

## Test design

- Test one variable: screenshot message/order and supporting UI. Do not change name, subtitle, keywords, price, paywall, or onboarding during the same readout.
- Keep device type, screenshot dimensions, app build, locale, traffic allocation, and run dates fixed between control and treatment.
- Run the same treatment concept independently for en-US, es-ES, de-DE, and fr-FR; do not pool locales because intent and language differ.
- Primary KPI: App Store product-page conversion from product-page view to first install. Secondary checks: install-to-trial/paywall start, early retention, crash/support signals, and review sentiment.
- Define the minimum sample, run window, and confidence rule before traffic starts. Do not call a winner from a small directional lift.
- Ship a treatment only when the primary KPI improves without a material downstream-quality regression. Otherwise retain the control and document the learning.

## Production gates

Before execution:

1. Confirm version 1.2 has left review and identify the editable version or eligible experiment surface.
2. Confirm the production marketing/support URLs are available; the current `marketingUrl` is empty and `supportUrl` is a Notion URL.
3. Verify each claim against the shipped build and the actual screenshot.
4. Localize and proofread captions with native review; preserve the same promise, not literal translations.
5. Validate dimensions and ordering locally with `asc screenshots validate`; upload only after an approved, non-mutating plan.
6. Record control checksums, treatment checksums, traffic allocation, start/end dates, and the decision in the ASO log.

No ASC screenshot upload or experiment was performed for this audit.

