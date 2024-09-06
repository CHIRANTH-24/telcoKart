// components/SoftwareCard.js
import { Card, CardContent } from "./ui/card";

export default function SoftwareCard() {
  return (
    <div className="px-4 py-4">
      <div className="overflow-x-auto flex justify-center">
        <Card className="w-full shadow-md">
          <CardContent className="flex justify-center">
            <img
              src="images/static-img.jpg" // Replace with actual image path
              alt="Static Banner"
              className="w-[1382px] h-[250px] object-cover"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
