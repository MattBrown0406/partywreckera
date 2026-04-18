import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, FileText, Mail, Mic, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

const pathways = [
  {
    title: "We do not even understand what we are dealing with yet",
    body: "Start with the essential education page. Learn the basics before fear keeps driving the house.",
    to: "/start-here",
    cta: "Start Here",
    icon: BookOpen,
  },
  {
    title: "We need something practical we can do together",
    body: "Use the guided family tools to slow down the chaos and get honest about patterns, fear, and communication.",
    to: "/family-resources",
    cta: "Use Family Resources",
    icon: FileText,
  },
  {
    title: "We need straight talk and context right away",
    body: "Go straight to the podcast if hearing Matt walk through real family dynamics will help you settle and think clearly.",
    to: "/episodes",
    cta: "Listen to Episodes",
    icon: Mic,
  },
  {
    title: "This feels urgent, dangerous, or badly stuck",
    body: "If the situation is escalating or your family keeps collapsing back into the same cycle, contact Matt directly instead of waiting for clarity to magically appear.",
    to: "mailto:matt@partywreckers.com?subject=Need%20Help%20With%20Our%20Next%20Step",
    cta: "Email Matt",
    icon: ShieldAlert,
    external: true,
  },
];

const NextStep = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Next Step | Choose the Best Next Move for Your Family"
        description="A simple decision page for families facing addiction. Choose the best next step based on urgency, confusion, and what kind of support you need right now."
        canonical="/next-step"
        keywords="next step addiction family, what should I do next addiction, family intervention help, addiction guidance for families"
      />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Next Step", url: "/next-step" }]} />

      <Navbar />

      <main className="pt-20 pb-16">
        <section className="py-14 sm:py-20 bg-gradient-hero">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-script text-5xl sm:text-6xl text-burgundy mb-6">What is your next step?</h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                You do not need the whole master plan tonight. You need the next right move for the kind of problem your family is facing right now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/help-now">Back to Help Now</Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/start-here">Start With Basics</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container px-4">
            <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-2">
              {pathways.map((pathway) => {
                const Icon = pathway.icon;
                return (
                  <Card key={pathway.title} className="h-full border-border bg-card">
                    <CardHeader>
                      <CardTitle className="flex items-start gap-3 text-xl">
                        <span className="mt-1 rounded-full bg-primary/10 p-2 text-primary"><Icon className="w-5 h-5" /></span>
                        <span>{pathway.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex h-full flex-col justify-between gap-6">
                      <p className="text-muted-foreground">{pathway.body}</p>
                      <Button variant={pathway.external ? "default" : "outline"} asChild>
                        {pathway.external ? (
                          <a href={pathway.to}>
                            {pathway.cta}
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        ) : (
                          <Link to={pathway.to}>
                            {pathway.cta}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-secondary/30 p-8 sm:p-10 text-center">
              <h2 className="font-script text-3xl sm:text-4xl text-burgundy mb-4">Still unsure?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                If every option feels urgent and none of them feels obvious, that usually means your family needs a calm outside voice. You are allowed to ask for help before this gets worse.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <a href="mailto:matt@partywreckers.com?subject=Need%20Help%20Choosing%20Our%20Next%20Step">
                    <Mail className="w-4 h-4" />
                    Email Matt
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/family-resources">Review Family Resources</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NextStep;
