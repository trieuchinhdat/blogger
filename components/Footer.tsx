import Link from "next/link";
import React from "react";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer border-t-[0.5px] bg-slate-200">
      <div className="container mx-auto xl:max-w-[1200px] text-black">
        <div className="w-full flex items-center flex-col sm:flex-row sm:justify-between justify-center py-5 px-4 md:px-8">
          <div className="pb-[10px] sm:pb-[0]">Copyright © 2023 Blogger.</div>
          <div>
            <ul className="flex items-center space-x-4">
              <li>
                {/* <Link href={"https://www.facebook.com/profile.php?id=100014581784104"} */}

                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={20} color="#3b5998" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={20} color="#8A3AB9" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={20} color="#ff0000" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tiktok.com/vi-VN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={20} color="#333" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
