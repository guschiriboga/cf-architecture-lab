# Guardrail: Wrangler prerequisites and support scope

Follow these guardrails whenever you document Wrangler-based workflows:

- Confirm system requirements before recommending commands: the official installation guide limits support to macOS 13.5+, Windows 11, and Linux distros with glib 2.35, and requires Node.js versions aligned with the current, active, or maintenance release lines.
- Prefer project-local installation instructions (`npm i -D wrangler@latest`, `yarn add -D wrangler@latest`, or `pnpm add -D wrangler@latest`) to stay consistent with Cloudflare guidance on version control.
- Remind authors to direct readers to `npx wrangler --version` to verify the installed version when troubleshooting mismatches.
- Link to the official commands reference instead of paraphrasing subcommands from memory; the installation page explicitly routes to the commands catalog for authoritative syntax.

sources:
- url: https://developers.cloudflare.com/workers/wrangler/install-and-update/
  title: "Install/Update Wrangler · Cloudflare Workers docs"
  accessed: "2025-11-07"
  note: "Wrangler system requirements, installation steps, and command reference guidance"
