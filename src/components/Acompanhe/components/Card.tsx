"use client";
import Image from "next/image";
import arrowRight from "../../../../public/arrow-right.svg";
import { ModalContext } from "@/context/modal";
import { useContext } from "react";
const arrCard = [
  {
    bloco: "Bloco",
    image: "/desktop/acompanhe/bloco1.png",
    numeros: "1, 2 e 3",
    status: "prontos para morar",
    modal: {
      id: 1,
      img: "/desktop/acompanhe/bloco1.png",
      blocos: "1, 2 e 3",
      percentage: 50,
      status: "prontos para Viver",
      carrouselImg: [
        {
          img: "/mobile/plantas/planta1.png",
          alt: "planta",
          width: 768,
          height: 768,
          picture: "/desktop/plantas/planta1.png",
        },
        {
          img: "/mobile/plantas/planta1.png",
          alt: "planta",
          width: 768,
          height: 768,
          picture: "/desktop/plantas/planta1.png",
        },
        {
          img: "/mobile/plantas/planta1.png",
          alt: "planta",
          width: 768,
          height: 768,
          picture: "/desktop/plantas/planta1.png",
        },
      ],
    },
  },
  {
    bloco: "Bloco",
    image: "/desktop/acompanhe/bloco4.png",
    numeros: "1, 2 e 3",
    status: "prontos para morar",
    modal: {
      id: 2,
      img: "/desktop/acompanhe/bloco4.png",
      blocos: "1, 2 e 3",
      percentage: 50,
      status: "prontos para morar",
      carrouselImg: [
        {
          img: "/mobile/plantas/planta1.png",
          alt: "planta",
          width: 768,
          height: 768,
          picture: "/desktop/plantas/planta1.png",
        },
        {
          img: "/mobile/plantas/planta1.png",
          alt: "planta",
          width: 768,
          height: 768,
          picture: "/desktop/plantas/planta1.png",
        },
        {
          img: "/mobile/plantas/planta1.png",
          alt: "planta",
          width: 768,
          height: 768,
          picture: "/desktop/plantas/planta1.png",
        },
      ],
    },
  },
  {
    bloco: "Bloco",
    image: "/desktop/acompanhe/bloco5.png",
    numeros: "1, 2 e 3",
    status: "prontos para morar",
    modal: {
      id: 3,
      img: "/desktop/acompanhe/bloco5.png",
      blocos: "3, 2 e 3",
      percentage: 50,
      status: "prontos para morar",
      carrouselImg: [
        {
          img: "/mobile/plantas/planta1.png",
          alt: "planta",
          width: 768,
          height: 768,
          picture: "/desktop/plantas/planta1.png",
        },
        {
          img: "/mobile/plantas/planta1.png",
          alt: "planta",
          width: 768,
          height: 768,
          picture: "/desktop/plantas/planta1.png",
        },
        {
          img: "/mobile/plantas/planta1.png",
          alt: "planta",
          width: 768,
          height: 768,
          picture: "/desktop/plantas/planta1.png",
        },
      ],
    },
  },
];
export function Card() {
  const { setIsModalOpen, setModal } = useContext(ModalContext);

  return arrCard.map((item, index) => {
    return (
      <div
        key={index}
        className="group relative"
        onClick={() => {
          setModal({
            id: item.modal.id,
            img: item.modal.img,
            blocos: item.modal.blocos,
            percentage: item.modal.percentage,
            carrouselImg: item.modal.carrouselImg,
            status: item.modal.status,
          });
          setIsModalOpen(true);
        }}
      >
        <div className="flex justify-center">
          <div className="relative w-72">
            <Image src={item.image} alt="bloco" width={500} height={500} />
          </div>
        </div>
        <div className=" absolute bottom-0 left-0 w-full text-3xl font-bold text-praia-blue-100 opacity-0 transition duration-300 after:absolute after:inset-0  after:z-10 after:rounded-xl after:bg-praia-blue-500 after:bg-opacity-70 group-hover:opacity-100">
          <div className="relative z-20 flex w-full items-center gap-5 px-3  ">
            <div>
              <Image src={arrowRight} alt="arrow" className="w-5" />
            </div>
            <div className="py-2">
              <p className="">{item.bloco}</p>
              <p className="text-white"> {item.numeros}</p>
              <p className=""> {item.status}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
