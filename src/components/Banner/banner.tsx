import Image from "next/image";
import vector from "../../../public/details/Vector.svg";
import vectorDesktop from "../../../public/details/Vector-desktop.svg";
import arrowRight from "../../../public/arrow-right.svg";
import logo from "../../../public/praia-desktop.svg";
import bannerMobile from "../../../public/banner/banner-mobile.png";
export function Banner() {
  return (
    <div className="flex w-full flex-col  lg:flex-row  ">
      <div className="lg:order-2 lg:w-8/12 ">
        <picture>
          <source
            media="(min-width: 425px)"
            srcSet="/banner/banner-desktop.png"
          />
          <Image
            src={bannerMobile}
            width={425}
            height={470}
            alt="Fachada"
            className="w-full object-cover lg:h-screen"
            priority
          />
        </picture>
      </div>
      <div className="relative z-30 flex flex-col justify-center gap-5 overflow-hidden bg-praia-blue-linear bg-opacity-95 px-4 py-8 pb-20 lg:w-6/12 lg:px-20 xl:px-16">
        <div className="mb-12 hidden lg:block">
          <Image src={logo} alt="praia" />
        </div>
        <h2 className="text-2xl font-bold uppercase lg:text-3xl 2xl:text-4xl">
          <p className="text-praia-blue-100">
            viva completamente
            <br /> cercado pela <span className="text-white">natureza</span>
            <br /> e de frente para o <span className="text-white">mar</span>
          </p>
        </h2>

        <p className="mt-5 text-lg text-white lg:text-xl">
          Um empreendimento pensado nos mínimos <br /> detalhes para realizar
          seu maior sonho.
        </p>

        <div className="mt-5 flex w-fit items-center gap-2 rounded-full bg-white p-2 px-6 font-bold uppercase text-praia-blue-500 lg:text-xl">
          <a href="#contato">quero saber mais</a>
          <Image src={arrowRight} alt="" />
        </div>

        <div className="absolute bottom-0 left-0 lg:hidden">
          <Image src={vector} alt="" />
        </div>
        <div className="absolute bottom-5 left-0 hidden lg:block">
          <Image src={vectorDesktop} alt="" />
        </div>
      </div>
    </div>
  );
}
