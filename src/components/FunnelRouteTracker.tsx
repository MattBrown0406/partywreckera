import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { trackPartyWreckersEvent } from "@/lib/funnelTracking";

const FunnelRouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPartyWreckersEvent({
      eventName: "party_wreckers_arrival",
      ctaLabel: "Page view",
      sourcePath: `${location.pathname}${location.search}`,
      metadata: {
        route: location.pathname,
      },
    });
  }, [location.pathname, location.search]);

  return null;
};

export default FunnelRouteTracker;
