import { useState } from "react";
import { BarChart3, Lock, RefreshCw } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

interface FunnelReportData {
  totals: Record<string, number>;
  by_event: Array<{ name: string; count: number }>;
  top_pages: Array<{ name: string; count: number }>;
  top_destinations: Array<{ name: string; count: number }>;
  listener_lead_pages?: Array<{ name: string; count: number }>;
  listener_lead_destinations?: Array<{ name: string; count: number }>;
  advertiser_pages?: Array<{ name: string; count: number }>;
  sponsor_package_interest?: Array<{ name: string; count: number }>;
  latest_events: Array<Record<string, string | null>>;
}

const reportTokenKey = "party_wreckers_report_secret";

const FunnelReport = () => {
  const [secret, setSecret] = useState(() =>
    typeof window === "undefined" ? "" : window.localStorage.getItem(reportTokenKey) || "",
  );
  const [data, setData] = useState<FunnelReportData | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const loadReport = async () => {
    setStatus("loading");
    if (typeof window !== "undefined") {
      window.localStorage.setItem(reportTokenKey, secret);
    }

    const { data: report, error } = await supabase.functions.invoke("party-wreckers-funnel-report", {
      headers: {
        "x-report-secret": secret,
      },
    });

    if (error) {
      setStatus("error");
      return;
    }

    setData(report as FunnelReportData);
    setStatus("idle");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Party Wreckers Funnel Report"
        description="Owner-only Party Wreckers funnel report."
        canonical="/funnel-report"
        noIndex
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <section className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 mb-4">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-sm uppercase tracking-widest text-muted-foreground">Owner report</span>
                </div>
                <h1 className="font-script text-4xl sm:text-5xl text-burgundy">Party Wreckers Funnel Report</h1>
                <p className="text-muted-foreground mt-2">Last 30 days of listener paths, sponsor intent, and revenue-intent clicks.</p>
              </div>

              <div className="flex gap-2">
                <Input
                  type="password"
                  placeholder="Report secret"
                  value={secret}
                  onChange={(event) => setSecret(event.target.value)}
                  className="w-52"
                />
                <Button onClick={loadReport} disabled={status === "loading" || !secret}>
                  {status === "loading" ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
                  Load
                </Button>
              </div>
            </div>

            {status === "error" && (
              <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive mb-6">
                Could not load the report. Check the report secret and confirm the Lovable backend function is deployed.
              </div>
            )}

            {data ? (
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-5">
                  {Object.entries(data.totals).map(([label, value]) => (
                    <Card key={label} className="border-border bg-card">
                      <CardContent className="p-5">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label.replace(/_/g, " ")}</p>
                        <p className="text-3xl font-semibold text-foreground mt-2">{value}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                  <ReportList title="Events" items={data.by_event} />
                  <ReportList title="Top Pages" items={data.top_pages} />
                  <ReportList title="Top Destinations" items={data.top_destinations} />
                </div>

                <div className="grid gap-6 lg:grid-cols-4">
                  <ReportList title="Listener Lead Pages" items={data.listener_lead_pages || []} />
                  <ReportList title="Listener Destinations" items={data.listener_lead_destinations || []} />
                  <ReportList title="Advertiser Pages" items={data.advertiser_pages || []} />
                  <ReportList title="Package Interest" items={data.sponsor_package_interest || []} />
                </div>
              </div>
            ) : (
              <Card className="border-border bg-card">
                <CardContent className="p-8 text-center text-muted-foreground">
                  Enter the report secret to load Party Wreckers funnel data.
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const ReportList = ({ title, items }: { title: string; items: Array<{ name: string; count: number }> }) => (
  <Card className="border-border bg-card">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        {items.length ? (
          items.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-4 border-b border-border pb-2 last:border-0">
              <span className="text-sm text-muted-foreground truncate">{item.name}</span>
              <span className="font-semibold text-foreground">{item.count}</span>
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No data yet.</p>
        )}
      </div>
    </CardContent>
  </Card>
);

export default FunnelReport;
