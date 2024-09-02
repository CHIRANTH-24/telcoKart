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
  { id: 5, src: "/images/Trending/pens.jpg", title: "Card 5" }
  // { id: 6, src: "/images/Trending/peanut.jpg", title: "Card 6" },
  // { id: 7, src: "/images/Trending/dol.jpg", title: "Card 7" },
  // { id: 8, src: "/images/Trending/pens.jpg", title: "Card 8" },
  // { id: 9, src: "/images/Trending/peanut.jpg", title: "Card 9" },
];

// Duplicate and limit array for sufficient items
const extendedImages = [...images, ...images].slice(0, 8);

export default function Component() {

  return (
    <div className="w-full p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Apple for Business</h2>
      <div className="flex justify-between h-[300px]">
        <div className="relative w-[1300px]">
          <Carousel className="w-full">
            <CarouselContent>
              {extendedImages.map((image) => (
                <CarouselItem key={image.id} className="basis-1/8 pl-4">
                  <Card className="shadow-md h-full">
                    <CardHeader className="flex justify-center items-center p-2">
                      <CardTitle className="text-sm">{image.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center items-center p-2">
                      <Image
                        src={image.src}
                        alt={image.title}
                        width={200}
                        height={200}
                        className="rounded-md object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant={"secondary"} />
            <CarouselNext variant={"secondary"} />
          </Carousel>
        </div>

        <div className="ml-4 w-[250px] h-[230px]">
          <div className="relative w-full h-full">
            <Image
              src="/images/airIndia.png"
              alt="Advertisement"
              height={250}
              width={200}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
