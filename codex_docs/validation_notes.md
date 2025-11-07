# Validation Notes

Validate YAML against schemas in `codex_docs/schemas_reference/`.
Recommended toolchains:
- Python: pyyaml + jsonschema
- Node: ajv + yaml to json
- 2025-11-07: Loaded data/products/r2.yaml with PyYAML and verified required product fields are present (basic schema check passed).
