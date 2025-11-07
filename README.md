# Cloudflare Knowledge Base Repository

## Purpose
This repository assembles structured references about Cloudflare developer products so agents can build, validate, and share product knowledge without re-reading the entire documentation set. The content stays aligned to the official Cloudflare Developer Docs and uses citations for every fact block to keep provenance clear.

## Getting Started
1. Review the guardrails in `codex_docs/Cloudflare_KB_Guardrails.md` and the working principles in `codex_docs/Cloudflare_KB_Working_Principles.md` to understand how to curate facts safely.
2. Use the scope list in `codex_docs/Cloudflare_KB_Scope_List.md` to locate the canonical product documentation before drafting or updating data.
3. When authoring or updating product records, follow the schemas outlined in `codex_docs/Cloudflare_KB_Schemas.md` and confirm limits with canonical docs.
4. Run repository validations with the checklist in `codex_docs/Cloudflare_KB_Validation_Checklist.md` before opening a pull request.

## Repository Layout
- `codex_docs/` — Reference material, cached sources, schemas, and validation notes that inform all downstream tasks.
- `data/` — Structured YAML and CSV outputs such as product records and aggregate matrices.
- `guides/` — Authoring guides and guardrail references assembled in task T6 to support contributors.
- `README.md`, `00-overview.md`, and `90-links/` — High-level orientation, quick navigation, and canonical source references produced during task T7.

## Validation & Regeneration
- Follow `codex_docs/Cloudflare_KB_Validation_Checklist.md` to validate schemas and citation coverage.
- Use `codex_docs/validation_notes.md` to log any outstanding issues or disputes discovered during validation.
- Regenerate aggregates (matrices and free-tier data) by rerunning the scripts or processes documented in the relevant task folders once all product records are up to date.

sources:
  - url: https://developers.cloudflare.com/
    title: "Cloudflare Developer Docs"
    accessed: 2025-02-14
