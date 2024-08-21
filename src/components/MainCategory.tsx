// components/PrimeBrand.tsx
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react"; // Assuming lucide-react is used for icons
import Image from "next/image";

const cardItems = [
  { id: 1, name: "Mobility", logo: "/logos/mobility.png" },
  { id: 2, name: "Data Connectivity", logo: "/logos/data_connectivity.png" },
  {
    id: 3,
    name: "Digital Voice and Solutions",
    logo: "/logos/digital_voice.png",
  },
  { id: 4, name: "SMS and BOTS", logo: "/logos/sms_bots.png" },
  { id: 5, name: "Electronics", logo: "/logos/electronics.png" },
  { id: 6, name: "Cyber Security", logo: "/logos/cyber_security.png" },
  { id: 7, name: "Data Center and Cloud", logo: "/logos/data_center.png" },
  { id: 8, name: "Software", logo: "/logos/software.png" },
  { id: 9, name: "Gig Community", logo: "/logos/gig_community.png" },
  { id: 10, name: "Startups", logo: "/logos/startups.png" },
];

export default function MainCategory() {
  return (
  <div className="container mx-auto px-2 py-4">
    <div className="flex justify-between items-center overflow-x-auto space-x-2">
      {cardItems.map((item) => (
        <Card key={item.id} className="flex-shrink-0 flex flex-col items-center justify-between p-2 h-24 w-32">
          <CardHeader className="flex items-center justify-between w-full">
            <Image src={item.logo} alt={item.name} width={20} height={20} className="mr-2" />
            <div className="flex items-center justify-between w-full">
              <CardTitle className="text-center text-[10px] md:text-xs">{item.name}</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none ml-1">
                  <ChevronDown className="text-gray-600 w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* Add Dropdown content here */}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  </div>
);


}
