# Cloudflare KB — Codex Agent Task Plan

**File:** `codex_docs/prompts/tasks_list.md`  
**Generated:** 2025-11-07

This plan splits the original `Cloudflare_KB_Prompt_full.md` into small, agent‑friendly tasks.  
All tasks produce a **PR** on a **branch named exactly as the task ID** (e.g., `T1.07_r2_fetch`), with a clear description of the work done.

---

## Conventions

- **Branch name:** `{TaskID}` (e.g., `T2.15_cloudflare_one_product_record`)
- **PR title:** `{TaskID} — {Short description}`
- **PR body must include:**
  - Summary of actions performed
  - Artifacts added/updated
  - Validation notes or issues (if any)
  - Follow‑ups (if any)

---

## Global Inputs (for reference only)

- `codex_docs/schemas_reference/` — copies of:
  - `product.schema.yaml`
  - `interaction.schema.yaml`
  - `limits.schema.yaml`
- `codex_docs/Cloudflare_KB_Prompt_full.md` — source prompt
- Official Cloudflare docs URLs (per product listed below)

> Use **only** official Cloudflare docs/blog posts that link back to product docs. Treat any local `llms-full.txt` as **reference only**; verify limits on canonical pages.

---

## Task Index

- **T0** Create lightweight reference docs
- **T1.x** Per‑product cache fetch (llms‑full) — 21 tasks
- **T2.x** Per‑product product‑record build — 21 tasks
- **T3** Interactions matrix
- **T4** Limits & Free‑tier aggregates
- **T5** Validation pass
- **T6** Guides & guardrails
- **T7** Assembly & final checks

---

## T0 — Create lightweight reference docs

**Goal**  
Generate short reusable reference files to avoid long prompts in later tasks.

**Outputs**  
- `codex_docs/Cloudflare_KB_Guardrails.md`
- `codex_docs/Cloudflare_KB_Schemas.md` (just the three schemas copied verbatim)
- `codex_docs/Cloudflare_KB_Scope_List.md` (the product list + links)
- `codex_docs/Cloudflare_KB_Working_Principles.md`
- `codex_docs/Cloudflare_KB_Citations.md` (YAML citation block + dispute rule)
- `codex_docs/Cloudflare_KB_Validation_Checklist.md`
- `codex_docs/Cloudflare_KB_Required_Coverage.md`

**Branch / PR**  
- Branch: `T0_reference_docs`
- PR title: `T0 — Reference docs (schemas, guardrails, scope)`

**Acceptance**  
- Files exist with concise content; no product data yet.
- Schemas copied without modification; others are short bullet lists.
- Ready to be attached as inputs for all other tasks.

---

## T1 — Per‑product cache fetch (llms‑full)

**Purpose**  
Fetch `/llms-full.txt` per product into `codex_docs/cf_llms_full/` and create `manifest.json` entries.

**Generic steps (applies to all T1.x):**  
1. Attempt to fetch: `https://developers.cloudflare.com/<product-root>/llms-full.txt`  
   Save to: `codex_docs/cf_llms_full/<product_id>.txt`
2. If unavailable (404/timeout), skip file and record in manifest with `"available": false`.
3. For successful fetches, compute `bytes`, `sha256`, `fetched_at` (UTC ISO 8601), and write to `manifest.json`.
4. Do **not** quote llms‑full values as limits without verifying in canonical docs later tasks.

**Artifacts**  
- `codex_docs/cf_llms_full/<product_id>.txt` (when available)
- `codex_docs/cf_llms_full/manifest.json` (updated)

**PR requirement**  
- Branch name: `T1.{nn}_{product_id}_fetch`
- PR body: include fetch status, size/hash, and manifest diff.

