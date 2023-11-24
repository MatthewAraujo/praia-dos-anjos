"use client";
import { createContext, useState } from "react";
interface ModalProps {
  id: number;
  img: string;
  blocos: string;
  percentage: number;
  carrouselImg: Array<{
    img: string;
    alt: string;
    width: number;
    height: number;
    picture: string;
  }>;
  status: string;
}

interface ModalType {
  modal: ModalProps;
  setModal: (modal: ModalProps) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalContext = createContext({} as ModalType);

export function ModalProvider({ children }: ModalProviderProps) {
  const [modal, setModal] = useState<ModalProps>({} as ModalProps);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{ modal, setModal, isModalOpen, setIsModalOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
}
