"use client";

import Image from "next/image";
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
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="overflow-hidden relative"
    >
      <CarouselContent className="p-0">
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <Image
              src={img}
              alt={`Product Image ${index}`}
              objectFit="cover"
              className="rounded-lg w-full h-72"
              width={1000}
              height={1000}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-white text-black absolute left-4" />
      <CarouselNext className="bg-white text-black absolute right-4" />
    </Carousel>
  );
};

export default Show;
