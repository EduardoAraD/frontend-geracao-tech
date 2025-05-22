import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <article className="flex flex-col bg-white p-7.5 gap-5 rounded-sm">
      {children}
    </article>
  );
}

const Title = ({ children }: CardProps) => {
  return (
    <h3 className="text-sm text-dark_gray2 font-bold">{children}</h3>
  )
}

const Line = () => {
  return (
    <div className="w-full h-[1px] bg-light_gray2" />
  )
}

Card.Title = Title;
Card.Line = Line;
 
export default Card;