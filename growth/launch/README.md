# Podpin growth and launch operating kit

This folder is a lean 90-day operating plan for organic discovery, responsible outreach, product-learning research, and measurement. It is a planning artifact, not a record of results. The CSV leaves every measured field empty until a named owner fills it from an approved source.

Planning window: 2026-09-01 through 2026-11-29

Primary owned surface: the Podpin website and its App Store CTA

Supporting surfaces: the App Store listing, opted-in email, and approved one-to-one outreach
Current App Store link: <https://apps.apple.com/app/id6760191862>

## Product facts and claim guardrails

Use the current App Store listing, in-app setup, privacy disclosures, and the product files in this repository as the source of truth. The copy and outreach in this folder should stay within these boundaries:

- Podpin is a podcast listening app for Apple devices, including iPhone, iPad, and Mac.
- Podpin supports transcription on the device when the relevant device, language, and setup are compatible.
- Supported AI summaries, chapters, insights, and references may use an on-device mode or optional cloud AI. Never describe all AI processing as local by default.
- AI availability and output vary by device, operating-system version, language, model, audio, and setup.
- Episode downloads and synchronization need a network connection. Optional sync availability depends on the plan and configuration.
- Highlights, personal notes, and color labels are supported ways to keep selected moments and your own interpretation.
- Do not promise hands-free capture, exports, completely offline use, zero telemetry, no account, free-forever access, a catalog size, perfect transcription, or identical performance on every device.
- A review request must follow a real use moment. Do not gate features, offer rewards for positive ratings, preselect a rating, or ask someone to say something they do not believe.
- A survey or benchmark is evidence only after collection, consent checks, and the stated analysis. Empty cells and “not measured” are valid outcomes.

## How to operate this folder

1. At the start of each week, choose the calendar row, confirm the page and claim scope, and assign one owner.
2. Before publishing, check the target page, title, internal links, App Store CTA, locale, and privacy language.
3. Log Search Console, product analytics, survey, and benchmark values in the scorecard only from the corresponding source. Do not backfill estimates.
4. Keep outreach in draft form until a person reviews the recipient, the verified observation, and the ask. Send nothing from this repository automatically.
5. At the end of each month, use the decision gates below. A missing measurement means “collect evidence,” not “success” or “failure.”

## 90-day editorial and PR calendar

Each week has one owned-content action and one relationship or PR action. “Prepare” means research or drafting only; it does not authorize external contact. Target paths refer to the existing English inventory or the localized routes.

| Week | Dates | Owned editorial action | PR / relationship action (draft only) | Measurement and handoff |
| --- | --- | --- | --- | --- |
| 1 | Sep 1–6 | Lock the query-to-page map in query-portfolio.csv; check canonical paths, hreflang variants, and the App Store CTA. | Build a small, relevance-first list of podcast-learning, accessibility, Apple, and creator publications. Record only public, work-relevant details. | Capture the first Search Console and CTA baseline; leave unknown values blank. |
| 2 | Sep 7–13 | Review /ai-podcast-player/ and its links to the transcript, notes, Mac, and guide pages. Remove any claim that cannot be verified in the app or listing. | Draft one host/educator pitch using a verified observation and a useful topic angle; do not send. | Check that the page is indexable and that every CTA resolves. |
| 3 | Sep 14–20 | Publish or refresh /on-device-podcast-transcription/ with the local-vs-cloud distinction and a short “verify the audio” note. | Identify reviewers who publish their test method. Prepare a methodology-first brief, not a positive-review request. | Log impressions, clicks, CTR, and average position for mapped queries when available. |
| 4 | Sep 21–27 | Publish or refresh /guides/take-podcast-notes/; link it to notes, highlights, and the learning workflow. | Ask an opted-in audience for survey participation only after the consent copy in research-protocol.md is approved. | Review page engagement and CTA events by page; do not infer intent from one visit. |
| 5 | Sep 28–Oct 4 | Review /guides/find-a-podcast-quote/ and its localized variants for context-checking and transcription caveats. | Shortlist relevant newsletters or podcasts whose audience already discusses learning from audio. Queue personalized drafts. | QA language, links, source labels, and updated dates. |
| 6 | Oct 5–11 | Publish or refresh /guides/podcasts-for-students/ around study and research workflows without promising academic outcomes. | Prepare a community/research invitation that asks for experience, not praise; include a clear opt-out. | Check which query/page pairs have data and which remain unmeasured. |
| 7 | Oct 12–18 | Review the notes, highlights, and Mac pages for consistent terms and accurate sync/network language. | Review the app-review trigger spec with product; no app-source change is part of this folder. | Run a consent and data-minimization check on the survey before collection. |
| 8 | Oct 19–25 | Refresh /compare/podpin-vs-snipd/ and /compare/podpin-vs-apple-podcasts/ only with dated, official-source facts and explicit limitations. | Run a dry test of the benchmark protocol on approved devices; do not publish results from the dry run. | Store paired benchmark rows with transcript, mode, device, elapsed time, and battery fields. |
| 9 | Oct 26–Nov 1 | Publish or refresh /guides/choose-ai-podcast-app/ with a checklist for processing mode, language, device, sync, and privacy. | Personalize a reviewer or host pitch only after checking the recipient’s current topic. Keep it unsent pending approval. | Review query cannibalization and internal-link paths; record decisions in the monthly notes. |
| 10 | Nov 2–8 | Review /podcast-app-for-mac/ plus its iPhone/iPad links; state that sync and downloads need network. | Offer a neutral test brief to a relevant independent reviewer only through an approved channel and only after human review. | Compare current values with the prior period; never fill gaps with estimates. |
| 11 | Nov 9–15 | Refresh /guides/remember-podcasts/ with a practical listen–highlight–note–revisit loop. | Close the survey collection window at the predeclared date; stop requesting responses after closure. | Analyze only consented responses and complete benchmark pairs; mark small segments low confidence. |
| 12 | Nov 16–22 | Publish a short editorial recap of verified learnings, or make no new claim if evidence is thin. | Follow up once only where a recipient opted in or asked for more information; honor no-response and opt-out signals. | Update the scorecard and list the evidence behind every proposed copy change. |
| 13 | Nov 23–29 | Audit the whole content cluster, stale dates, broken links, localized routes, and App Store CTA consistency. | Decide whether any relationship merits a future collaboration; archive drafts that lack a clear mutual benefit. | Run the monthly decision gates and set the next 90-day questions. |

