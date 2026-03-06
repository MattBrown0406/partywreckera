import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { blogArticles } from "@/data/blogData";

interface SEOHeadProps {
  title: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  children?: React.ReactNode;
}

const SITE_URL = "https://partywreckers.com";
const FALLBACK_DESCRIPTION =
  "The Party Wreckers Podcast — real talk about addiction, intervention, and recovery for families. Hosted by Matt Brown, professional interventionist.";

const ROUTE_DESCRIPTIONS: Record<string, string> = {
  "/": "The Party Wreckers Podcast with Matt Brown — real conversations about addiction, intervention, and recovery. Helping families find hope and practical guidance.",
  "/episodes": "Browse every episode of The Party Wreckers Podcast. Solo episodes, interviews, Q&A, and case studies on addiction, intervention, and family recovery.",
  "/blog": "Articles on addiction, intervention, family recovery, and the stories behind the podcast. Written by Matt Brown, professional interventionist.",
  "/family-resources": "Free resources for families dealing with a loved one's addiction: reflection exercises, fear inventories, conversation guides, and more.",
  "/host": "Matt Brown is a professional interventionist with 20+ years experience and 22 years of personal recovery. He created The Party Wreckers to help families.",
  "/press": "Press kit, media appearances, and interview requests for The Party Wreckers Podcast and host Matt Brown.",
  "/sponsors": "Partner with The Party Wreckers Podcast to reach families navigating addiction and recovery. Ethical sponsorship opportunities available.",
  "/family-reflection": "A guided reflection exercise for families affected by addiction. Step back, assess your situation, and identify what you can change today.",
  "/fear-inventory": "Fear keeps families stuck. This exercise helps you name your fears, examine them honestly, and move from paralysis to action.",
  "/conversation-starters": "Not sure how to bring it up? Conversation starters to help families begin the hardest — and most important — talk about addiction.",
};

const trimToLength = (value: string, max = 155) =>
  value.length > max ? `${value.slice(0, max).trimEnd()}…` : value;

const normalizePath = (pathname: string) =>
  pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

const SEOHead = ({
  title,
  description,
  ogType = "website",
  ogImage = "https://partywreckers.com/og-image.jpg",
  noIndex = false,
  keywords,
  author = "Matt Brown",
  publishedTime,
  modifiedTime,
  children,
}: SEOHeadProps) => {
  const { pathname } = useLocation();
  const normalizedPath = normalizePath(pathname);
  const canonicalUrl = `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;

  const blogSlug = normalizedPath.startsWith("/blog/")
    ? normalizedPath.replace("/blog/", "")
    : "";
  const matchedBlogPost = blogSlug
    ? blogArticles.find((article) => article.id === blogSlug)
    : undefined;

  const pageDescription =
    ROUTE_DESCRIPTIONS[normalizedPath] ??
    (blogSlug
      ? trimToLength(matchedBlogPost?.excerpt || description || FALLBACK_DESCRIPTION)
      : description || FALLBACK_DESCRIPTION);

  const resolvedOgType = normalizedPath.startsWith("/blog/") ? "article" : ogType;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="author" content={author} />

      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={resolvedOgType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="The Party Wreckers Podcast" />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific Open Graph */}
      {resolvedOgType === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {resolvedOgType === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {resolvedOgType === "article" && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@PartyWreckersPod" />
      <meta name="twitter:creator" content="@MattBrownIntervention" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {children}
    </Helmet>
  );
};

export default SEOHead;
