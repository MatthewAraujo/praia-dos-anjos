import Image from "next/image";
import blueLake from "../../../public/logo/blue-lake.svg";
import goldenLake from "../../../public/logo/golden-lake.svg";
import { Form } from "../Form";

export function FormSection() {
  return (
    <div className=" bg-[#FDFAF6]  px-4 py-4">
      <div className=" mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:justify-between">
        <div className="flex flex-col  gap-10">
          <div>
            <h2 className="text-3xl uppercase text-praia-blue-500">
              conheça outros <br /> <strong>empreendimentos</strong>
            </h2>
          </div>
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div>
              <Image src={blueLake} alt="Blue lake" />
            </div>
            <div>
              <Image src={goldenLake} alt="Golden lake" />
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}
