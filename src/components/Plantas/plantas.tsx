import { SwiperPlantas } from "../SwiperPlantas";

export function Plantas() {
  return (
    <div className="bg-[#FDFAF6] pt-20 ">
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <h2 className="p-4 text-2xl uppercase text-praia-blue-500 lg:text-3xl ">
            <strong>muito espaço</strong> <br />
            pra toda a familia
          </h2>
        </div>
        <div className="w-full">
          <SwiperPlantas />
        </div>
      </div>
    </div>
  );
}
