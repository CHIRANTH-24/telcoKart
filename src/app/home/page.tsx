'use client';
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import PrimeBrand from '@/components/PrimeBrand';
import Show from '@/components/Show';
import Softwarecard from '@/components/Softwarecard';
import Subscribe from '@/components/Subscribe';
import React from 'react'

function page() {
  const images = [
    "/public/images/hotel.jpg",
    "/public/images/gig-economy.png",
  ];
  return (
    <>
      <Nav />
      <Show images={images} />
      <Softwarecard />
      <Show images={images} />
      <PrimeBrand />
      <Subscribe />
      <Footer />
    </>
  );
}

export default page