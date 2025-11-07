# Prompt: Cloudflare Technical Knowledge Base Builder for AI Agents

You are an **expert Cloudflare technical writer and solutions architect** tasked with building a **machine-usable knowledge base** for AI agents.  
Your mission is to **extract, normalize, and encode** authoritative technical data from **Cloudflare’s official documentation only** into a consistent, schema-driven repository.

The resulting repository will allow AI agents to generate **complete PRDs, architectures, and implementation plans** for websites, one-tier apps, multi-tier web apps, and e-commerce solutions—**using only Cloudflare products**.

Take as much time as needed to produce a **state-of-the-art** and **fully validated** knowledge base.

---

## 🎯 Scope

Deeply research and encode technical data for **all** of the following Cloudflare products:

### Application & Data Platform
- Containers — https://developers.cloudflare.com/containers/
- D1 — https://developers.cloudflare.com/d1/
- Durable Objects — https://developers.cloudflare.com/durable-objects/
- Cloudflare Images — https://developers.cloudflare.com/images/
- KV — https://developers.cloudflare.com/kv/
- Pages — https://developers.cloudflare.com/pages/
- R2 — https://developers.cloudflare.com/r2/
- R2 SQL — https://developers.cloudflare.com/r2-sql/
- Secrets Store — https://developers.cloudflare.com/secrets-store/
- Workers — https://developers.cloudflare.com/workers/
- Workflows — https://developers.cloudflare.com/workflows/

### Logging
- Log Explorer — https://developers.cloudflare.com/log-explorer/
- Logs — https://developers.cloudflare.com/logs/

### Network Security
- Network — https://developers.cloudflare.com/network/
- Cloudflare One — https://developers.cloudflare.com/cloudflare-one/
- Gateway — https://developers.cloudflare.com/cloudflare-one/traffic-policies/
- Load Balancing — https://developers.cloudflare.com/load-balancing/
- Magic Cloud Networking — https://developers.cloudflare.com/magic-cloud-networking/
- SSL/TLS — https://developers.cloudflare.com/ssl/
- WAF — https://developers.cloudflare.com/waf/
- DNS Firewall — https://developers.cloudflare.com/dns/dns-firewall/

**Extra references (not products):**
- Reference Architecture — https://developers.cloudflare.com/reference-architecture/

Use **only** official Cloudflare sources.  
Every fact, limit, and feature must include **citation links** and **access dates**.

---

## 🧩 Output Repository Structure

```
cf-architecture-lab/
├─ README.md                              # Usage, purpose, validation steps
├─ 00-overview.md                         # Scope, conventions, and citation policy
├─ codex_docs/                            # Reference files consumed by Codex agents
│  ├─ Cloudflare_KB_Prompt.md             # This prompt file
│  ├─ schemas_reference/
│  │  ├─ product.schema.yaml
│  │  ├─ interaction.schema.yaml
│  │  └─ limits.schema.yaml
│  ├─ examples/
│  │  ├─ product_record_example.yaml
│  │  ├─ interaction_example.yaml
│  │  └─ limits_example.yaml
│  └─ validation_notes.md
├─ data/
│  ├─ schemas/
│  │  ├─ product.schema.yaml              # Canonical product schema
│  │  ├─ interaction.schema.yaml          # Inter-product relationships
│  │  └─ limits.schema.yaml               # Quotas and technical constraints
│  ├─ products/
│  │  ├─ containers.yaml
│  │  ├─ d1.yaml
│  │  ├─ durable_objects.yaml
│  │  ├─ images.yaml
│  │  ├─ kv.yaml
│  │  ├─ pages.yaml
│  │  ├─ r2.yaml
│  │  ├─ r2_sql.yaml
│  │  ├─ secrets_store.yaml
│  │  ├─ workers.yaml
│  │  ├─ workflows.yaml
│  │  ├─ log_explorer.yaml
│  │  ├─ logs.yaml
│  │  ├─ network.yaml
│  │  ├─ cloudflare_one.yaml
│  │  ├─ gateway.yaml
│  │  ├─ load_balancing.yaml
│  │  ├─ magic_cloud_networking.yaml
│  │  ├─ ssl_tls.yaml
│  │  ├─ waf.yaml
│  │  └─ dns_firewall.yaml
│  ├─ matrices/
│  │  ├─ free_tiers.csv                   # Normalized quotas per product
│  │  ├─ interactions.csv                 # Product-to-product relationships
│  │  └─ language_support.csv             # Supported runtimes and SDKs
│  └─ glossary.yaml                       # Normalized terminology
├─ guides/
│  ├─ patterns/
│  │  ├─ static-site-pages-workers.md
│  │  ├─ api-workers-durable-objects.md
│  │  ├─ object-api-workers-r2.md
│  │  ├─ sql-app-workers-d1.md
│  │  ├─ vector-search-workers-vectorize.md
│  │  ├─ media-images-r2-cdn.md
│  │  ├─ workflows-orchestration.md
│  │  ├─ tls-waf-gateway-hardening.md
│  │  ├─ global-load-balancing-zero-downtime.md
│  │  └─ zero-trust-cloudflare-one.md
│  └─ guardrails/
│     ├─ cost-controls.md
│     ├─ limits-handling.md
│     └─ security-secrets.md
└─ 90-links/
   └─ sources.md                          # All official Cloudflare URLs with access dates
```

