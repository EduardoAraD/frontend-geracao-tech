import type { InputHTMLAttributes } from "react";

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
      <input
        className="w-full px-3 p-4 bg-light_gray3 rounded-sm placeholder:text-dark_gray3 text-dark_gray text-base font-normal focus-visible:outline-primary"
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