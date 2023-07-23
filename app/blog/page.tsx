import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import SidebarBlog from "./SidebarBlog";
import Blogs from "@/components/Blogs";

const BlogsAll = () => {
  return (
    <div className="blogAll-page">
      <Breadcrumb title="Tất cả bài viết" />
      <div className="container mx-auto xl:max-w-[1200px] px-4 md:px-8">
        <div className="widget-content my-[30px] md:my-[60px] grid grid-cols-1 gap-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Blogs />
            </div>
            <div className="col-span-1 md:col-span-1">
              <SidebarBlog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsAll;
