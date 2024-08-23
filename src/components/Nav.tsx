import React from 'react'
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Icon } from 'lucide-react';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <nav className="h-12 flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Telcokart Logo"
            className="h-8"
            height={25}
            width={30}
          />
          <span className="text-xl font-bold">Telcokart</span>
        </div>
        
          <div className="flex items-center w-1/2 h-1/2 mx-3">
            <FaSearch />
            <Input
              type="text"
              placeholder="Search the product"
              className="flex-1  rounded-md p-2 outline-none"
            />
          </div>
        
        <div className="flex space-x-4">
          <a>Advertise</a>
          <a>List Business</a>
          <a>Get Advice</a>
        </div>
      </nav>
    </>
  );
}

export default Nav
