import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode
  bgColor?: string
}

const Section = ({ children, bgColor = '' }: SectionProps) => {
  return (
    <section className={`flex flex-col px-5 py-10 gap-2.5 ${bgColor}`}>
      {children}
    </section>
  );
}
 
export default Section;
