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
      className={`border-b-[#808080] bg-white text-black  rounded-sm h-max hover:bg-secondary ${
        expand ? "mb-7" : ""
      }`}
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
        className={`grid-transition py-4 px-7 font-bold grid grid-rows-[0fr] bg-primary ${
          expand ? "grid-rows-[1fr] bg-white" : ""
        }`}
      >
        <p className="text-fs-200 font-light overflow-hidden">{answer}</p>
      </div>
    </div>
  );
}

export default QnACard;
