import { ArrowRight, CalendarCheck, ShieldCheck, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { funnelLinks } from "@/lib/funnelLinks";

interface BlogConversionPanelProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

const BlogConversionPanel = ({
  eyebrow = "Turn insight into a next step",
  title = "Do not leave with more clarity and the same paralysis.",
  description = "If your family needs more than an article, choose the next right step: free support, direct guidance, or an intervention-readiness check.",
}: BlogConversionPanelProps) => {
  return (
    <section className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-background to-burgundy/10 p-6 sm:p-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <TriangleAlert className="h-3.5 w-3.5 text-primary" />
        <span>{eyebrow}</span>
      </div>

      <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">{title}</h2>
      <p className="mt-3 max-w-3xl text-muted-foreground">{description}</p>

      <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
        <Button asChild>
          <TrackedExternalLink href={funnelLinks.familySquares} target="_blank" rel="noopener noreferrer" eventName="family_squares_click" ctaLabel="Blog panel Join Family Squares">
            <CalendarCheck className="w-4 h-4" />
            Join Family Squares
          </TrackedExternalLink>
        </Button>
        <Button variant="outline" asChild>
          <TrackedExternalLink href={funnelLinks.freedomContact} target="_blank" rel="noopener noreferrer" eventName="get_answers_now_click" ctaLabel="Blog panel Get Answers Now">
            <ShieldCheck className="w-4 h-4" />
            Get Answers Now
          </TrackedExternalLink>
        </Button>
        <Button variant="ghost" asChild>
          <TrackedExternalLink href={funnelLinks.freedomReadiness} target="_blank" rel="noopener noreferrer" eventName="intervention_readiness_click" ctaLabel="Blog panel Intervention Readiness">
            Check Intervention Readiness
            <ArrowRight className="w-4 h-4" />
          </TrackedExternalLink>
        </Button>
      </div>
    </section>
  );
};

export default BlogConversionPanel;
