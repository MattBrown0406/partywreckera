import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { BarChart3, CheckCircle, Mail, Megaphone, Radio, ShieldCheck, TrendingUp, Users } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { trackPartyWreckersEvent } from "@/lib/funnelTracking";

const advertiserFit = [
  "Ethical treatment providers",
  "Family support services",
  "Recovery-centered technology",
  "Sober living and continuing care",
  "Books, trainings, and professional education",
  "Brands serving parents, partners, and loved ones",
];

const sponsorPackages = [
  {
    name: "Podcast Mention",
    fit: "A simple host-read mention for a relevant provider, resource, or service.",
    inventory: "Pre-roll or mid-roll mention",
    event: "podcast_mention",
  },
  {
    name: "Episode Sponsor",
    fit: "Own a specific episode topic that aligns with your audience and offer.",
    inventory: "Episode placement plus show-note link",
    event: "episode_sponsor",
  },
  {
    name: "Resource Placement",
    fit: "Show up around articles, episode guides, or family resource pages.",
    inventory: "Site placement with tracked CTA",
    event: "resource_placement",
  },
  {
    name: "Bundle Package",
    fit: "Combine podcast, site, and resource placements into one campaign.",
    inventory: "Podcast plus site plus reportable clicks",
    event: "bundle_package",
  },
];

const audienceSignals = [
  ["High-intent context", "Listeners are often researching treatment, boundaries, intervention, or family support."],
  ["Trusted host voice", "Matt's work across Party Wreckers, Sober Helpline, and Freedom Interventions creates a practical bridge from education to action."],
  ["Reportable actions", "Sponsor interest, package clicks, inquiry submissions, and listener path clicks can be measured in the owner report."],
];

