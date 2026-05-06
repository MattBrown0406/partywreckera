import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-report-secret",
};

const countBy = (rows: Array<Record<string, unknown>>, key: string) => {
  const counts = new Map<string, number>();

  for (const row of rows) {
    const value = String(row[key] || "unknown");
    counts.set(value, (counts.get(value) || 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);
};

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

    const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { data, error } = await supabase
      .from("party_wreckers_funnel_events")
      .select("event_name, source_path, destination_url, cta_label, created_at")
      .gte("created_at", since)
      .order("created_at", { ascending: false })
      .limit(5000);

    if (error) throw error;

    const rows = data || [];
    const getAnswers = rows.filter((row) => row.event_name === "get_answers_now_click").length;
    const readiness = rows.filter((row) => row.event_name === "intervention_readiness_click").length;
    const familySquares = rows.filter((row) => row.event_name === "family_squares_click").length;
    const advertiser = rows.filter((row) => row.event_name === "advertiser_inquiry_click").length;

    return new Response(
      JSON.stringify({
        window_days: 30,
        totals: {
          events: rows.length,
          family_squares_clicks: familySquares,
          get_answers_now_clicks: getAnswers,
          intervention_readiness_clicks: readiness,
          advertiser_inquiries: advertiser,
          revenue_intent_clicks: getAnswers + readiness + advertiser,
        },
        by_event: countBy(rows, "event_name"),
        top_pages: countBy(rows, "source_path"),
        top_destinations: countBy(rows, "destination_url"),
        latest_events: rows.slice(0, 25),
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
