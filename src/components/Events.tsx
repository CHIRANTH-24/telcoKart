import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useState } from "react";
const events = [
  {
    image: "/images/Prime Brands/vms.png",
    name: "Event Name",
    date: "Date",
    time: "Time",
    city: "City",
    venue: "Venue",
    mode: "Mode",
  },
  {
    image: "/images/Prime Brands/visitor (1).jpg",
    name: "Event Name",
    date: "Date",
    time: "Time",
    city: "City",
    venue: "Venue",
    mode: "Mode",
  },
  {
    image: "/images/Prime Brands/visitor.jpg",
    name: "Event Name",
    date: "Date",
    time: "Time",
    city: "City",
    venue: "Venue",
    mode: "Mode",
  },
  {
    image: "/images/Prime Brands/vms.png",
    name: "Event Name",
    date: "Date",
    time: "Time",
    city: "City",
    venue: "Venue",
    mode: "Mode",
  },
];

export default function Events() {
  const [isEventActive, setIsEventActive] = useState(false);
  const [isWebinarActive, setIsWebinarActive] = useState(false);
  const [activeBadge, setActiveBadge] = useState<string | null>(null);
  
  const handleBadgeClick = (badge: string) => {
    setActiveBadge(badge);
  };
  
  return (
    <div className="w-full p-4 pt-8">
      <div className="flex items-center space-x-2 mb-4 justify-center">
        <Badge
          onClick={() => handleBadgeClick("event")}
          className={`cursor-pointer ${
            activeBadge === "event" ? "bg-yellow-400" : "bg-white"
          } text-black ${
            activeBadge === "webinar" ? "opacity-50 " : ""
            }`}
          variant={"secondary"}
        >
          EVENT
        </Badge>
        <Badge
          onClick={() => handleBadgeClick("webinar")}
          className={`cursor-pointer ${
            activeBadge === "webinar" ? "bg-yellow-400" : "bg-white"
          } text-black ${
            activeBadge === "event" ? "opacity-50" : ""
            }`}
          variant={"secondary"}
        >
          WEBINAR
        </Badge>
      </div>
      <div className="w-full flex justify-center overflow-x-auto space-x-4 pb-4">
        {events.map((event, index) => (
          <Card key={index} className="flex-shrink-0 w-64">
            <CardHeader className="p-0">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-40 "
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg mb-2">{event.name}</CardTitle>
              <div className="grid grid-cols-2 gap-1 text-sm">
                <div>{event.date}</div>
                <div>{event.city}</div>
                <div>{event.time}</div>
                <div>{event.venue}</div>
                <div>{event.mode}</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                DOWNLOAD / BUY
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
