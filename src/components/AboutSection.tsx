import { Check } from "lucide-react";

const features = [
  "Custom event packages tailored to your vision",
  "State-of-the-art sound and lighting equipment",
  "Experienced team with 10+ years in the industry",
  "Available 24/7 for last-minute bookings",
  "Venues of all sizes — from intimate to massive",
  "Transparent pricing with no hidden fees",
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
            <h2 className="font-display text-5xl sm:text-6xl text-foreground mb-6">
              WHY CHOOSE <span className="text-gradient-primary">US?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              At Party Wreckers, we believe every celebration deserves to be legendary. 
              We combine cutting-edge technology with creative vision to deliver events 
              that exceed expectations.
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
                <div className="font-display text-8xl sm:text-9xl text-gradient-primary animate-pulse-glow">
                  10+
                </div>
                <div className="font-display text-3xl text-foreground mt-4">
                  YEARS OF WRECKING
                </div>
                <div className="text-muted-foreground mt-2">
                  parties across the nation
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-display text-lg shadow-lg glow-primary">
              #1 RATED
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-display text-lg shadow-lg glow-accent">
              TRUSTED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
