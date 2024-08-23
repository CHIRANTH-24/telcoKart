import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    image: "/images/cyber.png",
    name: "Event Name",
    date: "Date",
    time: "Time",
    city: "City",
    venue: "Venue",
    mode: "Mode",
  },
  {
    image: "/images/cyber.png",
    name: "Event Name",
    date: "Date",
    time: "Time",
    city: "City",
    venue: "Venue",
    mode: "Mode",
  },
  {
    image: "/images/cyber.png",
    name: "Event Name",
    date: "Date",
    time: "Time",
    city: "City",
    venue: "Venue",
    mode: "Mode",
  },
  {
    image: "/images/cyber.png",
    name: "Event Name",
    date: "Date",
    time: "Time",
    city: "City",
    venue: "Venue",
    mode: "Mode",
  },
];

export default function Events() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 pt-8">
      <div className="flex items-center space-x-2 mb-4 justify-center">
        <Badge className="bg-yellow-400 text-black">EVENT</Badge>
        <Badge className="bg-yellow-400 text-black">WEBINAR</Badge>
      </div>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {events.map((event, index) => (
          <Card key={index} className="flex-shrink-0 w-64">
            <CardHeader className="p-0">
              {/* <img
                src={event.image}
                alt={event.name}
                className="w-full h-40 object-cover"
              /> */}
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
