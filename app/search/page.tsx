"use client";
import axios from "axios";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useEffect, useState } from "react";
import { FaUserCheck } from "react-icons/fa";

const SearchPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams: any = useSearchParams();
  const search = searchParams.get("query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        // const response = await fetch(
        //   `http://localhost:7700/indexes/blog/search?q=${search}`
        // );
        const response = await axios.get(
          `https://blogger-admin.onrender.com/api/blogs?populate=*`
        );
        const data: any = await response.data.data;
        const foundBlog = data.filter(
          (blog: any) =>
            blog.attributes.title.toLowerCase().includes(search) ||
            blog.attributes.category.toLowerCase().includes(search)
        );
        setSearchResults(foundBlog);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    handleSearch();
  }, [search]);

  console.log(searchResults);
  if (searchResults === undefined) {
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
    <div>
      <div className="container mx-auto xl:max-w-[1200px] px-4 md:px-8">
        {/* <div className="search-form">
          <div className="w-[50%] py-[60px] relative flex justify-end mx-auto">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button onClick={handleSearch}>Search</button>
            </span>
          </div>
        </div> */}

        <div className="resual py-[60px]">
          <div className="widget-title pb-[30px]">
            {searchResults.length == 0 ? (
              <p>
                Không tìm thấy tìm kiếm cho `<b>{search}</b>`.
              </p>
            ) : (
              <p>
                Kết quả tìm kiếm cho `<b>{search}</b>`.
              </p>
            )}
          </div>
          <div className="widget-content grid grid-cols-1 md:grid-cols-3 gap-[20px] ">
            {searchResults.map((element: any, index: number) => (
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
                <div className="pt-[15px] px-[8px] pb-[10px]">
                  <Link href={`/blog/${element.attributes.id}`}>
                    <h2 className="text-black font-medium text-[14px] md:text-[16px] hover:text-[#4B6BFB] py-[2px] px-[4px] mb-[15px] line-clamp-2">
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
    </div>
  );
};

export default SearchPage;
