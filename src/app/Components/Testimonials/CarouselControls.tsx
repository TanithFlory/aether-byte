import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface IProps {
  handleCarouselScroll(identifier: string): void;
  carouselButton: {
    left: boolean;
    right: boolean;
  };
}

function CarouselControls({ handleCarouselScroll, carouselButton }: IProps) {
  return (
    <div className="flex gap-3 absolute right-3 bottom-1">
      <div
        className={`${
          !carouselButton?.left ? "pointer-events-none opacity-40" : " "
        } rounded-full bg-[#5239FA] rotate-180 w-[45px] h-[45px] p-3 cursor-pointer hover:bg-primary`}
        onClick={() => handleCarouselScroll("right")}
      >
        <AiOutlineRight className="h-full w-full fill-white" />
      </div>
      <div
        className={`${
          !carouselButton?.right ? "pointer-events-none opacity-40" : " "
        } w-[45px] h-[45px] rotate-180 rounded-full bg-[#5239FA] p-3 cursor-pointer hover:bg-primary`}
        onClick={() => handleCarouselScroll("left")}
      >
        <AiOutlineLeft className="h-full w-full fill-white" />
      </div>
    </div>
  );
}

export default CarouselControls;
