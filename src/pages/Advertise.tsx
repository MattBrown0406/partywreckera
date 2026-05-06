import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Mail, Radio, ShieldCheck, TrendingUp, Users } from "lucide-react";

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

const Advertise = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    trackPartyWreckersEvent({
      eventName: "advertiser_inquiry_click",
      ctaLabel: "Advertise form submit",
      metadata: {
        company: form.company,
      },
    });

    const sourcePath = `${window.location.pathname}${window.location.search}`;
    const { error } = await supabase.functions.invoke("send-advertiser-inquiry", {
      body: {
        ...form,
        source_path: sourcePath,
        metadata: {
          source: "party_wreckers_advertise_page",
        },
      },
    });

    const fallbackResult = error ? await supabase.functions.invoke("send-contact-email", {
      body: {
        name: form.name,
        email: form.email,
        message: `Advertiser inquiry\n\nCompany: ${form.company}\n\n${form.message}`,
      },
    }) : { error: null };

    if (fallbackResult.error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm({ name: "", email: "", company: "", message: "" });
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
              <Button variant="hero" size="xl" asChild>
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
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Input required placeholder="Your name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
                        <Input required type="email" placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
                      </div>
                      <Input required placeholder="Company or organization" value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} />
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
                <TrackedExternalLink href="mailto:matt@partywreckers.com?subject=Party%20Wreckers%20Sponsor%20Inquiry" eventName="advertiser_inquiry_click" ctaLabel="Advertise direct email">
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
