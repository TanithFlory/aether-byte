"use client";
import { WrapperDiv } from "@/app/Utils/WrapperDiv";
import faqData from "./Faq.data";
import FaqCard from "./FaqCard";
function Faq() {
  return (
    <section className="bg-primary text-white px-4">
      <WrapperDiv className="py-24 gap-6">
        <div className="max-w-[405px]">
          <h2 className="text-fs-600 font-bold">Frequently asked questions</h2>
        </div>
        <div className="max-w-[700px]">
          {faqData.map(({ question, answer, id }) => {
            return (
              <FaqCard key={id} question={question} id={id} answer={answer} />
            );
          })}
        </div>
      </WrapperDiv>
    </section>
  );
}

export default Faq;
