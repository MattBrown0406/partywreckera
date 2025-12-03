import { Music, Sparkles, Users, Camera, Mic2, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Music,
    title: "DJ & Live Music",
    description: "World-class DJs and live performers that keep the energy high all night long.",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Effects",
    description: "Stunning visual displays with lasers, LED walls, and custom light shows.",
  },
  {
    icon: Users,
    title: "Event Planning",
    description: "Full-service event coordination from concept to cleanup.",
  },
  {
    icon: Sparkles,
    title: "Decor & Themes",
    description: "Transform any venue into an immersive experience with custom décor.",
  },
  {
    icon: Camera,
    title: "Photo & Video",
    description: "Professional coverage to capture every epic moment of your event.",
  },
  {
    icon: Mic2,
    title: "MC & Entertainment",
    description: "Engaging hosts and performers to keep your guests entertained.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mb-4">
            WHAT WE <span className="text-gradient-primary">BRING</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to create an unforgettable celebration, all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {service.description}
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
