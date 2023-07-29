import { SectionWrapper } from "@/app/Utils/SectionWrapper";
import FeaturesCards from "./FeaturesCards";

function Features() {
  return (
    <section className="bg-primary text-white px-4 ">
      <SectionWrapper className="flex-col py-24">
        <div className="text-center">
          <span className="font-bold">Features</span>
          <h2 className="text-fs-700 max-w-[630px] mx-auto font-bold mb-11">Design that solves the problems.</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(clamp(280px,30%,400px),1fr))] gap-4">
          <FeaturesCards />
        </div>
      </SectionWrapper>
    </section>
  );
}

export default Features;
