"use client";
import AboutHome from "@/components/AboutHome";
import ListBlogHome from "@/components/ListBlogHome";
import Slider from "@/components/Slider";
import { IHome } from "@/types/index.type";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {
  const [data, setData] = useState<IHome>();
  // const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    const fechData = async () => {
      const data = await axios.get(
        "https://blogger-admin.onrender.com/api/home-page?populate=*"
      );
      let response = await data;
      setData(response.data.data.attributes);
    };
    fechData();
  }, []);
  // console.log(data);
  if (data === undefined) {
    // Hiển thị hiệu ứng tải
    return (
      <div className="min-h-[80vh] h-[100%] w-[100%] relative">
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-white flex justify-center items-center z-10">
          <div
            className="w-12 h-12 rounded-full animate-spin
              border-2 border-solid border-blue-500 border-t-transparent"
          ></div>
        </div>
      </div>
    );
  }
  return (
    <main className="main">
      <Slider data={data.section1} />
      <AboutHome data={data.section2} />
      <div className="section-banner flex justify-center">
        <Image
          src={data.urlBanner_image}
          alt="banner-home"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <ListBlogHome data={data} />
    </main>
  );
}
