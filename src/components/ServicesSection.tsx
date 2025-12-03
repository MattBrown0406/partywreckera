import { Heart, Users, Shield, MessageCircle, Lightbulb, Radio } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Addiction & Recovery",
    description: "Honest discussions about the realities of addiction and the path to lasting recovery.",
  },
  {
    icon: Shield,
    title: "Intervention Strategies",
    description: "Learn proven approaches to help your loved one accept treatment.",
  },
  {
    icon: Users,
    title: "Family Support",
    description: "Guidance for families navigating the challenges of a loved one's addiction.",
  },
  {
    icon: Lightbulb,
    title: "Mental Health",
    description: "Exploring the connection between mental health and substance use disorders.",
  },
  {
    icon: MessageCircle,
    title: "Expert Guests",
    description: "Industry professionals share insights from the front lines of recovery.",
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
            What We Cover
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real talk about the topics that matter most to families dealing with addiction.
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
