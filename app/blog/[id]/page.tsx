"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Metadata, ResolvingMetadata } from "next";
import parse from "html-react-parser";
import dayjs from "dayjs";
import { FaUserCheck } from "react-icons/fa";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import SidebarBlog from "../SidebarBlog";
import FacebookComments from "./FacebookComment";
import { FacebookProvider, ShareButton } from "react-facebook";
import FacebookLike from "./FacebookLike";

type Props = {
  params: { id: string };
};

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;
  const url = "https://blogger-admin.onrender.com/api/blogs/" + id;

  // fetch data
  const data = await fetch(url).then((res) => res.json());
  const blogPost = data.attributes;
  console.log(blogPost);

  return {
    title: blogPost.title,
    description: blogPost.description,
  };
}

export default function Page({ params }: Props) {
  const [data, setData] = useState<any>();
  const postURL = `https://blogger-admin.onrender.com/api/blogs/${params.id}?populate=*`;
  // const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);

    const fechData = async () => {
      const data = await axios.get(
        `https://blogger-admin.onrender.com/api/blogs/${params.id}?populate=*`
      );
      let response = await data;
      setData(response.data.data.attributes);
    };
    window.scrollTo(0, 0);
    fechData();
  }, [params.id]);

  const handleShareButton = () => {
    // Check if navigator.share is supported by the browser
    if (navigator.share) {
      console.log("Congrats! Your browser supports Web Share API");
      navigator
        .share({
          url: `https://share.toogoodtogo.com/store/1006/milestones/meals-saved/`,
        })
        .then(() => {
          console.log("Sharing successfull");
        })
        .catch(() => {
          console.log("Sharing failed");
        });
    } else {
      console.log("Sorry! Your browser does not support Web Share API");
    }
  };

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
    <div className="blogAll-page">
      <Breadcrumb title={data.title} />
      <div className="container mx-auto xl:max-w-[1200px] px-4 md:px-8 overflow-hidden md:overflow-visible">
        <div className="widget-content my-[30px] md:my-[60px] grid grid-cols-1 gap-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="image mb-[30px]">
                <Image
                  src={data.imageUrl}
                  alt={data.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-[100%] object-cover"
                />
              </div>
              <div className="title mb-[30px]">
                <h2 className="text-[18px] md:text-[24px] font-bold">
                  {data.title}
                </h2>
                {data.author != null && (
                  <span className="author px-[4px] text-[14px] inline-block">
                    <span className="inline-block mr-[4px] translate-y-[1px]">
                      <FaUserCheck size={13} color="#605d5d" />
                    </span>
                    <span>{data.author}</span>
                    <span className="pl-[6px]">-</span>
                  </span>
                )}
                <span className="date px-[4px] text-[13px]">
                  {dayjs(`${data.date}`).format("DD-MM-YYYY")}
                </span>
              </div>
              <div className="content mb-[60px]">{parse(data.description)}</div>
              <div className="btn-like-fb">
                <FacebookLike url={postURL} />
              </div>
              <div className="bnt-share">
                <button
                  title="Share this article"
                  type="button"
                  onClick={handleShareButton}
                  className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-[13px] text-white px-3 py-1 rounded"
                >
                  Share
                </button>
              </div>
              <div className="comment">
                <div className="wrap-title mb-[30px] border-b-2 border-slate-100">
                  <h2 className="text-start inline-block relative py-[10px] text-[24px] font-bold">
                    Bình luận bài viết
                    <span className="absolute bottom-[-2px] left-0 right-0 border-b-2 border-amber-500"></span>
                  </h2>
                </div>

                <FacebookComments url={postURL} />
              </div>
            </div>
            <div className="col-span-1 relative">
              <SidebarBlog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
