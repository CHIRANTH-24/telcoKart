import React from 'react'
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Icon } from 'lucide-react';

const Nav = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          {/* <img
            src="/public/images/logo.png"
            alt="Telcokart Logo"
            className="h-8"
          /> */}
          <span className="text-xl font-bold">Telcokart</span>
        </div>
        <div className="flex items-center w-1/2 mx-4">
          
          <Input
            type="text"
            placeholder="Search the product"
            className="flex-1 border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex space-x-4">
          <Button color="blue">
            Advertise
          </Button>
          <Button color="blue">
            List Business
          </Button>
          <Button color="blue">
            Get Advice
          </Button>
          <Button color="blue">
            Login
          </Button>
        </div>
      </nav>
    </>
  );
}

export default Nav