### T1.x Task List
- **T1.01_containers_fetch** — root: `containers` → docs: https://developers.cloudflare.com/containers/
- **T1.02_d1_fetch** — root: `d1` → docs: https://developers.cloudflare.com/d1/
- **T1.03_durable_objects_fetch** — root: `durable-objects` → docs: https://developers.cloudflare.com/durable-objects/
- **T1.04_images_fetch** — root: `images` → docs: https://developers.cloudflare.com/images/
- **T1.05_kv_fetch** — root: `kv` → docs: https://developers.cloudflare.com/kv/
- **T1.06_pages_fetch** — root: `pages` → docs: https://developers.cloudflare.com/pages/
- **T1.07_r2_fetch** — root: `r2` → docs: https://developers.cloudflare.com/r2/
- **T1.08_r2_sql_fetch** — root: `r2-sql` → docs: https://developers.cloudflare.com/r2-sql/
- **T1.09_secrets_store_fetch** — root: `secrets-store` → docs: https://developers.cloudflare.com/secrets-store/
- **T1.10_workers_fetch** — root: `workers` → docs: https://developers.cloudflare.com/workers/
- **T1.11_workflows_fetch** — root: `workflows` → docs: https://developers.cloudflare.com/workflows/
- **T1.12_log_explorer_fetch** — root: `log-explorer` → docs: https://developers.cloudflare.com/log-explorer/
- **T1.13_logs_fetch** — root: `logs` → docs: https://developers.cloudflare.com/logs/
- **T1.14_network_fetch** — root: `network` → docs: https://developers.cloudflare.com/network/
- **T1.15_cloudflare_one_fetch** — root: `cloudflare-one` → docs: https://developers.cloudflare.com/cloudflare-one/
- **T1.16_gateway_fetch** — root: `cloudflare-one/traffic-policies` → docs: https://developers.cloudflare.com/cloudflare-one/traffic-policies/
- **T1.17_load_balancing_fetch** — root: `load-balancing` → docs: https://developers.cloudflare.com/load-balancing/
- **T1.18_magic_cloud_networking_fetch** — root: `magic-cloud-networking` → docs: https://developers.cloudflare.com/magic-cloud-networking/
- **T1.19_ssl_tls_fetch** — root: `ssl` → docs: https://developers.cloudflare.com/ssl/
- **T1.20_waf_fetch** — root: `waf` → docs: https://developers.cloudflare.com/waf/
- **T1.21_dns_fetch** — root: `dns` → docs: https://developers.cloudflare.com/dns/
---

## T2 — Per‑product product record build

**Purpose**  
Create `data/products/<product_id>.yaml` that **validates** against `product.schema.yaml` and includes citations with `accessed` dates. Prefer canonical docs for limits; mark `status: "disputed"` when cache and docs disagree.

**Generic steps (applies to all T2.x):**  
1. Read local cache `codex_docs/cf_llms_full/<product_id>.txt` (if available) to harvest facts.  
2. Open official product docs (homepage + key subpages) to verify/complete all fields.  
3. Fill all required sections per schema, including limits/free‑tier, dev workflow, interactions, and examples (verbatim examples only from Cloudflare docs).  
4. Add `sources:` entries for each fact set (url, title, accessed).  
5. Run schema validation and fix any issues.

**Artifacts**  
- `data/products/<product_id>.yaml`

**PR requirement**  
- Branch name: `T2.{{nn}}_{{product_id}}_product_record`
- PR body: summary, key sources, highlight of any disputes, and validation result.

