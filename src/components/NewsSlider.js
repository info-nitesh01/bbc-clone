"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { Navigation, FreeMode } from "swiper/modules";
import NewsCard from "./NewsCard";

export default function NewsSlider({ data = [], bgColor = "", slidesPerView = 5.2, imageLayout = "", savebtn = false }) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      breakpoints={{
        320: {
          slidesPerView: slidesPerView*23/100,
        },
        480: {
          slidesPerView: slidesPerView*28/100,
        },
        640: {
          slidesPerView: slidesPerView*38/100,
        },
        768: {
          slidesPerView: slidesPerView*57/100,
        },
        1024: {
          slidesPerView: slidesPerView*76/100,
        },
        1280: {
          slidesPerView: slidesPerView*90/100,
        },
      }}
      spaceBetween={30}
      navigation={true}
      freeMode={true}
      modules={[FreeMode, Navigation]}
      className="mySwiper pt-5"
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} className="pt-4">
          <NewsCard data={[item]} imgHeight={200} headingSize="sm" bgColor={bgColor} imageLayout={imageLayout} savebtn={savebtn}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
