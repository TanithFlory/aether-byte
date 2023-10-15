import { IWrapper } from "../types";

function CardsWrapper({ children, className }: IWrapper) {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fill,minmax(clamp(250px,30%,400px),1fr))] gap-4 ${className}`}
    >
      {children}
    </div>
  );
}

export default CardsWrapper;
