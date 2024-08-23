'use client';
import { Display } from '@/components/Display'
import PrimeBrand from '@/components/PrimeBrand';
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-row justify-center ">
      <div>
        <Display />
      </div>
      <div>
        <PrimeBrand />
      </div>
    </div>
  );
}

export default page
