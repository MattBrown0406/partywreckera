import { ArrowRight, BarChart3, CheckCircle2, ClipboardList, FileText, Mail, Megaphone, Printer, ShieldCheck, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "@/components/Footer";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sponsorOneSheet, sponsorOutreachTemplates, sponsorProofPackage, sponsorProofPoints, sponsorSalesChecklist } from "@/lib/sponsorSalesKit";
import { advertiserFit, proofPoints, sponsorPackages } from "@/lib/sponsorPackages";

const encodeMailto = (subject: string, body: string) =>
  `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const SponsorKit = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Party Wreckers Sponsor Sales Kit"
      description="A sendable sponsor sales kit for Party Wreckers: audience, sponsor standards, proof points, package options, outreach copy, and reporting story."
      canonical="/sponsor-kit"
      keywords="Party Wreckers sponsor kit, recovery podcast media kit, addiction podcast sponsor one sheet, podcast advertising sales kit"
    />
    <WebPageJsonLd
      name="Party Wreckers Sponsor Sales Kit"
      description="A sponsor sales kit for ethical brands evaluating Party Wreckers podcast and website sponsorships."
      url="https://partywreckers.com/sponsor-kit"
      about={["Podcast Sponsorship", "Sponsor Sales Kit", "Recovery Advertising", "Media Kit"]}
    />
    <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Sponsor Kit", url: "/sponsor-kit" }]} />

    <Navbar />

    <main className="pt-20">
      <section className="border-b border-border bg-gradient-hero py-14 sm:py-20 print:border-0 print:bg-background print:py-8">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 print:hidden">
                <Megaphone className="h-4 w-4 text-primary" />
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Sendable sponsor kit</span>
              </div>
              <h1 className="font-script text-5xl text-burgundy sm:text-6xl">Sponsor The Party Wreckers</h1>
              <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
                A concise sales kit for brands that belong near addiction education, family recovery, intervention, treatment, and serious next-step conversations.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row print:hidden">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/advertise#sponsor-inquiry">
                    Request Availability
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <button type="button" onClick={() => window.print()}>
                    Print One-Sheet
                    <Printer className="h-5 w-5" />
                  </button>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <TrackedExternalLink href="/party-wreckers-media-kit.pdf" eventName="advertiser_package_click" ctaLabel="Sponsor kit PDF download" metadata={{ package_type: "sponsor_kit_pdf_download" }} download>
                    Download PDF
                    <FileText className="h-5 w-5" />
                  </TrackedExternalLink>
                </Button>
              </div>
            </div>

            <Card className="border-border bg-card print:bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Sponsor standard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Party Wreckers should carry sponsors that are useful, ethical, and relevant to families or professionals navigating addiction and recovery.
                </p>
                <div className="rounded-lg border border-border bg-background p-4">
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">Best fit</p>
                  <p className="mt-2 text-foreground">Clear help, honest claims, practical next steps, and no fear-based pressure.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 print:py-6">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 grid gap-4 md:grid-cols-4">
              {sponsorOneSheet.map((item) => (
                <Card key={item.label} className="border-border bg-card">
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">{item.label}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {proofPoints.map((point) => (
                <div key={point.label} className="rounded-lg border border-border bg-card p-5">
                  <BarChart3 className="mb-3 h-5 w-5 text-primary" />
                  <p className="font-semibold text-foreground">{point.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12 print:break-before-page print:border-0 print:bg-background">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Why this audience matters</p>
              <h2 className="font-script text-4xl text-burgundy sm:text-5xl">This is not passive entertainment traffic.</h2>
              <p className="mt-4 text-muted-foreground">
                Party Wreckers reaches people while they are trying to understand addiction, treatment, family patterns, intervention readiness, and what comes next. That makes sponsor relevance more valuable than generic reach.
              </p>
            </div>
            <div className="grid gap-3">
              {sponsorProofPoints.map((point) => (
                <div key={point} className="flex gap-3 rounded-lg border border-border bg-background p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <p className="text-sm leading-relaxed text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 print:break-before-page">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Advertiser proof package</p>
              <h2 className="font-script text-4xl text-burgundy sm:text-5xl">Sponsors should leave with a report, not a hunch.</h2>
              <p className="mt-4 text-muted-foreground">
                The sponsor product is stronger when every package includes a clear recap of what ran, where it ran, what people clicked, and what should happen next.
              </p>
              <Button className="mt-6 print:hidden" variant="outline" asChild>
                <Link to="/funnel-report">
                  Open Owner Report
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-3">
              {sponsorProofPackage.map((item, index) => (
                <div key={item.label} className="rounded-lg border border-border bg-card p-4">
                  <div className="flex gap-3">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 print:break-before-page">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Packages</p>
                <h2 className="font-script text-4xl text-burgundy sm:text-5xl">Simple packages that can be shaped around fit.</h2>
              </div>
              <p className="text-muted-foreground">
                These are starting points for sponsor conversations. Availability should be based on timing, category conflicts, sponsor quality, and what placement would actually help the audience.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {sponsorPackages.map((sponsorPackage) => (
                <Card key={sponsorPackage.name} className="border-border bg-card">
                  <CardHeader>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Target className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase text-muted-foreground">
                        {sponsorPackage.price}
                      </span>
                    </div>
                    <CardTitle className="text-2xl">{sponsorPackage.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{sponsorPackage.fit}</p>
                    <p className="mt-4 rounded-lg border border-border bg-background p-3 text-sm text-foreground">
                      <span className="font-semibold">Best for:</span> {sponsorPackage.bestFor}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {sponsorPackage.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12 print:hidden">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Outreach copy</p>
              <h2 className="font-script text-4xl text-burgundy sm:text-5xl">Use these to start the conversation.</h2>
              <p className="mt-4 text-muted-foreground">
                These are intentionally short. The goal is to get the right sponsor to the kit, confirm fit, and move the prospect into the owner report.
              </p>
            </div>
            <div className="grid gap-4">
              {sponsorOutreachTemplates.map((template) => (
                <Card key={template.label} className="border-border bg-background">
                  <CardContent className="p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{template.label}</p>
                        <p className="mt-1 text-sm text-primary">{template.subject}</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={encodeMailto(template.subject, template.body)}>
                          <Mail className="h-4 w-4" />
                          Open Email
                        </a>
                      </Button>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{template.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 print:py-6">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Sales process</p>
              <h2 className="font-script text-4xl text-burgundy sm:text-5xl">Move every prospect toward a next action.</h2>
              <div className="mt-6 space-y-3">
                {sponsorSalesChecklist.map((item, index) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-primary/20 bg-primary/10">
              <CardContent className="p-6">
                <ClipboardList className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Best-fit sponsor categories</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {advertiserFit.map((item) => (
                    <div key={item} className="flex gap-2 rounded-lg border border-border bg-background p-3">
                      <Users className="mt-0.5 h-4 w-4 flex-none text-primary" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row print:hidden">
                  <Button asChild>
                    <Link to="/advertise#sponsor-inquiry">Request Availability</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/advertise/packages">View Package Page</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default SponsorKit;
