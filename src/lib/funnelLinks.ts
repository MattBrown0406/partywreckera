const partyWreckersTracking =
  "source=party_wreckers&utm_source=party_wreckers&utm_medium=referral&utm_campaign=party_wreckers_funnel";

const withTracking = (href: string, content?: string) => {
  const url = new URL(href);
  const params = new URLSearchParams(partyWreckersTracking);
  params.forEach((value, key) => url.searchParams.set(key, value));
  if (content) url.searchParams.set("utm_content", content);
  return url.toString();
};

export const podcastLinks = {
  apple: "https://podcasts.apple.com/us/podcast/the-party-wreckers/id1611904917",
  spotify: "https://open.spotify.com/show/4YJLvnFuZr5EkcGs9b47fn?si=bde59f5f480c45a2",
  youtube: "https://www.youtube.com/@ThePartyWreckers",
};

export const funnelLinks = {
  partyWreckersBridge: "/from-party-wreckers",
  familySquares: withTracking("https://soberhelpline.com/family-squares", "family_squares"),
  soberHelpline: withTracking("https://soberhelpline.com/start-here", "sober_helpline_start_here"),
  freedomStartHere: withTracking("https://freedominterventions.com/start-here", "freedom_start_here"),
  freedomConsult: withTracking("https://freedominterventions.com/?type=consultation#booking", "freedom_free_consult"),
  freedomPodcastBridge: withTracking("https://freedominterventions.com/party-wreckers-podcast", "freedom_podcast_bridge"),
  freedomReadiness: withTracking("https://freedominterventions.com/intervention-readiness", "freedom_intervention_readiness"),
  freedomContact: withTracking("https://freedominterventions.com/start-here", "freedom_get_answers_now"),
};

export const openClawPhoneNumbers = {
  partyWreckers: "",
  soberHelpline: "",
  freedomInterventions: "",
};
