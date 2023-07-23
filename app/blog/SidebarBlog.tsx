"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { FaUserCheck } from "react-icons/fa";
import dayjs from "dayjs";

const SidebarBlog: React.FunctionComponent = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Hàm lấy bài viết mới nhất từ Strapi
    async function getLatestArticle() {
      try {
        // Gửi yêu cầu GET để lấy danh sách các bài viết đã xuất bản, sắp xếp theo thời gian đăng
        const data = await axios.get(
          "https://blogger-admin.onrender.com/api/blogs?populate=*&sort=publishedAt:DESC&pagination[limit]=5"
        );
        let response = data.data.data;
        setData(response);
      } catch (error) {
        // console.error("Đã xảy ra lỗi:", error.message);
      }
    }

    // Gọi hàm để lấy bài viết mới nhất khi component được hiển thị lần đầu tiên
    getLatestArticle();
  }, []);
  // console.log(data);
  return (
    <div className="md:sticky top-[110px]">
      <div className="wrap-title mb-[30px] border-b-2 border-slate-100">
        <h2 className="text-start inline-block relative py-[10px] text-[24px] font-bold">
          Bài viết mới nhất
          <span className="absolute bottom-[-2px] left-0 right-0 border-b-2 border-amber-500"></span>
        </h2>
      </div>
      <div className="wrap-content grid grid-cols-1 gap-[30px]">
        {data?.map((element: any, index: number) => (
          <div
            className="cursor-pointer w-full grid grid-cols-1 md:grid-cols-3 shadow hover:shadow-md"
            key={index}
          >
            <div className="h-[100%] max-h-[220px] md:max-h-[100px] col-span-1 overflow-hidden relative">
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
              {/* <span className="absolute top-[10px] left-[12px] bg-[#c51b08] py-1 px-2 text-white text-[13px] font-bold rounded">
                {element.attributes.category}
              </span> */}
            </div>
            <div className="py-[8px] px-[8px] col-span-2">
              <Link href={`/blog/${element.id}`}>
                <h2 className="text-black text-[13px] font-medium hover:text-[#4B6BFB] py-[2px] px-[4px] mb-[15px] line-clamp-2">
                  {element.attributes.title}
                </h2>
              </Link>
              {/* <div className="content mb-[10px] line-clamp-3">
                {parse(element.attributes.description)}
              </div> */}
              <div>
                {element.attributes.author != null && (
                  <span className="author px-[4px] text-[12px] inline-block">
                    <span className="inline-block mr-[4px] translate-y-[1px]">
                      <FaUserCheck size={12} color="#605d5d" />
                    </span>
                    <span>{element.attributes.author}</span>
                    <span className="pl-[6px]">-</span>
                  </span>
                )}

                <span className="date px-[4px] text-[12px]">
                  {dayjs(`${element.attributes.updatedAt}`).format(
                    "DD-MM-YYYY"
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarBlog;
