import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";

const FourRectangularElements = () => {
  const sections = [
    {
      title: "Wedding Requisites",
      image: "/images/wedding.jpg", // Replace with your actual image path
      alt: "Wedding",
    },
    {
      title: "Beauty & Spa",
      image: "/images/beauty.jpg", // Replace with your actual image path
      alt: "Beauty",
    },
    {
      title: "Repairs & Services",
      image: "/images/repairs.jpg", // Replace with your actual image path
      alt: "Repairs",
    },
    {
      title: "Daily Needs",
      image: "/images/daily.jpg", // Replace with your actual image path
      alt: "Daily Needs",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 px-4 py-12">
      {sections.map((section, index) => (
        <Card key={index} className="w-full md:w-1/4 border border-gray-200 rounded-lg shadow-lg">
          <Image
            src={section.image}
            alt={section.alt}
            width={300}
            height={200}
            className="rounded-t-lg"
          />
          <CardContent className="p-4 text-center">
            <CardTitle className="text-xl font-semibold">
              {section.title}
            </CardTitle>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FourRectangularElements;
