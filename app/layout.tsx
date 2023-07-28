import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["greek"] });

export const metadata: Metadata = {
  title: "Blogger Website Autumn",
  description:
    "Une Parisienne | A gardener | An author | A driver | A singer | A speaker | A lawyer | and more..",
  openGraph: {
    images:
      "https://res.cloudinary.com/dr6pegkgw/image/upload/v1690550810/banner_home_83ea84cca6.png",
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
        <div className="wrap-content min-h-[80vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
