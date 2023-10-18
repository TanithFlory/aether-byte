import { AiOutlineLeft } from "react-icons/ai";

interface IProps {
  handleClick: (type: string) => void;
  disableLeft: boolean;
  disableRight: boolean;
}

function CarouselControls({ handleClick, disableLeft, disableRight }: IProps) {
  const stylings =
    "h-[35px] w-[35px] rounded-l-md bg-secondary cursor-pointer flex items-center justify-center hover:bg-hover";
  return (
    <div className="flex gap-2 mt-4 ">
      <div
        onClick={() => handleClick("left")}
        className={`${
          !disableLeft ? "opacity-30 pointer-events-none" : ""
        } ${stylings}`}
      >
        <AiOutlineLeft />
      </div>
      <div
        onClick={() => handleClick("right")}
        className={`${
          !disableRight ? "opacity-30 pointer-events-none" : ""
        } rotate-180 ${stylings}`}
      >
        <AiOutlineLeft />
      </div>
    </div>
  );
}

export default CarouselControls;
