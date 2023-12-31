import Image from "next/image";
import volendam from "../../../public/volendam.svg";
import internit from "../../../public/internit.svg";
export function Footer() {
  return (
    <footer className="">
      <div className=" bg-praia-blue-footer lg:py-8">
        <div className="mx-auto flex  max-w-7xl flex-col	 items-center justify-center gap-16 bg-praia-blue-footer p-8 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <p className="text-2xl text-white">Realização</p>
            <div>
              <Image src={volendam} alt="volendam" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-14 ">
            <div className="flex flex-row items-center gap-14">
              <div>
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27C54 41.9117 41.9117 54 27 54Z"
                    fill="#F05823"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M41.7981 26.2479C41.5995 18.4445 35.1723 12.1875 27.2695 12.1875C19.4518 12.1875 13.0814 18.3026 12.7409 25.9925C12.7409 26.2054 12.7267 26.4182 12.7267 26.631C12.7267 29.3551 13.4928 31.909 14.8123 34.0798L12.1875 41.8265L20.2464 39.2726C22.332 40.4219 24.7298 41.0745 27.2695 41.0745C35.3 41.0745 41.8123 34.6189 41.8123 26.6452C41.7981 26.5033 41.7981 26.3756 41.7981 26.2479ZM27.2553 38.7477C24.7724 38.7477 22.4597 38.0099 20.5301 36.733L15.8339 38.2369L17.352 33.7251C15.8906 31.7245 15.0251 29.27 15.0251 26.6168C15.0251 26.2196 15.0393 25.8223 15.0819 25.4392C15.6778 19.2957 20.9132 14.486 27.2411 14.486C33.6542 14.486 38.9321 19.4234 39.4287 25.6662C39.4571 25.9784 39.4713 26.2905 39.4713 26.6168C39.4855 33.3136 33.9947 38.7477 27.2553 38.7477Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.924 29.5393C33.5693 29.369 31.8099 28.5035 31.4836 28.39C31.1573 28.2623 30.9161 28.2198 30.6749 28.5603C30.4337 28.915 29.7527 29.7095 29.5398 29.9365C29.327 30.1777 29.1284 30.2061 28.7595 30.0217C28.4048 29.8514 27.2556 29.4825 25.8935 28.2623C24.8436 27.3259 24.12 26.1767 23.9072 25.822C23.7085 25.4673 23.893 25.2828 24.0632 25.0984C24.2335 24.9423 24.4179 24.6869 24.6024 24.4741C24.6449 24.4174 24.6875 24.3606 24.7301 24.3039C24.8152 24.1762 24.872 24.0485 24.9571 23.8782C25.0848 23.637 25.0138 23.4384 24.9287 23.2539C24.8436 23.0695 24.12 21.3385 23.822 20.6291C23.5241 19.9197 23.2261 20.0474 23.0133 20.0474C22.8147 20.0474 22.5735 20.019 22.3323 20.019C22.0911 20.019 21.708 20.1042 21.3817 20.4589C21.0554 20.8136 20.1331 21.6649 20.1331 23.41C20.1331 23.8215 20.2041 24.2329 20.3176 24.616C20.6723 25.8645 21.4526 26.8861 21.5945 27.0705C21.7648 27.2976 24.0632 30.9865 27.6812 32.4195C31.3134 33.8241 31.3134 33.3559 31.966 33.2991C32.6187 33.2424 34.0801 32.4478 34.3638 31.6107C34.6618 30.7878 34.6618 30.0784 34.5766 29.9224C34.5199 29.7947 34.2787 29.7095 33.924 29.5393Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27C54 41.9117 41.9117 54 27 54Z"
                    fill="#F05823"
                  />
                  <path
                    d="M22.8855 43.3163H29.4546V26.8581H34.0373L34.5197 21.3531H29.4404C29.4404 21.3531 29.4404 19.2958 29.4404 18.2175C29.4404 16.9122 29.6958 16.4014 30.9585 16.4014C31.9659 16.4014 34.5197 16.4014 34.5197 16.4014V10.6836C34.5197 10.6836 30.7741 10.6836 29.9653 10.6836C25.0704 10.6836 22.8713 12.8402 22.8713 16.9547C22.8713 20.5443 22.8713 21.3531 22.8713 21.3531H19.4519V26.929H22.8713V43.3163H22.8855Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27C54 41.9117 41.9117 54 27 54Z"
                    fill="#F05823"
                  />
                  <path
                    d="M26.9998 14.869C30.9583 14.869 31.4265 14.8832 32.9872 14.9542C34.4344 15.0251 35.2147 15.2663 35.7397 15.4649C36.4349 15.7345 36.9173 16.0608 37.4423 16.5716C37.9672 17.0966 38.2794 17.579 38.5489 18.2742C38.7476 18.7991 38.9888 19.5795 39.0597 21.0267C39.1306 22.5874 39.1448 23.0556 39.1448 27.0141C39.1448 30.9725 39.1306 31.4408 39.0597 33.0014C38.9888 34.4486 38.7476 35.229 38.5489 35.7539C38.2794 36.4492 37.953 36.9316 37.4423 37.4565C36.9173 37.9673 36.4349 38.2936 35.7397 38.5632C35.2147 38.7618 34.4344 39.003 32.9872 39.074C31.4265 39.1449 30.9583 39.1591 26.9998 39.1591C23.0413 39.1591 22.5731 39.1449 21.0124 39.074C19.5652 39.003 18.7849 38.7618 18.2599 38.5632C17.5647 38.2936 17.0823 37.9673 16.5573 37.4565C16.0466 36.9316 15.7202 36.4492 15.4507 35.7539C15.252 35.229 15.0108 34.4486 14.9399 33.0014C14.869 31.4408 14.8547 30.9725 14.8547 27.0141C14.8547 23.0556 14.869 22.5874 14.9399 21.0267C15.0108 19.5795 15.252 18.7991 15.4507 18.2742C15.7202 17.579 16.0466 17.0966 16.5573 16.5716C17.0823 16.0466 17.5647 15.7345 18.2599 15.4649C18.7849 15.2663 19.5652 15.0251 21.0124 14.9542C22.5873 14.8832 23.0555 14.869 26.9998 14.869ZM26.9998 12.2017C22.9846 12.2017 22.4738 12.2158 20.8989 12.2868C19.324 12.3577 18.2457 12.6131 17.3093 12.982C16.3303 13.3651 15.5074 13.8617 14.6845 14.6846C13.8616 15.5075 13.3508 16.3304 12.9819 17.3094C12.613 18.2458 12.3718 19.3241 12.2867 20.899C12.2158 22.4739 12.2016 22.9846 12.2016 26.9999C12.2016 31.0151 12.2158 31.5259 12.2867 33.1008C12.3576 34.6756 12.613 35.7539 12.9819 36.6904C13.365 37.6693 13.8616 38.4922 14.6845 39.3152C15.5074 40.1381 16.3303 40.6488 17.3093 41.0177C18.2457 41.3866 19.324 41.6278 20.8989 41.713C22.4738 41.7839 22.9846 41.7981 26.9998 41.7981C31.015 41.7981 31.5258 41.7839 33.1007 41.713C34.6756 41.642 35.7539 41.3866 36.6903 41.0177C37.6692 40.6347 38.4922 40.1381 39.3151 39.3152C40.138 38.4922 40.6488 37.6693 41.0176 36.6904C41.3865 35.7539 41.6277 34.6756 41.7129 33.1008C41.7838 31.5259 41.798 31.0151 41.798 26.9999C41.798 22.9846 41.7838 22.4739 41.7129 20.899C41.6419 19.3241 41.3865 18.2458 41.0176 17.3094C40.6346 16.3304 40.138 15.5075 39.3151 14.6846C38.4922 13.8617 37.6692 13.3509 36.6903 12.982C35.7539 12.6131 34.6756 12.3719 33.1007 12.2868C31.5258 12.2158 31.0292 12.2017 26.9998 12.2017Z"
                    fill="white"
                  />
                  <path
                    d="M26.9999 19.395C22.8002 19.395 19.395 22.8002 19.395 26.9999C19.395 31.1995 22.8002 34.6047 26.9999 34.6047C31.1996 34.6047 34.6047 31.1995 34.6047 26.9999C34.6047 22.8002 31.1996 19.395 26.9999 19.395ZM26.9999 31.9373C24.2757 31.9373 22.0624 29.724 22.0624 26.9999C22.0624 24.2757 24.2757 22.0624 26.9999 22.0624C29.724 22.0624 31.9373 24.2757 31.9373 26.9999C31.9373 29.724 29.724 31.9373 26.9999 31.9373Z"
                    fill="white"
                  />
                  <path
                    d="M36.6898 19.0972C36.6898 20.0762 35.8953 20.8708 34.9163 20.8708C33.9373 20.8708 33.1428 20.0762 33.1428 19.0972C33.1428 18.1183 33.9373 17.3237 34.9163 17.3237C35.8953 17.3237 36.6898 18.1183 36.6898 19.0972Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="pb-2 text-lg text-white">Desenvolvido por </p>
              <div>
                <Image src={internit} alt="internit" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl		p-8">
        <p className="text-justify text-black">
          A Construtora Volendam nasceu em 1992 com o sonho de proporcionar
          qualidade de vida às pessoas. Assim começou a história da Volendam em
          Cabo Frio, na Região dos Lagos do Rio de Janeiro. A Volendam
          proporciona uma experiência completa aos seus consumidores. Ela conta
          com as melhores opções de Apartamentos em Arraial do Cabo e Cabo Frio.
          Referência em Imóveis em Cabo Frio e Arraial do Cabo, a Volendam é
          líder entre as Construtoras da região dos lagos com suas opções de
          Apartamentos de 1, 2 e 3 quartos.
        </p>
      </div>
    </footer>
  );
}
