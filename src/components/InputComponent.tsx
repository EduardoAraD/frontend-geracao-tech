import type { InputHTMLAttributes } from "react";

export interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement>{
  onChangeText?: (value: string) => void
}

const InputComponent = ({ onChangeText, ...rest }: InputComponentProps) => {
  return (
    <input
      className="w-full px-3 p-4 bg-light_gray3 rounded-sm placeholder:text-dark_gray3 text-dark_gray text-base font-normal focus-visible:outline-primary"
      onChange={e => onChangeText ? onChangeText(e.target.value) : () => {}}
      {...rest}
    />
  );
}
 
export default InputComponent;