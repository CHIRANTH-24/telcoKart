import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";

const Subscribe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 px-4 py-12">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src="/images/Footer/sub.png" // Replace with your actual image path
          alt="Subscribe"
          width={240}
          height={200}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Subscription Form Section */}
      <Card className="w-full md:w-1/3 lg:w-1/2 xl:w-1/3 shadow-xl border border-gray-200 rounded-lg">
        <CardHeader className="bg-blue-600 text-white p-6 rounded-t-lg">
          <CardTitle className="text-3xl font-bold text-center">
            Stay Updated!
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-700 mb-6 text-center">
            Subscribe to our newsletter to get the latest updates directly in
            your inbox.
          </p>
          <form className="w-full flex flex-col sm:flex-row items-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow mb-4 sm:mb-0 sm:mr-4 p-4 rounded-md border border-gray-300 shadow-sm"
            />
            <Button
              variant="default"
              className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md shadow-md"
            >
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Subscribe;
