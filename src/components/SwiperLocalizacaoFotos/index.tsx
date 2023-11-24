"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import arrowRight from "../../../public/arrow-right.svg";

const arrPlantas = [
  {
    img: "/mobile/localizacaoFotos/arraial.png",
    alt: "planta",
    width: 768,
    height: 768,
    picture: "/desktop/localizacaoFotos/arraial.png",
  },
  {
    img: "/mobile/localizacaoFotos/arraial.png",
    alt: "planta",
    width: 768,
    height: 768,
    picture: "/desktop/localizacaoFotos/arraial.png",
  },
  {
    img: "/mobile/localizacaoFotos/arraial.png",
    alt: "planta",
    width: 768,
    height: 768,
    picture: "/desktop/localizacaoFotos/arraial.png",
  },
];

import { Navigation } from "swiper/modules";
import Image from "next/image";
import { Fancybox } from "../Fancybox";
export function SwiperLocalizacaoFotos() {
  return (
    <Fancybox className="relative pb-12 pt-1 lg:pl-12">
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
            <a href={item.picture} data-fancybox="doc">
              <picture>
                <source media="(min-width: 768px)" srcSet={item.picture} />
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="w-full object-cover"
                />
              </picture>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-plantas-localizacao-fotos-prev  absolute left-0 top-1/2 z-30 -translate-y-1/2  cursor-pointer rounded-e-full bg-praia-blue-linear p-2 py-3 pr-4 lg:-left-0 lg:bg-transparent ">
        <Image
          src={arrowRight}
          alt="arrow"
          className="w-5 rotate-180 transform"
        />
      </div>
      <div className="swiper-button-plantas-localizacao-fotos-next  absolute right-0 top-1/2 z-30 -translate-y-1/2  cursor-pointer rounded-s-full bg-praia-blue-linear p-2 py-3 pl-4 lg:-right-10 lg:bg-transparent">
        <Image src={arrowRight} alt="arrow" className="w-5" />
      </div>
    </Fancybox>
  );
}
