import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import iocLogo from "@/assets/ioc-logo.jpg";

const platforms = [
  { name: "Spotify", url: "https://open.spotify.com/show/your-show-id" },
  { name: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/your-show" },
  { name: "YouTube", url: "https://youtube.com/@partywreckers" },
  { name: "Buzzsprout", url: "https://www.buzzsprout.com/1941777" },
];

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="contact">
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
            Subscribe wherever you listen to podcasts. New episodes drop weekly 
            with real conversations and practical guidance.
          </p>

          {/* Platform buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary border border-border text-foreground font-medium hover:bg-secondary/80 hover:border-primary/50 transition-all duration-300"
              >
                {platform.name}
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/episodes">
                All Episodes
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Free Support Group CTA */}
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto mb-12">
            <img 
              src={iocLogo} 
              alt="Intervention on Call" 
              className="w-48 mx-auto mb-4"
            />
            <h3 className="font-script text-3xl text-foreground mb-3">Free Family Support</h3>
            <p className="text-muted-foreground mb-4">
              Join our free nightly Zoom support groups. Sunday at 8PM PST, 
              Monday-Thursday at 8PM EST.
            </p>
            <a
              href="https://interventiononcall.com/live-family-friends-zoom/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Register for Free
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8 border-t border-border">
            <a 
              href="mailto:matt@partywreckers.com" 
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span>matt@partywreckers.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
