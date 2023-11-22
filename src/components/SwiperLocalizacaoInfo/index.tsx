"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import arrowRight from "../../../public/arrow-right.svg";

const arrLocalizacaoInfo = [
  {
    info1: {
      info: "Areia da praia",
      icone: "/icons/men.svg",
      duration: "10 seg",
    },
    info2: {
      info: "Posto de gasolina",
      icone: "/icons/car.svg",
      duration: "1 min",
    },
    info3: {
      info: "Aeroporto Cabo Frio",
      icone: "/icons/car.svg",
      duration: "4 min",
    },
    info4: {
      info: "Centro de arrail do cabo",
      icone: "/icons/car.svg",
      duration: "14 min",
    },
  },
  {
    info1: {
      info: "Areia da praia",
      icone: "/icons/car.svg",
      duration: "10 seg",
    },
    info2: {
      info: "Areia da praia",
      icone: "/icons/car.svg",
      duration: "10 seg",
    },
    info3: {
      info: "Areia da praia",
      icone: "/icons/car.svg",
      duration: "10 seg",
    },
    info4: {
      info: "Areia da praia",
      icone: "/icons/car.svg",
      duration: "10 seg",
    },
  },
];

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
export function SwiperLocalizacaoInfo() {
  return (
    <div className="relative mx-auto w-full lg:pl-12">
      <Swiper
        className="w-full lg:rounded-lg"
        navigation={{
          nextEl: ".swiper-button-localizacao-info-next",
          prevEl: ".swiper-button-localizacao-info-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-localizacao-info-lazer",
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        modules={[Navigation, Pagination]}
      >
        {arrLocalizacaoInfo.map((item, index) => (
          <SwiperSlide key={index} className="relative py-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base text-white">{item.info1.info}</p>
                </div>
                <div className="flex items-center gap-2 ">
                  <div>
                    <Image
                      src={item.info1.icone}
                      width={30}
                      height={30}
                      alt=""
                    />
                  </div>
                  <p className="text-base text-white">{item.info1.duration}</p>
                </div>
              </div>
              <p className="block h-px w-full bg-white"></p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base text-white">{item.info2.info}</p>
                </div>
                <div className="flex items-center gap-2 ">
                  <div>
                    <Image
                      src={item.info2.icone}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                  <p className="text-base text-white">{item.info2.duration}</p>
                </div>
              </div>
              <p className="block h-px w-full bg-white"></p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base text-white">{item.info3.info}</p>
                </div>
                <div className="flex items-center gap-2 ">
                  <div>
                    <Image
                      src={item.info3.icone}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                  <p className="text-base text-white">{item.info3.duration}</p>
                </div>
              </div>
              <p className="block h-px w-full bg-white"></p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base text-white">{item.info4.info}</p>
                </div>
                <div className="flex items-center gap-2 ">
                  <div>
                    <Image
                      src={item.info4.icone}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                  <p className="text-base text-white">{item.info4.duration}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-5">
        <div className="swiper-button-localizacao-info-prev cursor-pointer">
          <Image
            src={arrowRight}
            alt="arrow"
            className="w-5 rotate-180 transform"
          />
        </div>
        <div
          className="swiper-pagination-localizacao-info-lazer"
          style={{
            width: "fit-content",
          }}
        />
        <div className="swiper-button-localizacao-info-next cursor-pointer">
          <Image src={arrowRight} alt="arrow" className="w-5" />
        </div>
      </div>
    </div>
  );
}
