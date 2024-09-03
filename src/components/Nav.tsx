import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { FaSearch } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className="flex shadow-lg p-4 w-full h-11 overflow-y-clip">
      <div className="container mx-auto flex items-center justify-start">
        {/* Logo and Branding */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo.png"
            alt="Telcokart Logo"
            className="h-8"
            height={10}
            width={30}
          />
<h1 className="text-2xl font-bold text-blue-600 font-montserrat">Telcokart</h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-200 rounded-md flex-grow mx-8">
          <Input
            className="bg-transparent border-none focus:outline-none flex-grow"
            placeholder="Search for Products, Brands and More"
          />
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-md">
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
          <div className="flex space-x-6">
            <Button variant="ghost" className="hover:text-blue-600">
              <AiOutlineUser className="text-xl" />
              <span>Login</span>
            </Button>
            <Button variant="ghost" className="hover:text-blue-600">
              <BsCart className="text-xl" />
              <span>Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
