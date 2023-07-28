"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { FaUserCheck } from "react-icons/fa";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Blogs: React.FunctionComponent = () => {
  const [data, setData] = useState<any>();
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(1);
  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    const fechData = async () => {
      const data = await axios.get(
        `https://blogger-admin.onrender.com/api/blogs?populate=*&pagination[start]=0&pagination[limit]=${limit}`
      );
      let response = data.data.data;
      let totalBlog = data.data;
      setData(response);
      setTotal(totalBlog.meta.pagination.total);
    };
    fechData();
  }, [limit]);

  const handleSubmit = () => {
    if (limit <= total) setLimit(limit + 10);
  };
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
    <div className="section-blog">
      <div
        className="widget-content grid grid-cols-1 gap-[30px]"
        ref={animationParent}
      >
        {data?.map((element: any, index: number) => (
          <div
            className="cursor-pointer w-full grid grid-cols-1 md:grid-cols-3 shadow hover:shadow-md"
            key={index}
          >
            <div className="h-[100%] max-h-[220px] col-span-1 overflow-hidden relative">
              <Link href={`/blog/${element.id}`}>
                <Image
                  src={element.attributes.imageUrl}
                  alt={element.attributes.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-[100%] object-cover hover:scale-[109%] translate-all duration-300 ease-in-out"
                />
              </Link>
              <span className="absolute top-[10px] left-[12px] bg-[#c51b08] py-1 px-2 text-white text-[13px] font-bold rounded">
                {element.attributes.category}
              </span>
            </div>
            <div className="py-[15px] px-[8px] md:px-[20px] col-span-2">
              <Link href={`/blog/${element.id}`}>
                <h2 className="text-black text-[14px] md:text-[16px] font-bold hover:text-[#4B6BFB] py-[2px] px-[4px] mb-[15px] line-clamp-2">
                  {element.attributes.title}
                </h2>
              </Link>
              <div className="content hidden md:block mb-[10px] ">
                <div className="line-clamp-3 text-[15px] pl-[2px]">
                  {parse(element.attributes.description)}
                </div>
              </div>
              <div>
                {element.attributes.author != null && (
                  <span className="author px-[4px] text-[14px] inline-block">
                    <span className="inline-block mr-[4px] translate-y-[1px]">
                      <FaUserCheck size={13} color="#605d5d" />
                    </span>
                    <span>{element.attributes.author}</span>
                    <span className="pl-[6px]">-</span>
                  </span>
                )}

                <span className="date px-[4px] text-[13px]">
                  {dayjs(`${element.attributes.updatedAt}`).format(
                    "DD.MM.YYYY"
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {limit <= total && (
        <div className="flex items-center justify-center pt-[40px]">
          <button
            onClick={handleSubmit}
            className="h-[50px] w-[150px] rounded bg-emerald-500 px-5 text-[14px] font-medium uppercase tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          >
            Xem thêm
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
