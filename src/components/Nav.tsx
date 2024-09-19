import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useAuthStore } from "@/state/auth-state";
import { Loader } from "lucide-react";
import { useAuthContext } from "@/providers/auth-provider";

const Nav = () => {
  const { isAuthenticated, user } = useAuthStore((state) => state);
  const {isLoading} = useAuthContext()
  const [dropdownOpen, setDropdownOpen] = useState(false);

  console.log(user);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-white shadow-lg p-0 max-h-16">
      <div className="container flex items-center justify-between pt-0 h-10 ">
        {/* Logo and Branding */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo.png"
            alt="Telcokart Logo"
            className="h-8"
            height={100}
            width={35}
          />
          <h1 className="text-2xl font-bold text-blue-600 font-montserrat">
            Telcokart
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center p-2 rounded-md flex-grow mx-8 max-h-8">
          <Input
            className="bg-transparent border-none focus:outline-none flex-grow"
            placeholder="Search for Products, Brands and More"
          />
          <Button className="bg-white-500 text-
          
          px-4 py-2 rounded-md hover:none">
            <FaSearch />
          </Button>
        </div>

        {/* Links and Icons */}
        <div className="flex items-center space-x-8 text-gray-700">
          <div className="flex space-x-4">
            <Button variant="link" className="hover:text-blue-600">
              Advertise
            </Button>
            <Button variant="link" className="hover:text-blue-600">
              List Business
            </Button>
            <Button variant="link" className="hover:text-blue-600">
              Get Advice
            </Button>
          </div>

          {/* Login Dropdown */}
          <div className="relative z-50">
            {isLoading ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : (
              <Button
                variant="ghost"
                className="hover:text-blue-600 flex items-center"
                onClick={toggleDropdown}
              >
                <AiOutlineUser className="text-xl" />
                {isAuthenticated ? (
                  <p>{user?.firstname + " " + user?.lastname}</p>
                ) : (
                  <>
                    <span className="ml-2">Login</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 9l6 6 6-6"
                      />
                    </svg>{" "}
                  </>
                )}
                {/* Added arrow icon */}
              </Button>
            )}
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                {" "}
                {/* Ensured it's over all elements */}
                <ul>
                  {!isAuthenticated && (
                    <li>
                      <Link href="/register">
                        <Button
                          variant="link"
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          New customer? Sign up
                        </Button>
                      </Link>
                    </li>
                  )}
                  <li>
                    <Button
                      variant="link"
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      My Profile
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Orders
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Wishlists
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Gift Cards
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Rewards
                    </Button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
