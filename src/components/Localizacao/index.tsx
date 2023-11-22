import { SwiperLocalizacaoFotos } from "../SwiperLocalizacaoFotos";
import { SwiperLocalizacaoInfo } from "../SwiperLocalizacaoInfo";

export function Localizacao() {
  return (
    <div className="bg-[#FDFAF6]">
      <div className="lg:clip-wave-desktop  clip-wave-mobile bg-praia-blue-500 px-4 pb-6 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-7">
            <h2 className="text-3xl uppercase text-white">
              AV. LUIZ JOAQUIM CORRE,
              <br /> 300, <strong>ARRAIAL DO CABO</strong>
            </h2>
            <p className="text-lg text-white">
              A cidade de arraial do cabo reúne algumas das mais belas paisagens
              do litoral brasileiro, com praias de areias tão brancas e mar azul
              que podemos afirmar que arraial do cabo é o caribe brasileiro. Os
              passeios de barco mais famosos e concorridos da região dos lagos
              saem da praia dos anjos. Arraial do cabo conta com toda
              infraestrutura para o seu lazer. Conheça mais esse excelente
              lançamento da construtora volendam localizado no último grande
              terreno de frente para praia dos anjos: “praia dos anjos residence
              club”.
            </p>
          </div>
          <div className="flex flex-col gap-2 pt-10 lg:flex-row lg:gap-20">
            <div className="lg:order-2 lg:w-1/2  lg:pb-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235185.65150863767!2d-43.210551773968085!3d-22.921638718902866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9980d11713a241%3A0x4ab9cc046614a9d5!2sNiter%C3%B3i%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700227863952!5m2!1spt-BR!2sbr"
                loading="lazy"
                className="h-96 w-full rounded-lg lg:h-full"
              ></iframe>
            </div>
            <div className="flex flex-col gap-12 lg:w-1/2">
              <div>
                <SwiperLocalizacaoInfo />
              </div>
              <div>
                <h2 className="text-2xl uppercase text-white">
                  Conheça <strong>arraial do cabo</strong>
                </h2>
                <div>
                  <SwiperLocalizacaoFotos />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-2xl uppercase text-white">
              último terreno em frente <br /> à <strong>praia dos anjos</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
