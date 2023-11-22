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
import homeKey from "../../../../public/icons/home-key.svg";
import bricks from "../../../../public/icons/bricks.svg";
import { SwiperModal } from "./SwiperModal";

export function ModalAcompanhe({}) {
  const { isModalOpen, setIsModalOpen, modal } = useContext(ModalContext);

  const { id, blocos, carrouselImg, img, percentage } = modal;

  return (
    <Dialog onOpenChange={setIsModalOpen} open={isModalOpen}>
      <DialogContent className="p-0 lg:max-w-7xl">
        <DialogHeader className="p-0">
          <DialogDescription className="flex flex-col items-center overflow-hidden rounded-lg lg:flex-row">
            <div className="relative w-full after:absolute after:inset-0  after:z-10  after:rounded-xl after:bg-praia-blue-500 after:bg-opacity-50 lg:w-1/3">
              <img
                src={img}
                alt=""
                className="relative h-40 object-cover lg:h-auto lg:w-full"
              />
              <p className="absolute left-0 top-0 z-20 px-2 text-left text-xl  uppercase text-white">
                acompanhe de perto <br />o andamento do <br />{" "}
                <strong>empreendimento</strong>
              </p>
            </div>
            <div className="h-full w-full pt-5 lg:w-2/3">
              <div className="flex h-full flex-col justify-around gap-3 px-5 lg:gap-5 lg:px-24">
                <div className="flex items-center gap-3 ">
                  <div>
                    <Image src={arrowRight} alt="" className="h-8 w-8" />
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
                  <div className="flex items-center justify-between">
                    <div className="hidden lg:block">
                      <Image src={bricks} alt="" />
                    </div>
                    <div className="flex items-center gap-5 lg:gap-0 lg:flex-col">
                      {" "}
                      <div>
                        <Image src={homeKey} alt="" />
                      </div>
                      <p className="text-4xl font-bold text-praia-blue-linear">
                        100%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-96 text-left lg:w-full lg:max-w-xl">
                  <p className="uppercase text-praia-blue-linear">
                    veja de perto!
                  </p>
                  <div className="w-full">
                    <SwiperModal />
                  </div>
                  <a
                    href=""
                    className="mx-auto mt-5 flex w-fit items-center justify-center gap-3 rounded-full bg-praia-blue-linear p-2 px-8 text-lg uppercase text-white lg:mx-0 lg:ml-auto"
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
