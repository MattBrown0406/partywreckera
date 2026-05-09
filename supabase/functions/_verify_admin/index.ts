import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
serve(async () => {
  const secret = Deno.env.get("PARTY_WRECKERS_REPORT_SECRET") || "";
  const url = Deno.env.get("SUPABASE_URL") + "/functions/v1/party-wreckers-advertiser-admin";
  const anon = Deno.env.get("SUPABASE_ANON_KEY") || "";
  const id = "e9229947-72b6-4bf3-8132-da3dc625ecd1";

  const list = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-report-secret": secret, Authorization: `Bearer ${anon}` },
    body: JSON.stringify({ action: "list" }),
  });
  const listJson = await list.json();
  const found = (listJson.prospects || []).find((p: any) => p.id === id);

  const upd = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-report-secret": secret, Authorization: `Bearer ${anon}` },
    body: JSON.stringify({ action: "update", id, status: "contacted", metadata_patch: { sponsor_notes: "checked in", next_action: "send proposal" } }),
  });
  const updJson = await upd.json();

  return new Response(JSON.stringify({ list_status: list.status, list_count: (listJson.prospects || []).length, found_test: !!found, upd_status: upd.status, updated: updJson.prospect }), { headers: { "Content-Type": "application/json" } });
});
