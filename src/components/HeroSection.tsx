import { Button } from "@/components/ui/button";
import { Headphones, Play, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/party-wreckers-logo-2026.png";
import ThemePlayer from "@/components/ThemePlayer";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Theme Player */}
          <div className="mb-6">
            <ThemePlayer />
          </div>

          {/* Logo with H1 for SEO */}
          <div className="mb-8">
            <h1 className="sr-only">The Party Wreckers Podcast - Addiction, Intervention & Recovery</h1>
            <img 
              src={logo} 
              alt="The Party Wreckers Podcast logo featuring bold typography" 
              className="w-full max-w-md mx-auto h-auto"
            />
          </div>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            When addiction crashes the party, families are left picking up the pieces. 
            Join host Matt Brown and leading experts as they cut through the chaos with 
            honest conversations, real strategies, and the hope you need to take the next step.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/episodes">
                <Play className="w-5 h-5" />
                Listen Now
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="mailto:matt@partywreckers.com?subject=Guest%20Inquiry%20-%20The%20Party%20Wreckers%20Podcast">
                <Mail className="w-5 h-5" />
                Want to Be a Guest?
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="text-center">
              <div className="font-script text-3xl sm:text-5xl text-burgundy">60+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider">Episodes</div>
            </div>
            <div className="text-center">
              <div className="font-script text-3xl sm:text-5xl text-burgundy">1000s</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider whitespace-nowrap">Families Helped</div>
            </div>
            <div className="text-center">
              <div className="font-script text-3xl sm:text-5xl text-burgundy">4.9★</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider">Rating</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
