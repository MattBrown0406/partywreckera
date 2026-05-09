import { BookOpen, ClipboardCheck, HeartHandshake, LifeBuoy, Megaphone, Search } from "lucide-react";
import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";

const sourceLinks = [
  {
    title: "Family Addiction Help",
    body: "Start here when addiction is affecting the home and the family needs the first clear move.",
    href: "/family-addiction-help",
    icon: LifeBuoy,
  },
  {
    title: "Intervention Readiness",
    body: "Use this when the family is wondering whether waiting has become the risk.",
    href: "/intervention-readiness",
    icon: ClipboardCheck,
  },
  {
    title: "Enabling vs Support",
    body: "Clarify whether the current help is supporting recovery or protecting the pattern.",
    href: "/enabling-vs-support",
    icon: HeartHandshake,
  },
  {
    title: "Recovery Resources",
    body: "A clean path through support tools, episodes, articles, and next-step resources.",
    href: "/recovery-resources",
    icon: BookOpen,
  },
  {
    title: "Glossary",
    body: "Plain-language addiction, treatment, intervention, and recovery definitions.",
    href: "/glossary",
    icon: Search,
  },
  {
    title: "Sponsor Information",
    body: "Audience, inventory, and proof for ethical sponsors evaluating the show.",
    href: "/sponsor-info",
    icon: Megaphone,
  },
];

interface SourcePageLinksProps {
  title?: string;
  description?: string;
  sponsor?: boolean;
  compact?: boolean;
}

const SourcePageLinks = ({
  title = "Answer-first guides for families and sponsors",
  description = "These source pages give people and answer engines a clear place to land, then route the right visitor into support, coaching, intervention readiness, or sponsor inquiry.",
  sponsor = true,
  compact = false,
}: SourcePageLinksProps) => {
  const links = sponsor ? sourceLinks : sourceLinks.filter((link) => link.href !== "/sponsor-info");

  return (
    <section className={compact ? "py-10" : "border-y border-border bg-card py-12 sm:py-16"}>
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Source pages</p>
              <h2 className="font-script text-4xl text-burgundy sm:text-5xl">{title}</h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {links.map((item) => {
              const Icon = item.icon;

              return (
                <Link key={item.href} to={item.href} className="group block h-full">
                  <Card className="h-full border-border bg-background transition-all hover:border-primary/40 hover:shadow-md">
                    <CardContent className="p-5">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SourcePageLinks;
