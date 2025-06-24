import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode
  bgColor?: string
  className?: string
}

const Section = ({ children, bgColor = '', className = '' }: SectionProps) => {
  return (
    <div className={`flex w-full justify-center items-center ${bgColor}`}>
      <section className={`flex w-full flex-col max-w-[1240px] px-5 py-10 gap-2.5 ${className}`}>
        {children}
      </section>
    </div>
  );
}
 
export default Section;
