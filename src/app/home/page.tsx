'use client';
import BrandCerti from "@/components/BrandCerti";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import MainCategory from "@/components/MainCategory";
import Nav  from "@/components/Nav";
import PopularSat from "@/components/PopularSat";
import AppleForBusiness from "@/components/AppleForBusiness";
import Show from "@/components/Show";
import Softwarecard from "@/components/Softwarecard";
import Subscribe from "@/components/Subscribe";
import Whatsapp from "@/components/Whatsapp";
import { Satellite } from "lucide-react";

import React from "react";
import PrimeBrand from "@/components/PrimeBrand";

function page() {

  const images = [
    "/images/caro1.webp",
    "/images/caro2.webp",
  ];

  const images = ["/images/slider.png", "/images/cctv.jpg"];

  return (
    <>
      <Nav />
      <MainCategory />
      <Show images={images} />
      <AppleForBusiness />
      <PopularSat />
      <AppleForBusiness />
      <BrandCerti />
      {/* <Softwarecard /> */}
      <Show images={images} />
      <Whatsapp />
      <Events />
      <PrimeBrand />
      <Subscribe />
      <Footer />
    </>
  );
}

export default page;
