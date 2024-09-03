import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  { id: 1, src: "/images/Prime Brands/azure.jpg", title: "Card 1" },
  { id: 2, src: "/images/Prime Brands/visitor.jpg", title: "Card 2" },
  { id: 3, src: "/images/Prime Brands/vms.png", title: "Card 3" },
  { id: 4, src: "/images/Prime Brands/azure.jpg", title: "Card 4" },
  { id: 5, src: "/images/Prime Brands/vms.png", title: "Card 1" },
  { id: 6, src: "/images/Prime Brands/visitor.jpg", title: "Card 2" },
  { id: 7, src: "/images/Prime Brands/azure.jpg", title: "Card 3" },
  { id: 8, src: "/images/Prime Brands/visitor.jpg", title: "Card 4" },
];
const extendedImages = [...images, ...images].slice(0, 8);

export function PrimeBrand() {
  return (
    <div>
      
        <h2 className="pl-4 text-2xl font-bold mb-4">Prime Brands</h2>
      
      <div>
        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full  max-h-max ml-10"
          >
            <CarouselContent>
              {extendedImages.map((image) => (
                <CarouselItem key={image.id} className="basis-1/8 pl-4">
                  <Card className="shadow-md h-full">
                    <CardContent className="flex justify-center items-center p-2">
                      <Image
                        src={image.src}
                        alt={image.title}
                        width={400}
                        height={200}
                        className=" "
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
