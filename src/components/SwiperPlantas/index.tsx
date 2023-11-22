"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import arrowRight from "../../../public/arrow-right.svg";

const arrPlantas = [
  {
    img: "/mobile/plantas/planta1.png",
    alt: "planta",
    width: 768,
    height: 768,
    picture: "/desktop/plantas/planta1.png",
    description: "Blocos 1 a 6 - clunas 7 e 8",
  },
  {
    img: "/mobile/plantas/planta1.png",
    alt: "planta",
    width: 768,
    height: 768,
    picture: "/desktop/plantas/planta1.png",
    description: "Blocos 1 a 6 - clunas 7 e 8",
  },
  {
    img: "/mobile/plantas/planta1.png",
    alt: "planta",
    width: 768,
    height: 768,
    picture: "/desktop/plantas/planta1.png",
    description: "Blocos 1 a 6 - clunas 7 e 8",
  },
];

// Import Swiper styles
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
export function SwiperPlantas() {
  return (
    <div className="relative mx-auto max-w-6xl py-12">
      <Swiper
        className="max-w-6xl after:absolute  after:inset-0 after:z-10 after:bg-praia-blue-500 after:bg-opacity-20 lg:rounded-lg"
        navigation={{
          nextEl: ".swiper-button-plantas-next",
          prevEl: ".swiper-button-plantas-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-plantas",
          type: "bullets",
        }}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
      >
        {arrPlantas.map((item, index) => (
          <SwiperSlide key={index} className="relative ">
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
            <p className="absolute bottom-0 left-0 h-8 w-full bg-black bg-opacity-60 text-center text-white">
              {item.description}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination-plantas absolute bottom-3 left-1/2 z-30 hidden -translate-x-1/2 gap-2 lg:flex" />
      <div className="swiper-button-plantas-prev absolute left-0 top-1/2 z-30 -translate-y-1/2  cursor-pointer rounded-e-full bg-praia-blue-linear p-2 py-3 pr-4 lg:left-5 lg:rounded-e-none lg:rounded-s-full">
        <Image
          src={arrowRight}
          alt="arrow"
          className="w-5 rotate-180 transform"
        />
      </div>
      <div className="swiper-button-plantas-next absolute right-0 top-1/2 z-30 -translate-y-1/2  cursor-pointer rounded-s-full bg-praia-blue-linear p-2 py-3 pl-4 lg:right-5 lg:rounded-e-full lg:rounded-s-none ">
        <Image src={arrowRight} alt="arrow" className="w-5" />
      </div>
    </div>
  );
}
