"use client";
import animationData from "../public/assets/data.json";

import Link from "next/link";
import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Navbar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [animationParent] = useAutoAnimate();
  const [navbar, setNavbar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let animationFrameId: any;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const shouldStick = window.scrollY > 100;
        setIsSticky(shouldStick);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
    setSearchQuery("");
  };
  const headerClassName = isSticky
    ? "fixed top-0 left-0 right-0 transform transition-all duration-300 ease-in-out will-change-transform z-[999] bg-white"
    : "";
  const searchClassName = isSticky ? "hidden md:block" : "";
  // console.log(searchQuery);
  return (
    <header className={`header ${headerClassName}`}>
      <div className="shadow-lg shadow-[gray]/[0.2] border-b-[0.5px]">
        <div className="container mx-auto xl:max-w-[1200px] text-black flex items-center justify-between">
          <nav className="w-full bg-white z-10">
            <div className="justify-between relative px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
              <div>
                <div className="flex items-center justify-between md:block">
                  <Link href="/">
                    {/* <h2 className="text-2xl font-bold">LOGO</h2> */}
                    <Image
                      src="https://res.cloudinary.com/dr6pegkgw/image/upload/v1689875842/autumn_v2_a49e6ca508.png"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full max-w-[280px] h-[100%] object-cover"
                    />
                  </Link>
                  <div className="md:hidden">
                    <button
                      className="p-2 text-gray-700 rounded-md outline-none border focus:border-gray-400 focus:border"
                      onClick={() => setNavbar(!navbar)}
                    >
                      {navbar ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-black"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`flex-1 justify-self-center pb-5 md:block lg:pb-0 md:mt-0 ${
                    navbar
                      ? "block absolute right-0 left-0 z-10 px-[15px] py-[10px] bg-white shadow"
                      : "hidden"
                  }`}
                >
                  <ul className="items-center justify-center space-y-4 md:flex md:space-x-2 md:space-y-0">
                    <li className="text-black font-bold hover:text-indigo-200 md:px-[10px]">
                      <Link href="/" onClick={() => setNavbar(false)}>
                        Trang chủ
                      </Link>
                    </li>
                    <li className="text-black font-bold hover:text-indigo-200 md:px-[10px]">
                      <Link href="/blog" onClick={() => setNavbar(false)}>
                        Bài viết
                      </Link>
                    </li>
                    <li className="text-black font-bold hover:text-indigo-200 md:px-[10px]">
                      <Link href="/about" onClick={() => setNavbar(false)}>
                        Giới thiệu
                      </Link>
                    </li>
                    <li className="text-black font-bold hover:text-indigo-200 md:px-[10px]">
                      <Link href="contact" onClick={() => setNavbar(false)}>
                        Liên hệ
                      </Link>
                    </li>
                  </ul>
                  {/* <div className="md:hidden sm:inline-block relative mt-[10px]">
                    <input
                      type="text"
                      id="search-navbar"
                      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search..."
                    ></input>
                    <div className="absolute top-0 left-0 h-[100%] flex items-center pl-[10px]">
                      <BiSearch />
                    </div>
                  </div> */}
                </div>
              </div>
              <div
                className={`space-x-2 mb-2 md:mb-0 relative ${searchClassName}`}
              >
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tìm kiếm bài viêt..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  ></input>
                  <div className="absolute top-0 left-2 h-[100%] flex items-center pl-[5px]">
                    <button type="submit">
                      <BiSearch />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </div>
        {/* </div> */}
      </div>
    </header>
  );
};

export default Navbar;
