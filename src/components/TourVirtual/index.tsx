"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

import bgMobile from "../../../public/mobile/tourVirtual/bg-tour.png";
export function TourVirtual() {
  return (
    <div className="bg-[#FDFAF6] pt-20">
      <div className="">
        <div className="mx-auto max-w-7xl">
          <h2 className="p-4 text-2xl uppercase text-praia-blue-500 lg:text-3xl ">
            faça um tour <br />
            pelo seu <strong>novo lar</strong>
          </h2>
        </div>
        <div className="w-full p-10 lg:hidden">
          <Select>
            <SelectTrigger className="relative  z-20 w-64 rounded-full bg-praia-blue-500  font-bold uppercase text-white ">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent className="-top-5 z-10 rounded-b-2xl pt-5 text-praia-blue-500 ">
              <SelectItem value="3">aptos 3 quartos</SelectItem>
              <SelectItem value="2">aptos 2 quartos</SelectItem>
              <SelectItem value="cobertura">cobertura</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mx-auto flex max-w-7xl items-center  justify-center gap-20">
          <div className="relative w-screen after:absolute after:inset-0 after:z-10  after:rounded-xl after:bg-praia-blue-500 after:bg-opacity-60 lg:w-3/4">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/desktop/tourVirtual/bg-tour.png"
              />
              <Image
                src={bgMobile}
                alt=""
                className="w-full object-cover lg:rounded-xl"
              />
            </picture>
            <Image
              src="/details/globeTour.svg"
              alt=""
              className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
              width={100}
              height={100}
            />
          </div>
          <div className="hidden w-1/4 flex-col gap-5 lg:flex">
            <div className="flex w-60 cursor-pointer items-center justify-between rounded-full bg-praia-blue-500 px-4 py-2 font-bold uppercase text-white">
              <p> aptos 3 quartos</p>
              <div>
                <Image
                  src="/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </div>
            </div>
            <div className="flex w-60 cursor-pointer items-center justify-between rounded-full bg-praia-blue-500 px-4 py-2 font-bold uppercase text-white">
              <p> aptos 2 quartos</p>
              <div>
                <Image
                  src="/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </div>
            </div>
            <div className="flex w-60 cursor-pointer items-center justify-between rounded-full bg-praia-blue-500 px-4 py-2 font-bold uppercase text-white">
              <p> cobertura</p>
              <div>
                <Image
                  src="/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
