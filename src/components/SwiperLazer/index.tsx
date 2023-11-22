"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import arrowRight from "../../../public/arrow-right.svg";

const arrLazer = [
  {
    img: "/mobile/lazer/piscina.png",
    alt: "planta",
    width: 768,
    height: 768,
    picture: "/desktop/lazer/piscina.png",
    description: "Blocos 1 a 6 - clunas 7 e 8",
  },
  {
    img: "/mobile/lazer/piscina.png",
    alt: "planta",
    width: 768,
    height: 768,
    picture: "/desktop/lazer/piscina.png",
    description: "Blocos 1 a 6 - clunas 7 e 8",
  },
  {
    img: "/mobile/lazer/piscina.png",
    alt: "planta",
    width: 768,
    height: 768,
    picture: "/desktop/lazer/piscina.png",
    description: "Blocos 1 a 6 - clunas 7 e 8",
  },
  {
    img: "/mobile/lazer/piscina.png",
    alt: "planta",
    width: 768,
    height: 768,
    picture: "/desktop/lazer/piscina.png",
    description: "Blocos 1 a 6 - clunas 7 e 8",
  },
  {
    img: "/mobile/lazer/piscina.png",
    alt: "planta",
    width: 768,
    height: 768,
    picture: "/desktop/lazer/piscina.png",
    description: "Blocos 1 a 6 - clunas 7 e 8",
  },
];

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
export function SwiperLazer() {
  return (
    <div className="relative mx-auto w-full pb-12  ">
      <Swiper
        className="w-full lg:rounded-lg"
        navigation={{
          nextEl: ".swiper-button-lazer-next",
          prevEl: ".swiper-button-lazer-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-lazer",
          type: "bullets",
        }}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
        }}
      >
        {arrLazer.map((item, index) => (
          <SwiperSlide key={index} className="relative py-8">
            <div>
              <picture>
                <source media="(min-width: 768px)" srcSet={item.picture} />
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="w-full object-cover lg:rounded-xl"
                />
              </picture>
              <div className="absolute bottom-1 left-1/2  -z-10 h-8 w-80 -translate-x-1/2 rounded-b-3xl border border-praia-blue-500  text-center  md:w-8/12 ">
                <p className="mx-auto w-fit bg-white px-1 pt-4 text-black">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-lazer-prev absolute left-0 top-1/2 z-30 -translate-y-1/2  rounded-e-full bg-praia-blue-linear p-2 py-3 pr-4 lg:left-1/4 lg:top-auto lg:rounded-e-none lg:rounded-s-full lg:bg-transparent">
        <Image
          src={arrowRight}
          alt="arrow"
          className="w-5 rotate-180 transform"
        />
      </div>
      <div className="swiper-button-lazer-next absolute right-0 top-1/2 z-30 -translate-y-1/2  rounded-s-full bg-praia-blue-linear p-2 py-3 pl-4 lg:right-1/4 lg:top-auto lg:rounded-e-full lg:rounded-s-none lg:bg-transparent ">
        <Image src={arrowRight} alt="arrow" className="w-5" />
      </div>
    </div>
  );
}
