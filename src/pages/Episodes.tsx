import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePodcastFeed, formatDuration, formatDate, Episode } from "@/hooks/usePodcastFeed";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Pause, Clock, Calendar, Loader2, Sparkles, FileText, Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbJsonLd, FAQJsonLd, PodcastJsonLd } from "@/components/JsonLd";
import TranscriptDialog from "@/components/TranscriptDialog";

type Category = "all" | "understanding" | "family" | "intervention" | "recovery";

const categories: { id: Category; label: string; keywords: string[] }[] = [
  { id: "all", label: "All Episodes", keywords: [] },
  { 
    id: "understanding", 
    label: "Understanding Addiction", 
    keywords: ["brain", "science", "disease", "mental health", "psychology", "myth", "stigma", "alcoholism", "addiction", "substance", "understand", "why", "how addiction", "nature of"]
  },
  { 
    id: "family", 
    label: "Family & Relationships", 
    keywords: ["family", "enabling", "codependency", "boundaries", "loved one", "parent", "spouse", "marriage", "relationship", "support", "helping", "care"]
  },
  { 
    id: "intervention", 
    label: "Intervention & Treatment", 
    keywords: ["intervention", "treatment", "detox", "rehab", "facility", "professional", "help", "getting help", "therapy", "therapist", "counselor", "process"]
  },
  { 
    id: "recovery", 
    label: "Recovery & Sobriety", 
    keywords: ["recovery", "sobriety", "sober", "aa", "12 step", "relapse", "maintain", "life after", "clean", "journey", "story", "success", "hope"]
  },
];

const getCategoryForEpisode = (episode: Episode): Category => {
  const searchText = `${episode.title} ${episode.description}`.toLowerCase();
  
  // Score each category based on keyword matches
  let bestCategory: Category = "understanding"; // default
  let bestScore = 0;
  
  for (const cat of categories) {
    if (cat.id === "all") continue;
    
    const score = cat.keywords.reduce((acc, keyword) => {
      return acc + (searchText.includes(keyword.toLowerCase()) ? 1 : 0);
    }, 0);
    
    if (score > bestScore) {
      bestScore = score;
      bestCategory = cat.id;
    }
  }
  
  return bestCategory;
};

