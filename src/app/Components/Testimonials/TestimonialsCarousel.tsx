"use client";

import { WrapperDiv } from "@/app/Utils/WrapperDiv";
import CarouselControls from "./CarouselControls";
import { useEffect, useRef, useState } from "react";
import testimonialsData from "./Testimonials.data";
import TestimonialsCard from "./TestimonialsCard";

function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselScroll, setCarouselScroll] = useState(0);
  const [carouselButton, setCarouselButton] = useState({
    left: false,
    right: true,
    count: 0,
  });
  let autoScrollInterval: NodeJS.Timer;

  function resetCarousel() {
    if (carouselRef.current) {
      const { style } = carouselRef.current;
      style.transform = "translateX(0px)";
      setCarouselScroll(0);
      setCarouselButton((prev) => ({
        ...prev,
        count: 0,
      }));
      return;
    }
  }
  
  function handleCarouselScroll(identifier: number) {
    if (carouselRef.current) {
      clearInterval(autoScrollInterval);
      const { offsetWidth, style } = carouselRef.current;

      if (
        carouselButton.count === testimonialsData.length - 1 &&
        identifier === 3
      ) {
        resetCarousel();
      }

      setCarouselButton((prev) => ({
        ...prev,
        count: identifier ? ++prev.count : --prev.count,
      }));

      const translateXValue = identifier
        ? carouselScroll - offsetWidth
        : carouselScroll + offsetWidth;

      setCarouselScroll(translateXValue);

      style.transform = `translateX(${translateXValue}px)`;
    }
  }

  useEffect(() => {
    const carouselLength = testimonialsData.length;

    if (!carouselButton.count) {
      setCarouselButton((prev) => ({ ...prev, left: false }));
    }
    if (carouselButton.count === carouselLength - 1) {
      setCarouselButton((prev) => ({ ...prev, right: false }));
    }

    return () => {
      setCarouselButton((prev) => ({ ...prev, right: true, left: true }));
    };
  }, [carouselScroll]);

  //auto-scroll for the carousel, resetting translateX values incase of window resize.
  useEffect(() => {
    window.addEventListener("resize", resetCarousel);
    autoScrollInterval = setInterval(() => {
      handleCarouselScroll(3);
    }, 10000);

    return () => {
      clearInterval(autoScrollInterval);
      window.removeEventListener("resize", resetCarousel);
    };
  }, [carouselScroll]);

  return (
    <section className="bg-secondary text-black p-4">
      <WrapperDiv className="py-24 gap-6">
        <div className="max-w-[327px]">
          <h2 className="text-fs-600 font-bold">
            What our clients say about us
          </h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div className="w-full max-w-[843px] relative overflow-hidden">
          <div
            className="flex w-full flex-nowrap transition-all duration-500 ease-in-out"
            ref={carouselRef}
          >
            {testimonialsData.map((data) => {
              return (
                <TestimonialsCard
                  key={data.id}
                  name={data.name}
                  desc={data.desc}
                  role={data.role}
                />
              );
            })}
          </div>
          <CarouselControls
            carouselButton={carouselButton}
            handleCarouselScroll={handleCarouselScroll}
          />
        </div>
      </WrapperDiv>
    </section>
  );
}

export default TestimonialsCarousel;
