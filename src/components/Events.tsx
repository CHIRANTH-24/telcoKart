import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Image from "next/image";

const events = [
  {
    image: "/images/Prime Brands/vms.png",
    name: "Tech Conference",
    date: "September 15, 2024",
    time: "10:00 AM",
    city: "San Francisco",
    venue: "Tech Hall",
    mode: "In-Person",
  },
  {
    image: "/images/Prime Brands/visitor (1).jpg",
    name: "AI & Data Science Summit",
    date: "October 22, 2024",
    time: "2:00 PM",
    city: "New York",
    venue: "Data Center",
    mode: "Virtual",
  },
  {
    image: "/images/Prime Brands/visitor.jpg",
    name: "Web Dev Bootcamp",
    date: "November 5, 2024",
    time: "9:00 AM",
    city: "Austin",
    venue: "Code Arena",
    mode: "Hybrid",
  },
  {
    image: "/images/Prime Brands/vms.png",
    name: "Cybersecurity Expo",
    date: "December 10, 2024",
    time: "11:00 AM",
    city: "Los Angeles",
    venue: "Expo Center",
    mode: "In-Person",
  },
];

export default function Events() {
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  const handleBadgeClick = (badge: string) => {
    setActiveBadge(badge);
  };

  return (
    <div className="w-full p-4 pt-8">
      <div className="flex items-center justify-center space-x-4 mb-6">
        <Badge
          onClick={() => handleBadgeClick("event")}
          className={`cursor-pointer px-4 py-2 ${
            activeBadge === "event" ? "bg-yellow-400" : "bg-gray-100"
          } text-black rounded-lg ${
            activeBadge === "webinar" ? "opacity-50" : ""
          }`}
        >
          EVENT
        </Badge>
        <Badge
          onClick={() => handleBadgeClick("webinar")}
          className={`cursor-pointer px-4 py-2 ${
            activeBadge === "webinar" ? "bg-yellow-400" : "bg-gray-100"
          } text-black rounded-lg ${
            activeBadge === "event" ? "opacity-50" : ""
          }`}
        >
          WEBINAR
        </Badge>
      </div>
      <div className="w-full flex justify-center space-x-6 pb-4">
        {events.map((event, index) => (
          <Card key={index} className="flex-shrink-0 w-1/4 shadow-lg">
            <CardHeader className="p-0">
              <Image
                width={200 }
                height={300}
                src={event.image}
                alt={event.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg mb-2">{event.name}</CardTitle>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>{event.date}</div>
                <div>{event.city}</div>
                <div>{event.time}</div>
                <div>{event.venue}</div>
                <div>{event.mode}</div>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm py-2 rounded-md">
                DOWNLOAD / BUY
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
