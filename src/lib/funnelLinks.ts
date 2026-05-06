const partyWreckersTracking =
  "source=party_wreckers&utm_source=party_wreckers&utm_medium=referral&utm_campaign=party_wreckers_funnel";

const withTracking = (url: string) => `${url}?${partyWreckersTracking}`;

export const podcastLinks = {
  apple: "https://podcasts.apple.com/us/podcast/the-party-wreckers/id1611904917",
  spotify: "https://open.spotify.com/show/4YJLvnFuZr5EkcGs9b47fn?si=bde59f5f480c45a2",
  youtube: "https://www.youtube.com/@ThePartyWreckers",
};

export const funnelLinks = {
  partyWreckersBridge: "/from-party-wreckers",
  familySquares: withTracking("https://soberhelpline.com/family-squares"),
  soberHelpline: withTracking("https://soberhelpline.com"),
  freedomPodcastBridge: withTracking("https://freedominterventions.com/party-wreckers-podcast"),
  freedomReadiness: withTracking("https://freedominterventions.com/intervention-readiness"),
  freedomContact: withTracking("https://freedominterventions.com/contact"),
};

export const openClawPhoneNumbers = {
  partyWreckers: "",
  soberHelpline: "",
  freedomInterventions: "",
};
