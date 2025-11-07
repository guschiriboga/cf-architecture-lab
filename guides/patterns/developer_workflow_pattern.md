# Developer workflow pattern for product records

Use this pattern when filling the `development_workflow` section in a product record:

1. Capture prerequisites that the official quickstart spells out (for example, the Workers CLI guide requires a Cloudflare account, Node.js, and recommends a Node version manager because Wrangler needs Node 16.17.0 or later).
2. Outline the project bootstrap commands in the order they appear in the quickstart (the Workers guide directs authors to run `npm create cloudflare@latest`/`yarn create cloudflare`/`pnpm create cloudflare@latest`, choose a template, and then `cd` into the generated project).
3. Document the local development command exactly as written in the docs (Workers quickstart calls for `npx wrangler dev` to preview the Worker and triggers browser login on first use).
4. Note any follow-up steps that unblock deployment (such as running `wrangler login` if authentication fails in headless environments).

sources:
- url: https://developers.cloudflare.com/workers/get-started/guide/
  title: "Get started - CLI · Cloudflare Workers docs"
  accessed: "2025-11-07"
  note: "Quickstart prerequisites, bootstrap commands, and local development workflow"
