import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async () => {
  const secret = Deno.env.get("PARTY_WRECKERS_REPORT_SECRET")!;
  const url = `${Deno.env.get("SUPABASE_URL")}/functions/v1/party-wreckers-advertiser-admin`;
  const anon = Deno.env.get("SUPABASE_ANON_KEY")!;
  const headers = { "Content-Type": "application/json", "x-report-secret": secret, Authorization: `Bearer ${anon}`, apikey: anon };

  const call = async (body: unknown) => {
    const r = await fetch(url, { method: "POST", headers, body: JSON.stringify(body) });
    return { status: r.status, body: await r.json() };
  };

  const results: Record<string, unknown> = {};
  results.list_initial = await call({ action: "list" });

  const created = await call({ action: "create", prospect: { name: "Verify Co", email: "verify@example.com", company: "Verify Co", sponsor_category: "Recovery", contact_role: "CMO", website: "https://example.com", target_source: "manual_test" } });
  results.create = created;
  const id1 = (created.body as any)?.prospect?.id;

  const bulk = await call({ action: "bulk_create", prospects: [
    { name: "Bulk One", email: "bulk1@example.com", company: "Bulk One", sponsor_category: "Health" },
    { name: "Bulk Two", email: "bulk2@example.com", company: "Bulk Two", sponsor_category: "Health" },
  ]});
  results.bulk = bulk;
  const bulkIds = ((bulk.body as any)?.prospects || []).map((p: any) => p.id);

  if (id1) {
    results.update = await call({ action: "update", id: id1, status: "contacted", metadata_patch: { sponsor_notes: "Verified via test", next_action: "Follow up Monday" } });
  }

  const toDelete = [id1, ...bulkIds].filter(Boolean);
  results.deletes = [];
  for (const id of toDelete) {
    (results.deletes as unknown[]).push(await call({ action: "delete", id }));
  }

  return new Response(JSON.stringify(results, null, 2), { headers: { "Content-Type": "application/json" } });
});
