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

export default function SoftwareCard() {
  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto flex space-x-4">
        {/* Repeat this card component as needed */}
        <Card className="w-80 flex-shrink-0 shadow-md">
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle>ZOHO CRM</CardTitle>
              <CardDescription>Zoho Corporation</CardDescription>
            </div>
            {/* <img
              src="/zoho-logo.png" // Replace with actual image path
              alt="Zoho Logo"
              className="w-10 h-10"
            /> */}
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                FEATURES
              </Button>
              <Button
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                PLANS
              </Button>
              <Button
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                FEATURES
              </Button>
              <Button
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                FEATURES
              </Button>
            </div>

            <Button variant="default" className="w-full">
              GET FREE DEMO
            </Button>
          </CardContent>
          <CardFooter className="text-center">
            <div>
              <p className="text-sm text-gray-600">Starting at</p>
              <p className="text-xl font-semibold">$1350</p>
              <Button variant="secondary" className="mt-2">
                Prize On Request
              </Button>
            </div>
          </CardFooter>
        </Card>
        {/* Repeat above Card component for additional cards */}
        {/* Repeat this card component as needed */}
        <Card className="w-80 flex-shrink-0 shadow-md">
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle>ZOHO CRM</CardTitle>
              <CardDescription>Zoho Corporation</CardDescription>
            </div>
            {/* <img
              src="/zoho-logo.png" // Replace with actual image path
              alt="Zoho Logo"
              className="w-10 h-10"
            /> */}
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                FEATURES
              </Button>
              <Button
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                PLANS
              </Button>
              <Button
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                FEATURES
              </Button>
              <Button
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                FEATURES
              </Button>
            </div>

            <Button variant="default" className="w-full">
              GET FREE DEMO
            </Button>
          </CardContent>
          <CardFooter className="text-center">
            <div>
              <p className="text-sm text-gray-600">Starting at</p>
              <p className="text-xl font-semibold">$1350</p>
              <Button variant="secondary" className="mt-2">
                Prize On Request
              </Button>
            </div>
          </CardFooter>
        </Card>
        {/* Repeat above Card component for additional cards */}
        {/* Repeat this card component as needed */}
        <Card className="w-80 flex-shrink-0 shadow-md">
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle>ZOHO CRM</CardTitle>
              <CardDescription>Zoho Corporation</CardDescription>
            </div>
            {/* <img
              src="/zoho-logo.png" // Replace with actual image path
              alt="Zoho Logo"
              className="w-10 h-10"
            /> */}
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                FEATURES
              </Button>
              <Button
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                PLANS
              </Button>
              <Button
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                FEATURES
              </Button>
              <Button
                variant="outline"
                className="text-gray-700 border-gray-300"
              >
                FEATURES
              </Button>
            </div>

            <Button variant="default" className="w-full">
              GET FREE DEMO
            </Button>
          </CardContent>
          <CardFooter className="text-center">
            <div>
              <p className="text-sm text-gray-600">Starting at</p>
              <p className="text-xl font-semibold">$1350</p>
              <Button variant="secondary" className="mt-2">
                Prize On Request
              </Button>
            </div>
          </CardFooter>
        </Card>
        {/* Repeat above Card component for additional cards */}
      </div>
    </div>
  );
}