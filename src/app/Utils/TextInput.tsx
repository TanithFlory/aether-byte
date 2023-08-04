import { InputHTMLAttributes } from "react";

interface IProps
  extends Omit<
    InputHTMLAttributes<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    "type"
  > {
  textArea?: boolean;
  select?: boolean;
  type?: string;
}

function TextInput({
  textArea = false,
  select = false,
  children,
  className,
  type,
  value,
  ...props
}: IProps) {
  console.log(value)
  const stylings =
    "h-[38px] text-gray text-fs-200 bg-[#242527] px-2 box-border border-b-4 border-b-gray focus:border-b-lightGreen placeholder:text-gray";
  return textArea ? (
    <textarea className={`${stylings} ${className}`} {...props} />
  ) : select ? (
    <select className={`${stylings}`} {...props}>
      {children}
    </select>
  ) : (
    <input className={`${stylings}`} type={`${type}`} {...props} />
  );
}

export default TextInput;
