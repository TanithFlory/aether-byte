"use client";
import { WrapperDiv } from "@/app/Utils/Wrappers";
import faqData from "./Faq.data";
import FaqCard from "./FaqCard";
import { SectionWrapper } from "@/app/Utils/Wrappers";
function Faq() {
  return (
    <SectionWrapper className="bg-primary text-white">
      <WrapperDiv className="gap-6">
        <div className="max-w-[327px]">
          <h2 className="text-fs-600 font-bold">Frequently asked questions</h2>
        </div>
        <div className="max-w-[843px]">
          {faqData.map((item) => {
            return <FaqCard key={item.id} {...item} length={faqData.length} />;
          })}
        </div>
      </WrapperDiv>
    </SectionWrapper>
  );
}

export default Faq;
