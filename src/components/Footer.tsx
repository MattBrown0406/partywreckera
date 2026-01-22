import { Instagram, Youtube, Facebook } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const SocialLinks = ({ size = "default" }: { size?: "default" | "small" }) => (
  <div className={`flex items-center ${size === "small" ? "gap-2 sm:gap-3" : "gap-3 sm:gap-4"}`}>
    <a
      href="https://www.tiktok.com/@mattbrowninterventionist"
      target="_blank"
      rel="noopener noreferrer"
      className={`${size === "small" ? "w-8 h-8 sm:w-9 sm:h-9" : "w-9 h-9 sm:w-10 sm:h-10"} rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors`}
      aria-label="TikTok"
    >
      <TikTokIcon className={size === "small" ? "w-4 h-4" : "w-4 h-4 sm:w-5 sm:h-5"} />
    </a>
    <a
      href="https://www.instagram.com/mattbrowninterventionist/"
      target="_blank"
      rel="noopener noreferrer"
      className={`${size === "small" ? "w-8 h-8 sm:w-9 sm:h-9" : "w-9 h-9 sm:w-10 sm:h-10"} rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors`}
      aria-label="Instagram"
    >
      <Instagram className={size === "small" ? "w-4 h-4" : "w-4 h-4 sm:w-5 sm:h-5"} />
    </a>
    <a
      href="https://www.facebook.com/mbrownsober"
      target="_blank"
      rel="noopener noreferrer"
      className={`${size === "small" ? "w-8 h-8 sm:w-9 sm:h-9" : "w-9 h-9 sm:w-10 sm:h-10"} rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors`}
      aria-label="Facebook"
    >
      <Facebook className={size === "small" ? "w-4 h-4" : "w-4 h-4 sm:w-5 sm:h-5"} />
    </a>
    <a
      href="https://www.youtube.com/@ThePartyWreckers"
      target="_blank"
      rel="noopener noreferrer"
      className={`${size === "small" ? "w-8 h-8 sm:w-9 sm:h-9" : "w-9 h-9 sm:w-10 sm:h-10"} rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors`}
      aria-label="YouTube"
    >
      <Youtube className={size === "small" ? "w-4 h-4" : "w-4 h-4 sm:w-5 sm:h-5"} />
    </a>
  </div>
);

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 bg-card border-t border-border" role="contentinfo">
      <div className="container px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <a 
            href="/" 
            className="font-script text-xl sm:text-2xl text-foreground"
            aria-label="The Party Wreckers Podcast - Return to homepage"
          >
            The Party Wreckers
          </a>

          {/* Navigation links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 list-none p-0 m-0">
              <li>
                <a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/episodes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Episodes
                </a>
              </li>
              <li>
                <a href="/family-resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="/host" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Matt Brown
                </a>
              </li>
              <li>
                <a href="/press" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </nav>

          {/* Social links */}
          <SocialLinks />

          {/* Copyright */}
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} The Party Wreckers Podcast. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
