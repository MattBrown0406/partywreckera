import { Instagram, Youtube, Facebook } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const SocialLinks = () => (
  <div className="flex items-center gap-4">
    <a
      href="https://www.tiktok.com/@mattbrowninterventionist"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
      aria-label="TikTok"
    >
      <TikTokIcon className="w-5 h-5" />
    </a>
    <a
      href="https://www.instagram.com/mattbrowninterventionist/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
      aria-label="Instagram"
    >
      <Instagram className="w-5 h-5" />
    </a>
    <a
      href="https://www.facebook.com/mbrownsober"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
      aria-label="Facebook"
    >
      <Facebook className="w-5 h-5" />
    </a>
    <a
      href="https://www.youtube.com/@ThePartyWreckers"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
      aria-label="YouTube"
    >
      <Youtube className="w-5 h-5" />
    </a>
  </div>
);

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="font-script text-2xl text-foreground">
            The Party Wreckers
          </a>

          {/* Social links */}
          <SocialLinks />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} The Party Wreckers Podcast. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
