import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bgColor?: 'primary' | 'warning';
  size?: 'normal' | 'large';
}

const Button = ({ children, bgColor = 'primary', size = 'normal', ...rest }: ButtonProps) => {
  return (
    <button
      className={`${size === 'normal' ? 'h-10' : 'h-12'} w-full bg-${bgColor} rounded-lg flex items-center justify-center hover:brightness-110 duration-200`}
      {...rest}
    >
      <p className="text-sm text-light_gray3 font-bold">
        {children}
      </p>
    </button>
  );
}

export default Button;
