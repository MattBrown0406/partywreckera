import type { Episode } from "@/hooks/usePodcastFeed";

export type EpisodeWithCategory = Episode & { category?: string };

export type TopicFilter = {
  label: string;
  query: string;
};

export const topicFilters: TopicFilter[] = [
  { label: "Alcohol", query: "alcohol" },
  { label: "Intervention", query: "intervention" },
  { label: "Enabling", query: "enabling" },
  { label: "Boundaries", query: "boundaries" },
  { label: "Treatment", query: "treatment" },
  { label: "Relapse", query: "relapse" },
  { label: "Family fear", query: "fear" },
  { label: "Communication", query: "communication" },
];

export const starterEpisodeSlots = [
  {
    title: "Families in crisis",
    body: "Start here when the home is already running on fear, urgency, and the same conversation every week.",
    episodeNumber: 75,
    fallbackTitle: "\"I Know I Need to Stop\"",
  },
  {
    title: "Enabling and boundaries",
    body: "Use this when everyone means well, but the helping has started protecting the addiction from consequences.",
    episodeNumber: 66,
    fallbackTitle: "From Requests To Real Boundaries",
  },
  {
    title: "Before calling an interventionist",
    body: "Listen before the family tries one more high-stakes talk without a plan or united front.",
    episodeNumber: 69,
    fallbackTitle: "How To Prepare For an Addiction Intervention",
  },
] as const;

export const getEpisodeSearchText = (episode: Episode): string =>
  `${episode.title} ${episode.description}`.toLowerCase();

export const findStarterEpisode = (episodes: Episode[], episodeNumber: number, fallbackTitle: string): Episode | undefined => {
  const normalizedFallback = fallbackTitle.toLowerCase();

  return (
    episodes.find((episode) => episode.episodeNumber === episodeNumber) ||
    episodes.find((episode) => episode.title.toLowerCase().includes(normalizedFallback))
  );
};

export const getStarterEpisodes = (episodes: Episode[]) =>
  starterEpisodeSlots.map((slot) => ({
    ...slot,
    episode: findStarterEpisode(episodes, slot.episodeNumber, slot.fallbackTitle),
  }));
