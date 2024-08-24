// components/Show.tsx
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "./ui/button"; // Adjust import based on your UI library

interface ShowProps {
  images: string[]; // Array of image URLs
}

const Show: React.FC<ShowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState<string[]>(images);

  useEffect(() => {
    setVisibleImages(images);
  }, [images]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  return (
    <div className="relative w-full justify-center">
      <div className="relative w-full h-0 pb-[18.46%]">
        {" "}
        {/* Aspect ratio 1454:269.81 */}
        <Image
          src={visibleImages[currentIndex]}
          alt={`Product Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <button
        onClick={handlePrev}
        className="custom-class absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="custom-class absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700"
      >
        &gt;
      </button>
    </div>
  );
};

export default Show;
