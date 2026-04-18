import { ArrowRight, Mail, TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

interface BlogConversionPanelProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

const BlogConversionPanel = ({
  eyebrow = "Turn insight into a next step",
  title = "Do not leave with more clarity and the same paralysis.",
  description = "Use Help Now if the house feels urgent, Next Step if you need direction, or email Matt if your family is badly stuck.",
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
          <Link to="/help-now">
            Help Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/next-step">
            Find My Next Step
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <a href="mailto:matt@partywreckers.com?subject=Need%20Help%20With%20Our%20Family">
            <Mail className="w-4 h-4" />
            Email Matt
          </a>
        </Button>
      </div>
    </section>
  );
};

export default BlogConversionPanel;
