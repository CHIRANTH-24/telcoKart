import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import AppProvider from "@/providers";

const font = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: "Telcokart", //for home page
    template: `%s | Telcokart`, //for child pages
  },
  description: "A B2B app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
