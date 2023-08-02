"use client";
import Breadcrumb from "@/components/Breadcrumb";
import axios from "axios";
import { useEffect, useState } from "react";
import parser from "html-react-parser";

const About = () => {
  const [data, setData] = useState<any | undefined>();

  useEffect(() => {
    // setLoading(true);
    const fechData = async () => {
      const data = await axios.get(
        "https://blogger-admin.onrender.com/api/about-me-page?populate=*"
      );
      let response = await data;
      setData(response.data.data.attributes);
    };
    fechData();
  }, []);

  if (data === undefined) {
    // Hiển thị hiệu ứng tải
    return (
      <div className="about-page">
        <Breadcrumb title="Giới thiệu" />
        <div className="min-h-[80vh] h-[100%] w-[100%] relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-white flex justify-center items-center z-10">
            <div
              className="w-12 h-12 rounded-full animate-spin
              border-2 border-solid border-blue-500 border-t-transparent"
            ></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="about-page">
      <Breadcrumb title="Giới thiệu" />
      <div className="container mx-auto xl:max-w-[1200px] px-4 md:px-8">
        <div className="widget-content my-[30px] md:my-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-3">
              {parser(data.content_left)}
            </div>
            <div className="col-span-1">{parser(data.content_right)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
