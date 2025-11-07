# Guardrail: Storage access claims

When describing storage products, keep these guardrails in mind:

- Only repeat value propositions that appear explicitly in official docs (for R2, emphasize egress-free unstructured data storage exactly as phrased in the getting started guide).
- Require confirmation that dashboard purchases or enablement steps are complete before directing users to create resources (R2 must be purchased in the dashboard prior to bucket creation).
- Document access methods as a closed list sourced from the guide (R2 currently highlights Workers bindings, S3 API compatibility, and public buckets—avoid inventing other integrations).
- Whenever you mention operational confirmations, mirror the doc’s language (R2 notes that the dashboard displays a confirmation message after a successful upload).

sources:
- url: https://developers.cloudflare.com/r2/get-started/
  title: "Getting started guide · Cloudflare R2 docs"
  accessed: "2025-11-07"
  note: "R2 positioning, purchase prerequisite, access methods, and success messaging"
