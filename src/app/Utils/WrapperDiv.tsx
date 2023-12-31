import { IWrapper } from "../types";

export function WrapperDiv({ children, className }: IWrapper) {
  return (
    <div
      className={`${className} max-w-[1200px] mx-auto flex  justify-center flex-wrap`}
    >
      {children}
    </div>
  );
}
