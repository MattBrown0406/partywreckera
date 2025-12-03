import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import iocLogo from "@/assets/ioc-logo.jpg";

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
              {/* IOC Sponsor Card */}
              <div className="bg-card border border-border rounded-xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src={iocLogo} 
                    alt="Intervention on Call" 
                    className="w-64 h-auto"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-script text-3xl text-foreground mb-3">
                    Intervention on Call
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Not everyone needs a professionally led intervention. Sometimes all that's needed 
                    is a change in strategy, language, and perspective.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Intervention on Call offers <span className="text-foreground font-medium">on-demand access</span> to 
                    professional, experienced interventionists for just <span className="text-foreground font-medium">$150 per hour</span>. 
                    Get expert guidance when you need it—no waiting, no long-term commitments.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Whether you need help planning a conversation, understanding treatment options, 
                    or navigating a crisis, their team is ready to help.
                  </p>
                  <a
                    href="https://interventiononcall.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Become a Sponsor CTA */}
              <div className="mt-12 bg-secondary/30 border border-border rounded-xl p-8 text-center">
                <h3 className="font-script text-2xl text-foreground mb-3">
                  Interested in Sponsoring?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Partner with us to reach families who need help navigating addiction and recovery.
                </p>
                <Button variant="hero" asChild>
                  <a href="mailto:matt@partywreckers.com">
                    Become a Sponsor
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Sponsors;