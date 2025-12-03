import { Button } from "@/components/ui/button";
import { Sparkles, Music, PartyPopper } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">The Ultimate Party Experience</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-6">
            <span className="text-foreground">PARTY</span>
            <br />
            <span className="text-gradient-primary">WRECKERS</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We don't just throw parties — we create unforgettable experiences that'll have everyone 
            talking for years. Ready to wreck the night?
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl">
              <PartyPopper className="w-5 h-5" />
              Book Your Party
            </Button>
            <Button variant="heroOutline" size="xl">
              <Music className="w-5 h-5" />
              See Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="text-center">
              <div className="font-display text-4xl sm:text-5xl text-gradient-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Events Wrecked</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl sm:text-5xl text-gradient-accent">50K+</div>
              <div className="text-sm text-muted-foreground mt-1">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl sm:text-5xl text-foreground">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