### T2.x Task List
- **T2.01_containers_product_record** — docs: https://developers.cloudflare.com/containers/
- **T2.02_d1_product_record** — docs: https://developers.cloudflare.com/d1/
- **T2.03_durable_objects_product_record** — docs: https://developers.cloudflare.com/durable-objects/
- **T2.04_images_product_record** — docs: https://developers.cloudflare.com/images/
- **T2.05_kv_product_record** — docs: https://developers.cloudflare.com/kv/
- **T2.06_pages_product_record** — docs: https://developers.cloudflare.com/pages/
- **T2.07_r2_product_record** — docs: https://developers.cloudflare.com/r2/
- **T2.08_r2_sql_product_record** — docs: https://developers.cloudflare.com/r2-sql/
- **T2.09_secrets_store_product_record** — docs: https://developers.cloudflare.com/secrets-store/
- **T2.10_workers_product_record** — docs: https://developers.cloudflare.com/workers/
- **T2.11_workflows_product_record** — docs: https://developers.cloudflare.com/workflows/
- **T2.12_log_explorer_product_record** — docs: https://developers.cloudflare.com/log-explorer/
- **T2.13_logs_product_record** — docs: https://developers.cloudflare.com/logs/
- **T2.14_network_product_record** — docs: https://developers.cloudflare.com/network/
- **T2.15_cloudflare_one_product_record** — docs: https://developers.cloudflare.com/cloudflare-one/
- **T2.16_gateway_product_record** — docs: https://developers.cloudflare.com/cloudflare-one/traffic-policies/
- **T2.17_load_balancing_product_record** — docs: https://developers.cloudflare.com/load-balancing/
- **T2.18_magic_cloud_networking_product_record** — docs: https://developers.cloudflare.com/magic-cloud-networking/
- **T2.19_ssl_tls_product_record** — docs: https://developers.cloudflare.com/ssl/
- **T2.20_waf_product_record** — docs: https://developers.cloudflare.com/waf/
- **T2.21_dns_product_record** — docs: https://developers.cloudflare.com/dns/
---

## T3 — Interactions matrix

**Goal**  
Produce `data/matrices/interactions.csv` (validates with `interaction.schema.yaml`) by scanning all `data/products/*.yaml` and the cross‑product guidance.

**Artifacts**  
- `data/matrices/interactions.csv`

**Branch / PR**  
- Branch: `T3_interactions_matrix`
- PR: includes generation method, rows added, and citations per row.

**Acceptance**  
- Every row has `from`, `to`, `capability`, `direction`, `notes`, `source_url`, `accessed`.

---

## T4 — Limits & Free‑tier aggregates

**Goal**  
Aggregate per‑product limits and free‑tier data into CSVs that conform to `limits.schema.yaml`.

**Artifacts**  
- `data/matrices/limits.csv`
- `data/matrices/free_tiers.csv`

**Branch / PR**  
- Branch: `T4_limits_aggregates`
- PR: describes transformation rules; includes a quick validation run.

**Acceptance**  
- All products present; each row has `source_url` and `accessed`.

---

## T5 — Validation pass

**Goal**  
Run schema validations and repository consistency checks; update `codex_docs/validation_notes.md`.

**Artifacts**  
- Updated `codex_docs/validation_notes.md` with: schema pass/fail, missing citations, disputed counts, orphan IDs, regeneration steps for free‑tiers.

**Branch / PR**  
- Branch: `T5_validation_pass`
- PR: highlights failures and suggested fixes.

**Acceptance**  
- All schemas validate; matrices include all product IDs; sources are complete.

---

## T6 — Guides & guardrails

**Goal**  
Create reference guides under `guides/` for patterns and guardrails (no limits quoted unless linking to limits pages).

**Artifacts**  
- `guides/patterns/*.md`
- `guides/guardrails/*.md`

**Branch / PR**  
- Branch: `T6_guides_guardrails`
- PR: lists files and intended audience (agent authors vs data editors).

**Acceptance**  
- Guardrails and patterns are concise, link to official docs where needed.

---

## T7 — Assembly & final checks

**Goal**  
Add repository docs and links; ensure everything is ZIP‑ready and self‑documented.

**Artifacts**  
- `README.md`, `00-overview.md`, `90-links/sources.md`

**Branch / PR**  
- Branch: `T7_assembly_final`
- PR: summary of the repo structure, how to validate, and how to regenerate matrices.

**Acceptance**  
- Clear getting‑started flow; all prior tasks referenced.