const getCategoryColor = (category: Category): string => {
  switch (category) {
    case "understanding":
      return "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30";
    case "family":
      return "bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-500/30";
    case "intervention":
      return "bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30";
    case "recovery":
      return "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getCategoryLabel = (category: Category): string => {
  return categories.find(c => c.id === category)?.label || "Understanding Addiction";
};

const Episodes = () => {
  const { data, isLoading, error } = usePodcastFeed();
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [transcriptEpisode, setTranscriptEpisode] = useState<(Episode & { category: Category }) | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categorizedEpisodes = useMemo(() => {
    if (!data?.episodes) return [];
    return data.episodes.map(episode => ({
      ...episode,
      category: getCategoryForEpisode(episode),
    }));
  }, [data?.episodes]);

  const filteredEpisodes = useMemo(() => {
    let episodes = categorizedEpisodes;
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      episodes = episodes.filter(ep => 
        ep.title.toLowerCase().includes(query) ||
        ep.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by category
    if (selectedCategory !== "all") {
      episodes = episodes.filter(ep => ep.category === selectedCategory);
    }
    
    return episodes;
  }, [categorizedEpisodes, selectedCategory, searchQuery]);

  const isSearching = searchQuery.trim().length > 0;
  const latestEpisode = categorizedEpisodes[0];
  const remainingEpisodes = isSearching 
    ? filteredEpisodes 
    : filteredEpisodes.slice(selectedCategory === "all" ? 1 : 0);

  const handlePlay = (episodeId: string, audioUrl: string) => {
    if (playingId === episodeId) {
      audioElement?.pause();
      setPlayingId(null);
      setAudioElement(null);
    } else {
      audioElement?.pause();
      
      const audio = new Audio(audioUrl);
      audio.play();
      audio.onended = () => {
        setPlayingId(null);
        setAudioElement(null);
      };
      setPlayingId(episodeId);
      setAudioElement(audio);
    }
  };

  // AEO-optimized FAQs for episodes page
  const episodeFAQs = [
    {
      question: "Where can I listen to The Party Wreckers Podcast?",
      answer: "The Party Wreckers Podcast is available on all major podcast platforms including Apple Podcasts, Spotify, Amazon Music, YouTube, and directly on our website. New episodes are released weekly."
    },
    {
      question: "What topics does The Party Wreckers Podcast cover?",
      answer: "The podcast covers addiction education, family intervention strategies, enabling vs. supporting, setting boundaries, recovery planning, treatment options, and practical guidance for families dealing with substance use disorder."
    },
    {
      question: "How often are new episodes released?",
      answer: "New episodes of The Party Wreckers Podcast are released weekly. Subscribe on your favorite podcast platform to get notified when new episodes are available."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Podcast Episodes | The Party Wreckers - Addiction & Recovery"
        description="Browse 65+ episodes of The Party Wreckers Podcast. Real conversations about addiction, intervention, and family recovery with interventionist Matt Brown."
        canonical="/episodes"
        keywords="addiction podcast episodes, intervention podcast, family recovery podcast, Matt Brown podcast, substance abuse podcast episodes"
      />
      <PodcastJsonLd />
      <FAQJsonLd faqs={episodeFAQs} />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "/" },
        { name: "Episodes", url: "/episodes" }
      ]} />
      
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-hero">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-script text-5xl sm:text-6xl text-burgundy mb-4">
                Episodes
              </h1>
              <p className="text-muted-foreground text-lg">
                Real conversations about addiction, intervention, and the path to recovery. 
                New episodes every week.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container px-4">
            {isLoading && (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
                <span className="ml-3 text-muted-foreground">Loading episodes...</span>
              </div>
            )}

            {error && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Unable to load episodes. Please try again later.</p>
              </div>
            )}

            {data && latestEpisode && (
              <div className="max-w-4xl mx-auto">
                {/* Latest Episode Feature */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-semibold text-foreground">Latest Episode</h2>
                  </div>
                  
                  <article className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card border-2 border-primary/20 shadow-lg">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-4">
                        <Button
                          variant="default"
                          size="icon"
                          className="w-16 h-16 rounded-full flex-shrink-0 shadow-lg"
                          onClick={() => handlePlay(latestEpisode.id, latestEpisode.audioUrl)}
                        >
                          {playingId === latestEpisode.id ? (
                            <Pause className="w-7 h-7" />
                          ) : (
                            <Play className="w-7 h-7 ml-1" />
                          )}
                        </Button>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            {latestEpisode.episodeNumber > 0 && (
                              <span className="font-semibold text-primary text-sm">
                                EP {latestEpisode.episodeNumber}
                              </span>
                            )}
                            <Badge variant="outline" className={getCategoryColor(latestEpisode.category)}>
                              {getCategoryLabel(latestEpisode.category)}
                            </Badge>
                          </div>
                          
                          <h3 className="font-semibold text-xl text-burgundy mb-2">
                            {latestEpisode.title}
                          </h3>
                          
                          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {formatDate(latestEpisode.pubDate)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {formatDuration(latestEpisode.duration)}
                            </span>
                          </div>
                          
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {latestEpisode.description}
                          </p>
                          
                          {latestEpisode.transcripts.length > 0 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-3 text-primary hover:text-primary/80"
                              onClick={() => setTranscriptEpisode(latestEpisode)}
                            >
                              <FileText className="w-4 h-4 mr-1" />
                              View Transcript
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search episodes by title or topic..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-10 h-12 text-base"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  {isSearching && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Found {filteredEpisodes.length} episode{filteredEpisodes.length !== 1 ? 's' : ''} matching "{searchQuery}"
                    </p>
                  )}
                </div>

                {/* Category Filters */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-foreground mb-4">Browse by Topic</h2>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <Button
                        key={cat.id}
                        variant={selectedCategory === cat.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(cat.id)}
                        className="rounded-full"
                      >
                        {cat.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Episodes List */}
                <div className="space-y-4">
                  {remainingEpisodes.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">
                        {isSearching 
                          ? `No episodes found matching "${searchQuery}"` 
                          : "No episodes found in this category."}
                      </p>
                      {isSearching && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-4"
                          onClick={() => setSearchQuery("")}
                        >
                          Clear search
                        </Button>
                      )}
                    </div>
                  )}
                  
                  {remainingEpisodes.map((episode) => (
                    <article
                      key={episode.id}
                      className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-shrink-0">
                          <Button
                            variant="default"
                            size="icon"
                            className="w-12 h-12 rounded-full"
                            onClick={() => handlePlay(episode.id, episode.audioUrl)}
                          >
                            {playingId === episode.id ? (
                              <Pause className="w-5 h-5" />
                            ) : (
                              <Play className="w-5 h-5 ml-0.5" />
                            )}
                          </Button>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2 text-sm">
                            {episode.episodeNumber > 0 && (
                              <span className="font-semibold text-primary">
                                EP {episode.episodeNumber}
                              </span>
                            )}
                            <Badge variant="outline" className={`text-xs ${getCategoryColor(episode.category)}`}>
                              {getCategoryLabel(episode.category)}
                            </Badge>
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Calendar className="w-3.5 h-3.5" />
                              {formatDate(episode.pubDate)}
                            </span>
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="w-3.5 h-3.5" />
                              {formatDuration(episode.duration)}
                            </span>
                          </div>

                          <h3 className="font-semibold text-foreground mb-2 group-hover:text-burgundy transition-colors">
                            {episode.title}
                          </h3>

                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                            {episode.description}
                          </p>
                          
                          {episode.transcripts.length > 0 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-2 text-primary hover:text-primary/80 -ml-2"
                              onClick={() => setTranscriptEpisode(episode)}
                            >
                              <FileText className="w-4 h-4 mr-1" />
                              View Transcript
                            </Button>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Transcript Dialog */}
        <TranscriptDialog
          isOpen={!!transcriptEpisode}
          onClose={() => setTranscriptEpisode(null)}
          episodeTitle={transcriptEpisode?.title || ""}
          transcripts={transcriptEpisode?.transcripts || []}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Episodes;
