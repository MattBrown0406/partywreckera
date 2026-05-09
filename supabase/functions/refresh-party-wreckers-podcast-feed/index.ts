import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { parsePodcastFeed } from "../_shared/podcast-feed.ts";

const RSS_URL = "https://feeds.buzzsprout.com/1941777.rss";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-automation-secret",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceRoleKey) {
      throw new Error("Supabase service role is not configured");
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const envSecret = Deno.env.get("FOLLOWUP_AUTOMATION_SECRET");
    const providedSecret = req.headers.get("x-automation-secret");

    let authorized = !!(envSecret && providedSecret && providedSecret === envSecret);

    if (!authorized && providedSecret) {
      const { data: vaultSecret } = await supabase.rpc("get_followup_automation_secret");
      if (vaultSecret && providedSecret === vaultSecret) {
        authorized = true;
      }
    }

    if (!authorized) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch(RSS_URL);

    if (!response.ok) {
      throw new Error(`Buzzsprout RSS returned ${response.status}`);
    }

    const payload = parsePodcastFeed(await response.text());

    const { error } = await supabase
      .from("party_wreckers_podcast_feed_cache")
      .upsert({
        id: "current",
        updated_at: new Date().toISOString(),
        source_url: RSS_URL,
        payload,
      });

    if (error) throw error;

    return new Response(
      JSON.stringify({
        ok: true,
        updated_at: new Date().toISOString(),
        episodes: payload.episodes.length,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
