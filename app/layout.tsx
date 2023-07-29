import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["greek"] });

export const metadata: Metadata = {
  icons: {
    icon: "https://res.cloudinary.com/dr6pegkgw/image/upload/v1690634583/311999040_2929610010518336_3184411688408146225_n_1_7b99d5f33f.jpg",
  },
  title: "Autumn Writing Journey",
  description:
    "Une Parisienne | A gardener | An author | A driver | A singer | A speaker | A lawyer | and more..",
  openGraph: {
    images:
      "https://res.cloudinary.com/dr6pegkgw/image/upload/v1690634328/banner_home_251d1a0774.png",
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
