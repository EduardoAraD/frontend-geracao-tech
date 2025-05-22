import type { InputHTMLAttributes } from "react";

type InputComponentProps = InputHTMLAttributes<HTMLInputElement>;

const InputComponent = ({ ...rest }: InputComponentProps) => {
  return (
    <input
      className="w-full px-3 p-4 bg-light_gray3 rounded-sm placeholder:text-dark_gray3 text-dark_gray text-base font-normal focus-visible:outline-primary"
      {...rest}
    />
  );
}
 
export default InputComponent;