"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const products = [
  { name: "M19 Earbuds", image: "/images/airpods.webp" },
  { name: "Hair Clippers", image: "/images/airpods.webp" },
  { name: "Malhotra Watch", image: "/images/airpods.webp" },
  { name: "HiWatch Watch", image: "/images/airpods.webp" },
];

export default function PopularSat() {
  return (
    <div className="w-full space-y-8">
      <h2 className="text-2xl font-bold mb-4">Popular Satellite Services</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="mr-10 ">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="max-w-sm w-full relative"
          >
            <CarouselContent className="w-fit mx-auto">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 flex items-center gap-2">
                    {products.slice(0, 2).map((product, index) => (
                      <Image
                        key={index}
                        src={product.image}
                        height={100}
                        width={100}
                        alt="Image"
                        className="object-cover"
                      />
                    ))}
                  </div>
                  <div className="p-1 flex items-center gap-2">
                    {products.slice(2, 4).map((product, index) => (
                      <Image
                        key={index}
                        src={product.image}
                        height={100}
                        width={100}
                        alt="Image"
                        className="object-cover"
                      />
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white text-black absolute left-5" />
            <CarouselNext className="bg-white text-black absolute right-5" />
          </Carousel>
        </div>
        <div className="w-full space-y-4">
          <div className="relative h-48  rounded-lg overflow-hidden">
            <Image
              src="/images/hotel1.jpg"
              alt="Book Hotels"
              className="w-full object-cover"
              width={120}
              height={400}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white text-center">
                Compare prices &<br />
                book hotels
              </h3>
            </div>
          </div>
          <div className="relative h-48 bg-blue-100 rounded-lg overflow-hidden">
            <Image
              src="/images/cctv1.jpg"
              alt="CCTV Cameras"
              className="w-full h-full object-cover"
              width={60}
              height={400}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white text-center">
                CCTV CAMERAS AND
                <br />
                ACCESSORIES
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
