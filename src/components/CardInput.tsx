import type { InputHTMLAttributes } from "react";
import InputComponent from "./InputComponent";

interface CardInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  onClick: () => void
}

const CardInput = ({ label, onClick, id, name, ...rest}: CardInputProps) => {
  return (
    <div className="flex flex-col">
      <label
        className="text-xs font-bold text-dark_gray2 mb-1"
        htmlFor={id}>
        { label }
      </label>
      <InputComponent
        id={id}
        name={name}
        type="text"
        {...rest}
      />
      <button
        className="h-15 mt-2.5 w-full rounded-lg bg-light_gray3 flex justify-center items-center duration-200 hover:brightness-102 cursor-pointer"
        onClick={onClick}
      >
        <span className="text-sm font-bold text-primary">OK</span>
      </button>
    </div>
  );
}
 
export default CardInput;