import Footer from "@/components/Footer";
import Navabar from "@/components/navbar";
import React, { Fragment, PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <main className="max-w-screen-2xl mx-auto">
        <Navabar />
        <div className="pt-16 px-2">
          {children}
          <Footer />
        </div>
      </main>
    </Fragment>
  );
}
