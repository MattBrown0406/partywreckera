import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ListenerRevenuePath from "@/components/ListenerRevenuePath";
import SourcePageLinks from "@/components/SourcePageLinks";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, Headphones, ShieldCheck, TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { funnelLinks, openClawPhoneNumbers } from "@/lib/funnelLinks";

const FromPartyWreckers = () => {
  const partyWreckersPhone = openClawPhoneNumbers.partyWreckers;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Start Here from The Party Wreckers Podcast"
        description="A clear next-step page for Party Wreckers listeners whose family needs help with addiction, intervention readiness, or support before Monday."
        canonical="/from-party-wreckers"
        keywords="Party Wreckers family help, addiction podcast next step, intervention readiness, Family Squares"
      />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "From Party Wreckers", url: "/from-party-wreckers" }]} />

      <Navbar />

      <main className="pt-20 pb-16">
        <section className="bg-gradient-hero py-14 sm:py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 mb-6">
                <Headphones className="w-4 h-4 text-primary" />
                <span className="text-sm uppercase tracking-widest text-muted-foreground">For listeners ready to do something</span>
              </div>
              <h1 className="font-script text-5xl sm:text-6xl text-burgundy mb-6">
                You heard the show. Now pick the next move.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                If an episode hit close to home, do not turn that clarity into another week of waiting. Choose the path that fits your family today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <TrackedExternalLink href={funnelLinks.familySquares} target="_blank" rel="noopener noreferrer" eventName="family_squares_click" ctaLabel="Bridge hero Family Squares">
                    <CalendarCheck className="w-5 h-5" />
                    Join Family Squares
                  </TrackedExternalLink>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <TrackedExternalLink href={funnelLinks.freedomContact} target="_blank" rel="noopener noreferrer" eventName="get_answers_now_click" ctaLabel="Bridge hero Get Answers Now">
                    Get Answers Now
                  </TrackedExternalLink>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <TrackedExternalLink href={funnelLinks.freedomReadiness} target="_blank" rel="noopener noreferrer" eventName="intervention_readiness_click" ctaLabel="Bridge hero Intervention Readiness">
                    Check Intervention Readiness
                  </TrackedExternalLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container px-4">
            <div className="grid gap-6 max-w-6xl mx-auto md:grid-cols-3">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><CalendarCheck className="w-5 h-5 text-burgundy" />Start with support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Best when your family needs a room, a rhythm, and a steadier way to stop carrying this alone.</p>
                  <Button className="w-full" asChild>
                    <TrackedExternalLink href={funnelLinks.familySquares} target="_blank" rel="noopener noreferrer" eventName="family_squares_click" ctaLabel="Bridge card Family Squares">Join the Free Meeting</TrackedExternalLink>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><TriangleAlert className="w-5 h-5 text-burgundy" />Get answers now</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Best when Monday feels too far away, the situation is escalating, or the family needs a direct plan.</p>
                  <Button className="w-full" asChild>
                    <TrackedExternalLink href={funnelLinks.freedomContact} target="_blank" rel="noopener noreferrer" eventName="get_answers_now_click" ctaLabel="Bridge card Get Answers Now">Book a Session</TrackedExternalLink>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-burgundy" />Assess readiness</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Best when you are wondering whether this has reached the point where intervention guidance makes sense.</p>
                  <Button className="w-full" asChild>
                    <TrackedExternalLink href={funnelLinks.freedomReadiness} target="_blank" rel="noopener noreferrer" eventName="intervention_readiness_click" ctaLabel="Bridge card Intervention Readiness">Check Readiness</TrackedExternalLink>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <ListenerRevenuePath
          title="Choose based on urgency, not guilt."
          description="This is the revenue bridge from the podcast into the larger family-help funnel: free support, immediate coaching, or intervention readiness."
        />

        <SourcePageLinks
          compact
          sponsor={false}
          title="Still sorting out what this is?"
          description="These short source pages are built for the questions listeners usually ask after an episode sounds too much like home."
        />

        {partyWreckersPhone && (
          <section className="py-8">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto rounded-lg border border-primary/30 bg-primary/10 p-6 text-center">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Prefer to call?</p>
                <Button asChild>
                  <TrackedExternalLink href={`tel:${partyWreckersPhone}`} eventName="openclaw_phone_click" ctaLabel="Party Wreckers bridge phone">
                    Call {partyWreckersPhone}
                  </TrackedExternalLink>
                </Button>
              </div>
            </div>
          </section>
        )}

        <section className="py-12">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto rounded-lg border border-border bg-secondary/30 p-8 text-center">
              <h2 className="font-script text-3xl sm:text-4xl text-burgundy mb-4">Still want to listen first?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                That is okay. The podcast can help you get language for what is happening. Just do not let more information become another hiding place.
              </p>
              <Button variant="outline" asChild>
                <Link to="/episodes">Browse Episodes</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FromPartyWreckers;
