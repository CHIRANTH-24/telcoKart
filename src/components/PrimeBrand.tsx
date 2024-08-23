import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Image from "next/image";

const images = [
  { id: 1, src: "/images/airpod.png", title: "Card 1" },
  { id: 2, src: "/images/camera.png", title: "Card 2" },
  { id: 3, src: "/images/sony.png", title: "Card 3" },
  { id: 4, src: "/images/Trending/dol.jpg", title: "Card 4" },
  { id: 5, src: "/images/Trending/pens.jpg", title: "Card 5" },
  { id: 6, src: "/images/Trending/peanut.jpg", title: "Card 6" },
];

export default function PrimeBrand() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-8">
      <div className="grid grid-cols-6 gap-4">
        {images.map((image) => (
          <Card key={image.id} className="w-full shadow-md">
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
    </div>
  );
}
