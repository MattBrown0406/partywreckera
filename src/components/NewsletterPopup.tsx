import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import NewsletterSignup from "./NewsletterSignup";

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the popup
    const dismissed = localStorage.getItem('newsletter-popup-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show popup after 60 seconds
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsOpen(true);
      }
    }, 60000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleClose = () => {
    setIsOpen(false);
    setIsDismissed(true);
    localStorage.setItem('newsletter-popup-dismissed', 'true');
  };

  if (isDismissed) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto bg-card border-border">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          <DialogTitle className="sr-only">Newsletter Signup</DialogTitle>
        </DialogHeader>
        
        <NewsletterSignup
          variant="popup"
          title="Get our free Family Recovery Guide"
          description="Join thousands of families finding hope and practical guidance in their recovery journey."
          className="py-4"
        />
        
        <div className="text-center">
          <button
            onClick={handleClose}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
          >
            No thanks, maybe later
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;