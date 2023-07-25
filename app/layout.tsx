import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["greek"] });

export const metadata: Metadata = {
  title: "Blogging Website",
  description: "Blogging Website",
  openGraph: {
    images:
      "https://res.cloudinary.com/dr6pegkgw/image/upload/v1690258215/blogger_6ce79d5c75.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
