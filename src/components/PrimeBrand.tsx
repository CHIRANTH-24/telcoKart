

// import { useEffect, useRef } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { AspectRatio } from "@/components/ui/aspect-ratio";




// export default function Component() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

//   useEffect(() => {
//     if (emblaApi) {
//       const interval = setInterval(() => {
//         emblaApi.scrollNext();
//       }, 3000);

//       return () => clearInterval(interval);
//     }
//   }, [emblaApi]);

//   return (
//     <div className="mx-auto max-w-[1650px]">
//       <h2 className="text-xl font-semibold mb-4">Apple for Business</h2>
//       <div className="flex justify-between h-[275px]">
//         <Carousel className="w-[1300px]" ref={emblaRef}>
//           <CarouselContent>
//             {images.map((image) => (
//               <CarouselItem key={image.id} className="basis-1/5">
//                 <Card className="shadow-md h-full">
//                   <CardHeader className="flex justify-center items-center">
//                     <CardTitle>{image.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent className="flex justify-center items-center">
//                     <Image
//                       src={image.src}
//                       alt={image.title}
//                       width={240}
//                       height={180}
//                       className="rounded-md object-cover"
//                     />
//                   </CardContent>
//                 </Card>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>

//         <div className="ml-4 w-[320px] h-full">
//           <AspectRatio ratio={16 / 9} className="h-full">
//             <Image
//               src="/images/airIndia.png"
//               alt="Advertisement"
//               fill
//               className="rounded-md object-cover"
//             />
//           </AspectRatio>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useRef } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";

// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const images = [
//   { id: 1, src: "/images/airpod.png", title: "Card 1" },
//   { id: 2, src: "/images/camera.png", title: "Card 2" },
//   { id: 3, src: "/images/sony.png", title: "Card 3" },
//   { id: 4, src: "/images/Trending/dol.jpg", title: "Card 4" },
//   { id: 5, src: "/images/Trending/pens.jpg", title: "Card 5" },
//   { id: 6, src: "/images/Trending/peanut.jpg", title: "Card 6" },
// ];


// export default function Component() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: "start",
//     slidesToScroll: 4,
//   });

//   useEffect(() => {
//     if (emblaApi) {
//       const interval = setInterval(() => {
//         emblaApi.scrollNext();
//       }, 3000);

//       return () => clearInterval(interval);
//     }
//   }, [emblaApi]);

//   const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
//   const scrollNext = () => emblaApi && emblaApi.scrollNext();

//   return (
//     <div className="mx-auto max-w-[1650px]">
//       <h2 className="text-xl font-semibold mb-4">Apple for Business</h2>
//       <div className="flex justify-between h-[300px]">
//         <div className="relative w-[1300px]">
//           <Carousel ref={emblaRef} className="w-full">
//             <CarouselContent>
//               {images.map((image) => (
//                 <CarouselItem key={image.id} className="basis-1/4">
//                   <Card className="shadow-md h-full">
//                     <CardHeader className="flex justify-center items-center">
//                       <CardTitle>{image.title}</CardTitle>
//                     </CardHeader>
//                     <CardContent className="flex justify-center items-center">
//                       <Image
//                         src={image.src}
//                         alt={image.title}
//                         width={240}
//                         height={180}
//                         className="rounded-md object-cover"
//                       />
//                     </CardContent>
//                   </Card>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </Carousel>
//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
//             onClick={scrollPrev}
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
//             onClick={scrollNext}
//           >
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         </div>

//         <div className="ml-4 w-[310px] h-[300px]">
//           <div className="relative w-full h-full">
//             <Image
//               src="/images/airIndia.png"
//               alt="Advertisement"
//               fill
//               className="rounded-md object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import  useEmblaCarousel  from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { id: 1, src: "/images/airpod.png", title: "Card 1" },
  { id: 2, src: "/images/camera.png", title: "Card 2" },
  { id: 3, src: "/images/sony.png", title: "Card 3" },
  { id: 4, src: "/images/Trending/dol.jpg", title: "Card 4" },
  { id: 5, src: "/images/Trending/pens.jpg", title: "Card 5" },
  { id: 6, src: "/images/Trending/peanut.jpg", title: "Card 6" },
];

// Duplicate the array to have at least 8 items
const extendedImages = [...images, ...images].slice(0, 8);

export default function Component() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 8,
  });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
// mx-auto max-w-[1650px]
  return (
    <div className="w-full max-w-6xl p-4 space-y-4 ">
      <h2 className="text-2xl font-bold mb-4">
        Apple for Business
      </h2>
      <div className="flex justify-between h-[300px]">
        <div className="relative w-[1300px]">
          <Carousel ref={emblaRef} className="w-full">
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
                        width={120}
                        height={90}
                        className="rounded-md object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="ml-4 w-[310px] h-[300px]">
          <div className="relative w-full h-full">
            <Image
              src="/images/airIndia.png"
              alt="Advertisement"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}