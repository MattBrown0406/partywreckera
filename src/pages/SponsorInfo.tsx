import AeoAnswerBlock from "@/components/AeoAnswerBlock";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { BreadcrumbJsonLd, FAQJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { coreFaqs, primaryAeoAnswers } from "@/lib/aeoContent";
import { trackPartyWreckersEvent } from "@/lib/funnelTracking";
import { sponsorPackages } from "@/lib/sponsorPackages";
import { BarChart3, Megaphone, ShieldCheck, Target } from "lucide-react";
import { Link } from "react-router-dom";

const sponsorFit = [
  "Treatment-adjacent services with ethical intake standards",
  "Recovery-friendly products, events, books, and communities",
  "Mental health, wellness, coaching, and family support brands",
  "Local or national brands that want trust-based podcast placement",
];

const SponsorInfo = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Sponsor Information | Party Wreckers Podcast"
      description="Sponsor information for ethical brands interested in reaching Party Wreckers listeners through podcast, website, newsletter, and article placements."
      canonical="/sponsor-info"
      keywords="Party Wreckers sponsor information, addiction podcast sponsorship, recovery podcast advertising, sponsor podcast family recovery"
    />
    <FAQJsonLd faqs={coreFaqs.sponsorInfo} />
    <WebPageJsonLd
      name="Sponsor Information"
      description="A sponsor overview for brands interested in Party Wreckers podcast and website placements."
      url="https://partywreckers.com/sponsor-info"
      about={["Podcast Sponsorship", "Recovery Advertising", "Family Recovery Audience", "Sponsor Inventory"]}
    />
    <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Sponsor Information", url: "/sponsor-info" }]} />

    <Navbar />

    <main className="pt-20">
      <section className="bg-gradient-hero py-14 sm:py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Sponsor source page</p>
            <h1 className="font-script text-5xl text-burgundy sm:text-6xl">Sponsor Information</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              A concise overview for brands, media buyers, and answer engines evaluating whether Party Wreckers is a fit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <AeoAnswerBlock content={primaryAeoAnswers.sponsorInfo} />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-12">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            <Card className="border-border bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Audience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Listeners are often families and professionals in high-intent moments around addiction, treatment, boundaries, and recovery decisions.</p>
              </CardContent>
            </Card>
            <Card className="border-border bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Megaphone className="h-5 w-5 text-primary" />
                  Inventory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Packages can include host-read ads, show-note links, website placements, sponsor directory exposure, and article-aligned mentions.</p>
              </CardContent>
            </Card>
            <Card className="border-border bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Reporting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Sponsor impressions, clicks, inquiry starts, page performance, and package interest can be reported from the sponsor dashboard.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="font-script text-4xl text-burgundy sm:text-5xl">Best-fit sponsors</h2>
              <p className="mt-4 text-muted-foreground">Sponsor trust is part of the product. This site should accept advertisers that belong in the room with families making serious decisions.</p>
              <div className="mt-6 space-y-3">
                {sponsorFit.map((fit) => (
                  <div key={fit} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-primary" />
                    <p className="text-sm text-foreground">{fit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {sponsorPackages.map((item) => (
                <Card key={item.name} className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between gap-4 text-xl">
                      <span>{item.name}</span>
                      <span className="text-base font-semibold text-primary">{item.price}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{item.fit}</p>
                    <p className="text-sm font-medium text-foreground">{item.inventory}</p>
                    <Button variant="outline" asChild onClick={() => trackPartyWreckersEvent({ eventName: "advertiser_package_click", ctaLabel: `Sponsor info ${item.name}`, metadata: { package_type: item.event } })}>
                      <Link to="/advertise">Request Availability</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
              <Button asChild>
                <TrackedExternalLink href="/party-wreckers-media-kit.pdf" eventName="advertiser_package_click" ctaLabel="Sponsor info media kit download" download>
                  Download Media Kit
                </TrackedExternalLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={coreFaqs.sponsorInfo} />
    </main>

    <Footer />
  </div>
);

export default SponsorInfo;
