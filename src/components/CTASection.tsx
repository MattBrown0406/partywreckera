import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const platforms = [
  { name: "Spotify", url: "#" },
  { name: "Apple Podcasts", url: "#" },
  { name: "YouTube", url: "#" },
  { name: "Google Podcasts", url: "#" },
];

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />

      <div className="container px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-script text-5xl sm:text-6xl text-foreground mb-6">
            Start Listening
          </h2>
          
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Don't miss an episode. Subscribe wherever you listen to podcasts 
            and join the party.
          </p>

          {/* Platform buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                className="px-6 py-3 rounded-lg bg-secondary border border-border text-foreground font-medium hover:bg-secondary/80 hover:border-primary/50 transition-all duration-300"
              >
                {platform.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl">
              Subscribe Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8 border-t border-border">
            <a 
              href="mailto:hello@partywreckerspodcast.com" 
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span>hello@partywreckerspodcast.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
