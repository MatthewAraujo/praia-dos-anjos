import Image from "next/image";
import arrowRight from "../../../public/arrow-right.svg";
import masterplan from "../../../public/mobile/plantas/master_plan.png";

export function Empreendimento() {
  return (
    <div className="min-h-screen bg-[#FDFAF6] px-4 ">
      <div className="flex flex-col gap-5 bg-[#FDFAF6]  ">
        <h2 className="text-2xl font-bold uppercase text-praia-blue-500 ">
          O empreendimento
        </h2>
        <p>
          Um espetacular empreendimento localizado no último grande terreno, em
          frente à praia dos anjos. Completa infraestrutura, área de lazer com
          3.000m², lojas, piscina com 300m² de espelho d’água e deck molhado.
          Composto por 272 unidades, sendo 264 apartamentos de 2 ou 3 quartos, 8
          lojas comerciais e 425 vagas demarcadas.
        </p>

        <div className="mt-5 flex w-fit items-center gap-2 rounded-full bg-praia-blue-500 p-2 px-6 font-bold uppercase text-white lg:text-xl">
          <a href="#contato">quero saber mais</a>
          <Image src={arrowRight} alt="" />
        </div>
      </div>
      <div className="clip-your-needful-style relative  h-full pb-48 ">
        <div className="0 absolute h-full w-full bg-praia-blue-linear opacity-30 " />
        <Image src={masterplan} alt="masterplan" />
      </div>
    </div>
  );
}
