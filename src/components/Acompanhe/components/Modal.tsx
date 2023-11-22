"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { ModalContext } from "@/context/modal";
import Image from "next/image";
import { useContext } from "react";
import arrowRight from "../../../../public/arrow-right.svg";
import arrowBold from "../../../../public/icons/arrow-bold.svg";
import homeKey from "../../../../public/icons/home-key.svg";
import bricks from "../../../../public/icons/bricks.svg";
import { SwiperModal } from "./SwiperModal";
import picture from "../../../../public/mobile/acompanhe/modal/praia_dos_anjos 1.png";

export function ModalAcompanhe({}) {
  const { isModalOpen, setIsModalOpen, modal } = useContext(ModalContext);

  const { id, blocos, carrouselImg, img, percentage } = modal;

  return (
    <Dialog onOpenChange={setIsModalOpen} open={isModalOpen}>
      <DialogContent className="p-0 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <DialogHeader className="p-0">
          <DialogDescription className="grid grid-cols-1 overflow-hidden rounded-lg lg:flex lg:flex-row lg:items-center">
            <div className="relative w-full after:absolute after:inset-0  after:z-10  after:rounded-xl after:bg-praia-blue-500 after:bg-opacity-50 lg:w-1/3">
              <picture>
                <source media="(min-width: 768px)" srcSet={img} />
                <Image
                  src={picture}
                  alt=""
                  width={768}
                  height={768}
                  className="w-full object-cover"
                />
              </picture>
              <p className="absolute left-0 top-0 z-20 px-2 text-left text-lg uppercase text-white lg:left-1/2 lg:top-8 lg:w-96 lg:-translate-x-1/2 lg:text-3xl ">
                acompanhe de perto <br />o andamento do <br />{" "}
                <strong>empreendimento</strong>
              </p>
            </div>
            <div className="h-full w-full pt-5 lg:w-2/3">
              <div className="flex h-full flex-col justify-around gap-3 px-5 lg:gap-5 lg:px-24">
                <div className="flex items-center gap-3 ">
                  <div>
                    <Image src={arrowBold} alt="" className="h-8 w-8" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-bold uppercase text-praia-blue-100">
                      Blocos{" "}
                      <strong className="text-praia-blue-footer">
                        1, 2 e 3
                      </strong>
                    </p>{" "}
                    <p className="text-xl font-bold uppercase text-praia-blue-100">
                      prontos para morar
                    </p>
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-lg uppercase text-praia-blue-linear">
                    andamento geral do <br />
                    empreendimento
                  </p>
                </div>
                <div className="">
                  <div className="after:aboslute flex items-center justify-between relative before:absolute before:h-3 before:w-[calc(100%-20px);] box-si before:-z-20 before:bg-gray-200 after:absolute after:h-3 after:w-[calc(60%-20px);] box-si after:-z-10 after:bg-gradient-to-r from-praia-blue-500 to-praia-blue-100">
                    <div className="hidden lg:block">
                      <Image src={bricks} alt="" className="" />
                    </div>
                    <div className="flex items-center gap-5 lg:flex-col lg:gap-0 lg:pr-5 ">
                      {" "}
                      <div>
                        <Image src={homeKey} alt="" className="w-16 lg:w-full" />
                      </div>
                      <p className="text-4xl font-bold text-praia-blue-linear lg:hidden">
                        100%
                      </p>
                    </div>
                  </div>
                  <p className="hidden text-end text-4xl font-bold text-praia-blue-linear lg:block">
                    100%
                  </p>
                </div>
                <div className="w-full text-left lg:w-full lg:max-w-xl">
                  <p className="uppercase text-praia-blue-linear">
                    veja de perto!
                  </p>
                  <div className="w-full">
                    <SwiperModal />
                  </div>
                  <a
                    href=""
                    className="mx-auto my-5 flex w-fit items-center justify-center gap-3 rounded-full bg-praia-blue-linear p-2 px-8 text-lg uppercase text-white lg:mx-0 lg:ml-auto"
                  >
                    fale com corretor{" "}
                    <div>
                      <Image src={arrowRight} alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
