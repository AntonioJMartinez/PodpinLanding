# Podpin ASO audit

**App:** AI Podcast Player : Podpin  
**App Store ID:** `6760191862`  
**Bundle ID:** `com.ajms.Podcast`  
**Primary locale:** `en-US`  
**Baseline version:** `1.2`  
**Audit date:** 2026-08-30 (UTC)

This audit is read-only. No App Store metadata, screenshots, review submission, release, paid campaign, or Astro keyword deletion was performed.

## Executive readout

- The canonical live export is in `metadata/`: 22 app-info JSON files and 22 version-localization JSON files for version 1.2.
- `asc metadata validate --dir ./metadata` passes: 44 files scanned, 0 errors, 0 warnings.
- `asc metadata keywords audit` reports 0 errors, 34 warnings, and 33 informational findings. The main issues are localized name/subtitle overlap and underfilled keyword fields outside English.
- The primary `en-US` fields are within limits. The keyword field is full at 100/100 characters, but it contains redundant variants (`podcast app`, `car play`, `rss player`, `rss`) and leaves little room for product-specific terms.
- Astro tracks this app with 515 keywords across 22 stores (last app update `2026-08-30T07:06:28Z`). This audit queried the existing tracked sets for US, Spain, Germany, and France: 177 rows are preserved in [keyword-baseline.csv](./keyword-baseline.csv).
- The candidate field changes are deliberately not live-ready: version 1.2 is already in review. Review [recommended-metadata.json](./recommended-metadata.json) and [recommended-metadata.diff](./recommended-metadata.diff) only for a future editable version.

## Live ASC state and trust surfaces

| Signal | Observed value | Source |
|---|---|---|
| Version 1.2 | `WAITING_FOR_REVIEW`; release type `MANUAL` | `asc versions list/view` |
| Latest iOS build | Build 18, processing `VALID` | `asc status --include builds` |
| Latest review submission | `WAITING_FOR_REVIEW`, submitted 2026-08-27T17:24:51.098Z | `asc review status` |
| Review next action | Wait for App Store review outcome | `asc review status` |
| Submission | In flight; no blocking issues in status dashboard | `asc status --include submission` |
| Readiness validator | One blocking check because the version is non-editable while waiting for review | `asc validate` |
| Validator warnings | Annual and monthly subscriptions have no promotional image; optional but review before promotion | `asc validate` |
| App Privacy | Publish state cannot be verified through the public API | `asc validate` |
| Apple-generated app tags | None returned | `asc app-tags list` |
| Primary / secondary category | Productivity / News | `asc apps info view` |

Do not mutate version 1.2 while it is in review. After approval, the manual release type still requires an explicit release decision.

The production-domain gap is clear in every pulled version localization:

- `marketingUrl`: empty / null.
- `supportUrl`: `https://www.notion.so/31f34bbaf0bc8092aba8d66866d0a2f5`.
- `privacyPolicyUrl`: the current value is a Notion URL under `recondite-muenster-de4.notion.site`.

Populate marketing and support links only after a verified production HTTPS domain is available. This audit does not invent a replacement URL.

## Metadata source and reproducibility

The export was pulled with:

```bash
asc metadata pull --app 6760191862 --version 1.2 --platform IOS --dir ./metadata
```

Canonical paths:

