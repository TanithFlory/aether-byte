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
  console.log(
    0,
    Math.round(qnaCards.length / 2),
    Math.round(qnaCards.length / 2),
    qnaCards.length
  );
  return (
    <SectionWrapper className="text-white bg-primary">
      <WrapperDiv>
        <div>
          <h2>Q&A</h2>
        </div>
        <div className="flex max-md:flex-wrap">
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
