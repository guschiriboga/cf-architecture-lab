export default {
  async fetch(request, env, ctx) {
    return new Response(JSON.stringify({
      ok: true,
      name: "cf-architecture-lab",
      service: "minimal-worker",
      time: new Date().toISOString()
    }), { headers: { "content-type": "application/json" } });
  }
}