const Advertise = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", packageInterest: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [hasTrackedStart, setHasTrackedStart] = useState(false);

  const trackInquiryStart = () => {
    if (hasTrackedStart) return;
    setHasTrackedStart(true);
    trackPartyWreckersEvent({
      eventName: "advertiser_inquiry_start",
      ctaLabel: "Advertise form started",
    });
  };

  const selectPackage = (packageName: string, event: string) => {
    setForm((current) => ({ ...current, packageInterest: packageName }));
    trackPartyWreckersEvent({
      eventName: "advertiser_package_click",
      ctaLabel: packageName,
      metadata: {
        package_type: event,
      },
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    trackPartyWreckersEvent({
      eventName: "advertiser_inquiry_click",
      ctaLabel: "Advertise form submit",
      metadata: {
        company: form.company,
        package_interest: form.packageInterest,
      },
    });

    const sourcePath = `${window.location.pathname}${window.location.search}`;
    const { error } = await supabase.functions.invoke("send-advertiser-inquiry", {
      body: {
        ...form,
        source_path: sourcePath,
        metadata: {
          source: "party_wreckers_advertise_page",
          package_interest: form.packageInterest,
        },
      },
    });

    const fallbackResult = error ? await supabase.functions.invoke("send-contact-email", {
      body: {
        name: form.name,
        email: form.email,
        message: `Advertiser inquiry\n\nCompany: ${form.company}\n\n${form.message}`,
        metadata: {
          package_interest: form.packageInterest,
        },
      },
    }) : { error: null };

    if (fallbackResult.error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm({ name: "", email: "", company: "", packageInterest: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Advertise on The Party Wreckers Podcast"
        description="Reach families, recovery professionals, and loved ones looking for ethical addiction, intervention, treatment, and family support resources."
        canonical="/advertise"
        keywords="addiction podcast advertising, recovery podcast sponsor, treatment center podcast ads, family recovery advertising"
      />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Advertise", url: "/advertise" }]} />

      <Navbar />

      <main className="pt-20 pb-16">
        <section className="bg-gradient-hero py-14 sm:py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 mb-6">
                <Radio className="w-4 h-4 text-primary" />
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Premium sponsor channel</span>
              </div>
              <h1 className="font-script text-5xl sm:text-6xl text-burgundy mb-6">
                Reach families before they choose their next step.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                The Party Wreckers audience is not casual traffic. They are families, loved ones, and professionals actively looking for better answers around addiction, intervention, and recovery.
              </p>
              <Button
                variant="hero"
                size="xl"
                asChild
                onClick={() =>
                  trackPartyWreckersEvent({
                    eventName: "advertiser_inquiry_start",
                    ctaLabel: "Advertise hero request sponsor info",
                  })
                }
              >
                <a href="#sponsor-inquiry">
                  Request Sponsor Info
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container px-4">
            <div className="grid gap-6 max-w-6xl mx-auto md:grid-cols-3">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Users className="w-5 h-5 text-burgundy" />Audience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Families in active decision moments, recovery professionals, and people who trust Matt's voice because the show is direct and useful.</p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-burgundy" />Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Sponsor fit matters. The show should only carry offers that make sense for families and do not exploit fear or desperation.</p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-burgundy" />Inventory</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Podcast placements, sponsor page features, newsletter mentions, and funnel-aligned referral paths can be packaged together.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 border-y border-border bg-card">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end mb-8">
                <div>
                  <p className="text-sm uppercase font-semibold text-primary mb-2">Sponsor packages</p>
                  <h2 className="font-script text-4xl sm:text-5xl text-burgundy">Simple inventory, clean reporting.</h2>
                </div>
                <p className="text-muted-foreground">
                  Packages can be sold individually or bundled depending on sponsor fit. The goal is useful placement, not clutter.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {sponsorPackages.map((sponsorPackage) => (
                  <Card key={sponsorPackage.name} className="border-border bg-background">
                    <CardHeader>
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Megaphone className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">{sponsorPackage.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{sponsorPackage.fit}</p>
                      <p className="text-xs uppercase tracking-widest text-primary mb-4">{sponsorPackage.inventory}</p>
                      <Button
                        variant={form.packageInterest === sponsorPackage.name ? "default" : "outline"}
                        size="sm"
                        className="w-full"
                        onClick={() => selectPackage(sponsorPackage.name, sponsorPackage.event)}
                      >
                        {form.packageInterest === sponsorPackage.name ? "Selected" : "Ask About This"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto grid gap-4 md:grid-cols-3">
              {audienceSignals.map(([title, body]) => (
                <div key={title} className="rounded-lg border border-border bg-card p-5">
                  <BarChart3 className="w-5 h-5 text-primary mb-3" />
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="text-sm text-muted-foreground mt-2">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4">
            <div className="grid gap-8 max-w-6xl mx-auto lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-lg border border-border bg-secondary/30 p-6">
                <h2 className="font-script text-3xl sm:text-4xl text-burgundy mb-4">Best-fit advertisers</h2>
                <div className="grid gap-3">
                  {advertiserFit.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-background/70 p-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground mb-3">
                    Looking for listener-facing help instead?
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/from-party-wreckers">Go to the Listener Path</Link>
                  </Button>
                </div>
              </div>

              <Card id="sponsor-inquiry" className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="font-script text-3xl text-burgundy">Request sponsor info</CardTitle>
                </CardHeader>
                <CardContent>
                  {status === "success" ? (
                    <div className="rounded-lg border border-primary/30 bg-primary/10 p-6 text-center">
                      <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                      <p className="font-semibold text-foreground">Your inquiry was sent.</p>
                      <p className="text-sm text-muted-foreground mt-1">Matt will have the details and can follow up with sponsor fit and package options.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} onFocus={trackInquiryStart} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Input required placeholder="Your name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
                        <Input required type="email" placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
                      </div>
                      <Input required placeholder="Company or organization" value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} />
                      <Input placeholder="Package interest" value={form.packageInterest} onChange={(event) => setForm({ ...form, packageInterest: event.target.value })} />
                      <Textarea required placeholder="Tell us what you offer and what kind of audience you want to reach." className="min-h-[140px]" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
                      <Button type="submit" disabled={status === "loading"} className="w-full">
                        {status === "loading" ? "Sending..." : "Send Sponsor Inquiry"}
                      </Button>
                      {status === "error" && (
                        <p className="text-sm text-destructive">Something went wrong. Please email matt@partywreckers.com directly.</p>
                      )}
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto rounded-lg border border-primary/20 bg-primary/10 p-6 text-center">
              <p className="text-muted-foreground mb-4">Already know this is a fit?</p>
              <Button variant="outline" asChild>
                <TrackedExternalLink href="mailto:matt@partywreckers.com?subject=Party%20Wreckers%20Sponsor%20Inquiry" eventName="advertiser_email_click" ctaLabel="Advertise direct email">
                  Email Matt Directly
                </TrackedExternalLink>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Advertise;
