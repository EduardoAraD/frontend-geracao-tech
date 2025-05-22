import type { LabelHTMLAttributes, ReactNode } from "react";
import InputComponent from "./InputComponent";

interface LabelInputProps {
  children: ReactNode;
}

const LabelInput = ({ children }: LabelInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {children}
    </div>
  );
}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}
const Label = ({ children, ...rest }: LabelProps) => {
  return (
    <label
      className="text-xs font-bold text-dark_gray2"
      {...rest}
    >
      {children}
    </label>
  )
}

LabelInput.Label = Label;
LabelInput.Input = InputComponent;

export default LabelInput;