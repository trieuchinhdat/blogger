import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import Blog from "./page";
import SidebarBlog from "./SidebarBlog";

const BlogsAll = () => {
  return (
    <div>
      <div className="blog-page">
        <Breadcrumb title="Tất cả bài viết" />
        <div className="container mx-auto xl:max-w-[1200px] px-4 md:px-8">
          <div className="widget-content my-[60px] grid grid-cols-1 gap-[30px]">
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <Blog />
              </div>
              <div className="col-span-1">
                <SidebarBlog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsAll;
