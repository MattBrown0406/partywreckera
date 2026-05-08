import { ArrowRight, CalendarCheck, ShieldAlert, Users } from "lucide-react";
import { Link } from "react-router-dom";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { Button } from "@/components/ui/button";
import { funnelLinks } from "@/lib/funnelLinks";

type EpisodeFunnelPanelProps = {
  tone?: "support" | "direct" | "readiness";
};

const panelCopy = {
  support: {
    icon: Users,
    eyebrow: "Need a steadier room?",
    title: "Join the free Family Squares support meeting.",
    body: "If the episode hit close to home, bring the situation into a free Monday support meeting instead of carrying it alone.",
    primary: "Join Family Squares",
    eventName: "family_squares_click",
    ctaLabel: "Episodes Family Squares panel",
    href: funnelLinks.familySquares,
  },
  direct: {
    icon: ShieldAlert,
    eyebrow: "Need answers now?",
    title: "Get direct guidance before the next family blowup.",
    body: "When the risk is rising or the family is divided, move from listening to a clearer professional next step.",
    primary: "Get Answers Now",
    eventName: "get_answers_now_click",
    ctaLabel: "Episodes Get Answers Now panel",
    href: funnelLinks.freedomContact,
  },
  readiness: {
    icon: CalendarCheck,
    eyebrow: "Intervention question?",
    title: "Check whether your family is getting close to intervention territory.",
    body: "Use the readiness path when conversations keep repeating and the family needs a more organized plan.",
    primary: "Check Readiness",
    eventName: "intervention_readiness_click",
    ctaLabel: "Episodes Readiness panel",
    href: funnelLinks.freedomReadiness,
  },
};

const EpisodeFunnelPanel = ({ tone = "support" }: EpisodeFunnelPanelProps) => {
  const copy = panelCopy[tone];
  const Icon = copy.icon;

  return (
    <aside className="rounded-lg border border-primary/25 bg-gradient-to-br from-primary/12 via-card to-card p-5">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex gap-4">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-primary">{copy.eyebrow}</p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">{copy.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy.body}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
          <Button asChild>
            <TrackedExternalLink
              href={copy.href}
              target="_blank"
              rel="noopener noreferrer"
              eventName={copy.eventName}
              ctaLabel={copy.ctaLabel}
            >
              {copy.primary}
            </TrackedExternalLink>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/from-party-wreckers">
              Listener Path
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default EpisodeFunnelPanel;
