import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";

export interface ProjectTab {
  label: string;
  icon: LucideIcon;
  caption: string;
  visual: ReactNode;
}

interface FeatureTabProps {
  tab: ProjectTab;
  index: number;
}

const FeatureTab = ({ tab, index }: FeatureTabProps) => {
  return (
    <div>
      <tab.icon aria-hidden="true" />
      <span>{tab.label}</span>
    </div>
  );
};

export default FeatureTab;
