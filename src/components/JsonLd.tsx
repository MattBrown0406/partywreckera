import { Helmet } from "react-helmet";

const SITE_URL = "https://partywreckers.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// Podcast Schema
export const PodcastJsonLd = () => {
  const podcastSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "The Party Wreckers Podcast",
    "description": "Real conversations about addiction, intervention, and recovery. Host Matt Brown helps families find hope and practical guidance.",
    "url": SITE_URL,
    "image": OG_IMAGE,
    "author": {
      "@type": "Person",
      "name": "Matt Brown",
      "url": `${SITE_URL}/host`
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Party Wreckers Podcast",
      "logo": {
        "@type": "ImageObject",
        "url": OG_IMAGE
      }
    },
    "genre": ["Health", "Mental Health", "Addiction", "Family", "Recovery"],
    "inLanguage": "en-US",
    "webFeed": "https://feeds.buzzsprout.com/1941777.rss"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(podcastSchema)}
      </script>
    </Helmet>
  );
};

// Organization Schema
export const OrganizationJsonLd = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Party Wreckers Podcast",
    "url": SITE_URL,
    "logo": OG_IMAGE,
    "description": "A podcast helping families navigate addiction, intervention, and recovery.",
    "email": "matt@partywreckers.com",
    "sameAs": [
      "https://www.tiktok.com/@mattbrowninterventionist",
      "https://www.instagram.com/mattbrowninterventionist/",
      "https://www.facebook.com/mbrownsober",
      "https://www.youtube.com/@ThePartyWreckers"
    ],
    "founder": {
      "@type": "Person",
      "name": "Matt Brown"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>
    </Helmet>
  );
};

// Person Schema for Host page
export const PersonJsonLd = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Matt Brown",
    "jobTitle": "Professional Interventionist",
    "description": "An experienced interventionist with over 20 years helping families navigate addiction and recovery.",
    "url": "https://partywreckers.com/host",
    "image": "https://partywreckers.com/assets/matt-headshot.jpg",
    "email": "matt@partywreckers.com",
    "sameAs": [
      "https://www.tiktok.com/@mattbrowninterventionist",
      "https://www.instagram.com/mattbrowninterventionist/",
      "https://www.facebook.com/mbrownsober",
      "https://www.youtube.com/@ThePartyWreckers"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "The Party Wreckers Podcast"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
};

// WebSite Schema with SearchAction
export const WebsiteJsonLd = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Party Wreckers Podcast",
    "url": "https://partywreckers.com",
    "description": "Real conversations about addiction, intervention, and recovery.",
    "publisher": {
      "@type": "Organization",
      "name": "The Party Wreckers Podcast"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

// FAQ Schema for Family Resources
export const FAQJsonLd = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

// BreadcrumbList Schema
export const BreadcrumbJsonLd = ({ items }: { items: { name: string; url: string }[] }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://partywreckers.com${item.url}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};
