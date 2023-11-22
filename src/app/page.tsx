import { Acompanhe } from "@/components/Acompanhe";
import { Banner } from "@/components/Banner/banner";
import { Diferencias } from "@/components/Diferencias/diferencias";
import { Empreendimento } from "@/components/Empreendimento/empreendimento";
import { FormSection } from "@/components/FormSection";
import { Lazer } from "@/components/Lazer";
import { Localizacao } from "@/components/Localizacao";
import { Plantas } from "@/components/Plantas/plantas";
import { TourVirtual } from "@/components/TourVirtual";
import { Video } from "@/components/Video/video";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Lazer />
      {/* <Empreendimento /> */}
      <Diferencias />
      <Video />
      <TourVirtual />
      <Plantas />
      <Localizacao/>
      <Acompanhe/>
      <FormSection/>
    </main>
  );
}
