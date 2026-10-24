# Veloce Digital Agency Brain

## Identity and scope

This repository is Veloce Digital's persistent agency memory: clients, leads, sales,
delivery, content strategy, operations and reusable agency learning. Exclude Davide's
personal creator work and private domains, except for the agency-relevant projection.

## Core workflow

1. Classify the request.
2. Read [[system/map]] and select the smallest relevant protocol.
3. Search before reading; build a task-specific context pack.
4. Retrieve only the necessary pages or sections, then execute.
5. Persist only durable knowledge and update a local index or the recent log only when meaningful.

Conversation is not primary memory; this repository is. Detailed rules live in
[[system/retrieval]] and [[system/persistence]].

## Retrieval

Prefer this order: kernel, map, hot memory, entity/knowledge page, historical output,
raw. Normally load 1–5 pages. If more than 8 seem needed, search for a summary or
narrow the task first. Never scan the repository recursively by default.

Load only the protocol relevant to the task. Do not read all clients, scripts,
playbooks, outputs or historical logs. `raw/` is cold and immutable: use only for
ingest, verification, contradiction or missing information. `export-soci/` is an
export, never a normal retrieval source.

## Persistence and sources

Persist facts, decisions, status changes, delivery state, results and supported
learnings; do not save disposable wording, redundant notes or unsupported speculation.
Use delta updates. Source precedence: signed/official document, written client
communication, structured data, user statement, inference. Keep fact and inference distinct.

## Safety and routing

Preserve historical knowledge. Never alter `raw/`; do not rewrite historical outputs
without a request. Use wikilinks for wiki pages. Route through [[system/map]]; use
`clients/` for client facts, `prospects/` for leads, `knowledge/` for cross-client
learnings, and `output/` only for deliverables/history.
