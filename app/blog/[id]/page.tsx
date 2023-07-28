// "use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Metadata, ResolvingMetadata } from "next";
import striptags from "striptags";
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
  const parseContent = striptags(blogPost.description);

  return {
    title: blogPost.title,
    description: parseContent,
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
