import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-report-secret",
};

const allowedStatuses = new Set(["new", "contacted", "proposal_sent", "negotiating", "sold", "lost"]);

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const expectedSecret = Deno.env.get("PARTY_WRECKERS_REPORT_SECRET");
    const providedSecret = req.headers.get("x-report-secret");

    if (!expectedSecret || providedSecret !== expectedSecret) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceRoleKey) {
      throw new Error("Supabase service role is not configured");
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const payload = await req.json().catch(() => ({ action: "list" }));
    const action = String(payload.action || "list");

    if (action === "list") {
      const { data, error } = await supabase
        .from("party_wreckers_advertiser_inquiries")
        .select("id, created_at, name, email, company, message, source_path, status, metadata")
        .order("created_at", { ascending: false })
        .limit(100);

      if (error) throw error;

      return new Response(JSON.stringify({ prospects: data || [] }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "update") {
      const id = String(payload.id || "");
      const status = String(payload.status || "");
      const metadataPatch = (payload.metadata_patch || {}) as Record<string, unknown>;

      if (!id) {
        return new Response(JSON.stringify({ error: "Missing prospect id" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      if (status && !allowedStatuses.has(status)) {
        return new Response(JSON.stringify({ error: "Unsupported prospect status" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const { data: existing, error: existingError } = await supabase
        .from("party_wreckers_advertiser_inquiries")
        .select("metadata")
        .eq("id", id)
        .maybeSingle();

      if (existingError) throw existingError;

      const metadata = {
        ...((existing?.metadata as Record<string, unknown> | null) || {}),
        ...metadataPatch,
        updated_from_command_center_at: new Date().toISOString(),
      };

      const updates: Record<string, unknown> = { metadata };
      if (status) updates.status = status;

      const { data, error } = await supabase
        .from("party_wreckers_advertiser_inquiries")
        .update(updates)
        .eq("id", id)
        .select("id, created_at, name, email, company, message, source_path, status, metadata")
        .maybeSingle();

      if (error) throw error;

      return new Response(JSON.stringify({ prospect: data }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Unsupported action" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
