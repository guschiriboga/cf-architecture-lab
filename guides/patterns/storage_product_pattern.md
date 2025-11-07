# Storage product coverage pattern

Apply this pattern when documenting storage-focused products:

1. Highlight the core value proposition stated in the getting started guide (R2 positions itself as unstructured data storage without egress bandwidth fees).
2. Record step-by-step setup tasks in the order presented (install and authenticate Wrangler, purchase the product in the dashboard if required, then create buckets through the R2 dashboard flow).
3. Include the first-use interaction that demonstrates success (for R2, uploading an object via the dashboard and noting the confirmation message).
4. Enumerate each officially supported access path that the guide links (Workers bindings, S3 API compatibility, and public buckets for R2) so downstream tasks can build interaction matrices.

sources:
- url: https://developers.cloudflare.com/r2/get-started/
  title: "Getting started guide · Cloudflare R2 docs"
  accessed: "2025-11-07"
  note: "R2 setup requirements, dashboard workflow, and access options"
