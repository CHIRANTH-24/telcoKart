import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function BusinessCertifications() {
  const certifications = Array(6).fill("/images/Business/iso.jpg");
  return (
    <section className="space-y-6">
      <h4 className="text-2xl font-bold">Business Certifications</h4>
      <Marquee speed={100}>
        {certifications.map((certificate, i) => (
          <Image
            key={i}
            src={certificate}
            alt={`${i}`}
            width={150}
            height={150}
            className="rounded-full mx-16"
          />
        ))}
      </Marquee>
    </section>
  );
}
