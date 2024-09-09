import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { id: 1, src: "/images/airpod.png", title: "Airpods" },
  { id: 2, src: "/images/camera.png", title: "Camera" },
  { id: 3, src: "/images/sony.png", title: "Sony Headphones" },
  { id: 4, src: "/images/Trending/dol.jpg", title: "Doll" },
  { id: 5, src: "/images/Trending/pens.jpg", title: "Pens" },
];
const extendedImages = [...images, ...images].slice(0, 8);

export default function PrimeBrand() {
  return (
    <div className="w-full p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Apple for Business</h2>
      <div className="flex justify-between h-[350px]">
        {/* Carousel Section */}
        <div className="relative w-[1050px]">
          <Carousel className="w-full">
            <CarouselContent className="flex space-x-4">
              {extendedImages.map((image) => (
                <CarouselItem key={image.id} className="basis-1/8 pl-4">
                  <Card className="shadow-md h-full flex flex-col justify-between">
                    <div>
                      <CardHeader className="flex justify-center items-center p-2">
                        <CardTitle className="text-sm">{image.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex justify-center items-center p-2">
                        <Image
                          src={image.src}
                          alt={image.title}
                          width={150}
                          height={150}
                          className="rounded-md object-cover"
                        />
                      </CardContent>
                    </div>
                    <div className="p-3">
                      <Button
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md transition-colors"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Navigation */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <CarouselPrevious className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition">
                <ChevronLeft className="w-6 h-6 text-black" />
              </CarouselPrevious>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <CarouselNext className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition">
                <ChevronRight className="w-6 h-6 text-black" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>

        {/* Advertisement Section */}
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