---

## 📚 Data Collection and Citation Rules

1. Only use **Cloudflare official documentation** and **official blog posts that link to product docs**.
2. Every YAML block must include:
   ```yaml
   sources:
     - url: string
       title: string
       accessed: YYYY-MM-DD
       note: string
   ```
3. If multiple sources conflict, record both and set:
   ```yaml
   status: "disputed"
   ```
   Include notes explaining the discrepancy.
4. Non-product references (e.g., Reference Architecture) may be cited for **patterns**, never for quotas unless they link to limits pages.

---

## 🧱 Product Record Schema

Each product file in `data/products/` must conform to `data/schemas/product.schema.yaml`:

```yaml
id: string
name: string
category: enum[compute, storage, database, platform, orchestration, media, logging, network_security]
summary: string
docs:
  homepage: string
  key_pages:
    - { title: string, url: string }
capabilities:
  - string
how_it_works:
  model: string
  architecture:
    - string
  execution:
    - string
  consistency:
    - string
supported_languages:
  runtimes: [ string ]
  sdks: [ { name: string, url: string } ]
  notes: [ string ]
usage_patterns:
  webpages:
    - { pattern: string, steps: [string] }
  one_tier_apps:
    - { pattern: string, steps: [string] }
  multi_tier_apps:
    - { pattern: string, steps: [string] }
interactions:
  produces_bindings: [ string ]
  consumes_bindings: [ string ]
  best_with: [ { product_id: string, reason: string } ]
  anti_patterns: [ string ]
limits:
  quotas:
    - { name: string, value: string, scope: string, plan: string }
  performance:
    - { name: string, value: string, scope: string, note: string }
  constraints:
    - { name: string, value: string, note: string }
free_tier:
  items:
    - { name: string, value: string, reset_window: string, scope: string }
  notes: [ string ]
security_compliance:
  authz: [ string ]
  isolation: [ string ]
  data_residency: [ string ]
  secrets:
    uses: [ string ]
configuration:
  wrangler:
    bindings: [ { type: string, key: string, note: string } ]
    example: string
  cli:
    commands: [ string ]
  api:
    endpoints: [ { method: string, path: string, note: string } ]
dev_experience:
  local_dev: [ string ]
  testing: [ string ]
  ci_cd: [ string ]
migration_versioning:
  versioning: [ string ]
  migrations: [ string ]
cost_awareness:
  metering: [ string ]
  design_tips: [ string ]
examples:
  minimal:
    description: string
    files: [ { path: string, lang: string, code: string } ]
  advanced:
    - { description: string, files: [ { path, lang, code } ] }
glossary_refs: [ string ]
status: enum[ga, beta, open_beta, closed_beta, preview]
changelog_highlights: [ { date: string, change: string, source: string } ]
sources: [ { url: string, title: string, accessed: string, note: string } ]
```

---

## 🔄 Interactions Schema (`data/schemas/interaction.schema.yaml`)

```yaml
from: string
to: string
capability: string
direction: enum[uses, provides]
notes: string
source_url: string
accessed: string
```

Populate `data/matrices/interactions.csv` with one row per integration relationship.

---

## 📊 Limits Schema (`data/schemas/limits.schema.yaml`)

```yaml
product_id: string
category: enum[quota, performance, constraint]
name: string
value: string
scope: string
plan: string
reset_window: string
note: string
source_url: string
accessed: string
```

This schema should also power the aggregated table in `data/matrices/free_tiers.csv`.

---

## ✅ Normalization Rules

- **Never fabricate information.**  
  If a value is missing from the official docs, leave blank and explain with a note.
- Use **Cloudflare’s official terminology** only (e.g., “Class A operations,” “Time Travel”).
- When limits differ per plan, encode multiple entries with explicit `plan` values.
- Always include `accessed` dates for version tracking.
- Include verbatim examples only from Cloudflare’s documentation or tutorials.
- If docs change structure, preserve legacy fields under `deprecated_fields`.

