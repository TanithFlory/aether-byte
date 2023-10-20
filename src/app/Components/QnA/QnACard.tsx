"use client";

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

interface IProps {
  question: string;
  answer: string;
}

function QnACard({ question, answer }: IProps) {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className="border-b-[#808080] bg-white text-black  rounded-sm h-max hover:bg-secondary mb-4"
    >
      <div
        className={`flex items-center justify-between cursor-pointer hover:text-lightGreen ${
          expand ? "text-lightGreen" : ""
        }`}
        onClick={() => setExpand((prev) => !prev)}
      >
        <div
          className={`flex py-3 px-7 w-full justify-between items-center  text-black  border-purple border-dashed ${
            expand ? "bg-lightGreen border-2 " : ""
          }`}
        >
          <div className="text-fs-200 font-bold">{question}</div>
          <div
            className={`scale-150 transition-transform duration-500 ease-in-out ${
              expand ? "rotate-[135deg]" : ""
            }`}
          >
            <AiOutlinePlus className="stroke-[10%]" />
          </div>
        </div>
      </div>
      <div
        className={`grid-transition px-7 py-[4px] font-bold grid grid-rows-[0fr]  ${
          expand ? "grid-rows-[1fr]" : ""
        }`}
      >
        <p className="text-fs-200 overflow-hidden border-transparent font-bold">{answer}</p>
      </div>
    </div>
  );
}

export default QnACard;
