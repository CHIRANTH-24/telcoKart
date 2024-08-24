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
    <Card className="w-full max-w-4xl">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <Phone className="h-8 w-8 text-green-500" />
          <CardTitle className="text-2xl font-bold">
            WhatsApp Business API
          </CardTitle>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          START 14-DAY FREE TRIAL
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Button className="w-full bg-green-600 hover:bg-green-700">
            Become Partner
          </Button>
          <Button className="w-full bg-green-600 hover:bg-green-700">
            Apply for WhatsApp Business API FREE
          </Button>
          <Button className="w-full bg-green-600 hover:bg-green-700">
            Get Whitelabel Soln
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
