import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import blogImageRockBottomMyth from "@/assets/blog-rock-bottom-myth.jpg";
import blogImageModerationLoophole from "@/assets/blog-moderation-loophole.jpg";
import blogImageFunctionalAddictionHiding from "@/assets/blog-functional-addiction-hiding.jpg";
import blogImageJustAPhaseMyths from "@/assets/blog-just-a-phase-myths.jpg";
import blogImageComparisonTrapAddiction from "@/assets/blog-comparison-trap-addiction.jpg";
import blogImageMinimizingAddiction from "@/assets/blog-minimizing-addiction.jpg";

const recentArticles = [
  {
    id: "rock-bottom-addiction-myth",
    title: "Why \"Rock Bottom\" Stories Are Mostly Myth—and What Actually Forces Change",
    date: "January 23, 2026",
    image: blogImageRockBottomMyth,
    imageAlt: "Family having calm, intentional conversation in living room, gathered supportively rather than in crisis",
  },
  {
    id: "moderation-addiction-loophole",
    title: "\"They're Cutting Back\"… Why Moderation Becomes Addiction's Favorite Loophole",
    date: "January 22, 2026",
    image: blogImageModerationLoophole,
    imageAlt: "Family at kitchen table with measuring device, one person adjusting it while others look concerned",
  },
  {
    id: "functional-addiction-hiding",
    title: "\"They've Got It Under Control\"… Until They Don't: How Addiction Hides in Plain Sight",
    date: "January 21, 2026",
    image: blogImageFunctionalAddictionHiding,
    imageAlt: "Professional person at desk appearing composed with family in background looking uncertain",
  },
  {
    id: "just-a-phase-addiction-myths",
    title: "\"It's Just a Phase\"… and Other Lies Addiction Loves to Hear",
    date: "January 20, 2026",
    image: blogImageJustAPhaseMyths,
    imageAlt: "Family sitting on couch with thought bubbles showing 'just a phase' while tension fills the room",
  },
  {
    id: "comparison-trap-addiction",
    title: "\"At Least It's Not as Bad as It Used to Be\": The Most Dangerous Sentence Families Say",
    date: "January 19, 2026",
    image: blogImageComparisonTrapAddiction,
    imageAlt: "Family sitting around kitchen table with grading scale in background, one person shrugging while others look conflicted",
  },
  {
    id: "minimizing-addiction-families",
    title: "\"It's Not That Bad\"… Until It Is: How Families Get Stuck Minimizing Addiction",
    date: "January 18, 2026",
    image: blogImageMinimizingAddiction,
    imageAlt: "Family sitting in living room looking tense with elephant shadow in background representing unspoken issues",
  },
];

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
