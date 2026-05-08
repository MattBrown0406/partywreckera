export interface TranscriptInfo {
  url: string;
  type: string;
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

const decodeXml = (value = "") =>
  value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .trim();

const stripHtml = (value = "") => decodeXml(value).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

const escapeTagName = (tagName: string) => tagName.replace(":", "\\:");

const getTag = (xml: string, tagName: string) => {
  const escapedTag = escapeTagName(tagName);
  const match = xml.match(new RegExp(`<${escapedTag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escapedTag}>`, "i"));
  return match ? decodeXml(match[1]) : "";
};

const getAttribute = (xml: string, tagName: string, attributeName: string) => {
  const escapedTag = escapeTagName(tagName);
  const match = xml.match(new RegExp(`<${escapedTag}[^>]*\\s${attributeName}=["']([^"']+)["'][^>]*>`, "i"));
  return match ? decodeXml(match[1]) : "";
};

const parseDuration = (value = "") => {
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

const parseTranscripts = (xml: string) => {
  const matches = xml.matchAll(/<(?:podcast:transcript|transcript)\b([^>]*)\/?>/gi);

  return Array.from(matches)
    .map((match) => ({
      url: match[1].match(/\surl=["']([^"']+)["']/i)?.[1] || "",
      type: match[1].match(/\stype=["']([^"']+)["']/i)?.[1] || "text/html",
    }))
    .filter((transcript) => transcript.url);
};

export const parsePodcastFeed = (rss: string): PodcastInfo => {
  const channel = rss.match(/<channel>([\s\S]*?)<\/channel>/i)?.[1] || rss;
  const channelWithoutItems = channel.replace(/<item[\s\S]*?<\/item>/gi, "");
  const items = Array.from(channel.matchAll(/<item>([\s\S]*?)<\/item>/gi), (match) => match[1]);

  return {
    title: getTag(channelWithoutItems, "title") || "The Party Wreckers",
    description: stripHtml(getTag(channelWithoutItems, "description")),
    author: getTag(channelWithoutItems, "itunes:author") || "Matt Brown",
    image:
      getAttribute(channelWithoutItems, "itunes:image", "href") ||
      getTag(channelWithoutItems, "url") ||
      "",
    episodes: items.map((item, index) => {
      const rawDescription = getTag(item, "itunes:summary") || getTag(item, "description");
      const description = stripHtml(rawDescription);

      return {
        id: getTag(item, "guid") || `episode-${index}`,
        title: stripHtml(getTag(item, "title")) || "Untitled Episode",
        description: description.slice(0, 300) + (description.length > 300 ? "..." : ""),
        pubDate: getTag(item, "pubDate"),
        duration: parseDuration(getTag(item, "itunes:duration")),
        episodeNumber: Number(getTag(item, "itunes:episode")) || 0,
        audioUrl: getAttribute(item, "enclosure", "url"),
        transcripts: parseTranscripts(item),
      };
    }),
  };
};
