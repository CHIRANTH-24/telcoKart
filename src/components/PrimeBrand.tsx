// components/PrimeBrand.tsx
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

const images = [
  { id: 1, src: "/images/card1.jpg", title: "Card 1" },
  { id: 2, src: "/images/card2.jpg", title: "Card 2" },
  { id: 3, src: "/images/card3.jpg", title: "Card 3" },
  { id: 4, src: "/images/card4.jpg", title: "Card 4" },
  { id: 5, src: "/images/card5.jpg", title: "Card 5" },
  { id: 6, src: "/images/card6.jpg", title: "Card 6" },
  // Add more images as needed
];

export default function PrimeBrand() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-8">
      <div className="relative w-full flex items-center justify-between">
        {/* Previous Button */}
        <Button onClick={handlePrev} className="absolute left-0 z-10 p-3">
          &#8592;
        </Button>

        {/* Cards Display */}
        <div className="flex justify-center space-x-4 overflow-hidden">
          {images.slice(currentIndex, currentIndex + 3).map((image) => (
            <Card key={image.id} className="w-80 shadow-md">
              <CardHeader className="flex justify-center items-center">
                <CardTitle>{image.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={image.src}
                  alt={image.title}
                  width={320}
                  height={240}
                  className="rounded-md"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Next Button */}
        <Button onClick={handleNext} className="absolute right-0 z-10 p-3">
          &#8594;
        </Button>
      </div>
    </div>
  );
}
