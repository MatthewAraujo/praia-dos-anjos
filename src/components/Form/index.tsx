import Checkbox from "../Checkbox";
import arrowRight from "../../../public/arrow-right.svg";
import Image from "next/image";

export function Form() {
  return (
    <div className="">
      <h2 className="text-2xl uppercase text-praia-blue-500 ">
        Ficou <br />
        <strong>interessado?</strong>
      </h2>
      <form action="" className="flex flex-col gap-5 px-4 lg:pt-6">
        <div className="flex flex-col justify-between lg:flex-row">
          <input
            type="text"
            placeholder="nome"
            className="h-8 rounded-full bg-white py-5  pl-4 placeholder:uppercase placeholder:text-praia-blue-500"
          />
          <input
            type="text"
            placeholder="Telefone"
            className="h-8 rounded-full bg-white py-5  pl-4 placeholder:uppercase placeholder:text-praia-blue-500"
          />
        </div>
        <div className="flex flex-col justify-between lg:flex-row">
          <input
            type="text"
            placeholder="Email"
            className="h-8 rounded-full bg-white py-5  pl-4 placeholder:uppercase placeholder:text-praia-blue-500"
          />
          <input
            type="text"
            placeholder="assunto"
            className="h-8 rounded-full bg-white py-5  pl-4 placeholder:uppercase placeholder:text-praia-blue-500"
          />
        </div>
        <textarea
          placeholder="mensagem"
          className="h-48 resize-none rounded-3xl bg-white  py-5 pl-4 placeholder:uppercase placeholder:text-praia-blue-500"
        />
        <div className="flex items-center gap-4">
          <Checkbox
            defaultChecked={false}
            label="li e aceito os termos e as políticas de privacidade"
            disabled={false}
            id="termos"
          />
        </div>

        <button className="flex items-center justify-between rounded-full bg-praia-blue-500 px-6 py-2 font-bold uppercase text-white lg:ml-auto lg:w-72">
          enviar
          <Image src={arrowRight} alt="arrow right" />
        </button>
      </form>
    </div>
  );
}
