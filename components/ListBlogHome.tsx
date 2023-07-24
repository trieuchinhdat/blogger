"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { FaUserCheck } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ListBlogHome = ({ data }: any) => {
  // console.log(data.blogs_new.data);
  return (
    <div className="section py-[60px]">
      <div className="container mx-auto xl:max-w-[1200px] px-4 md:px-8">
        <div className="widget-title mb-[60px] border-b-2 border-slate-100">
          <h2 className="text-start inline-block relative py-[10px] text-[24px] font-bold">
            {data.title_newblogs}
            <span className="absolute bottom-[-2px] left-0 right-0 border-b-2 border-amber-500"></span>
          </h2>
        </div>
        <div className="widget-content grid grid-cols-1 md:grid-cols-3 gap-[20px] ">
          {data.blogs_new.data?.map((element: any, index: number) => (
            <div
              className="cursor-pointer w-full shadow hover:shadow-md"
              key={index}
            >
              <div className="h-[240px] w-full overflow-hidden relative">
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
              <div className="pt-[15px] pl-[8px] pb-[10px] text-[14px]">
                <Link href={`/blog/${element.id}`}>
                  <h2 className="text-black font-medium hover:text-[#4B6BFB] py-[2px] px-[4px] mb-[15px] line-clamp-2">
                    {element.attributes.title}
                  </h2>
                </Link>
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
                    {dayjs(`${element.attributes.date}`).format("DD-MM-YYYY")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListBlogHome;
