// components/Show.tsx
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "./ui/button"; // Adjust import based on your UI library
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


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
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {visibleImages.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <Image
                    src={img}
                    alt={`Product Image ${currentIndex + 1}`}
                    objectFit="cover"
                    className="rounded-lg w-full h-72"
                    width={1000}
                    height={1000}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Show;


