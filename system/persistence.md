---
type: system
tags: [persistence, memory]
created: 2026-09-08
updated: 2026-09-08
---

# Persistence policy

Persist only durable, agency-relevant knowledge: new client facts, lead-status changes,
commercial or pricing decisions, accepted/rejected proposals, material feedback, campaign
results, supported creative learnings, delivery state, contracts, renewals and strategic or
workflow decisions.

Do not persist disposable brainstorming, temporary wording, redundant unchanged facts,
casual conversation or unsupported speculation. Keep **FACT** separate from **INFERENCE**;
record source links and confidence for learnings.

Use delta updates: change only affected sections, preserve `created`, refresh `updated` and
never silently replace a conflicting instruction. Update a local index when an entity/page
is created or materially changes. Append a meaningful event to `log/recent.md`; do not log
ordinary queries. Move older log entries to `log/archive/YYYY-MM.md` without loss.
