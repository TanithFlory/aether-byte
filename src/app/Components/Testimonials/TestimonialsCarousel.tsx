"use client";

import { SectionWrapper } from "@/app/Utils/SectionWrapper";
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

  function handleCarouselChange(identifier: number) {
    setCarouselButton((prev) => ({
      ...prev,
      count: identifier ? ++prev.count : --prev.count,
    }));

    if (carouselRef.current) {
      const { offsetWidth } = carouselRef.current;

      const translateXValue = identifier
        ? carouselScroll - offsetWidth
        : carouselScroll + offsetWidth;

      setCarouselScroll(translateXValue);

      carouselRef.current.style.transform = `translateX(${translateXValue}px)`;
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

  return (
    <section className="bg-secondary text-black p-4">
      <SectionWrapper className="py-24 gap-6">
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
                  name={data.name}
                  desc={data.desc}
                  role={data.role}
                />
              );
            })}
          </div>
          <CarouselControls
            carouselButton={carouselButton}
            handleCarouselChange={handleCarouselChange}
          />
        </div>
      </SectionWrapper>
    </section>
  );
}

export default TestimonialsCarousel;
