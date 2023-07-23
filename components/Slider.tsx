"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { IHome } from "@/types/index.type";
import loaderImg from "../public/assets/images/loader.png";
import Link from "next/link";

const Slider = ({ data }: any) => {
  // console.log(data);
  return (
    <div className="banner-main relative">
      <div className="banner relative">
        <Image
          src={data.imageUrl}
          alt="banner-main"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="text bg-white/[.08] absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center text-white">
          <div className="txt-sub font-serif md:pb-[25px] md:text-3xl sm:text-sm">
            {data.subTitle}
          </div>
          <div className="txt-effect font-bold font-serif md:pb-[25px] md:text-6xl sm:text-xl">
            <Typewriter
              options={{
                strings: [
                  `${data.title1 != null ? data.title1 : ""}`,
                  `${data.title2 != null ? data.title2 : ""}`,
                  `${data.title3 != null ? data.title3 : ""}`,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          {data.button != null && (
            <div className="txt-btn md:block hidden">
              <Link href="/about">
                <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-6 text-md font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                  <span>{data.button}</span>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
