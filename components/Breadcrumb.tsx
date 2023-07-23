"use client";
import Image from "next/image";
import Link from "next/link";

const Breadcrumb = ({ title }: any) => {
  return (
    <div className="breadcrumb-banner relative">
      <Image
        src="https://res.cloudinary.com/dr6pegkgw/image/upload/v1690109055/blogs_banner_paralax_98e8e589fc.jpg"
        alt="logo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[100%] object-cover"
      />
      <div className="breadcrumb-title absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-gray-500/40">
        <h1 className="max-w-[50%] text-center text-[14px] md:text-[26px] font-bold text-white uppercase line-clamp-2">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Breadcrumb;
