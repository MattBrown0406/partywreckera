import { BarChart3, Mail, Mic2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const advertiserSignals = [
  {
    icon: Users,
    label: "Audience",
    value: "Families navigating addiction, treatment, intervention, and recovery decisions",
  },
  {
    icon: Mic2,
    label: "Topics",
    value: "Alcohol, opioids, boundaries, enabling, treatment, relapse, and family crisis",
  },
  {
    icon: BarChart3,
    label: "Placement",
    value: "Podcast, article, newsletter, and resource-page sponsorship opportunities",
  },
];

const AdvertiserMediaStrip = () => {
  return (
    <section className="border-y border-border bg-card py-12">
      <div className="container px-4">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase text-primary">For advertisers</p>
            <h2 className="font-script text-4xl text-burgundy sm:text-5xl">Reach families at the moment the topic matters.</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Party Wreckers sits where addiction education, family decision-making, and professional help meet. Sponsorships should feel useful, relevant, and aligned with people trying to make better decisions.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link to="/advertise">
                  <Mail className="h-4 w-4" />
                  Sponsor Inquiry
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/sponsors">View Sponsors</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            {advertiserSignals.map((signal) => {
              const Icon = signal.icon;

              return (
                <div key={signal.label} className="rounded-lg border border-border bg-background p-4">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{signal.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{signal.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiserMediaStrip;
