import { Check } from "lucide-react";

const features = [
  "New episodes every week",
  "Available on all major platforms",
  "Free family support groups via Zoom",
  "Professional intervention guidance",
  "Expert guests from the recovery industry",
  "Real stories, real hope",
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
            <h2 className="font-script text-5xl sm:text-6xl text-foreground mb-6">
              About the Show
            </h2>
            
            <p className="text-muted-foreground text-lg mb-4">
              Matt Brown is a practicing full-time addiction interventionist. 
              He sits down with industry guests to discuss intervention, 
              addiction, and mental health.
            </p>
            
            <p className="text-muted-foreground text-lg mb-8">
              The goal? Entertain, remove the negative stigma around addiction, 
              and help as many families as possible find recovery. If someone 
              you love is struggling, this podcast is for you.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-background border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="font-script text-7xl sm:text-8xl text-primary animate-pulse-glow">
                  Hope
                </div>
                <h4 className="text-2xl text-foreground mt-4 uppercase tracking-widest">
                  Starts Here
                </h4>
                <p className="text-muted-foreground mt-2">
                  You're not alone in this journey
                </p>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm uppercase tracking-wider shadow-lg glow-primary">
              Top Rated
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold text-sm uppercase tracking-wider shadow-lg glow-accent">
              Free Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
