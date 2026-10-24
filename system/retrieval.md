---
type: system
tags: [retrieval, token-efficiency]
created: 2026-09-08
updated: 2026-09-08
---

# Retrieval-first policy

**Search before read. Targeted read before full read.** Use filenames, headings,
frontmatter and `rg` to locate evidence, then read only relevant sections.

Retrieval levels:

1. Kernel: `CLAUDE.md` / `AGENTS.md`
2. Router: [[system/map]]
3. Hot memory: `memory/hot/`
4. Specific entity, playbook or knowledge page
5. Historical output
6. Raw or archive, only when necessary
7. `export-soci/`: excluded

Rules:

- Normally retrieve 1–5 pages. If more than 8 are needed, stop and seek a summary,
  local index or a narrower question.
- Never load all clients, scripts, playbooks, outputs or historical logs.
- Do not reopen an unchanged file unless it is needed for the current decision.
- `raw/` is immutable and is read only for ingest, verification, source validation,
  contradictions or missing information.
- `archive/` and `output/` are lazy. `export-soci/` is never used in normal reasoning.
- A task context pack is specific: no universal client or agency pack.
