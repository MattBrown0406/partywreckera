import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import blogImagePromisesCycle from "@/assets/blog-addiction-promises-cycle.jpg";
import blogImagePersonalityChanges from "@/assets/blog-addiction-personality-changes.jpg";
import blogImageComparisonTrapAddiction from "@/assets/blog-comparison-trap-addiction.jpg";
import blogImageStressAddictionExcuse from "@/assets/blog-stress-addiction-excuse.jpg";
import blogImageBusyNotRecovery from "@/assets/blog-busy-not-recovery.jpg";
import blogImageThisTimeFeelsDifferent from "@/assets/blog-this-time-feels-different.jpg";
import blogImageHighFunctioningCocaine from "@/assets/blog-high-functioning-cocaine.jpg";
import blogImageCommunicationAddiction from "@/assets/blog-communication-addiction-families.jpg";
import blogImageEffortVsChange from "@/assets/blog-effort-vs-change-addiction.jpg";
import blogImageFalseStabilityRebound from "@/assets/blog-false-stability-rebound.jpg";

const recentArticles = [
  {
    id: "addiction-promises-cycle",
    title: "Why \"They Promise It Won't Happen Again\" Keeps Working on Families",
    date: "February 11, 2026",
    image: blogImagePromisesCycle,
    imageAlt: "Young adult male sitting on couch with hands clasped together looking sincere while older mother watches cautiously, crumpled note saying I promise on coffee table",
  },
  {
    id: "addiction-personality-changes",
    title: "Why \"They've Always Been This Way\" Is Often Not True",
    date: "February 10, 2026",
    image: blogImagePersonalityChanges,
    imageAlt: "Young adult male at kitchen table looking emotionally flat with ghostly overlay of his younger happier self behind him, family photos fading from vibrant to muted",
  },
  {
    id: "comparison-trap-minimizing-addiction",
    title: "Why \"At Least It's Not As Bad As Before\" Is a Dangerous Comparison",
    date: "February 9, 2026",
    image: blogImageComparisonTrapAddiction,
    imageAlt: "Young adult male on couch looking calm but hollow-eyed with family cautiously relieved, thermometer on wall showing scale from not as bad to healthy",
  },
  {
    id: "stress-addiction-excuse",
    title: "Why \"They're Just Stressed\" Becomes the Go-To Excuse for Everything",
    date: "February 8, 2026",
    image: blogImageStressAddictionExcuse,
    imageAlt: "Young adult male sitting alone at a bar counter with his head in his hands next to a glass of whiskey, with the word STRESS as a shadow on the wall behind him",
  },
  {
    id: "busy-not-recovery",
    title: "Why Being \"Busy\" Is Not the Same as Being in Recovery",
    date: "February 7, 2026",
    image: blogImageBusyNotRecovery,
    imageAlt: "Young adult male sitting at cluttered desk late at night surrounded by to-do lists and laptop looking exhausted, with a treadmill shadow on the wall symbolizing endless motion without real progress",
  },
  {
    id: "this-time-feels-different",
    title: "Why \"This Time Feels Different\" Keeps Families Stuck in the Same Cycle",
    date: "February 6, 2026",
    image: blogImageThisTimeFeelsDifferent,
    imageAlt: "Young adult male sitting on couch with tears in eyes looking sincere while older parents watch cautiously, with a circular clock and crossed-out calendar dates symbolizing repetitive cycles",
  },
  {
    id: "high-functioning-cocaine-use",
    title: "High-Functioning Cocaine Use: Why It Looks Controlled—Until It Isn't",
    date: "February 5, 2026",
    image: blogImageHighFunctioningCocaine,
    imageAlt: "Young adult male in business suit working at office desk late at night with cracked coffee mug and scattered documents representing the facade of high-functioning stimulant addiction",
  },
  {
    id: "communication-addiction-families",
    title: "Why \"We Just Need Better Communication\" Misses the Point in Addiction",
    date: "February 4, 2026",
    image: blogImageCommunicationAddiction,
    imageAlt: "Middle-aged couple sitting across kitchen table from young adult male with scattered crumpled notes between them representing exhausted words and futile communication",
  },
  {
    id: "effort-vs-change-addiction",
    title: "Why \"They're Trying\" Becomes the Most Dangerous Sentence in Addiction",
    date: "February 3, 2026",
    image: blogImageEffortVsChange,
    imageAlt: "Young adult male sitting at desk surrounded by scattered papers and open books appearing busy, with a hamster wheel shadow on the wall representing effort without progress",
  },
  {
    id: "false-stability-rebound",
    title: "Why \"They Seem More Like Themselves Again\" Can Be a False Signal",
    date: "February 2, 2026",
    image: blogImageFalseStabilityRebound,
    imageAlt: "Young adult male sitting on couch smiling warmly with family around him looking hopeful, while cracked wall behind represents hidden fragility beneath surface calm",
  },
].slice(0, 7);

const BlogCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
      {/* Carousel */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {recentArticles.map((article, index) => (
            <Link
              key={article.id}
              to="/blog"
              className="flex-[0_0_100%] min-w-0 h-full relative block"
            >
              <img
                src={article.image}
                alt={article.imageAlt}
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Dark gradient overlay on bottom */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/95 via-black/70 to-transparent pointer-events-none" />

      {/* Text overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 pointer-events-none">
        <p className="text-white/70 text-xs uppercase tracking-widest mb-2">
          {recentArticles[selectedIndex].date}
        </p>
        <h3 className="text-white text-lg sm:text-xl font-semibold leading-tight line-clamp-3">
          {recentArticles[selectedIndex].title}
        </h3>
        <p className="text-primary text-sm mt-2 font-medium pointer-events-auto">
          <Link to="/blog" className="hover:underline">
            Read on Blog →
          </Link>
        </p>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        aria-label="Previous article"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        aria-label="Next article"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
        {recentArticles.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to article ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCarousel;
