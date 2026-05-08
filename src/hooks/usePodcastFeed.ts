import { useQuery } from "@tanstack/react-query";
import { podcastFeedSnapshot } from "@/data/podcastFeedSnapshot";

export interface TranscriptInfo {
  url: string;
  type: string; // 'text/html', 'application/json', 'application/x-subrip'
}

export interface Episode {
  id: string;
  title: string;
  description: string;
  pubDate: string;
  duration: number;
  episodeNumber: number;
  audioUrl: string;
  transcripts: TranscriptInfo[];
}

export interface PodcastInfo {
  title: string;
  description: string;
  author: string;
  image: string;
  episodes: Episode[];
}

const RSS_URL = "https://feeds.buzzsprout.com/1941777.rss";
const CORS_PROXY_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(RSS_URL)}`;
const FEED_TIMEOUT_MS = 6000;

const fetchWithTimeout = async (url: string, timeoutMs: number): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = globalThis.setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    globalThis.clearTimeout(timeoutId);
  }
};

const parseDurationText = (value: string): number => {
  const trimmed = value.trim();
  if (!trimmed) return 0;

  if (trimmed.includes(":")) {
    return trimmed
      .split(":")
      .map((part) => Number(part) || 0)
      .reduce((total, part) => total * 60 + part, 0);
  }

  return Number(trimmed) || 0;
};

const getElementByLocalName = (parent: Element | Document, localName: string): Element | null => {
  const normalizedName = localName.toLowerCase();

  return (
    Array.from(parent.getElementsByTagName("*")).find((element) => {
      const tagName = element.tagName.toLowerCase();
      const elementLocalName = element.localName.toLowerCase();

      return tagName === normalizedName || elementLocalName === normalizedName.split(":").pop();
    }) || null
  );
};

const getText = (parent: Element | Document | null | undefined, ...tagNames: string[]): string => {
  if (!parent) return "";

  for (const tagName of tagNames) {
    const directMatch = parent.getElementsByTagName(tagName)[0];
    const localNameMatch = getElementByLocalName(parent, tagName);
    const text = directMatch?.textContent || localNameMatch?.textContent || "";

    if (text.trim()) return text;
  }

  return "";
};

const getAttribute = (
  parent: Element | Document | null | undefined,
  tagName: string,
  attributeName: string,
): string => {
  if (!parent) return "";

  const directMatch = parent.getElementsByTagName(tagName)[0];
  const localNameMatch = getElementByLocalName(parent, tagName);

  return directMatch?.getAttribute(attributeName) || localNameMatch?.getAttribute(attributeName) || "";
};

const snapshotDurationsByEpisode = new Map(
  podcastFeedSnapshot.episodes.flatMap((episode) => [
    [episode.id, episode.duration],
    [episode.title, episode.duration],
  ]),
);

const parseRSSFeed = async (): Promise<PodcastInfo> => {
  const response = await fetchWithTimeout(CORS_PROXY_URL, FEED_TIMEOUT_MS);
  if (!response.ok) {
    throw new Error("Failed to fetch RSS feed");
  }
  const text = await response.text();
  
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "text/xml");
  
  const channel = xml.querySelector("channel");
  
  // Get podcast info
  const title = getText(channel, "title") || "The Party Wreckers";
  const description = getText(channel, "description");
  const author = getText(channel, "itunes:author", "author") || "Matt Brown";
  const image = getAttribute(channel, "itunes:image", "href") || getText(channel, "url");
  
  // Parse episodes
  const items = xml.querySelectorAll("item");
  const episodes: Episode[] = Array.from(items).map((item, index) => {
    const id = getText(item, "guid") || `episode-${index}`;
    const title = getText(item, "title") || "Untitled Episode";
    const durationText = getText(item, "itunes:duration", "duration");
    const duration = parseDurationText(durationText) || snapshotDurationsByEpisode.get(id) || snapshotDurationsByEpisode.get(title) || 0;
    
    // Clean up description - remove CDATA markers and HTML tags for preview
    let desc = getText(item, "itunes:summary", "summary", "description");
    desc = desc.replace(/<!\[CDATA\[|\]\]>/g, "").replace(/<[^>]*>/g, "").trim();
    
    // Parse transcript tags (podcast:transcript)
    const transcriptElements = item.querySelectorAll("podcast\\:transcript, transcript");
    const transcripts: TranscriptInfo[] = Array.from(transcriptElements).map(el => ({
      url: el.getAttribute("url") || "",
      type: el.getAttribute("type") || "text/html",
    })).filter(t => t.url);
    
    return {
      id,
      title,
      description: desc.slice(0, 300) + (desc.length > 300 ? "..." : ""),
      pubDate: getText(item, "pubDate"),
      duration,
      episodeNumber: parseInt(getText(item, "itunes:episode", "episode") || "0", 10),
      audioUrl: getAttribute(item, "enclosure", "url"),
      transcripts,
    };
  });

  return {
    title,
    description,
    author,
    image,
    episodes,
  };
};

export const usePodcastFeed = () => {
  return useQuery({
    queryKey: ["podcast-feed"],
    queryFn: parseRSSFeed,
    initialData: podcastFeedSnapshot,
    initialDataUpdatedAt: 0,
    staleTime: 1000 * 60 * 30,
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes} min`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
