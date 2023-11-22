import { SwiperLazer } from "../SwiperLazer";

export function Lazer() {
  return (
    <div className="bg-[#FDFAF6]">
      <div className=" mx-auto max-w-7xl">
        <h2 className="p-4 text-2xl uppercase text-praia-blue-500 lg:text-3xl ">
          <strong>Lazer </strong>e <strong>serviço</strong> <br />
          sem sair de casa
        </h2>
      </div>
      <div>
        <SwiperLazer />
      </div>
    </div>
  );
}
