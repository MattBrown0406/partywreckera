import { Check, ExternalLink } from "lucide-react";
import FamilyCarousel from "@/components/FamilyCarousel";
import iocLogo from "@/assets/ioc-logo.jpg";
import { Button } from "@/components/ui/button";

const features = [
  "New episodes every week",
  "Available on all major platforms",
  "Free family support groups via Zoom",
  "Professional intervention guidance",
  "Expert guests from recovery industry",
  "Real stories, real hope",
  "Enabling vs. supporting explained",
  "Boundary-setting strategies",
  "Treatment program guidance",
  "Relapse prevention insights",
  "Family recovery planning",
  "Case-based learning",
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-script text-6xl sm:text-7xl text-burgundy mb-6 text-center">
              About the Show
            </h2>
            
            <p className="text-muted-foreground text-lg mb-4">
              The Party Wreckers Podcast is a weekly show for families, loved ones, and professionals who are tired of watching addiction destroy lives and relationships. Hosted by an experienced interventionist with more than two decades in the field, the podcast breaks down complex topics like enabling, boundaries, relapse, treatment programs, and recovery planning into clear, practical conversations. Each episode blends real-world intervention experience, storytelling, and education to help listeners understand addiction as a medical disease with a spiritual solution—while also showing them what to do next, not just what to think or feel about it.
            </p>
            
            <p className="text-muted-foreground text-lg mb-8">
              The Party Wreckers Podcast is designed as a reliable guide for anyone who feels stuck between loving someone with a substance use disorder and not knowing how to help. Through solo episodes, interviews with treatment and recovery experts, and case-based insights from hundreds of interventions, the show gives families language, tools, and step-by-step strategies they can use immediately. Listeners come away with a deeper understanding of support versus enabling, how to set and hold healthy boundaries, and how to build a long-term recovery plan that includes the whole family—not just the addicted person.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <FamilyCarousel />
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm uppercase tracking-wider shadow-lg glow-primary z-10">
              Top Rated
            </div>
            <a 
              href="https://interventiononcall.com/live-family-friends-zoom/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold text-sm uppercase tracking-wider shadow-lg glow-accent z-10 hover:scale-105 transition-transform"
            >
              Free Support
            </a>
          </div>
        </div>

        {/* Free Support Group CTA */}
        <div className="bg-background border border-border rounded-xl p-8 max-w-2xl mx-auto mt-16 text-center">
          <img 
            src={iocLogo} 
            alt="Intervention on Call" 
            className="w-48 mx-auto mb-4"
          />
          <h3 className="font-script text-3xl text-burgundy mb-3">Free Family Support</h3>
          <p className="text-muted-foreground mb-4">
            Join our free nightly Zoom support groups. Sunday at 8PM PST, 
            Monday-Thursday at 8PM EST.
          </p>
          <Button asChild>
            <a
              href="https://interventiononcall.com/live-family-friends-zoom/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register for Free
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
