import { Check, ExternalLink, Users, BookOpen, Phone, ShieldAlert, MessageCircle } from "lucide-react";
import BlogCarousel from "@/components/BlogCarousel";
import soberHelplineLogo from "@/assets/sober-helpline-logo.png";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { Button } from "@/components/ui/button";
import { funnelLinks } from "@/lib/funnelLinks";

const features = [
  { text: "Straight talk about addiction and family systems", link: null },
  { text: "Clear guidance on helping vs. enabling", link: null },
  { text: "Boundaries that actually hold under pressure", link: null },
  { text: "Practical intervention and treatment insight", link: null },
  { text: "Free weekly family support via Zoom", link: null },
  { text: "Conversations rooted in real intervention work", link: null },
  { text: "New episodes every week", link: null },
  { text: "Available on major podcast platforms", link: null },
  { text: "Expert guests without empty jargon", link: null },
  { text: "Tools families can use right away", link: null },
  { text: "Treatment guidance without the nonsense", link: null },
  { text: "Hope with honesty, not false reassurance", link: null },
];

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-script text-4xl sm:text-5xl lg:text-7xl text-burgundy mb-4 sm:mb-6 text-center lg:text-left">
              About the Show
            </h2>
            
            <p className="text-muted-foreground text-base sm:text-lg mb-4">
              The Party Wreckers Podcast is for families who are exhausted, confused, and tired of having the same conversation over and over while nothing really changes. Hosted by Matt Brown, a professional interventionist with more than twenty years in the field, the show tackles the stuff families actually need help with: enabling, boundaries, treatment options, relapse, fear, denial, and what to do when love alone is not moving the needle.
            </p>
            
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">
              This is not polished recovery fluff. It is honest, practical guidance from someone who has sat in the mess with real families and knows how quickly fear starts running the house. Each episode is built to help people think more clearly, stop reacting to chaos, and take the next right step, whether that means learning, setting firmer boundaries, getting outside support, or finally having the conversation everyone has been avoiding.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {feature.link ? (
                    <a 
                      href={feature.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:underline"
                    >
                      {feature.text}
                    </a>
                  ) : (
                    <span className="text-foreground text-sm">{feature.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative mt-8 lg:mt-0">
            <BlogCarousel />
            
            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-primary text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg glow-primary z-10">
              Top Rated
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-accent text-accent-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg glow-accent z-10">
              Free Support
            </div>
          </div>
        </div>

        {/* Support Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10 sm:mt-16">
          {/* Freedom Interventions Card */}
          <div className="relative bg-gradient-to-br from-primary/20 via-burgundy/10 to-background border border-primary/30 rounded-xl overflow-hidden group">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-burgundy/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
            
            {/* Badge */}
            <div className="absolute top-3 right-3 z-10">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider">
                <ShieldAlert className="w-3 h-3" />
                Urgent Help
              </span>
            </div>
            
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/15 rounded-lg p-3 shadow-md flex-shrink-0">
                  <ShieldAlert className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-script text-2xl text-burgundy">Freedom Interventions</h3>
                  <p className="text-xs text-muted-foreground">Direct guidance when guessing is not enough</p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">
                For families who need professional intervention guidance, a clearer plan, or a calm outside voice before the situation gets worse.
              </p>
              
              {/* Quick features */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary">
                  <ShieldAlert className="w-3 h-3" />
                  Intervention Readiness
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary">
                  <MessageCircle className="w-3 h-3" />
                  Coaching Guidance
                </div>
              </div>
              
              <Button 
                size="sm"
                className="w-full"
                asChild
              >
                <TrackedExternalLink
                  href={funnelLinks.freedomPodcastBridge}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="freedom_bridge_click"
                  ctaLabel="About Freedom Interventions card"
                >
                  Get Intervention Guidance
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </TrackedExternalLink>
              </Button>
            </div>
          </div>

          {/* Sober Helpline - Dynamic Card */}
          <div className="relative bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-background border border-emerald-600/30 rounded-xl overflow-hidden group">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-teal-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>
            
            {/* Badge */}
            <div className="absolute top-3 right-3 z-10">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-600 text-emerald-50 text-[10px] font-semibold uppercase tracking-wider">
                <BookOpen className="w-3 h-3" />
                Education
              </span>
            </div>
            
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white rounded-lg p-3 shadow-md flex-shrink-0">
                  <img 
                    src={soberHelplineLogo} 
                    alt="Sober Helpline" 
                    className="w-28 h-auto"
                  />
                </div>
                <div>
                  <h3 className="font-script text-2xl text-emerald-400">Sober Helpline</h3>
                  <p className="text-xs text-muted-foreground">Addiction Education Resources</p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-2">
                Find treatment education, practical family resources, and a steadier place to start when addiction has everybody spinning.
              </p>
              <p className="text-emerald-400 text-sm font-semibold mb-4">
                🟢 Free Weekly Family Support Zoom Calls — Every Monday
              </p>
              
              {/* Quick features */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-600/10 border border-emerald-600/20 text-xs text-emerald-400">
                  <Users className="w-3 h-3" />
                  Family Forum
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-600/10 border border-emerald-600/20 text-xs text-emerald-400">
                  <Phone className="w-3 h-3" />
                  (541) 241-5886
                </div>
              </div>
              
              <Button 
                size="sm"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20"
                asChild
              >
                <TrackedExternalLink
                  href={funnelLinks.familySquares}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="family_squares_click"
                  ctaLabel="About Sober Helpline card"
                >
                  Join Family Squares
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </TrackedExternalLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
