import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="flex flex-col px-5 py-10 gap-2.5">
      {children}
    </section>
  );
}
 
export default Section;
