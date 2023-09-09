"use client";
import { useRef, useState } from "react";
import CarouselCard from "./CarouselCard";
import CarouselControls from "./CarouselControls";
import carouselData from "./dummyData";
import useDimensions from "./useDimensions";

function Carousel() {
  const dimensions = useDimensions(carouselData.length);
  const scrollValue = Number(dimensions.card);
  const maxTranslateX =
    -(carouselData.length - dimensions.items) * scrollValue - 3;

  const carouselRef = useRef<null | HTMLDivElement>(null);

  const [prevWidth, setPrevWidth] = useState(0);

  let buttonsDisabled = {
    left: !(prevWidth === 0),
    right: true,
  };

  function handleClick(type: string) {
    if (!carouselRef.current) return;

    const { style } = carouselRef.current;

    const translateXValue =
      type === "right"
        ? prevWidth - scrollValue - 3
        : prevWidth + scrollValue + 3;

    setPrevWidth(translateXValue);

    style.transform = `translateX(${translateXValue}px)`;
  }

  if (prevWidth <= maxTranslateX) {
    buttonsDisabled.right = false;
  }

  return (
    <section className="py-10 px-4 text-black">
      <div className="max-w-[1200px] mx-auto relative overflow-hidden">
        <div>Title</div>
        <div style={{ width: `${dimensions.container}px` }}>
          <div
            className="flex overflow-x-hidden gap-3 transition-all duration-500 ease-in-out"
            ref={carouselRef}
          >
            {carouselData.map((item, index) => {
              const { title, description, image } = item;
              return (
                <CarouselCard
                  key={index}
                  title={title}
                  image={image}
                  description={description}
                  width={dimensions.card}
                />
              );
            })}
          </div>
          <CarouselControls
            handleClick={handleClick}
            disableLeft={buttonsDisabled.left}
            disableRight={buttonsDisabled.right}
          />
        </div>
      </div>
    </section>
  );
}

export default Carousel;
