import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const certifications = Array(6).fill("/images/Business/iso.jpg"); // 12 certifications for smooth infinite scroll

export default function BrandCerti() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = useCallback((direction: "left" | "right") => {
    const scrollAmount = direction === "left" ? 0 : 120;
    setScrollPosition((prevPosition) => {
      const newPosition = prevPosition + scrollAmount;
      if (newPosition < 0) return 720 + newPosition; // Wrap around to the end
      if (newPosition >= 720) return newPosition - 720; // Wrap around to the beginning
      return newPosition;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => scroll("left"), 3000); // Auto-scroll every 3 seconds
    return () => clearInterval(interval);
  }, [scroll]);

  return (
    <>
      <h2
        className="pl-4 text-2xl font-bold mb-4 px-2 py-10"
      >
        Business Certification
      </h2>
      <div className="flex justify-center relative  px-2 py-4">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {certifications.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-[120px] h-[120px] mx-4">
              <Image
                src={src}
                alt={`ISO 9001:2015 Certification ${index + 1}`}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll("left")}
          className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
