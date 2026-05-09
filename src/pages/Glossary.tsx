import Footer from "@/components/Footer";
import { BreadcrumbJsonLd, DefinedTermSetJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { glossaryTerms } from "@/lib/aeoContent";

const Glossary = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Addiction and Recovery Glossary | Party Wreckers"
      description="Plain-language definitions for addiction, intervention, family recovery, treatment, boundaries, enabling, detox, IOP, sober living, and more."
      canonical="/glossary"
      keywords="addiction glossary, recovery terms, intervention definitions, enabling definition, detox definition, IOP meaning"
    />
    <DefinedTermSetJsonLd
      name="Addiction and Recovery Glossary"
      description="Plain-language definitions for addiction, intervention, family recovery, and treatment terms."
      url="https://partywreckers.com/glossary"
      terms={glossaryTerms}
    />
    <WebPageJsonLd
      name="Addiction and Recovery Glossary"
      description="Plain-language addiction, intervention, and recovery definitions for families."
      url="https://partywreckers.com/glossary"
      about={["Addiction", "Recovery", "Intervention", "Treatment", "Family Recovery"]}
    />
    <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Glossary", url: "/glossary" }]} />

    <Navbar />

    <main className="pt-20">
      <section className="bg-gradient-hero py-14 sm:py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Plain-language definitions</p>
            <h1 className="font-script text-5xl text-burgundy sm:text-6xl">Addiction and Recovery Glossary</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              Clear definitions for the words families hear when addiction, treatment, intervention, and recovery become part of everyday life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
            {glossaryTerms.map((item) => (
              <Card key={item.term} className="border-border bg-card">
                <CardContent className="p-5">
                  <dfn className="text-lg font-semibold not-italic text-foreground">{item.term}</dfn>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.definition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Glossary;
