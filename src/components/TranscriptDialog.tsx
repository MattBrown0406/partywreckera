import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, FileText, Copy, Check } from "lucide-react";
import { TranscriptInfo } from "@/hooks/usePodcastFeed";

interface TranscriptDialogProps {
  isOpen: boolean;
  onClose: () => void;
  episodeTitle: string;
  transcripts: TranscriptInfo[];
}

const TranscriptDialog = ({
  isOpen,
  onClose,
  episodeTitle,
  transcripts,
}: TranscriptDialogProps) => {
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && transcripts.length > 0) {
      fetchTranscript();
    }
  }, [isOpen, transcripts]);

  const fetchTranscript = async () => {
    setIsLoading(true);
    setError(null);
    setContent("");

    // Prefer HTML format, then SRT, then JSON
    const preferredOrder = ["text/html", "application/x-subrip", "application/json"];
    const sortedTranscripts = [...transcripts].sort((a, b) => {
      const aIndex = preferredOrder.indexOf(a.type);
      const bIndex = preferredOrder.indexOf(b.type);
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    });

    const transcript = sortedTranscripts[0];
    if (!transcript) {
      setError("No transcript available");
      setIsLoading(false);
      return;
    }

    try {
      // Use CORS proxy to fetch transcript
      const response = await fetch(
        `https://corsproxy.io/?${encodeURIComponent(transcript.url)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch transcript");
      }

      const text = await response.text();

      // Parse based on format
      if (transcript.type === "text/html") {
        // Strip HTML tags but preserve structure
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const cleanText = doc.body.textContent || text;
        setContent(cleanText);
      } else if (transcript.type === "application/x-subrip") {
        // Parse SRT format - remove timestamps and numbers
        const cleanedSrt = text
          .split("\n")
          .filter((line) => {
            // Remove line numbers and timestamps
            if (/^\d+$/.test(line.trim())) return false;
            if (/^\d{2}:\d{2}:\d{2}/.test(line.trim())) return false;
            if (line.trim() === "") return false;
            return true;
          })
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();
        setContent(cleanedSrt);
      } else if (transcript.type === "application/json") {
        // Parse JSON transcript format
        const json = JSON.parse(text);
        if (Array.isArray(json)) {
          const transcriptText = json
            .map((segment: { text?: string; body?: string }) => segment.text || segment.body || "")
            .join(" ");
          setContent(transcriptText);
        } else if (json.text) {
          setContent(json.text);
        } else {
          setContent(JSON.stringify(json, null, 2));
        }
      } else {
        setContent(text);
      }
    } catch (err) {
      console.error("Error fetching transcript:", err);
      setError("Unable to load transcript. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-burgundy">
            <FileText className="w-5 h-5" />
            Transcript
          </DialogTitle>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {episodeTitle}
          </p>
        </DialogHeader>

        <div className="flex-1 min-h-0">
          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
              <span className="ml-2 text-muted-foreground">
                Loading transcript...
              </span>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{error}</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={fetchTranscript}
              >
                Try Again
              </Button>
            </div>
          )}

          {!isLoading && !error && content && (
            <>
              <div className="flex justify-end mb-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-1" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <ScrollArea className="h-[50vh] rounded-md border bg-muted/30 p-4">
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {content}
                </p>
              </ScrollArea>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TranscriptDialog;
