// "use client";
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
import FacebookLike from "./FacebookLike";
import BlogDetail from "./blogDetail";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const url = `https://blogger-admin.onrender.com/api/blogs/${params.id}?populate=*`;

  // fetch data
  const data = await fetch(url).then((res) => res.json());
  const blogPost = data.data.attributes;

  return {
    title: blogPost.title,
    description: `${parse(blogPost.description)}`,
    openGraph: {
      images: blogPost.imageUrl,
    },
  };
}

export default function Page({ params }: Props) {
  return (
    <div className="blogAll-page">
      <BlogDetail params={params} />
    </div>
  );
}
