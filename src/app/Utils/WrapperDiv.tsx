interface IProps {
  children: React.ReactNode;
  className?: string;
}

export function WrapperDiv({ children, className }: IProps) {
  return (
    <div
      className={`${className} max-w-[1200px] mx-auto flex  justify-center flex-wrap`}
    >
      {children}
    </div>
  );
}
