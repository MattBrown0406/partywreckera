import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import blogImageMinimizingAddiction from "@/assets/blog-minimizing-addiction.jpg";
import blogImageGamblingAddiction from "@/assets/blog-gambling-addiction.jpg";
import blogImageFamilyQuestionsAddiction from "@/assets/blog-family-questions-addiction.jpg";
import blogImageEnablingFearHousehold from "@/assets/blog-enabling-fear-household.jpg";
import blogImageAdviceFailsSpectacularly from "@/assets/blog-advice-fails-spectacularly.jpg";

const recentArticles = [
  {
    id: "minimizing-addiction-families",
    title: "\"It's Not That Bad\"… Until It Is: How Families Get Stuck Minimizing Addiction",
    date: "January 18, 2026",
    image: blogImageMinimizingAddiction,
    imageAlt: "Family sitting in living room looking tense with elephant shadow in background representing unspoken issues",
  },
  {
    id: "gambling-addiction-hidden-damage",
    title: "Gambling Addiction Doesn't Look Like Addiction—Until the Damage Is Already Done",
    date: "January 17, 2026",
    image: blogImageGamblingAddiction,
    imageAlt: "Person at kitchen table late at night with laptop and phone showing gambling apps, surrounded by bills",
  },
  {
    id: "family-questions-addiction",
    title: "The Questions Families Are Really Asking About Addiction (And Honest Answers)",
    date: "January 16, 2026",
    image: blogImageFamilyQuestionsAddiction,
    imageAlt: "Family gathered at kitchen table researching treatment options with laptop and papers",
  },
  {
    id: "enabling-fear-household",
    title: "Enabling Isn't Weakness — It's What Happens When Fear Runs the Household",
    date: "January 3, 2026",
    image: blogImageEnablingFearHousehold,
    imageAlt: "Family in living room walking on eggshells with storm clouds visible through window",
  },
  {
    id: "advice-fails-spectacularly",
    title: "Why the Advice Families Get About Addiction Sounds Great—and Fails Spectacularly in Real Life",
    date: "January 2, 2026",
    image: blogImageAdviceFailsSpectacularly,
    imageAlt: "Frustrated family at kitchen table surrounded by hollow advice speech bubbles",
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
