import * as React from "react";
import { useLocation } from "react-router-dom";

import { trackPartyWreckersEvent } from "@/lib/funnelTracking";

interface TrackedExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  ctaLabel: string;
  metadata?: Record<string, string | number | boolean | null | undefined>;
}

const TrackedExternalLink = React.forwardRef<HTMLAnchorElement, TrackedExternalLinkProps>(
  ({ eventName, ctaLabel, metadata, href, onClick, children, ...props }, ref) => {
    const location = useLocation();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      trackPartyWreckersEvent({
        eventName,
        ctaLabel,
        destinationUrl: href,
        sourcePath: `${location.pathname}${location.search}`,
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
