# Repository Overview

## Workflow Summary
- **Reference foundation (T0):** Establish guardrails, schemas, scope lists, and validation principles for every downstream task.
- **Data ingestion (T1):** Cache each product's `llms-full.txt` file when available and record metadata in `codex_docs/cf_llms_full/manifest.json`.
- **Structured authoring (T2):** Build `data/products/*.yaml` records that conform to `product.schema.yaml`, capturing verified facts, limits, and examples with citations.
- **Cross-product insights (T3 & T4):** Generate interaction matrices and aggregated limits/free-tier CSVs aligned with the schemas in `codex_docs/Cloudflare_KB_Schemas.md`.
- **Quality & guidance (T5 & T6):** Validate the entire dataset, document open issues, and publish authoring guides to support consistent updates.

## Contributor Checklist
1. Read the guardrails, working principles, and required coverage files in `codex_docs/` before editing.
2. Confirm every fact against the official Cloudflare documentation linked in `90-links/sources.md`.
3. Update or add citations with `url`, `title`, and `accessed` metadata for each fact block you touch.
4. Run schema validations and review `codex_docs/validation_notes.md` to keep the knowledge base dispute-free.

sources:
  - url: https://developers.cloudflare.com/
    title: "Cloudflare Developer Docs"
    accessed: 2025-02-14
