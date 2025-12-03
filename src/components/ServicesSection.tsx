import { Mic2, Users, Laugh, MessageCircle, Star, Radio } from "lucide-react";

const features = [
  {
    icon: Mic2,
    title: "Raw Conversations",
    description: "Unscripted, authentic discussions that go deep and keep it real.",
  },
  {
    icon: Users,
    title: "Amazing Guests",
    description: "From comedians to entrepreneurs, we bring the most interesting voices.",
  },
  {
    icon: Laugh,
    title: "Wild Stories",
    description: "Laugh-out-loud moments and unforgettable tales from every walk of life.",
  },
  {
    icon: MessageCircle,
    title: "Listener Q&A",
    description: "Your questions answered and your stories featured on the show.",
  },
  {
    icon: Star,
    title: "Weekly Episodes",
    description: "Fresh content every week to keep the party going strong.",
  },
  {
    icon: Radio,
    title: "Available Everywhere",
    description: "Listen on Spotify, Apple Podcasts, YouTube, and more.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl sm:text-6xl text-foreground mb-4">
            What to Expect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every episode brings something new. Here's what makes The Party Wreckers special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-script text-2xl text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
