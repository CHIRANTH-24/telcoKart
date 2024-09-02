// components/SoftwareCard.js
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function SoftwareCard() {
  return (
    <div className="px-4 py-8">
      <div className="overflow-x-auto flex space-x-6 justify-center">
        {/* First Card */}
        <Card className="w-[320px] flex-shrink-0 shadow-lg rounded-lg">
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg font-bold text-gray-900">ZOHO CRM</CardTitle>
              <CardDescription className="text-gray-500">Zoho Corporation</CardDescription>
            </div>
            <img
              src="images/ZohoCRM/zoho.png" // Replace with actual image path
              alt="Zoho Logo"
              className="w-12 h-12"
            />
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <div className="flex space-x-2 justify-center">
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300 px-4 py-2"
              >
                FEATURES
              </Badge>
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300 px-4 py-2"
              >
                PLANS
              </Badge>
            </div>

            <Button variant="outline" className="w-full border border-gray-700 py-2">
              GET FREE DEMO
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2 text-center">
            <div className="text-gray-600">
              <p>Starting at</p>
              <p className="text-lg font-semibold">$1350</p>
            </div>
            <Button variant="secondary" className="py-2 px-4">
              Prize On Request
            </Button>
          </CardFooter>
        </Card>

        {/* Second Card */}
        <Card className="w-[320px] flex-shrink-0 shadow-lg rounded-lg">
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg font-bold text-gray-900">ZOHO CRM</CardTitle>
              <CardDescription className="text-gray-500">Zoho Corporation</CardDescription>
            </div>
            <img
              src="images/ZohoCRM/zoho.png" // Replace with actual image path
              alt="Zoho Logo"
              className="w-12 h-12"
            />
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <div className="flex space-x-2 justify-center">
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300 px-4 py-2"
              >
                FEATURES
              </Badge>
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300 px-4 py-2"
              >
                PLANS
              </Badge>
            </div>

            <Button variant="outline" className="w-full border border-gray-700 py-2">
              GET FREE DEMO
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2 text-center">
            <div className="text-gray-600">
              <p>Starting at</p>
              <p className="text-lg font-semibold">$1350</p>
            </div>
            <Button variant="secondary" className="py-2 px-4">
              Prize On Request
            </Button>
          </CardFooter>
        </Card>

        {/* Third Card */}
        <Card className="w-[320px] flex-shrink-0 shadow-lg rounded-lg">
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg font-bold text-gray-900">ZOHO CRM</CardTitle>
              <CardDescription className="text-gray-500">Zoho Corporation</CardDescription>
            </div>
            <img
              src="images/ZohoCRM/zoho.png" // Replace with actual image path
              alt="Zoho Logo"
              className="w-12 h-12"
            />
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <div className="flex space-x-2 justify-center">
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300 px-4 py-2"
              >
                FEATURES
              </Badge>
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300 px-4 py-2"
              >
                PLANS
              </Badge>
            </div>

            <Button variant="outline" className="w-full border border-gray-700 py-2">
              GET FREE DEMO
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2 text-center">
            <div className="text-gray-600">
              <p>Starting at</p>
              <p className="text-lg font-semibold">$1350</p>
            </div>
            <Button variant="secondary" className="py-2 px-4">
              Prize On Request
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
