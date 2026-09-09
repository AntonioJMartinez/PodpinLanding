# Podcast-learning research protocol

Status: pre-registered plan; no survey or benchmark results are included here.

Owner: {{owner}}

Review date: 2026-09-01

Collection window: {{start_date}} to {{end_date}}
Privacy contact: {{privacy_contact}}

This protocol keeps two kinds of evidence separate: what listeners say about learning from podcasts, and what a controlled workflow test observes. It does not assume that a respondent values AI, that a feature caused a behavior, or that one app is best.

## Shared research rules

- Participation is voluntary. Explain the purpose before collection, let people skip questions, and provide a way to stop or request deletion.
- Collect the smallest amount of information needed for the question. Do not request audio, transcript text, episode files, names, account identifiers, or sensitive notes.
- Keep contact details in a separate opt-in form or system. Never combine them with survey answers by default.
- Record the collection date, version, device, language, and processing mode when they affect interpretation. Do not infer them from a screenshot or memory.
- Separate observed facts, respondent opinions, and researcher interpretation in the report.
- Use a verbatim only after removing identifying details and confirming that the respondent consented to its use.
- Do not publish a segment conclusion with fewer than five independent data points. Mark small or self-selected samples exploratory and low confidence.
- If consent is missing, a respondent asks for deletion, or a response contains unexpected sensitive information, exclude or delete it according to the approved retention decision.

## Survey: how people learn from podcasts

### Objective and questions

The survey is intended to learn how listeners find, understand, save, and revisit ideas from podcasts. It should answer:

1. What are listeners trying to do when they save or search for a podcast idea?
2. Which current methods do they use, and where do those methods break down?
3. How do device, language, and listening context shape the workflow?
4. How do listeners understand the tradeoff between on-device processing and optional cloud AI?
5. Which explanations or content would help them evaluate a podcast app without overpromising?

### Recruitment and eligibility

- Recruit through an opted-in owned audience, an approved research panel, or a clearly labeled community invitation.
- Do not recruit from a review request, a support escalation, or a moment when someone is trying to resolve an error.
- Invite people because they listen to podcasts or have a relevant learning/retrieval workflow, not because they are expected to praise Podpin.
- Only invite adults unless the owner has approved the applicable youth-research process.
- Keep recruitment copy neutral. Do not reveal a desired result or describe Podpin as the correct answer.
- Record the recruitment source and invitation date without attaching it to the survey response unless essential.

### Consent copy

Show this before the first question and require an affirmative choice:

> You are invited to take an optional survey about how people listen to podcasts and return to useful ideas. Participation is voluntary. You may skip any question or stop at any time, and your choice will not affect access to any product or service. We will use consented answers to improve research, product education, and content. Please do not include audio, transcript text, names, account details, or other sensitive information. We will not add your contact details to your answers; a separate form will ask whether you want a follow-up. Read the privacy notice at {{privacy_notice_url}} or contact {{privacy_contact}} with questions.

Consent choices:

- I agree to participate
- I do not agree

If the person does not agree, show a brief exit and collect no survey answers. Save only the minimum operational record needed to avoid immediately re-inviting that person through the same channel.

### Survey instrument

Use “prefer not to answer” and “not sure” where they make sense. Keep open text optional.

| ID | Question | Response format | Data-minimization note |
| --- | --- | --- | --- |
| Q1 | Which devices do you usually use for podcasts? | Multi-select: iPhone; iPad; Mac; other; prefer not to answer | Do not ask for a device serial number or account. |
| Q2 | What are you usually trying to do when a podcast matters to you? | Choose up to three: learn a topic; remember an idea; find a quote; prepare for work or study; share a recommendation; relax; other | Describes the job without collecting the episode. |
| Q3 | Think of the last time you wanted to return to something you heard. What were you trying to find? | Optional short text | Ask for a general description, not the quote or audio. |
| Q4 | How did you try to find or remember it? | Multi-select: replayed the episode; searched a transcript; wrote a note; saved a bookmark; searched the web; asked someone; did not find it; other | Measures current behavior without asking for account history. |
| Q5 | What made that task difficult? | Optional short text plus “nothing was difficult” | Do not prompt with a desired pain point. |
| Q6 | Which tools would be useful in that moment? | Randomized multi-select: searchable transcript; summary; chapters; saved highlights; personal notes; color labels; references; none of these; not sure | Randomize feature order and allow “none” to reduce leading. |
| Q7 | If an app offered AI processing, which description would you want to understand first? | Single select: on-device processing; optional cloud processing; what data is synchronized; language/device support; I would not use AI; not sure | Explains choices without implying a preferred answer. |
| Q8 | In which language do you usually listen to podcasts? | Select a language or “more than one” / “prefer not to answer” | Do not collect a recording or speech sample. |
| Q9 | What would make you trust a podcast app’s explanation of its AI and privacy behavior? | Optional short text | Ask for expectations, not a claim about Podpin. |
| Q10 | Is there anything else about finding or remembering podcast ideas you want to add? | Optional open text | Show a reminder not to include personal or confidential information. |
| Q11 | May we use an anonymized sentence from your response in research notes? | Yes / no | Separate permission from participation. No consequence for “no”. |
| Q12 | Would you like to volunteer for a follow-up? | Yes / no; if yes, open the separate contact form | Store contact details separately and do not join them to answers by default. |

