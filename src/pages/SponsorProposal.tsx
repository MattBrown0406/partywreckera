import { ArrowRight, BarChart3, CheckCircle, FileText, Mail, Megaphone, ShieldCheck, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { advertiserFit, proofPoints, proposalSteps, sponsorPackages } from "@/lib/sponsorPackages";

const SponsorProposal = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Party Wreckers Sponsor Packages"
      description="Review Party Wreckers sponsor packages for podcast, website, and recovery resource placements."
      canonical="/advertise/packages"
      keywords="Party Wreckers sponsor packages, recovery podcast sponsorship, addiction podcast advertising"
    />
    <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Advertise", url: "/advertise" }, { name: "Sponsor Packages", url: "/advertise/packages" }]} />

    <Navbar />

    <main className="pt-20 pb-16">
      <section className="border-b border-border bg-gradient-hero py-14 sm:py-20">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2">
                <Megaphone className="h-4 w-4 text-primary" />
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Sponsor proposal</span>
              </div>
              <h1 className="font-script text-5xl text-burgundy sm:text-6xl">Sponsor packages built around trust, timing, and fit.</h1>
              <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
                Party Wreckers gives ethical recovery, treatment, family support, and wellness brands a way to reach people while they are actively thinking about addiction, recovery, boundaries, and what comes next.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/advertise#sponsor-inquiry">
                    Request Availability
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/sponsor-kit">
                    Sponsor Kit
                    <FileText className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <TrackedExternalLink
                    href="/party-wreckers-media-kit.pdf"
                    eventName="advertiser_package_click"
                    ctaLabel="Proposal page media kit download"
                    metadata={{ package_type: "proposal_media_kit_download" }}
                    download
                  >
                    Download Media Kit
                    <FileText className="h-5 w-5" />
                  </TrackedExternalLink>
                </Button>
              </div>
            </div>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Sponsor Standard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The offer is intentionally selective. A sponsor should belong beside addiction education and family recovery content, not simply pay for space.
                </p>
                <div className="rounded-lg border border-border bg-background p-4">
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">Best sponsor fit</p>
                  <p className="mt-2 text-foreground">Clear help, ethical claims, practical next steps, and no fear-based pressure.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 grid gap-4 md:grid-cols-4">
              {proofPoints.map((point) => (
                <div key={point.label} className="rounded-lg border border-border bg-card p-5">
                  <BarChart3 className="mb-3 h-5 w-5 text-primary" />
                  <p className="font-semibold text-foreground">{point.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                </div>
              ))}
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
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
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

      <section className="border-y border-border bg-card py-12">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase text-primary">Who this is for</p>
              <h2 className="font-script text-4xl text-burgundy sm:text-5xl">Good sponsors should feel useful to the audience.</h2>
              <p className="mt-4 text-muted-foreground">
                Party Wreckers should work best for sponsors that offer real help to families, people in recovery, or professionals who serve them.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {advertiserFit.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
                  <Users className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase text-primary">How a sponsor starts</p>
              <h2 className="font-script text-4xl text-burgundy sm:text-5xl">A simple path from interest to report.</h2>
              <div className="mt-6 grid gap-3">
                {proposalSteps.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-lg border border-border bg-card p-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <p className="text-sm text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-primary/20 bg-primary/10">
              <CardContent className="p-6 text-center">
                <Mail className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="font-script text-3xl text-burgundy">Ready to check availability?</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Send the sponsor inquiry with the package that looks closest. Availability can be shaped around fit, timing, and the sponsor's goal.
                </p>
                <Button className="mt-6" asChild>
                  <Link to="/advertise#sponsor-inquiry">Request Sponsor Availability</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default SponsorProposal;
