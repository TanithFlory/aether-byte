import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
interface IProps {
  question: string;
  answer: string;
  id: number;
}

function FaqCard({ question, answer, id }: IProps) {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={`pb-4 mb-4 border-b-[#808080] ${id < 5 ? "border-b-[1px]" : ""}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex cursor-pointer">
          <span className="text-fs-400 text-secondary font-bold">0{id}</span>
          <div
            className="text-fs-400 font-bold px-10"
            onClick={() => setExpand((prev) => !prev)}
          >
            {question}
          </div>
        </div>
        <div
          className={`scale-150 transition-transform duration-500 ease-in-out ${
            expand ? "rotate-[135deg]" : ""
          }`}
        >
          <AiOutlinePlus className="stroke-[5%]" />
        </div>
      </div>
      <div
        className={`grid-transition text-fs-300 pl-[4.2rem] pr-10 font-bold grid grid-rows-[0fr] ${
          expand ? "grid-rows-[1fr]" : ""
        }`}
      >
        <p className="text-fs-300 font-light overflow-hidden">{answer}</p>
      </div>
    </div>
  );
}

export default FaqCard;
