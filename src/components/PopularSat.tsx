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
  { name: "M19 Earbuds", image: "/images/earpode.jpg" },
  { name: "Hair Clippers", image: "/images/earpode.jpg" },
  { name: "Malhotra Watch", image: "/images/earpode.jpg" },
  { name: "HiWatch Watch", image: "/images/earpode.jpg" },
];

export default function PopularSat() {
  return (
    <div className="w-full p-4 space-y-4 justify-center ">
      <h2 className="text-2xl font-bold mb-4">Popular Satellite Services</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="mr-10 ">
          <Carousel
            // opts={{
            //   align: "start",
            //   loop: true,
            // }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="max-w-sm w-full"
          >
            <CarouselContent className="w-fit mx-auto">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 flex items-center gap-2">
                    {products.slice(0, 2).map((product, index) => (
                      <Card key={index} className=" h-full ">
                        <CardContent>
                          <Image
                            src={product.image}
                            height={150}
                            width={150}
                            alt="Image"
                            className="object-cover"
                          />
                          <Button className="w-full mt-2 ">Login</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="p-1 flex items-center gap-2">
                    {products.slice(2, 4).map((product, index) => (
                      <Card key={index} className="">
                        <CardContent>
                          <Image
                            src={product.image}
                            height={150}
                            width={150}
                            alt="Image"
                          />
                          <Button className="w-full mt-2 ">Login</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant={"secondary"} />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="w-full space-y-4">
          <div className="relative h-48  rounded-lg overflow-hidden">
            <Image
              src="/images/slider.png"
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
              src="/images/cctv.jpg"
              alt="CCTV Cameras"
              className="w-full h-full object-cover"
              width={120}
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
