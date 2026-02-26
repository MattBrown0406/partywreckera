import { useQuery } from "@tanstack/react-query";

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

const parseRSSFeed = async (): Promise<PodcastInfo> => {
  // Use a CORS proxy to fetch the RSS feed
  const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(RSS_URL)}`);
  if (!response.ok) {
    throw new Error("Failed to fetch RSS feed");
  }
  const text = await response.text();
  
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "text/xml");
  
  const channel = xml.querySelector("channel");
  
  // Get podcast info
  const title = channel?.querySelector("title")?.textContent || "The Party Wreckers";
  const description = channel?.querySelector("description")?.textContent || "";
  const author = channel?.querySelector("itunes\\:author")?.textContent || "Matt Brown";
  const image = channel?.querySelector("itunes\\:image")?.getAttribute("href") || 
                channel?.querySelector("image url")?.textContent || "";
  
  // Parse episodes
  const items = xml.querySelectorAll("item");
  const episodes: Episode[] = Array.from(items).map((item, index) => {
    const durationText = item.querySelector("itunes\\:duration")?.textContent || "0";
    const duration = parseInt(durationText, 10);
    
    // Clean up description - remove CDATA markers and HTML tags for preview
    let desc = item.querySelector("itunes\\:summary")?.textContent || 
               item.querySelector("description")?.textContent || "";
    desc = desc.replace(/\<!\[CDATA\[|\]\]>/g, "").replace(/<[^>]*>/g, "").trim();
    
    // Parse transcript tags (podcast:transcript)
    const transcriptElements = item.querySelectorAll("podcast\\:transcript, transcript");
    const transcripts: TranscriptInfo[] = Array.from(transcriptElements).map(el => ({
      url: el.getAttribute("url") || "",
      type: el.getAttribute("type") || "text/html",
    })).filter(t => t.url);
    
    return {
      id: item.querySelector("guid")?.textContent || `episode-${index}`,
      title: item.querySelector("title")?.textContent || "Untitled Episode",
      description: desc.slice(0, 300) + (desc.length > 300 ? "..." : ""),
      pubDate: item.querySelector("pubDate")?.textContent || "",
      duration,
      episodeNumber: parseInt(item.querySelector("itunes\\:episode")?.textContent || "0", 10),
      audioUrl: item.querySelector("enclosure")?.getAttribute("url") || "",
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
    staleTime: 1000 * 60 * 30, // 30 minutes
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
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