### Consent, retention, and deletion controls

Before launch, fill in the policy fields below; do not publish the survey with unresolved placeholders:

- Privacy notice URL: {{privacy_notice_url}}
- Data controller / responsible team: {{responsible_team}}
- Raw-response deletion date or approved retention period: {{retention_decision}}
- Deletion-request channel: {{deletion_channel}}
- Approved survey platform and access list: {{platform_and_access}}
- Whether any incentive is offered: {{incentive_or_none}}

If an incentive is used, provide the same eligibility rules to all respondents, disclose it in consent, and do not tie it to a positive answer, review, or referral. Do not send an incentive before confirming the approved process.

### Analysis and reporting plan

1. Remove responses without consent and redact accidental personal or sensitive details.
2. Count responses only within the declared collection window. Report the number of consent-valid responses; do not invent a response rate without a known invitation denominator.
3. Code open text into themes while preserving an anonymized verbatim bank. Keep the coder’s interpretation separate from the raw answer.
4. Segment only where the question and sample support it, such as listening job or primary device. Do not combine unrelated segments to create a stronger-looking result.
5. Require at least five independent data points before describing a segment pattern; mark smaller groups exploratory.
6. Report question wording, response options, missing responses, sample size, and confidence. Do not convert a self-selected sample into a claim about all listeners.
7. Use findings to propose copy or research changes. A survey preference is not proof that a feature changes retention, conversion, or learning outcomes.

### Blank survey results record

| Question / theme | Consent-valid n | Observed response or theme | Representative anonymized evidence | Confidence | Action |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

## Fair transcript and processing benchmark

This is a workflow benchmark, not a public claim or a ranking exercise. It must be run only with episodes that the team may lawfully process and with devices and app versions recorded at the time of the run. It does not change app source code.

### Pre-registration

Fill these fields before the first scored run:

- Benchmark owner: {{benchmark_owner}}
- Episode IDs or rights-cleared sources: {{episode_set}}
- Languages under test: {{languages}}
- Apps and exact versions: {{apps_and_versions}}
- Device models and operating systems: {{devices_and_os}}
- Processing modes: on-device; optional cloud AI where supported; not applicable where the app has no such mode
- Network conditions: {{network_conditions}}
- Start date and end date: {{benchmark_window}}
- Warm-up and repeat rule: one unscored setup/warm-up, then at least three scored runs per condition unless a documented equipment issue prevents it
- Accuracy reference and permission: {{reference_transcript}}

### Conditions to hold constant or record

| Dimension | Fairness rule |
| --- | --- |
| Episode | Use the same audio file or the same documented public episode. Record duration and a non-sensitive episode ID; do not upload copyrighted audio into the log. |
| Language | Run the same language and note dialect or mixed-language speech when relevant. Do not compare different languages as an accuracy contest. |
| Device and OS | Use the same device model and operating-system version for within-condition comparisons. A cross-device result is a different condition, not a normalization. |
| App version | Record the exact app version and test date. Do not mix versions in one summary row. |
| Processing mode | Keep on-device transcription separate from optional cloud AI. Record the selected mode; never infer it from elapsed time. |
| Network | Record connected, restricted, or unavailable network conditions and whether a model or episode download occurred. Keep network conditions consistent within a pair. |
| Setup | Complete or record model downloads, permissions, storage, background apps, power mode, brightness, and thermal state before timing. |
| Battery | Start each pair at a comparable charge, unplugged unless the condition explicitly tests power, and record start and end percentages plus charging state. Do not report a battery difference if charging or a restart confounds it. |
| Timing | Start the timer at the predeclared event and stop at the same “transcript ready” event for every app. Record setup/download time separately from processing time. |
| Accuracy | Use a rights-cleared reference transcript and a predeclared sample of segments. If no reference is available, report accuracy as not measured rather than using a subjective winner. |

### Run procedure

1. Confirm device, OS, app version, language, episode ID, network, mode, and battery fields.
2. Complete any required download or setup, recording its duration separately.
3. Start from the predeclared app state and play or process the same episode.
4. Record elapsed time to the defined transcript-ready event and any visible failure or partial output.
5. Record start and end battery, charging state, thermal notes, and background conditions.
6. Save the transcript output only where rights and privacy approvals allow. Otherwise retain the approved accuracy score or mark it not measured.
7. Repeat the same condition according to the pre-registered rule. Do not cherry-pick the fastest or most favorable run.
8. Keep a raw run log and a separate summary. An interrupted or invalid run remains documented as invalid; it is not silently deleted.

### Blank run log

| Run ID | App / version | Device / OS | Episode ID | Duration | Language | Mode | Network | Setup or model download | Start battery | End battery | Battery delta | Transcript-ready time | Accuracy method / result | Validity note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

### Blank benchmark summary

| Condition | Valid paired runs | Transcript-ready time summary | Battery summary | Accuracy method and result | Caveats | Publish decision |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

### Interpretation guardrails

- Do not call an app faster, more accurate, or more battery-efficient without valid paired runs under the same declared conditions.
- Do not generalize a device-specific or language-specific result to every Apple device or listener.
- Do not treat on-device transcription as evidence that summaries or every AI function use the same processing path.
- Do not hide setup, download, network, thermal, or battery caveats.
- If the protocol changes, version the protocol and keep pre-change results separate.
- If a condition cannot be reproduced, write “not measured” and explain why.