---

## 🧠 Required Coverage per Product

Each product YAML must include, at minimum:

1. Technical overview and model (runtime, architecture, isolation, consistency)
2. Setup and configuration (Wrangler, CLI, API)
3. Supported languages/runtimes/SDKs
4. Development workflow (local dev, testing, CI/CD)
5. Integration and binding capabilities with other products
6. Free-tier limits and metering behavior
7. Performance characteristics (latency, throughput, region distribution)
8. Security, secrets, and compliance features
9. Cost awareness and optimization strategies
10. Changelog highlights and GA/beta status
11. References and access dates for all facts

---

## 🔗 Cross-Product Guidance (to encode under `interactions`)

| From | To | Integration Type | Notes |
|------|----|------------------|-------|
| Workers | R2 | Binding | Direct object read/write |
| Workers | KV | Binding | Global config/cache |
| Workers | D1 | Binding | SQL execution via prepared statements |
| Workers | Durable Objects | Coordination | State persistence |
| Workers | Hyperdrive | Acceleration | Cached Postgres connections |
| Workers | Vectorize | Integration | Semantic search |
| Pages | Functions | Uses Workers runtime |
| Workflows | Workers | Orchestration | Multi-step jobs |
| R2 | R2 SQL | Data analytics | SQL queries over stored objects |
| Secrets Store | All | Security | Secret injection to bindings |
| WAF | Workers/Pages | Security | Layer-7 protection rules |
| SSL/TLS | All HTTP | Transport | Certificates and TLS settings |
| Load Balancing | Workers/Pages/Origins | Traffic mgmt | Global routing and failover |
| Gateway | Workers/Devices | Policy | Egress filtering and traffic policies |
| Cloudflare One | Users/Apps | Zero Trust | SSO, device posture, ZTNA |
| DNS Firewall | DNS Resolvers | DNS Security | Domain filtering and threat feeds |
| Network | All Edge Services | Delivery | Anycast, peering, routing |
| Logs/Log Explorer | All | Observability | Export and exploration of logs |

Expand this list using Cloudflare docs as the authoritative source.

---

## 🧰 Validation Deliverables

- Each YAML file **must pass schema validation** (recommend `ajv` or Python `jsonschema`).
- CSV matrices must include all referenced product IDs.
- `90-links/sources.md` must list **every** citation with access dates.
- Include a script or documented process to regenerate `50-free-tiers/matrix.md` from YAML/CSV data.

---

## 🚀 Working Principles

- Prioritize **accuracy, structure, and reusability** for AI inference.
- Each fact must be machine-readable and easily parsed.
- Ensure **consistency across all product files** using the same schema keys.
- Use **UTC** timestamps for `accessed` fields.
- When quoting Cloudflare, preserve formatting but paraphrase explanations.

---

## 🧩 Product-Specific Deep Focus (verify from official docs)

- **Workers:** invocation limits, bindings, compatibility_date, routing/fail-open behavior, CPU semantics, Cron Triggers.
- **Pages:** build pipeline, Pages Functions runtime, deploy flow, environment variables, custom domains.
- **Durable Objects:** per-object state model, coordination, consistency, alarms, isolation, cost.
- **Containers:** runtime environment, image requirements, scaling, ingress/egress, Workers interop.
- **Workflows:** steps, state transitions, retries, idempotency, scheduling.
- **R2:** Class A/B ops, upload limits, lifecycle, presigned URLs, free egress.
- **Images:** resizing, optimization pipeline, variants, API vs Dashboard configuration.
- **KV:** consistency behavior, write rates, list operation constraints, value size.
- **D1:** database size, per-row cost, Time Travel, query limits, connection lifecycle.
- **R2 SQL:** querying model, formats supported, cost and data scan metrics.
- **Secrets Store:** usage within Workers, binding model, encryption and rotation mechanisms.
- **Logging (Logs & Log Explorer):** export formats, destinations, retention, sampling, query/filter capabilities.
- **Network Security:** WAF rule model, DDoS layers, SSL/TLS modes, Load Balancing health checks, Gateway traffic policies, Cloudflare One posture, DNS Firewall data sources, Magic Cloud Networking primitives, global network features.

---

## 🧩 Final Deliverable

Return the **complete, validated repository** as text contents (ZIP-ready).  
Each product must be fully documented under `data/products/`, conforming to the schema and referencing official Cloudflare documentation only.  
No imagination, no extrapolation — **only verified technical knowledge**.

When complete, the knowledge base will serve as the **foundation dataset** for AI agents to autonomously plan, architect, and generate full Cloudflare-native applications.
