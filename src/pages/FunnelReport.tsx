import { useState } from "react";
import { BarChart3, Download, Lock, Printer, RefreshCw, Save } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  sponsor_impressions_by_sponsor?: Array<{ name: string; count: number }>;
  sponsor_clicks_by_sponsor?: Array<{ name: string; count: number }>;
  sponsor_placements?: Array<{ name: string; count: number }>;
  sponsor_pages?: Array<{ name: string; count: number }>;
  latest_events: Array<Record<string, string | null>>;
}

interface SponsorProspect {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string | null;
  message: string | null;
  source_path: string | null;
  status: string;
  metadata: Record<string, unknown> | null;
}

const reportTokenKey = "party_wreckers_report_secret";
const prospectStatuses = ["new", "contacted", "proposal_sent", "negotiating", "sold", "lost"];

const FunnelReport = () => {
  const [secret, setSecret] = useState(() =>
    typeof window === "undefined" ? "" : window.localStorage.getItem(reportTokenKey) || "",
  );
  const [data, setData] = useState<FunnelReportData | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [prospects, setProspects] = useState<SponsorProspect[]>([]);
  const [prospectStatus, setProspectStatus] = useState<"idle" | "loading" | "saving" | "error">("idle");

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

  const loadProspects = async () => {
    setProspectStatus("loading");
    const { data: result, error } = await supabase.functions.invoke("party-wreckers-advertiser-admin", {
      headers: {
        "x-report-secret": secret,
      },
      body: {
        action: "list",
      },
    });

    if (error) {
      setProspectStatus("error");
      return;
    }

    setProspects((result?.prospects || []) as SponsorProspect[]);
    setProspectStatus("idle");
  };

  const updateProspect = (id: string, updates: Partial<SponsorProspect>) => {
    setProspects((current) =>
      current.map((prospect) => (prospect.id === id ? { ...prospect, ...updates } : prospect)),
    );
  };

  const updateProspectMetadata = (id: string, metadataUpdates: Record<string, string>) => {
    setProspects((current) =>
      current.map((prospect) =>
        prospect.id === id
          ? { ...prospect, metadata: { ...(prospect.metadata || {}), ...metadataUpdates } }
          : prospect,
      ),
    );
  };

  const saveProspect = async (prospect: SponsorProspect) => {
    setProspectStatus("saving");
    const { data: result, error } = await supabase.functions.invoke("party-wreckers-advertiser-admin", {
      headers: {
        "x-report-secret": secret,
      },
      body: {
        action: "update",
        id: prospect.id,
        status: prospect.status,
        metadata_patch: {
          sponsor_notes: getMetadataString(prospect.metadata, "sponsor_notes"),
          next_action: getMetadataString(prospect.metadata, "next_action"),
        },
      },
    });

    if (error) {
      setProspectStatus("error");
      return;
    }

    if (result?.prospect) {
      updateProspect(prospect.id, result.prospect as SponsorProspect);
    }
    setProspectStatus("idle");
  };

  const downloadSponsorCsv = () => {
    if (!data) return;
    downloadCsv("party-wreckers-sponsor-report.csv", buildSponsorCsv(data));
  };

  const printSponsorReport = () => {
    if (!data || typeof window === "undefined") return;
    const printWindow = window.open("", "_blank", "noopener,noreferrer");
    if (!printWindow) return;

    printWindow.document.write(buildSponsorPrintHtml(data));
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const sponsorActionItems = getSponsorActionItems(prospects);

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
                <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-foreground">Sponsor report export</p>
                    <p className="text-sm text-muted-foreground">Create a monthly sponsor summary from the current 30-day report.</p>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Button variant="outline" onClick={downloadSponsorCsv}>
                      <Download className="h-4 w-4" />
                      Export CSV
                    </Button>
                    <Button variant="outline" onClick={printSponsorReport}>
                      <Printer className="h-4 w-4" />
                      Print Summary
                    </Button>
                  </div>
                </div>

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

                <div className="grid gap-6 lg:grid-cols-4">
                  <ReportList title="Sponsor Impressions" items={data.sponsor_impressions_by_sponsor || []} />
                  <ReportList title="Sponsor Clicks" items={data.sponsor_clicks_by_sponsor || []} />
                  <ReportList title="Sponsor Placements" items={data.sponsor_placements || []} />
                  <ReportList title="Sponsor Pages" items={data.sponsor_pages || []} />
                </div>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle>Sponsor Prospects</CardTitle>
                        <p className="mt-1 text-sm text-muted-foreground">Track advertiser inquiries, notes, status, and next actions.</p>
                      </div>
                      <Button variant="outline" onClick={loadProspects} disabled={prospectStatus === "loading" || !secret}>
                        <RefreshCw className={`h-4 w-4 ${prospectStatus === "loading" ? "animate-spin" : ""}`} />
                        Load Prospects
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {prospectStatus === "error" && (
                      <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                        Could not load or save sponsor prospects. Check the report secret and Lovable backend function.
                      </div>
                    )}

                    {prospects.length > 0 && (
                      <div className="mb-5 rounded-lg border border-primary/20 bg-primary/10 p-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="font-semibold text-foreground">Next Sponsor Actions</p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              The hottest sponsor work based on inquiry status and saved next actions.
                            </p>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="rounded-lg border border-border bg-background px-3 py-2">
                              <p className="text-xs uppercase tracking-widest text-muted-foreground">New</p>
                              <p className="text-xl font-semibold text-foreground">{countProspectsByStatus(prospects, "new")}</p>
                            </div>
                            <div className="rounded-lg border border-border bg-background px-3 py-2">
                              <p className="text-xs uppercase tracking-widest text-muted-foreground">Proposal</p>
                              <p className="text-xl font-semibold text-foreground">{countProspectsByStatus(prospects, "proposal_sent")}</p>
                            </div>
                            <div className="rounded-lg border border-border bg-background px-3 py-2">
                              <p className="text-xs uppercase tracking-widest text-muted-foreground">Close</p>
                              <p className="text-xl font-semibold text-foreground">{countProspectsByStatus(prospects, "negotiating")}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 grid gap-3 lg:grid-cols-3">
                          {sponsorActionItems.map((item) => (
                            <div key={item.id} className="rounded-lg border border-border bg-background p-3">
                              <p className="text-sm font-semibold text-foreground">{item.company}</p>
                              <p className="mt-1 text-xs uppercase tracking-widest text-primary">{item.statusLabel}</p>
                              <p className="mt-2 text-sm text-muted-foreground">{item.action}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-4">
                      {prospects.length ? (
                        prospects.map((prospect) => (
                          <SponsorProspectCard
                            key={prospect.id}
                            prospect={prospect}
                            onChange={updateProspect}
                            onMetadataChange={updateProspectMetadata}
                            onSave={saveProspect}
                            isSaving={prospectStatus === "saving"}
                          />
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground">Load prospects to edit sponsor status and notes.</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
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

const SponsorProspectCard = ({
  prospect,
  onChange,
  onMetadataChange,
  onSave,
  isSaving,
}: {
  prospect: SponsorProspect;
  onChange: (id: string, updates: Partial<SponsorProspect>) => void;
  onMetadataChange: (id: string, metadataUpdates: Record<string, string>) => void;
  onSave: (prospect: SponsorProspect) => void;
  isSaving: boolean;
}) => {
  const packageInterest = getMetadataString(prospect.metadata, "package_interest") || "Not provided";
  const inventoryInterest = getMetadataString(prospect.metadata, "inventory_interest") || "Not provided";
  const recommendation = getProspectRecommendation(prospect);

  return (
    <div className="rounded-lg border border-border bg-background p-4">
      <div className="grid gap-4 lg:grid-cols-[1fr_0.7fr]">
        <div>
          <p className="font-semibold text-foreground">{prospect.company || prospect.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {prospect.name} · {prospect.email}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{prospect.message || "No message provided."}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-full border border-border px-3 py-1">Package: {packageInterest}</span>
            <span className="rounded-full border border-border px-3 py-1">Inventory: {inventoryInterest}</span>
            <span className="rounded-full border border-border px-3 py-1">{new Date(prospect.created_at).toLocaleDateString()}</span>
          </div>
          <div className="mt-4 rounded-lg border border-primary/20 bg-primary/10 p-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Suggested next move</p>
            <p className="mt-1 text-sm text-foreground">{recommendation}</p>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Status</span>
            <select
              value={prospect.status}
              onChange={(event) => onChange(prospect.id, { status: event.target.value })}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
            >
              {prospectStatuses.map((status) => (
                <option key={status} value={status}>
                  {status.replace(/_/g, " ")}
                </option>
              ))}
            </select>
          </label>
          <Input
            placeholder="Next action"
            value={getMetadataString(prospect.metadata, "next_action")}
            onChange={(event) => onMetadataChange(prospect.id, { next_action: event.target.value })}
          />
          <Textarea
            placeholder="Internal notes"
            value={getMetadataString(prospect.metadata, "sponsor_notes")}
            onChange={(event) => onMetadataChange(prospect.id, { sponsor_notes: event.target.value })}
            className="min-h-[96px]"
          />
          <Button className="w-full" onClick={() => onSave(prospect)} disabled={isSaving}>
            <Save className="h-4 w-4" />
            {isSaving ? "Saving..." : "Save Prospect"}
          </Button>
        </div>
      </div>
    </div>
  );
};

const getMetadataString = (metadata: Record<string, unknown> | null, key: string) => {
  const value = metadata?.[key];
  return typeof value === "string" ? value : "";
};

const downloadCsv = (filename: string, csv: string) => {
  if (typeof window === "undefined") return;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
};

const buildSponsorCsv = (data: FunnelReportData) => {
  const rows: string[][] = [
    ["Section", "Name", "Count"],
    ["Total", "Sponsor impressions", String(data.totals.sponsor_impressions || 0)],
    ["Total", "Sponsor clicks", String(data.totals.sponsor_clicks || 0)],
    ["Total", "Sponsor click through rate", String(data.totals.sponsor_click_through_rate || 0)],
  ];

  appendCsvSection(rows, "Sponsor impressions", data.sponsor_impressions_by_sponsor || []);
  appendCsvSection(rows, "Sponsor clicks", data.sponsor_clicks_by_sponsor || []);
  appendCsvSection(rows, "Sponsor placements", data.sponsor_placements || []);
  appendCsvSection(rows, "Sponsor pages", data.sponsor_pages || []);
  appendCsvSection(rows, "Package interest", data.sponsor_package_interest || []);

  return rows.map((row) => row.map(escapeCsv).join(",")).join("\n");
};

const appendCsvSection = (rows: string[][], section: string, items: Array<{ name: string; count: number }>) => {
  items.forEach((item) => rows.push([section, item.name, String(item.count)]));
};

const escapeCsv = (value: string) => `"${value.replace(/"/g, '""')}"`;

const buildSponsorPrintHtml = (data: FunnelReportData) => {
  const sponsorRows = [
    ["Sponsor Impressions", data.sponsor_impressions_by_sponsor || []],
    ["Sponsor Clicks", data.sponsor_clicks_by_sponsor || []],
    ["Sponsor Placements", data.sponsor_placements || []],
    ["Sponsor Pages", data.sponsor_pages || []],
  ];

  return `
    <!doctype html>
    <html>
      <head>
        <title>Party Wreckers Sponsor Report</title>
        <style>
          body { font-family: Arial, sans-serif; color: #211718; margin: 40px; }
          h1 { color: #7c2633; margin-bottom: 4px; }
          h2 { color: #7c2633; margin-top: 28px; }
          .metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 24px 0; }
          .metric, .section { border: 1px solid #ddd6d0; border-radius: 8px; padding: 14px; }
          .label { color: #746766; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; }
          .value { font-size: 28px; font-weight: 700; margin-top: 4px; }
          table { border-collapse: collapse; width: 100%; margin-top: 10px; }
          td { border-bottom: 1px solid #eee5df; padding: 8px 0; }
          td:last-child { text-align: right; font-weight: 700; }
        </style>
      </head>
      <body>
        <h1>Party Wreckers Sponsor Report</h1>
        <p>Last 30 days of sponsor activity.</p>
        <div class="metrics">
          <div class="metric"><div class="label">Impressions</div><div class="value">${data.totals.sponsor_impressions || 0}</div></div>
          <div class="metric"><div class="label">Clicks</div><div class="value">${data.totals.sponsor_clicks || 0}</div></div>
          <div class="metric"><div class="label">Click Rate</div><div class="value">${data.totals.sponsor_click_through_rate || 0}</div></div>
        </div>
        ${sponsorRows
          .map(
            ([title, items]) => `
              <div class="section">
                <h2>${title}</h2>
                <table>
                  ${(items as Array<{ name: string; count: number }>).length
                    ? (items as Array<{ name: string; count: number }>)
                        .map((item) => `<tr><td>${escapeHtml(item.name)}</td><td>${item.count}</td></tr>`)
                        .join("")
                    : "<tr><td>No data yet.</td><td></td></tr>"}
                </table>
              </div>
            `,
          )
          .join("")}
      </body>
    </html>
  `;
};

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const countProspectsByStatus = (prospects: SponsorProspect[], status: string) =>
  prospects.filter((prospect) => prospect.status === status).length;

const getProspectRecommendation = (prospect: SponsorProspect) => {
  const nextAction = getMetadataString(prospect.metadata, "next_action");
  if (nextAction) return nextAction;

  switch (prospect.status) {
    case "new":
      return "Reply today, confirm sponsor fit, and send the package page if the offer belongs on the show.";
    case "contacted":
      return "Ask which package they want to reserve, then move them toward a proposal.";
    case "proposal_sent":
      return "Follow up with a short close: placement, timing, link destination, and first report date.";
    case "negotiating":
      return "Resolve the open term and turn this into a paid placement.";
    case "sold":
      return "Confirm assets, sponsor link, placement date, and monthly reporting expectations.";
    case "lost":
      return "Leave a note on why it did not fit and whether it is worth revisiting later.";
    default:
      return "Set a specific next action so this prospect does not drift.";
  }
};

const getSponsorActionItems = (prospects: SponsorProspect[]) => {
  const priority = new Map([
    ["negotiating", 0],
    ["proposal_sent", 1],
    ["new", 2],
    ["contacted", 3],
    ["sold", 4],
    ["lost", 5],
  ]);

  return [...prospects]
    .sort((a, b) => {
      const statusScore = (priority.get(a.status) ?? 9) - (priority.get(b.status) ?? 9);
      if (statusScore !== 0) return statusScore;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    })
    .slice(0, 3)
    .map((prospect) => ({
      id: prospect.id,
      company: prospect.company || prospect.name,
      statusLabel: prospect.status.replace(/_/g, " "),
      action: getProspectRecommendation(prospect),
    }));
};

export default FunnelReport;
