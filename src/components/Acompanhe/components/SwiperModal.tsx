"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import arrowRight from "../../../../public/arrow-right.svg";

interface SwiperModalProps {
  arrPlantas: Array<{
    img: string;
    alt: string;
    width: number;
    height: number;
    picture: string;
  }>;
}

import { Navigation } from "swiper/modules";
import Image from "next/image";
export function SwiperModal({ arrPlantas }: SwiperModalProps) {
  return (
    <div className="relative w-full">
      <Swiper
        className="lg:rounded-lg"
        navigation={{
          nextEl: ".swiper-button-plantas-localizacao-fotos-next",
          prevEl: ".swiper-button-plantas-localizacao-fotos-prev",
        }}
        slidesPerView={1}
        modules={[Navigation]}
      >
        {arrPlantas.map((item, index) => (
          <SwiperSlide key={index} className="relative ">
            <picture>
              <source media="(min-width: 425px)" srcSet={item.picture} />
              <Image
                src={item.img}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full object-cover"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-plantas-localizacao-fotos-prev  absolute left-0 top-1/2 z-30 -translate-y-1/2   cursor-pointer lg:-left-8 lg:bg-transparent ">
        <Image
          src={arrowRight}
          alt="arrow"
          className="w-5 rotate-180 transform"
        />
      </div>
      <div className="swiper-button-plantas-localizacao-fotos-next  absolute right-0 top-1/2 z-30 -translate-y-1/2  cursor-pointer lg:-right-10 lg:bg-transparent">
        <Image src={arrowRight} alt="arrow" className="w-5" />
      </div>
    </div>
  );
}
