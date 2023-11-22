import { SwiperAcompanhe } from "../SwiperAcompanhe";
import { Card } from "./components/Card";
import { ModalAcompanhe } from "./components/Modal";

export function Acompanhe() {
  return (
    <>
    <div className="bg-[#FDFAF6] pt-20 ">
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <h2 className="p-4 text-2xl uppercase text-praia-blue-500 lg:text-3xl ">
            clique abaixo e <br />
            <strong>acompanhe as etapas!</strong>
          </h2>
        </div>
        <div className="w-full md:hidden">
          <SwiperAcompanhe />
        </div>
        <div className="hidden md:flex  gap-12 justify-center">
          <Card/>
        </div>
      </div>
    </div>
    <ModalAcompanhe/>
    </>
  );
}
