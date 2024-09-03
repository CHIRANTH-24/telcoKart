import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";

const columns = [
  {
    title: "Applications",
    items: [
      "CRM",
      "Marketing",
      "Generate Leads",
      "Appointment Booking",
      "Payment Collection",
      "Ticket Booking",
    ],
  },
  {
    title: "Features",
    items: [
      "Free WhatsApp Business API",
      "Broadcast Unlimited Campaigns",
      "Multi-Agent Live Chat",
      "Connect No Code A.I Chatbot",
      "Import and Export Contact",
      "Click-To-WhatsApp-ADs",
    ],
  },
  {
    title: "Industries",
    items: [
      "Ecommerce",
      "Education",
      "Fintech",
      "Automobile",
      "HealthCare",
      "Insurance",
    ],
  },
];

export default function Whatsapp() {
  return (
    <div className="flex justify-center p-6">
      <Card className="w-full  p-4 shadow-lg content-between">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <Phone className="h-8 w-8 text-green-500" />
            <CardTitle className="text-2xl font-bold">
              WhatsApp Business API
            </CardTitle>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-sm px-4 py-2">
            START 14-DAY FREE TRIAL
          </Button>
        </CardHeader>
        <CardContent className="space-y-6 content-between">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {columns.map((column, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold">{column.title}</h3>
                <ul className="space-y-1">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-sm px-4 py-2">
              Become Partner
            </Button>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-sm px-4 py-2">
              WhatsApp Business API FREE
            </Button>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-sm px-4 py-2">
              Get Whitelabel Soln
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
