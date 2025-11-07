# Validation Notes

Validate YAML against schemas in `codex_docs/schemas_reference/`.
Recommended toolchains:
- Python: pyyaml + jsonschema
- Node: ajv + yaml to json
- 2025-11-07: data/products/cloudflare_one.yaml manually checked against product.schema.yaml (structure, required keys, list types) — no issues found.
- 2025-11-07: Parsed data/products/cloudflare_one.yaml with PyYAML after installing pyyaml 6.0.3 — no syntax errors.
- 2025-11-07: Loaded data/products/r2.yaml with PyYAML and verified required product fields are present (basic schema check passed).
- 2025-11-07: Executed Python validation script (PyYAML + pandas) across all product YAMLs and matrices. Results:
  * Product schema checks flagged missing or empty values in multiple files (e.g., empty `configuration.wrangler.example`, quota rows without `value`, and sources lacking `accessed` dates) that must be populated before the schema can pass.
  * `data/matrices/limits.csv` and `data/matrices/free_tiers.csv` fail the limits schema due to blank `plan`, `scope`, or `reset_window` fields across numerous rows; populate required columns or adjust schema expectations.
  * `data/matrices/interactions.csv` passed structural validation, but coverage checks show several product IDs absent from interactions and free-tier matrices; add entries so every product is represented.