## Review-request trigger specification

This is a product requirement for a future implementation review. It does not change app source code and must not be treated as an instruction to send a request from this folder.

**Eligibility and trigger**

- Consider a request only after a user has completed two separate listening sessions and created at least one highlight or personal note. These are product-use milestones, not evidence of a positive sentiment or rating.
- Request on a calm app-open state after playback has stopped, never over active listening, transcription, a paywall, an error, or a support flow. Defer an interruption for everyone consistently; do not permanently exclude dissatisfied users or people who contacted support.
- Apply an app-controlled cooldown to request attempts and let StoreKit enforce system eligibility. Product should set and document exact app cooldowns before implementation. The app cannot know whether a system prompt was displayed, dismissed, or completed.

**Prompt and controls**

Use the native StoreKit `RequestReviewAction` at an appropriate lifecycle point. Do not build a custom rating alert or a sentiment-filtering pre-prompt. Apple owns the system prompt and may decline to display it. Do not call the API from a button that promises to show a review sheet.

- Never ask specifically for five stars, filter eligibility by sentiment, offer rewards, or require a rating to unlock anything.
- A separate user-initiated “Write a review” link in Settings can open the App Store write-review destination directly; it must not depend on a positive response to a survey.
- Follow [Apple’s review-request documentation](https://developer.apple.com/documentation/storekit/requesting-app-store-reviews) and [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/#ratings-and-reviews), verified 2026-08-30.

**Data minimization and QA**

- Log only the minimum approved observable state: `review_request_attempted` or a Settings review-link click, plus app version and locale if already permitted. Do not log a prompt impression, dismissal, rating, or completed review: the StoreKit API does not reveal these outcomes.
- Do not send audio, transcript text, highlight text, note text, episode titles, or inferred sentiment as part of this trigger.
- Test cooldowns, repeated app launches, playback interruption avoidance, user-initiated links, and platform behavior before release.
- Review request-attempt rate, support complaints, and aggregate App Store review activity separately. Do not claim causation from a request alone.

## Weekly scorecard

Fill this table from the named source at the same cadence each week. Use a blank cell for an unavailable value and add a note explaining the gap. Do not use projected traffic, guessed search volume, or a single anecdote as a result.

| Metric | Definition | Source | This week | Prior week | Owner / note |
| --- | --- | --- | --- | --- | --- |
| Indexed target pages | Target pages present in the index check | Search Console / approved crawler |  |  |  |
| Query impressions | Impressions for mapped queries in query-portfolio.csv | Search Console |  |  |  |
| Query clicks | Clicks for mapped queries | Search Console |  |  |  |
| Organic CTR | Clicks divided by impressions for the same query set | Search Console |  |  |  |
| Average position | Reported position for the same query set | Search Console |  |  |  |
| App Store CTA clicks | Website CTA events to the current listing | Approved product analytics |  |  |  |
| App Store visits or downloads | Only if the approved App Store report is available | App Store Connect |  |  |  |
| Survey responses | Consent-valid responses received in the collection window | Survey export |  |  |  |
| Benchmark pairs complete | Runs with matched transcript, mode, device, time, and battery fields | Benchmark log |  |  |  |
| Review request attempts | StoreKit requests attempted and user-initiated review-link clicks, if implemented | Approved product analytics |  |  |  |

## Monthly decision gates

Run these in order. Record evidence and the next action; never force a decision when the source is missing.

| Gate | Evidence required | If the evidence says… | Decision |
| --- | --- | --- | --- |
| Crawl and route | Indexing check, canonical, hreflang, and link QA | A target page is blocked, duplicated, or unreachable | Pause promotion; fix the route and recheck. |
| Search intent | Query/page mapping plus impressions and clicks | A page earns impressions but the intent or language is mismatched | Revise title, description, heading, or internal links once; annotate the change. |
| CTA continuity | Page CTA events and App Store report when available | Visitors click but the destination or promise is inconsistent | Fix the message or path; do not label the traffic a conversion. |
| Content trust | Product verification and privacy review | A claim cannot be reproduced or depends on an unstated mode | Remove or qualify the claim before further distribution. |
| Research sufficiency | Consent-valid responses, segment labels, and verbatims | Fewer than five independent data points support a segment conclusion | Keep the result exploratory and collect more evidence. |
| Benchmark fairness | Paired runs with the same episode, language, device, mode, and conditions | A required field or matched run is missing | Do not publish a comparison; repeat the run or mark it not measured. |
| Outreach quality | Public relevance check, verified observation, and recipient preference | The ask is generic, unsupported, or unwanted | Do not send; rewrite or archive the draft. |

### Monthly review record

Month:

Owner:

Sources checked:

What changed:

Evidence-backed wins:

Open questions:

Decision: continue / revise / pause
Next review date:
