# Website measurement contract

Status: implemented but disabled until a production GA4 ID and visitor consent are supplied. Website CTA clicks are not installations, purchases, or retained listeners.

## Event contract

All events use only `page_path`, `page_type`, and `locale`. Paths come from the build configuration, not the visitor's query string. The client also exposes a storage-free `podpin:analytics` CustomEvent for QA without a vendor connection.

| Event | Trigger | Additional property | Interpretation |
| --- | --- | --- | --- |
| `page_view` | Once per page after optional analytics consent | None | Consenting measured page view, not all visits |
| `app_store_clicked` | App Store CTA activated | `placement`: nav, hero, body, aside, footer | Outbound interest, not an install |
| `faq_opened` | A FAQ is opened | `faq_index`: ordinal on that page | Content interaction, not satisfaction |

No episode names, audio, transcript text, notes, email addresses, survey answers, or arbitrary URL parameters are event properties. Explicit page location excludes query strings/fragments, and referrer is reduced to its origin. Hosting access logs and external destinations remain separate services.

## Optional GA4 activation checklist

1. Decide whether GA4 is needed. Leaving it unconfigured preserves a fully functional website without a consent prompt or analytics vendor request.
2. Review the privacy notice, consent text, processing terms, retention, and applicable obligations with the owner. GA4 identifiers are pseudonymous, not anonymous. This implementation is not a legal compliance certification.
3. Create/select the correct GA4 web data stream and set `GA_MEASUREMENT_ID` to its `G-...` ID in the production environment only. Disable enhanced measurement to prevent automatic duplicate pageviews/outbound events or collection beyond this event contract. Disable Google Signals and advertising features; no advertising consent is requested here.
4. Review the shortest suitable retention, internal/developer traffic filters, and permissions. Never put sensitive information in page URLs even though our manual event payload sanitizes them.
5. On a production test session verify: no Google request before acceptance; declining persists; accepting creates one page view; CTA clicks include placement; footer settings permit revocation; revocation clears GA cookies and reloads; browser DNT/GPC suppresses loading even with previously granted consent.
6. Check GA DebugView/Realtime against these events without inventing a debug-mode production cookie. Confirm no automatic duplicate stream events before marking account setup complete.
7. Register page type, locale, and placement as event-scoped custom dimensions if needed. If `app_store_clicked` is marked as a key event, name reports “App Store outbound clicks,” never “Installs.”

The code has opt-in storage, ad consent denied, and no vendor loading before analytics acceptance. Privacy-signal users are excluded, so analytics cannot be treated as a complete traffic census. Browser tests on the noindex preview cannot validate real GA ingestion; account-level checks remain a launch gate.

## Search and App Store measurement

- Populate `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` only with codes from the correct property; DNS verification is also an option. Verification tags do not submit the sitemap automatically.
- Submit the real sitemap after deployment; segment Search Console by country, query, page, and device. Compare like-for-like windows and annotate releases. Web query demand is not established by Astro App Store popularity.
- If a numeric `APP_STORE_PROVIDER_TOKEN` is provided by App Store Connect, CTAs include `pt`, `ct`, and `mt`. Campaign values identify page, locale, and placement. Do not invent this token. Store reporting thresholds, platform attribution, and delays can prevent exact reconciliation with website clicks.
- Combine Search Console clicks, consented website CTA events, and App Store acquisition reports as distinct stages. Do not infer individual user journeys across systems or claim click-to-install conversion without compatible attribution data.
- App activation/retention instrumentation is separate from this web repository. Establish first meaningful playback, successful transcript availability, first pin/note, and a return session in an approved app analytics workstream; do not emit fabricated app events from this landing site.

Weekly and monthly scorecards are in `launch/README.md`. Measured fields intentionally remain empty until actual account data exists.
