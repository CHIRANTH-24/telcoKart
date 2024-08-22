
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";

const Subscribe = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 px-4 py-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src="/images/Footer/sub.png" // Replace with your actual image path
          alt="Subscribe"
          width={200}
          height={310}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Subscription Form Section */}
      <Card className="w-full md:w-1/2 shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center md:text-left">
            Stay Updated!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4 text-center md:text-left">
            Subscribe to our newsletter to get the latest updates directly in
            your inbox.
          </p>
          <form className="w-full flex flex-col sm:flex-row items-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow mb-4 sm:mb-0 sm:mr-2 p-3 rounded-md border border-gray-300"
            />
            <Button variant="default" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Subscribe;
