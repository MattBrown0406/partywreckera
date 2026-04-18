import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const ApplePodcastsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c4.988 0 9.037 4.062 9.037 9.066 0 4.988-4.049 9.037-9.037 9.037-4.988 0-9.037-4.049-9.037-9.037 0-5.004 4.049-9.066 9.037-9.066zm0 3.047c-3.279 0-5.943 2.651-5.943 5.943a5.95 5.95 0 002.357 4.734l-.744 2.303c-.09.276.167.543.447.469l2.381-.629a5.923 5.923 0 003.502.029l2.381.629c.28.074.537-.193.447-.469l-.744-2.303a5.95 5.95 0 002.357-4.734c0-3.292-2.664-5.943-5.943-5.943zm0 2.187a1.16 1.16 0 110 2.32 1.16 1.16 0 010-2.32zm0 3.035c1.106 0 2.005.892 2.005 1.988 0 .907-.619 1.668-1.455 1.9v1.945a.56.56 0 01-.55.56.56.56 0 01-.55-.56v-1.945c-.836-.232-1.455-.993-1.455-1.9 0-1.096.899-1.988 2.005-1.988z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const BuzzsproutIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="4" fill="white"/>
  </svg>
);

const platforms = [
  { name: "Spotify", url: "https://open.spotify.com/show/your-show-id", icon: SpotifyIcon, color: "hover:bg-[#1DB954] hover:text-white hover:border-[#1DB954]" },
  { name: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/your-show", icon: ApplePodcastsIcon, color: "hover:bg-[#9933CC] hover:text-white hover:border-[#9933CC]" },
];

const CTASection = () => {
  return (
    <section className="py-12 sm:py-24 bg-background relative overflow-hidden" id="contact">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/2 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />

      <div className="container px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-script text-4xl sm:text-5xl lg:text-6xl text-burgundy mb-4 sm:mb-6">
            Stop Guessing. Start Getting Clear.
          </h2>
          
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-10">
            If addiction has your family stuck in fear, confusion, or constant damage control, go to Help Now for triage, Start Here for the basics, Next Step for direction, or contact Matt directly. Just do not keep telling yourself this will sort itself out.
          </p>

          {/* Platform buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-secondary border border-border text-foreground text-sm sm:text-base font-medium transition-all duration-300 ${platform.color}`}
              >
                <platform.icon />
                <span className="hidden sm:inline">{platform.name}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 flex-wrap">
            <Button variant="hero" size="xl" asChild>
              <Link to="/help-now">
                Help Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/start-here">
                Start Here
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/next-step">
                Find My Next Step
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/episodes">
                All Episodes
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center pt-6 sm:pt-8 border-t border-border">
            <a 
              href="mailto:matt@partywreckers.com?subject=Family%20Support%20Request"
              className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span>Need help with your family situation? Email Matt</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
