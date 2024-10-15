"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type BannerProps = {
  images: string[];
};

export default function Banner({ images }: BannerProps) {
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
}
