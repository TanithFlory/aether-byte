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
    <div className="mb-4 border-b-[#808080] bg-white text-black  rounded-sm h-max">
      <div
        className={`flex items-center justify-between cursor-pointer hover:text-lightGreen ${
          expand ? "text-lightGreen" : ""
        }`}
        onClick={() => setExpand((prev) => !prev)}
      >
        <div className="flex py-3 px-7 w-full justify-between items-center bg-lightGreen text-black">
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
        className={`px-8 py-4 grid-transition font-bold grid grid-rows-[0fr] ${
          expand ? "grid-rows-[1fr]" : ""
        }`}
      >
        <p className="text-fs-200 font-light overflow-hidden">{answer}</p>
      </div>
    </div>
  );
}

export default QnACard;
