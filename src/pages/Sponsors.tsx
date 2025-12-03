import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sponsors = () => {
  return (
    <>
      <Helmet>
        <title>Support Our Sponsors | The Party Wreckers Podcast</title>
        <meta name="description" content="Support the sponsors who make The Party Wreckers Podcast possible. These partners help us continue providing resources for families dealing with addiction." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
          
          <div className="container px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground uppercase tracking-widest">Our Partners</span>
              </div>
              
              <h1 className="font-script text-5xl sm:text-6xl text-foreground mb-6">
                Support Our Sponsors
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground">
                These amazing partners help make The Party Wreckers Podcast possible. 
                By supporting them, you're helping us continue our mission to help families.
              </p>
            </div>
          </div>
        </section>

        {/* Sponsors Content */}
        <section className="py-16 sm:py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              {/* Placeholder for sponsors */}
              <div className="bg-card border border-border rounded-xl p-12 text-center">
                <Heart className="w-16 h-16 text-primary/30 mx-auto mb-6" />
                <h2 className="font-script text-3xl text-foreground mb-4">
                  Sponsors Coming Soon
                </h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  We're currently finalizing partnerships with sponsors who share our mission 
                  to help families dealing with addiction. Check back soon!
                </p>
                <Button variant="hero" asChild>
                  <a href="mailto:matt@partywreckers.com">
                    Become a Sponsor
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>

              {/* Future sponsor cards would go here */}
              {/* Example structure:
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="bg-card border border-border rounded-xl p-8">
                  <img src={sponsorLogo} alt="Sponsor Name" className="h-12 mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Sponsor Name</h3>
                  <p className="text-muted-foreground mb-4">Description of what the sponsor does.</p>
                  <a href="#" className="text-primary hover:underline">Visit Website →</a>
                </div>
              </div>
              */}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Sponsors;