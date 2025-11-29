import { useState, useEffect, useRef } from "react";

function Carousel({ items, autoSlideInterval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (!isPaused && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, autoSlideInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, items.length, autoSlideInterval]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-full">
              <div className="flex aspect-video w-full items-center justify-center rounded-lg border-2 border-[#b9ff1c]/30 bg-black/50 overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title || `Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `<div class="text-white text-xl">${item.title || `Slide ${index + 1}`}</div>`;
                    }}
                  />
                ) : (
                  <div className="text-white text-4xl font-bold">
                    {item.title || index + 1}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black text-[#b9ff1c] rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 border-2 border-[#b9ff1c]/50 hover:border-[#b9ff1c]"
        aria-label="Previous slide"
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black text-[#b9ff1c] rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 border-2 border-[#b9ff1c]/50 hover:border-[#b9ff1c]"
        aria-label="Next slide"
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      {items.length > 1 && (
        <div className="flex justify-center mt-4 sm:mt-6 gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#b9ff1c] w-8"
                  : "bg-[#b9ff1c]/30 w-3 hover:bg-[#b9ff1c]/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;

