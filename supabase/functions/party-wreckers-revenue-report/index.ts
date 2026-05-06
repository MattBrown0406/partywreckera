import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-report-secret",
};

type EventRow = {
  event_name: string | null;
  source_path: string | null;
  destination_url: string | null;
  cta_label: string | null;
  created_at: string;
  metadata: Record<string, unknown> | null;
};

const REVENUE_INTENT_EVENTS = new Set([
  "get_answers_now_click",
  "intervention_readiness_click",
  "advertiser_inquiry_click",
  "family_squares_click",
  "sober_helpline_click",
  "family_bridge_click",
  "freedom_interventions_click",
  "consultation_click",
  "assessment_click",
  "phone_click",
  "phone_intent",
]);

const READINESS_EVENTS = new Set([
  "intervention_readiness_click",
  "readiness_click",
  "intervention_cta_click",
]);

const countBy = (
  rows: Array<Record<string, unknown>>,
  pick: (row: Record<string, unknown>) => string | null | undefined,
) => {
  const counts = new Map<string, number>();
  for (const row of rows) {
    const raw = pick(row);
    if (!raw) continue;
    const value = String(raw);
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
    const expectedSecret = Deno.env.get("PARTY_WRECKERS_REVENUE_SECRET");
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
    const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

    const [{ data: eventData, error: eventError }, { count: advertiserCount, error: advError }] =
      await Promise.all([
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

    if (eventError) throw eventError;
    if (advError) throw advError;

    const rows = (eventData || []) as EventRow[];

    const pageViews = rows.filter((r) => r.event_name === "page_view").length;
    const revenueIntent = rows.filter((r) =>
      r.event_name ? REVENUE_INTENT_EVENTS.has(r.event_name) : false,
    ).length;
    const readiness = rows.filter((r) =>
      r.event_name ? READINESS_EVENTS.has(r.event_name) : false,
    ).length;

    const pickPage = (row: Record<string, unknown>) => {
      const meta = (row.metadata as Record<string, unknown> | null) || {};
      return (
        (row.source_path as string | null) ||
        (meta.page_path as string | undefined) ||
        (meta.page as string | undefined) ||
        (meta.location as string | undefined) ||
        null
      );
    };

    const pickDestination = (row: Record<string, unknown>) => {
      const meta = (row.metadata as Record<string, unknown> | null) || {};
      return (
        (row.destination_url as string | null) ||
        (row.cta_label as string | null) ||
        (meta.destination as string | undefined) ||
        (meta.cta as string | undefined) ||
        (meta.offer as string | undefined) ||
        null
      );
    };

    const latest = rows.slice(0, 25).map((r) => ({
      event_name: r.event_name,
      page_path: pickPage(r as unknown as Record<string, unknown>),
      destination: pickDestination(r as unknown as Record<string, unknown>),
      created_at: r.created_at,
    }));

    return new Response(
      JSON.stringify({
        window_days: 30,
        totals: {
          events: rows.length,
          page_views: pageViews,
          revenue_intent_clicks: revenueIntent,
          consultation_requests: 0,
          intervention_readiness_clicks: readiness,
          advertiser_inquiries: advertiserCount || 0,
          registrations: 0,
        },
        by_event: countBy(rows as unknown as Array<Record<string, unknown>>, (r) => r.event_name as string | null),
        top_pages: countBy(rows as unknown as Array<Record<string, unknown>>, pickPage),
        top_destinations: countBy(rows as unknown as Array<Record<string, unknown>>, pickDestination),
        latest_events: latest,
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
