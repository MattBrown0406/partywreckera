import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const allowedEvents = new Set([
  "party_wreckers_arrival",
  "family_squares_click",
  "get_answers_now_click",
  "intervention_readiness_click",
  "freedom_bridge_click",
  "podcast_platform_click",
  "sponsor_click",
  "advertiser_package_click",
  "advertiser_inquiry_start",
  "advertiser_inquiry_click",
  "advertiser_email_click",
  "openclaw_phone_click",
]);

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    const eventName = String(payload.event_name || "");

    if (!allowedEvents.has(eventName)) {
      return new Response(JSON.stringify({ error: "Unsupported event" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceRoleKey) {
      throw new Error("Supabase service role is not configured");
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { error } = await supabase.from("party_wreckers_funnel_events").insert({
      event_name: eventName,
      source_path: payload.source_path || null,
      destination_url: payload.destination_url || null,
      cta_label: payload.cta_label || null,
      page_title: payload.page_title || null,
      referrer: payload.referrer || null,
      anonymous_id: payload.anonymous_id || null,
      user_agent: payload.user_agent || null,
      metadata: payload.metadata || {},
    });

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
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
