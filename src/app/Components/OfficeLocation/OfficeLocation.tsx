import InformationCards from "./InformationCards";
import dynamic from "next/dynamic";
import { SectionWrapper, WrapperDiv } from "@/app/Utils/Wrappers";
function OfficeLocation() {
  const Map = dynamic(() => import("./Map"), { ssr: false });

  return (
    <SectionWrapper className="bg-secondary py-24">
      <WrapperDiv className="gap-5">
        <div className="w-full max-w-[450px]  text-primary bg-primary rounded-sm">
          <InformationCards />
        </div>
        <Map />
      </WrapperDiv>
    </SectionWrapper>
  );
}

export default OfficeLocation;
