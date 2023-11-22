"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import arrowRight from "../../../public/arrow-right.svg";

const arrLazer = [
  {
    img: "/mobile/acompanhe/praia.png",
    alt: "planta",
    width: 768,
    height: 768,
    blocos: "Blocos",
    numeros: "1, 2 e 3",
    status: "prontos para morar",
  },
  {
    img: "/mobile/acompanhe/praia.png",
    alt: "planta",
    width: 768,
    height: 768,
    blocos: "Blocos",
    numeros: "1, 2 e 3",
    status: "prontos para morar",
  },
  {
    img: "/mobile/acompanhe/praia.png",
    alt: "planta",
    width: 768,
    height: 768,
    blocos: "Blocos",
    numeros: "1, 2 e 3",
    status: "prontos para morar",
  },
];

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
export function SwiperAcompanhe() {
  return (
    <div className="relative mx-auto w-full py-12  ">
      <Swiper
        className="w-full "
        navigation={{
          nextEl: ".swiper-button-acompanhe-next",
          prevEl: ".swiper-button-acompanhe-prev",
        }}
        centeredSlides={true}
        slidesPerView={1.5}
        spaceBetween={20}
        modules={[Navigation]}
      >
        {arrLazer.map((item, index) => (
          <div key={index}>
            <SwiperSlide className="relative max-w-sm">
              <div className="">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="w-full rounded-xl object-cover "
                />
                <div className="absolute bottom-24 left-1/2 z-10  h-16 w-full -translate-x-1/2 text-4xl  font-bold text-praia-blue-100 md:w-8/12 ">
                  <div className="relative flex w-full items-center gap-5 px-3  after:absolute  after:inset-0 after:-z-10 after:rounded-xl after:bg-praia-blue-500 after:bg-opacity-70">
                    <div>
                      <Image src={arrowRight} alt="arrow" className="w-5" />
                    </div>
                    <div>
                      <p className="">{item.blocos}</p>
                      <p className="text-white"> {item.numeros}</p>
                      <p className=""> {item.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <div className="flex items-center justify-around pt-5">
        <div className="swiper-button-acompanhe-prev">
          <Image
            src={arrowRight}
            alt="arrow"
            className="w-5 rotate-180 transform"
          />
        </div>
        <div className="swiper-button-acompanhe-next">
          <Image src={arrowRight} alt="arrow" className="w-5" />
        </div>
      </div>
    </div>
  );
}
