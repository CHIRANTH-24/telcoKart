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
    <div className="px-4 ">
      <div className="overflow-x-auto flex space-x-4 justify-center">
        {/* Repeat this card component as needed */}
        <Card className="w-[350px] flex-shrink-0 shadow-md">
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle>ZOHO CRM</CardTitle>
              <CardDescription>Zoho Corporation</CardDescription>
            </div>
            <img
              src="images/ZohoCRM/zoho.png" // Replace with actual image path
              alt="Zoho Logo"
              className="w-10 h-10"
            />
          </CardHeader>
          <CardContent className="flex flex-col space-y-4 justify-center">
            <div className="flex space-x-2 justify-center">
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                FEATURES
              </Badge>
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                PLANS
              </Badge>
            </div>

            <Button variant="outline" className="w-full border border-gray-700">
              GET FREE DEMO
            </Button>
          </CardContent>
          <CardFooter className="flex gap-6 text-center justify-center">
            <div>
              <p className=" text-gray-600">Starting at</p>
              <p className=" font-semibold">$1350</p>
            </div>
            <Button variant="secondary" className="mt-2">
              Prize On Request
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-[350px] flex-shrink-0 shadow-md">
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle>ZOHO CRM</CardTitle>
              <CardDescription>Zoho Corporation</CardDescription>
            </div>
            <img
              src="images/ZohoCRM/zoho.png" // Replace with actual image path
              alt="Zoho Logo"
              className="w-10 h-10"
            />
          </CardHeader>
          <CardContent className="flex flex-col space-y-4 justify-center">
            <div className="flex space-x-2 justify-center">
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                FEATURES
              </Badge>
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                PLANS
              </Badge>
            </div>

            <Button variant="outline" className="w-full border border-gray-700">
              GET FREE DEMO
            </Button>
          </CardContent>
          <CardFooter className="flex gap-6 text-center justify-center">
            <div>
              <p className=" text-gray-600">Starting at</p>
              <p className=" font-semibold">$1350</p>
            </div>
            <Button variant="secondary" className="mt-2">
              Prize On Request
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-[350px] flex-shrink-0 shadow-md">
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle>ZOHO CRM</CardTitle>
              <CardDescription>Zoho Corporation</CardDescription>
            </div>
            <img
              src="images/ZohoCRM/zoho.png" // Replace with actual image path
              alt="Zoho Logo"
              className="w-10 h-10"
            />
          </CardHeader>
          <CardContent className="flex flex-col space-y-4 justify-center">
            <div className="flex space-x-2 justify-center">
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                FEATURES
              </Badge>
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                PLANS
              </Badge>
            </div>

            <Button variant="outline" className="w-full border border-gray-700">
              GET FREE DEMO
            </Button>
          </CardContent>
          <CardFooter className="flex gap-6 text-center justify-center">
            <div>
              <p className=" text-gray-600">Starting at</p>
              <p className=" font-semibold">$1350</p>
            </div>
            <Button variant="secondary" className="mt-2">
              Prize On Request
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-[350px] flex-shrink-0 shadow-md">
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle>ZOHO CRM</CardTitle>
              <CardDescription>Zoho Corporation</CardDescription>
            </div>
            <img
              src="images/ZohoCRM/zoho.png" // Replace with actual image path
              alt="Zoho Logo"
              className="w-10 h-10"
            />
          </CardHeader>
          <CardContent className="flex flex-col space-y-4 justify-center">
            <div className="flex space-x-2 justify-center">
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                FEATURES
              </Badge>
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                PLANS
              </Badge>
            </div>

            <Button variant="outline" className="w-full border border-gray-700">
              GET FREE DEMO
            </Button>
          </CardContent>
          <CardFooter className="flex gap-6 text-center justify-center">
            <div>
              <p className=" text-gray-600">Starting at</p>
              <p className=" font-semibold">$1350</p>
            </div>
            <Button variant="secondary" className="mt-2">
              Prize On Request
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-[350px] flex-shrink-0 shadow-md">
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle>ZOHO CRM</CardTitle>
              <CardDescription>Zoho Corporation</CardDescription>
            </div>
            <img
              src="images/ZohoCRM/zoho.png" // Replace with actual image path
              alt="Zoho Logo"
              className="w-10 h-10"
            />
          </CardHeader>
          <CardContent className="flex flex-col space-y-4 justify-center">
            <div className="flex space-x-2 justify-center">
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                FEATURES
              </Badge>
              <Badge
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                PLANS
              </Badge>
            </div>

            <Button variant="outline" className="w-full border border-gray-700">
              GET FREE DEMO
            </Button>
          </CardContent>
          <CardFooter className="flex gap-6 text-center justify-center">
            <div>
              <p className=" text-gray-600">Starting at</p>
              <p className=" font-semibold">$1350</p>
            </div>
            <Button variant="secondary" className="mt-2">
              Prize On Request
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
