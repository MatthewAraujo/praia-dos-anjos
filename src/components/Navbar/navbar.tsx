import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import logo from "../../../public/praia.svg";

export function Navbar() {
  return (
    <div className="absolute top-5 z-50 flex w-full items-center justify-between">
      <div className="px-2 ">
        <Image src={logo} alt="praia" className="relative z-10 lg:hidden" />
        <svg
          className="z-1 absolute left-0 top-0 -translate-x-1/4 -translate-y-1/4 lg:hidden"
          width="265"
          height="265"
          viewBox="0 0 265 265"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="132.5"
            cy="132.5"
            r="132.5"
            fill="url(#paint0_radial_79_1434)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_79_1434"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(132.5 132.5) rotate(90) scale(132.5)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div>
        <ul className="hidden items-center gap-2 rounded-s-full bg-praia-blue-500 p-3 text-end text-sm text-white lg:flex lg:text-lg xl:gap-5  2xl:text-lg">
          <li>O Empreendimento</li>
          <li>Lazer e Serviços</li>
          <li>Diferencias</li>
          <li>Vídeo</li>
          <li>Tour 360</li>
          <li>Plantas</li>
          <li>Localização</li>
          <li>Etapas</li>
          <li>Contato</li>
        </ul>
      </div>
      <div className="fixed right-0 rounded-s-full bg-praia-blue-500 px-1 py-3 lg:hidden">
        {" "}
        <Sheet>
          <SheetTrigger>
            <div className="px-1">
              <svg
                width="31"
                height="12"
                viewBox="0 0 31 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H15.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M1 6H30"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M15.5 11L30 11"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </SheetTrigger>
          <SheetContent className="h-fit rounded-es-[50px] bg-praia-blue-500 ">
            <SheetHeader>
              <SheetDescription className="flex flex-col items-center gap-5">
                <div>
                  <Image
                    width={150}
                    height={150}
                    src="/praia-white.svg"
                    alt="praia"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <ul className="flex flex-col space-y-5 text-end text-xl text-white">
                    <li>O Empreendimento</li>
                    <li>Lazer e Serviços</li>
                    <li>Diferencias</li>
                    <li>Vídeo</li>
                    <li>Tour 360</li>
                    <li>Plantas</li>
                    <li>Localização</li>
                    <li>Etapas</li>
                    <li>Contato</li>
                  </ul>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
