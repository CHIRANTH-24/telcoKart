import { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { id: 1, src: "/images/airpod.png", title: "Card 1" },
  { id: 2, src: "/images/camera.png", title: "Card 2" },
  { id: 3, src: "/images/sony.png", title: "Card 3" },
  { id: 4, src: "/images/Trending/dol.jpg", title: "Card 4" },
  { id: 5, src: "/images/Trending/pens.jpg", title: "Card 5" },
];

// Duplicate and limit array for sufficient items
const extendedImages = [...images, ...images].slice(0, 8);

export default function Component() {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-2xl font-bold mb-4">Apple for Business</h2>
      <div className="flex items-center justify-between">
        <Carousel className="w-[80%] mx-auto grid place-items-center relative">
          <CarouselContent>
            {extendedImages.map((image) => (
              <CarouselItem key={image.id} className="basis-1/4 flex justify-center">
                <Card className="shadow-md">
                  <CardHeader className="flex justify-center items-center p-2">
                    <CardTitle className="text-sm">{image.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[35ch] flex flex-col justify-between items-center">
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={200}
                      height={200}
                      className="rounded-md object-contain"
                    />
                    <Button size={'sm'} className="w-full mb-4">Buy Now</Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white text-black absolute left-5" />
          <CarouselNext className="bg-white text-black absolute right-5" />
        </Carousel>


        <div className="w-[20%] grid place-items-center px-2">
          <Image
            src="/images/airIndia.png"
            alt="Advertisement"
            height={300}
            width={300}
            className="w-full h-[35ch] rounded-md object-fill"
          />
        </div>
      </div>
    </div>
  );
}
