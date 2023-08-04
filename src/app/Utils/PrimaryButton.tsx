import { BsArrowRight } from "react-icons/bs";

interface IProps {
  children: React.ReactNode;
  color: string;
  className?: string;
}
function PrimaryButton({ children, color, className }: IProps) {
  return (
    <div
      className={`flex items-center justify-center w-full h-[53px] border-${
        color || "white"
      } border-[1px] rounded-[100px] group ${className}`}
    >
      <div className="relative flex gap-1 items-center justify-center h-[35px] w-[92%] overflow-hidden rounded-full">
        <div
          className={`bg-${color} left-0 rounded-full h-[35px] w-[35px] absolute z-10`}
        >
          <BsArrowRight className="fill-black h-[35px] w-[35px]" />
        </div>
        <div className="z-10 group-hover:text-primary transition-all duration-500 ease-in">
          {children}
        </div>
        <div
          className={`bg-${
            color || "white"
          } absolute right-[100%] z-0 w-full h-full rounded-full transition-all duration-500 ease-in group-hover:right-0 `}
        ></div>
      </div>
    </div>
  );
}

export default PrimaryButton;
