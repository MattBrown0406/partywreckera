import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

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
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mb-6">
            READY TO <span className="text-gradient-primary">WRECK</span>?
          </h2>
          
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Let's turn your next event into something extraordinary. 
            Get in touch and let the party planning begin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8 border-t border-border">
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span>(123) 456-7890</span>
            </a>
            <a 
              href="mailto:hello@partywreckers.com" 
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span>hello@partywreckers.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
