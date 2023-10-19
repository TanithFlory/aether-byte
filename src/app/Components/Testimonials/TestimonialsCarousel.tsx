"use client";

import { SectionWrapper, WrapperDiv } from "@/app/Utils/Wrappers";
import CarouselControls from "./CarouselControls";
import { useEffect, useRef, useState, useCallback } from "react";
import testimonialsData from "./Testimonials.data";
import TestimonialsCard from "./TestimonialsCard";

function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const buttonInitialState = {
    left: false,
    right: true,
  };
  const [carouselButton, setCarouselButton] = useState(buttonInitialState);
  const [carouselCount, setCarouselCount] = useState(1);
  const [scrollWidth, setScrollWidth] = useState(0);

  let autoScrollInterval: NodeJS.Timer;

  function resetCarousel() {
    if (!carouselRef.current) return;

    const { style } = carouselRef.current;
    style.transform = "translateX(0px)";
    setScrollWidth(0);
    setCarouselButton(buttonInitialState);
    setCarouselCount(1);
  }

  const handleCarouselScroll = useCallback(
    (type: string) => {
      if (!carouselRef.current) return;

      clearInterval(autoScrollInterval);
      const { offsetWidth, style } = carouselRef.current;

      setCarouselCount((prev) => (type === "left" ? ++prev : --prev));

      if (carouselCount === testimonialsData.length) return resetCarousel();

      const translateXValue =
        type === "left" ? scrollWidth - offsetWidth : scrollWidth + offsetWidth;

      setScrollWidth(translateXValue);

      style.transform = `translateX(${translateXValue}px)`;
    },
    [scrollWidth]
  );

  useEffect(() => {
    window.addEventListener("resize", resetCarousel);

    const carouselLength = testimonialsData.length;

    //first testimonial
    if (!carouselCount) {
      setCarouselButton((prev) => ({ ...prev, left: false }));
    }
    //last testimonial
    if (carouselCount === carouselLength) {
      setCarouselButton((prev) => ({ ...prev, right: false }));
    }

    const autoScrollInterval = setInterval(() => {
      handleCarouselScroll("left");
    }, 10000);

    return () => {
      clearInterval(autoScrollInterval);
      window.removeEventListener("resize", resetCarousel);
      setCarouselButton((prev) => ({ ...prev, right: true, left: true }));
    };
  }, [carouselCount]);

  return (
    <SectionWrapper className="bg-secondary text-black">
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
              const { id, name, desc, role } = data;
              return (
                <TestimonialsCard
                  key={id}
                  name={name}
                  desc={desc}
                  role={role}
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
    </SectionWrapper>
  );
}

export default TestimonialsCarousel;
