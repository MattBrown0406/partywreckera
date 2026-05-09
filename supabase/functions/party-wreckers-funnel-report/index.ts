import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-report-secret",
};

type EventRow = {
  event_name: string | null;
  source_path: string | null;
  destination_url: string | null;
  cta_label: string | null;
  created_at: string;
  metadata?: Record<string, unknown> | null;
};

const countBy = (
  rows: Array<Record<string, unknown>>,
  pick: string | ((row: Record<string, unknown>) => string | null | undefined),
) => {
  const counts = new Map<string, number>();

  for (const row of rows) {
    const raw = typeof pick === "string" ? row[pick] : pick(row);
    const value = String(raw || "unknown");
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

    const [{ data, error }, { count: advertiserCount, error: advertiserError }] = await Promise.all([
      supabase
        .from("party_wreckers_funnel_events")
        .select("event_name, source_path, destination_url, cta_label, created_at, metadata")
        .gte("created_at", since)
        .order("created_at", { ascending: false })
        .limit(5000),
      supabase
        .from("party_wreckers_advertiser_inquiries")
        .select("id", { count: "exact", head: true })
        .gte("created_at", since),
    ]);

    if (error) throw error;
    if (advertiserError) throw advertiserError;

    const rows = (data || []) as EventRow[];
    const getAnswers = rows.filter((row) => row.event_name === "get_answers_now_click").length;
    const readiness = rows.filter((row) => row.event_name === "intervention_readiness_click").length;
    const familySquares = rows.filter((row) => row.event_name === "family_squares_click").length;
    const advertiserClicks = rows.filter((row) => row.event_name === "advertiser_inquiry_click").length;
    const advertiserStarts = rows.filter((row) => row.event_name === "advertiser_inquiry_start").length;
    const packageClicks = rows.filter((row) => row.event_name === "advertiser_package_click").length;
    const emailClicks = rows.filter((row) => row.event_name === "advertiser_email_click").length;

    const listenerLeadEvents = rows.filter((row) =>
      ["family_squares_click", "get_answers_now_click", "intervention_readiness_click", "freedom_bridge_click"].includes(
        row.event_name || "",
      ),
    );
    const advertiserEvents = rows.filter((row) =>
      ["advertiser_package_click", "advertiser_inquiry_start", "advertiser_inquiry_click", "advertiser_email_click"].includes(
        row.event_name || "",
      ),
    );
    const pickPackage = (row: Record<string, unknown>) => {
      const metadata = (row.metadata as Record<string, unknown> | null) || {};
      return (metadata.package_type as string | undefined) || (row.cta_label as string | null);
    };

    return new Response(
      JSON.stringify({
        window_days: 30,
        totals: {
          events: rows.length,
          family_squares_clicks: familySquares,
          get_answers_now_clicks: getAnswers,
          intervention_readiness_clicks: readiness,
          advertiser_inquiry_clicks: advertiserClicks,
          advertiser_inquiry_starts: advertiserStarts,
          advertiser_package_clicks: packageClicks,
          advertiser_email_clicks: emailClicks,
          advertiser_inquiries: advertiserCount || 0,
          revenue_intent_clicks: getAnswers + readiness + advertiserClicks + packageClicks + emailClicks,
        },
        by_event: countBy(rows, "event_name"),
        top_pages: countBy(rows, "source_path"),
        top_destinations: countBy(rows, "destination_url"),
        listener_lead_pages: countBy(listenerLeadEvents as unknown as Array<Record<string, unknown>>, "source_path"),
        listener_lead_destinations: countBy(listenerLeadEvents as unknown as Array<Record<string, unknown>>, "destination_url"),
        advertiser_pages: countBy(advertiserEvents as unknown as Array<Record<string, unknown>>, "source_path"),
        sponsor_package_interest: countBy(advertiserEvents as unknown as Array<Record<string, unknown>>, pickPackage),
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
