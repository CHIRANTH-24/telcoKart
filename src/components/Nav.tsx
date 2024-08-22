import React from 'react'
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Icon } from 'lucide-react';

const Nav = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Telcokart Logo" className="h-8" />
          <span className="text-xl font-bold">Telcokart</span>
        </div>
        <div className="flex items-center w-1/2 h-1/2 mx-3">
          <Input
            type="text"
            placeholder="Search the product"
            className="flex-1 border border-gray-300 rounded-md p-2"
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
