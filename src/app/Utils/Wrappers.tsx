import { IWrapper } from "../types";

export function SectionWrapper({ className, children }: IWrapper) {
  return <section className={`${className} px-4`}>{children}</section>;
}

export function CardsWrapper({ children, className }: IWrapper) {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fill,minmax(clamp(280px,30%,400px),1fr))] gap-4 ${className}`}
    >
      {children}
    </div>
  );
}

export function WrapperDiv({ children, className }: IWrapper) {
  return (
    <div
      className={`${className} max-w-[1200px] mx-auto flex  justify-center flex-wrap py-24`}
    >
      {children}
    </div>
  );
}
