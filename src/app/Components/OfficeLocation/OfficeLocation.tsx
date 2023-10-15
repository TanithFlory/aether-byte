import { WrapperDiv } from "@/app/Utils/WrapperDiv";
import InformationCards from "./InformationCards";
import dynamic from "next/dynamic";
function OfficeLocation() {
  const Map = dynamic(() => import("./Map"), { ssr: false });

  return (
    <section className="bg-secondary py-24">
      <WrapperDiv className="gap-5">
        <div className="w-full max-w-[450px]  text-primary bg-primary rounded-sm">
          <InformationCards />
        </div>
        <Map/>
      </WrapperDiv>
    </section>
  );
}

export default OfficeLocation;
