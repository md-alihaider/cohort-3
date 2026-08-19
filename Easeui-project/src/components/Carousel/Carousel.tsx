import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/libs/utils";

interface CarouselProps {
  items: React.ReactNode[];
  className?: string;
  showArrows?: boolean;
  showDots?: boolean;
  loop?: boolean;
}

const Carousel = ({
  items,
  className,
  showArrows = true,
  showDots = true,
  loop = true,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === items.length - 1) {
        return loop ? 0 : prev;
      }

      return prev + 1;
    });
  };

  const previousSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return loop ? items.length - 1 : prev;
      }

      return prev - 1;
    });
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* Slide */}
      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
        {items[currentIndex]}
      </div>

      {/* Controls */}
      {(showArrows || showDots) && (
        <div className="mt-4 flex items-center justify-center gap-4">
          {showArrows && (
            <button
              type="button"
              onClick={previousSlide}
              disabled={!loop && currentIndex === 0}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
          )}

          {showDots && (
            <div className="flex items-center gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2.5 w-2.5 cursor-pointer rounded-full transition",
                    index === currentIndex ? "bg-indigo-600" : "bg-gray-300",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {showArrows && (
            <button
              type="button"
              onClick={nextSlide}
              disabled={!loop && currentIndex === items.length - 1}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Carousel;
