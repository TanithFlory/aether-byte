"use client";

import Link from "next/link";
import data from "./dummyData";
import OpacityCarouselCard from "./OpacityCarouselCard";
import { useEffect, useState } from "react";
import { WrapperDiv } from "@/app/Utils/Wrappers";

function OpacityCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1);
  let timer: NodeJS.Timer;

  function changeSlide() {
    setCurrentSlide((prev) => (prev === data.length ? 1 : prev + 1));
  }

  function resetTimer() {
    clearInterval(timer);
  }

  useEffect(() => {
    timer = setInterval(() => {
      changeSlide();
    }, 7000);

    return () => {
      clearInterval(timer);
    };
  }, [changeSlide]);
  return (
    <>
      <div className="relative w-screen h-[500px] bg-black">
        {data.map((data, index) => {
          return (
            <OpacityCarouselCard
              key={data.id}
              {...data}
              visibility={index + 1 === currentSlide}
            />
          );
        })}
        <div className="mx-auto  max-w-[1200px] flex absolute bottom-[30px] left-0 right-0 z-20 w-full align-left justify-start ">
          {data.map(({ id, title }, index) => {
            const underlineStyles =
              "after:absolute after:bg-lightGreen after:content-[' '] after:left-0 after:bottom-0 after:h-[3px] after:w-full after:block";
            return (
              <div
                className={`p-2 text-center box-border w-[136px] font-bold text-fs-100 shadow-lg backdrop-blur-sm cursor-pointer relative text-secondary  ${
                  index + 1 === currentSlide && underlineStyles
                }`}
                key={id}
                onClick={() => setCurrentSlide(index + 1)}
              >
                {title}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OpacityCarousel;
