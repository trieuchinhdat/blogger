import { IHome } from "@/types/index.type";
import React from "react";
import parse from "html-react-parser";

const AboutHome = ({ data }: any) => {
  return (
    <div className="section py-[60px]">
      <div className="container mx-auto xl:max-w-[1200px] px-4 md:px-8">
        <div className="widget-title mb-[60px] border-b-2 border-slate-100">
          <h2 className="text-start inline-block relative py-[10px] text-[24px] font-bold">
            {data.title}
            <span className="absolute bottom-[-2px] left-0 right-0 border-b-2 border-amber-500"></span>
          </h2>
        </div>
        <div className="widget-content">{parse(data.content)}</div>
      </div>
    </div>
  );
};

export default AboutHome;
