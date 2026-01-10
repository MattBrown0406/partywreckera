import { Check, ExternalLink, Video, Users, BookOpen, Phone, Zap } from "lucide-react";
import BlogCarousel from "@/components/BlogCarousel";
import iocLogo from "@/assets/ioc-logo.jpg";
import soberHelplineLogo from "@/assets/sober-helpline-logo.png";
import { Button } from "@/components/ui/button";

const features = [
  { text: "New episodes every week", link: null },
  { text: "Available on all major platforms", link: null },
  { text: "Free family support groups via Zoom", link: "https://interventiononcall.com/live-family-friends-zoom/" },
  { text: "Professional intervention guidance", link: null },
  { text: "Expert guests from recovery industry", link: null },
  { text: "Real stories, real hope", link: null },
  { text: "Enabling vs. supporting explained", link: null },
  { text: "Boundary-setting strategies", link: null },
  { text: "Treatment program guidance", link: null },
  { text: "Relapse prevention insights", link: null },
  { text: "Family recovery planning", link: null },
  { text: "Case-based learning", link: null },
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
              The Party Wreckers Podcast is a weekly show for families, loved ones, and professionals who are tired of watching addiction destroy lives and relationships. Hosted by an experienced interventionist with more than two decades in the field, the podcast breaks down complex topics like enabling, boundaries, relapse, treatment programs, and recovery planning into clear, practical conversations. Each episode blends real-world intervention experience, storytelling, and education to help listeners understand addiction as a medical disease with a spiritual solution—while also showing them what to do next, not just what to think or feel about it.
            </p>
            
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">
              The Party Wreckers Podcast is designed as a reliable guide for anyone who feels stuck between loving someone with a substance use disorder and not knowing how to help. Through solo episodes, interviews with treatment and recovery experts, and case-based insights from hundreds of interventions, the show gives families language, tools, and step-by-step strategies they can use immediately. Listeners come away with a deeper understanding of support versus enabling, how to set and hold healthy boundaries, and how to build a long-term recovery plan that includes the whole family—not just the addicted person.
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
            <a 
              href="https://interventiononcall.com/live-family-friends-zoom/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-accent text-accent-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg glow-accent z-10 hover:scale-105 transition-transform"
            >
              Free Support
            </a>
          </div>
        </div>

        {/* Support Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10 sm:mt-16">
          {/* Intervention on Call - Dynamic Card */}
          <div className="relative bg-gradient-to-br from-cyan-900/20 via-sky-900/10 to-background border border-cyan-600/30 rounded-xl overflow-hidden group">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-sky-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
            
            {/* Badge */}
            <div className="absolute top-3 right-3 z-10">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-cyan-600 text-cyan-50 text-[10px] font-semibold uppercase tracking-wider">
                <Zap className="w-3 h-3" />
                Free Support
              </span>
            </div>
            
            <div className="relative p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white rounded-lg p-3 shadow-md flex-shrink-0">
                  <img 
                    src={iocLogo} 
                    alt="Intervention on Call" 
                    className="w-28 h-auto"
                  />
                </div>
                <div>
                  <h3 className="font-script text-2xl text-cyan-400">Intervention on Call</h3>
                  <p className="text-xs text-muted-foreground">On-Demand Support • $150/hr</p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">
                Join free nightly Zoom support groups. Connect with families navigating the same journey.
              </p>
              
              {/* Quick features */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-cyan-600/10 border border-cyan-600/20 text-xs text-cyan-400">
                  <Video className="w-3 h-3" />
                  Free Zoom Meetings
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-cyan-600/10 border border-cyan-600/20 text-xs text-cyan-400">
                  <Users className="w-3 h-3" />
                  Family Coaching
                </div>
              </div>
              
              <Button 
                size="sm"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white shadow-md shadow-cyan-600/20"
                asChild
              >
                <a
                  href="https://interventiononcall.com/live-family-friends-zoom/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register for Free
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
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
              
              <p className="text-muted-foreground text-sm mb-4">
                Find treatment resources, assessments, and connect with a community of families supporting each other.
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
                <a
                  href="https://soberhelpline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Sober Helpline
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
