import { type ReactNode } from "react";

interface SectionHeadProps {
  id: string;
  title: string;
  children: ReactNode;
}
const SectionHead = ({ id, title, children }: SectionHeadProps) => {
  return (
    <div>
      <h2 id={id} className="text-chapter">
        {title}
      </h2>
      <p className="text-lg mt-2 font-medium">{children}</p>
    </div>
  );
};

export default SectionHead;
