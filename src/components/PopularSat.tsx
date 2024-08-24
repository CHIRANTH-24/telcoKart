import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { name: "M19 Earbuds", image: "/images/earpode.jpg" },
  { name: "Hair Clippers", image: "/images/earpode.jpg" },
  { name: "Malhotra Watch", image: "/images/earpode.jpg" },
  { name: "HiWatch Watch", image: "/images/earpode.jpg" },
];

export default function PopularSat() {
  return (
    <div className="w-full max-w-6xl p-4 space-y-4 ">
      <h2 className="text-2xl font-bold mb-4">Popular Satellite Services</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/5 grid grid-cols-2 gap-4">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardHeader className="p-4">
                {/* <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-20 object-contain"
                /> */}
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardTitle className="text-center text-sm">
                  {product.name}
                </CardTitle>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" className="w-full text-xs">
                  LOGIN / SIGN UP
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="w-full md:w-3/5 space-y-4">
          <div className="relative h-48 bg-orange-100 rounded-lg overflow-hidden">
            {/* <Image
              src="/placeholder.svg?height=192&width=640"
              alt="Book Hotels"
              className="w-full h-full object-cover"
            /> */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white text-center">
                Compare prices &<br />
                book hotels
              </h3>
            </div>
          </div>
          <div className="relative h-48 bg-blue-100 rounded-lg overflow-hidden">
            {/* <Image
              src="/placeholder.svg?height=192&width=640"
              alt="CCTV Cameras"
              className="w-full h-full object-cover"
            /> */}
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