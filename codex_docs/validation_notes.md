# Validation Notes

Validate YAML against schemas in `codex_docs/schemas_reference/`.
Recommended toolchains:
- Python: pyyaml + jsonschema
- Node: ajv + yaml to json
- 2025-11-07: data/products/cloudflare_one.yaml manually checked against product.schema.yaml (structure, required keys, list types) — no issues found.
- 2025-11-07: Parsed data/products/cloudflare_one.yaml with PyYAML after installing pyyaml 6.0.3 — no syntax errors.