- App-info fields: `metadata/app-info/{locale}.json` (name, subtitle, privacy URL).
- Version fields: `metadata/version/1.2/{locale}.json` (keywords, description, promotional text, marketing URL, support URL, what's new).

The source is App Store Connect live metadata as of 2026-08-30. The exact per-row Astro freshness timestamps are in the CSV. The original pull command reports the 22 locales and 44 files but does not emit a pull timestamp.

### Primary locale field utilization

Character lengths below are exact JavaScript string lengths; App Store limits are shown for context.

| Field | Value / preview | Length | Limit | Usage |
|---|---|---:|---:|---:|
| Name | `AI Podcast Player : Podpin` | 26 | 30 | 86.7% |
| Subtitle | `Summaries, Bookmarks, Notes` | 27 | 30 | 90.0% |
| Keywords | `podcast app,carplay,car play,rss player,transcribe,transcripts,highlights,chapters,rss,audio to text` | 100 | 100 | 100.0% |
| Description | `Podpin is the podcast player built for listeners...` | 881 | 4,000 | 22.0% |
| Promotional text | `Listen, read transcripts, save bookmarks...` | 99 | 170 | 58.2% |
| What's new | `Discover podcasts on the road with new CarPlay...` | 339 | 4,000 | 8.5% |

Apple indexes name, subtitle, and keywords. Description and promotional text are conversion/seasonal surfaces, not indexed keyword fields. The description should still reflect the user's search intent naturally.

### All pulled locale lengths

| Locale | Name | Subtitle | Keywords | Description | Promo | What's new |
|---|---:|---:|---:|---:|---:|---:|
| da | 25 | 24 | 82 | 730 | 107 | 297 |
| de-DE | 23 | 24 | 80 | 730 | 118 | 338 |
| el | 23 | 27 | 76 | 903 | 108 | 347 |
| en-CA | 26 | 27 | 100 | 614 | 107 | 339 |
| en-GB | 26 | 27 | 100 | 677 | 105 | 338 |
| en-US | 26 | 27 | 100 | 881 | 99 | 339 |
| es-ES | 28 | 28 | 89 | 796 | 106 | 389 |
| es-MX | 28 | 26 | 89 | 701 | 106 | 392 |
| fr-FR | 24 | 24 | 89 | 765 | 102 | 392 |
| hr | 28 | 20 | 78 | 809 | 102 | 348 |
| it | 24 | 25 | 88 | 689 | 107 | 374 |
| ja | 21 | 12 | 70 | 352 | 39 | 171 |
| ko | 21 | 11 | 60 | 445 | 42 | 207 |
| nl-NL | 22 | 25 | 86 | 832 | 106 | 355 |
| no | 23 | 26 | 80 | 753 | 109 | 336 |
| pl | 27 | 23 | 84 | 850 | 102 | 385 |
| pt-BR | 26 | 23 | 76 | 779 | 103 | 368 |
| pt-PT | 26 | 24 | 79 | 803 | 105 | 357 |
| ru | 24 | 21 | 60 | 803 | 101 | 345 |
| sv | 23 | 24 | 80 | 754 | 106 | 341 |
| zh-Hans | 16 | 8 | 41 | 306 | 35 | 130 |
| zh-Hant | 17 | 8 | 33 | 325 | 35 | 132 |

## Offline audit findings

The live keyword audit command was:

```bash
asc metadata keywords audit --app 6760191862 --version 1.2 --platform IOS
```

Summary: **0 errors, 34 warnings, 33 infos**.

- **Required fields:** no empty subtitle, keywords, description, or what's-new fields were found in the 22 pulled locales.
- **Separators:** no semicolon/pipe separators and no spaces after commas were found.
- **Name/subtitle overlap:** the audit reports warnings in da, el, es-ES, hr, nl-NL, no, pl, pt-BR, pt-PT, ru, sv, and zh-Hant. Examples include `transskript`/ `bogmærker` in Danish, `resúmenes` in es-ES, and `transcrição`/ `destaques` in Portuguese.
- **Keyword utilization:** applying the ASO rule of 90+ characters flags every locale below 90: da, de-DE, el, es-ES, es-MX, fr-FR, hr, it, ja, ko, nl-NL, no, pl, pt-BR, pt-PT, ru, sv, zh-Hans, and zh-Hant. The 20-character subtitle guideline flags ja, ko, zh-Hans, and zh-Hant.
- **Cross-locale duplication:** en-CA and en-GB have exactly the same keyword field as en-US. es-ES and es-MX also share the same keyword field with each other. This is a localization review flag, not an automatic deletion recommendation.
- **App tags:** no Apple-generated tags were returned, so there is no tag-alignment signal to use.

The canonical audit also reports 33 informational findings, including repeated phrases across locales and underfilled non-Latin fields. Do not mechanically fill those fields without native-language demand evidence.

## Astro keyword evidence

### Tracking coverage

Astro's app list reports **515 tracked keywords across 22 stores** for app `6760191862`, last updated `2026-08-30T07:06:28Z`. The scoped baseline calls returned these rows:

| Astro store | App Store locale(s) | Rows captured | Example current evidence |
|---|---|---:|---|
| us | en-US | 77 | `notes` pop 74 rank 1000; `podcast app` pop 52 rank 63; `podcast player` pop 36 rank 57; `ai podcast` pop 16 rank 39 |
| es | es-ES / es-MX | 36 | `radio` pop 63 rank 1000; `podcast` pop 59 rank 1000; `podcast app` pop 53 rank 1000; `descubrir podcasts` pop 5 rank 12 |
| de | de-DE | 31 | `podcast` pop 62 rank 1000; `audio` pop 53 rank 1000; `podcast app` pop 54 rank 1000; `podcast folgen` pop 5 rank 10 |
| fr | fr-FR | 33 | `radio` pop 66 rank 1000; `podcast` pop 62 rank 1000; `transcribe` pop 38 rank 1000; `lecteur podcast` pop 5 rank 6 |

A rank of 1000 is preserved as returned by Astro and should be treated as outside its visible top-ranking range, not as a precise rank. Current ranking, popularity, difficulty, and freshness for every captured row are in [keyword-baseline.csv](./keyword-baseline.csv).

### Suggestions

`get_keyword_suggestions` was queried per store with high-popularity filtering:

| Store | Returned | Observed suggestions | Decision |
|---|---:|---|---|
| us | 20 | `apple podcast` 42, `riverside podcast` 29, `joe rogan podcast` 25, `podcast creator` 28, `ai podcast` 16 | No brand or creator terms added; only product-fit terms were retained for review |
| es | 1 | `spiik` 9 | Excluded as a branded/competitor term |
| de | 0 | — | No suggestion signal |
| fr | 0 | — | No suggestion signal |

Popularity is a snapshot from Astro, not a volume forecast. No demand values were invented.

### Competitor gap extraction

Competitor extraction was run on an already tracked seed per store. Only non-brand, product-fit terms are candidates:

| Store | Seed | Returned relevant signals | Freshness caveat |
|---|---|---|---|
| us | `podcast app` | `app` 66, `radio` 63, `podcasts` 59, `podcast player` 36 | `books` 69 was observed but excluded as an unverified media-reference term; returned `lastUpdate` is 2026-02-27T12:11:58Z, so refresh before relying on this US gap |
| es | `podcast app` | `radio` 63, `app` 57 | `libros` 65 was observed but excluded as an unverified media-reference term; returned 2026-08-30T08:22:19Z |
| de | `podcast app` | `radio` 66, `podcast` 62, `app` 60 | `bücher` 63 was observed but excluded as an unverified media-reference term; returned 2026-08-30T08:14:01Z |
| fr | `podcast` | `app` 59, `radio` 66 | `livres` 58 was observed but excluded as an unverified media-reference term; returned 2026-08-30T08:13:52Z |

Competitor brands and broad terms such as Spotify, Apple, Podimo, YouTube, music, and radio were not blindly added. The proposed terms are still subject to product-fit and native-copy review.

## Recommended metadata candidate

The candidate is limited to four stores and retains the live name/subtitle. It changes only the keyword field to remove overlap/redundancy and use scored product-fit terms:

| Locale | Current | Proposed | Change |
|---|---:|---:|---|
| en-US | 100 | 69 | Remove `podcast app`, `car play`, `rss player`, `transcripts`, `audio to text`; add scored `app`, `read`, `insights`, `episodes`; leave subtitle duplicates `notes` and `bookmarks` out |
| es-ES | 89 | 85 | Remove subtitle-overlap `resúmenes` and low-signal `descubre`; add `app`, `marcadores`; exclude unverified `libros` |
| de-DE | 80 | 90 | Replace `audio text` with scored `audio`, `highlights`, and `app` |
| fr-FR | 89 | 88 | Remove `transcriptions` and `découvrir`; add `lecteur audio`, `infos`, and `app`; exclude unverified `livres` |

All proposed values are under 100 characters, use comma separators without spaces, and include evidence in the JSON. `books`, `libros`, `livres`, `bücher`, and `clips` are explicitly excluded: competitor-gap extraction is not evidence that Podpin is an audiobook or clip app. The en-US `notes` and `bookmarks` terms are also omitted because they already occur in the subtitle. Leaving unused field space is intentional; the US competitor evidence is stale and must be refreshed.

The candidate is not applied because version 1.2 is non-editable during review. Use [recommended-metadata.json](./recommended-metadata.json) as the review record and [recommended-metadata.diff](./recommended-metadata.diff) as the human-readable patch.

## Screenshot experiment brief

Current ASC inventory was read without uploading or replacing assets:

- en-US: five iPhone 6.7 screenshots, two iPad Pro 12.9 screenshots, and two Apple Watch Ultra screenshots.
- es-ES, de-DE, fr-FR: five iPhone 6.7 screenshots each.

Use [screenshots-experiment-brief.md](./screenshots-experiment-brief.md) to test outcome-led screenshot captions and ordering independently from metadata. Validate actual images and captions before execution; filenames alone are not caption evidence.

## Rollout gates

Use [rollout-checklist.md](./rollout-checklist.md) for the full sequence. The non-negotiable gates are:

1. Wait for the current review outcome and select a future editable version or explicitly eligible experiment surface.
2. Replace the Notion support URL and empty marketing URL only when a verified production domain is ready.
3. Re-fetch Astro data, refresh the stale US competitor extraction, and check exact duplicates before adding any new tracking.
4. Obtain native-language and product-fit approval, validate exact field lengths, and create a non-mutating metadata plan.
5. Keep screenshot, metadata, pricing, paywall, and onboarding changes separated for attribution.
6. Release manually only after the owner approves the post-review rollout.

