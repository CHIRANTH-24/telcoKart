'use client';
import Footer from '@/components/Footer'
import MainCategory from '@/components/MainCategory';
import Nav from '@/components/Nav'
import PrimeBrand from '@/components/PrimeBrand';
import Show from '@/components/Show';
import Softwarecard from '@/components/Softwarecard';
import Subscribe from '@/components/Subscribe';

import React from 'react'

function page() {
  const images = [
    "/images/slider.png",
    "/images/cctv.jpg",
  ];
  return (
    <>
      <Nav />
      <MainCategory />
      <Show images={images} />
      <PrimeBrand />
      <Softwarecard />
      <Show images={images} />
      <PrimeBrand />
      <Subscribe />
      <Footer />
    </>
  );
}

export default page