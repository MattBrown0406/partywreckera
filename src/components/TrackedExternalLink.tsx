import * as React from "react";

import { trackPartyWreckersEvent } from "@/lib/funnelTracking";

interface TrackedExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  ctaLabel: string;
  metadata?: Record<string, string | number | boolean | null | undefined>;
}

const TrackedExternalLink = React.forwardRef<HTMLAnchorElement, TrackedExternalLinkProps>(
  ({ eventName, ctaLabel, metadata, href, onClick, children, ...props }, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      const sourcePath =
        typeof window !== "undefined"
          ? `${window.location.pathname}${window.location.search}`
          : undefined;

      trackPartyWreckersEvent({
        eventName,
        ctaLabel,
        destinationUrl: href,
        sourcePath,
        metadata,
      });

      onClick?.(event);
    };

    return (
      <a ref={ref} href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  },
);

TrackedExternalLink.displayName = "TrackedExternalLink";

export default TrackedExternalLink;
