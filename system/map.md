---
type: system
tags: [router, retrieval]
created: 2026-09-08
updated: 2026-09-08
---

# Request router

Start with [[system/retrieval]]. Select one route, then load its protocol and minimum
context. Do not add unrelated agency pages by default.

| Request | Load first | Then, only if needed |
|---|---|---|
| Agency / operations | [[memory/hot/agency]] | `agenzia/` page |
| Client status | [[system/protocols/client]], [[memory/hot/active-clients]] | `clients/{slug}/overview` |
| Strategy | [[system/protocols/strategy]] | overview, editorial line, relevant learning/sector insight |
| Content / Reel | [[system/protocols/content]] or [[system/protocols/scripts]] | overview, tone, formats, one idea/brief |
| Analytics | [[system/protocols/analytics]] | client overview, period summary, performance source |
| Sales / lead | [[system/protocols/sales]], [[memory/hot/active-leads]] | `prospects/{slug}` and one relevant playbook |
| Outreach / email | [[system/protocols/outreach]] or [[system/protocols/email]] | entity state, [[playbook/outreach]], relevant decision |
| Proposal / pricing | [[system/protocols/proposal]] or [[system/protocols/pricing]] | `agenzia/pricing`, lead/client commercial context |
| Contract | [[system/protocols/contracts]] | relevant entity and original source only if required |
| Ingest | [[system/protocols/ingest]] | supplied source and destination entity |
| Review / lint | [[system/protocols/review]] or [[system/protocols/lint]] | declared scope only |

For reusable cross-client evidence, check `knowledge/`. Historical deliverables in
`output/` are lazy: open only by name, for provenance, comparison or a missing decision.
Supporting protocols, loaded only for their named task: [[system/protocols/lead]],
[[system/protocols/onboarding]], [[system/protocols/delivery]] and [[system/protocols/finance]].
