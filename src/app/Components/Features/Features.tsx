import { WrapperDiv, CardsWrapper, SectionWrapper } from "@/app/Utils/Wrappers";
import FeaturesCards from "./FeaturesCards";

function Features() {
  return (
    <SectionWrapper className="bg-primary text-white">
      <WrapperDiv className="flex-col py-24">
        <div className="text-center">
          <span className="font-bold">Features</span>
          <h2 className="text-fs-700 max-w-[630px] mx-auto font-bold mb-11">
            Design that solves the problems.
          </h2>
        </div>
        <CardsWrapper>
          <FeaturesCards />
        </CardsWrapper>
      </WrapperDiv>
    </SectionWrapper>
  );
}

export default Features;
