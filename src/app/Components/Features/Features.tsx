import { WrapperDiv } from "@/app/Utils/WrapperDiv";
import FeaturesCards from "./FeaturesCards";
import CardsWrapper from "@/app/Utils/CardWrapper";

function Features() {
  return (
    <section className="bg-primary text-white px-4 ">
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
    </section>
  );
}

export default Features;
