import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="h-10 w-full bg-primary rounded-lg flex items-center justify-center hover:brightness-110 duration-200"
      {...rest}
    >
      <p className="text-sm text-light_gray3 font-bold">
        {children}
      </p>
    </button>
  );
}

export default Button;
