"use client";
import React from "react";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// SwiperCore.use([Navigation, Pagination, Autoplay]);

const SliderBlogHome = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img src="/images/slide1.jpg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slide2.jpg" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slide3.jpg" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderBlogHome;
