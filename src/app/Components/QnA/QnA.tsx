import { SectionWrapper, WrapperDiv } from "@/app/Utils/Wrappers";
import QnACard from "./QnACard";

type FaqCard = {
  question: string;
  answer: string;
};

interface IProps {
  qnaCards: FaqCard[];
}

function QnA({ qnaCards }: IProps) {
  return (
    <SectionWrapper className="text-white bg-primary">
      <WrapperDiv>
        <div className="w-full pl-4 mb-8 text-fs-500">
          <h2>Q&A</h2>
        </div>
        <div className="flex  max-md:flex-wrap">
          <div className="px-4">
            {qnaCards
              .slice(0, Math.round(qnaCards.length / 2))
              .map((item, index) => {
                return <QnACard {...item} key={index} />;
              })}
          </div>
          <div className="px-4">
            {qnaCards
              .slice(Math.round(qnaCards.length / 2), qnaCards.length)
              .map((item, index) => {
                return <QnACard {...item} key={index} />;
              })}
          </div>
        </div>
      </WrapperDiv>
    </SectionWrapper>
  );
}

export default QnA;
