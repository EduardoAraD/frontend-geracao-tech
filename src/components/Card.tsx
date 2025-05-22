import type { ReactNode } from "react";

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
 
export default Card;