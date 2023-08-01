import { IWrapper } from "../types";

function Card({ children, className }: IWrapper) {
  return (
    <div
      className={`rounded min-h-[316px] p-10 flex flex-col align-center justify-center gap-5 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
