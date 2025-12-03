import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePodcastFeed, formatDuration, formatDate } from "@/hooks/usePodcastFeed";
import { Button } from "@/components/ui/button";
import { Play, Pause, Clock, Calendar, Loader2 } from "lucide-react";

const Episodes = () => {
  const { data, isLoading, error } = usePodcastFeed();
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const handlePlay = (episodeId: string, audioUrl: string) => {
    if (playingId === episodeId) {
      // Pause current
      audioElement?.pause();
      setPlayingId(null);
      setAudioElement(null);
    } else {
      // Stop previous
      audioElement?.pause();
      
      // Play new
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-hero">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-script text-5xl sm:text-6xl text-foreground mb-4">
                Episodes
              </h1>
              <p className="text-muted-foreground text-lg">
                Real conversations about addiction, intervention, and the path to recovery. 
                New episodes every week.
              </p>
            </div>
          </div>
        </section>

        {/* Episodes List */}
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

            {data && (
              <div className="max-w-4xl mx-auto space-y-6">
                {data.episodes.map((episode) => (
                  <article
                    key={episode.id}
                    className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Play button */}
                      <div className="flex-shrink-0">
                        <Button
                          variant="default"
                          size="icon"
                          className="w-14 h-14 rounded-full"
                          onClick={() => handlePlay(episode.id, episode.audioUrl)}
                        >
                          {playingId === episode.id ? (
                            <Pause className="w-6 h-6" />
                          ) : (
                            <Play className="w-6 h-6 ml-1" />
                          )}
                        </Button>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2 text-sm text-muted-foreground">
                          {episode.episodeNumber > 0 && (
                            <span className="font-semibold text-primary">
                              EP {episode.episodeNumber}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(episode.pubDate)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {formatDuration(episode.duration)}
                          </span>
                        </div>

                        <h2 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                          {episode.title}
                        </h2>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {episode.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Episodes;
