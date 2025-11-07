export default { async fetch(request, env, ctx) { return new Response(JSON.stringify({ ok: true }), { headers: { 'content-type': 'application/json' } }) } }
