import { useId, useState } from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import ProjectHead from "./ProjectHead";
import FeatureTab, { type ProjectTab } from "./FeatureTab";

export interface ProjectTheme {
  stage: string;
  caption: string;
  link: string;
}

interface ProjectSectionProps {
  id?: string;
  heading: string;
  caseStudy: string;
  theme: ProjectTheme;
  tabs: ProjectTab[];
}

const ProjectSection = ({
  id,
  heading,
  caseStudy,
  theme,
  tabs,
}: ProjectSectionProps) => {
  const headingId = useId();
  // The open tab. They play like a slideshow: when the open tab's tint has filled, the next one opens,
  // looping back after the last. Clicking a tab opens it and starts its fill again
  const [active, setActive] = useState(0);

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="px-page pt-25 lg:pt-28 2xl:pt-35"
    >
      <div className="mx-auto max-w-content">
        <ProjectHead
          heading={heading}
          caseStudy={caseStudy}
          headingId={headingId}
        />
        <Tabs
          value={active}
          onValueChange={(value) => setActive(value)}
          className="group/tabs mt-12"
        >
          <TabsList className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {tabs.map((tab, index) => (
              <FeatureTab
                key={tab.label}
                tab={tab}
                index={index}
                onFilled={() => setActive((index + 1) % tabs.length)}
              />
            ))}
          </TabsList>

          {/*
            The stage keeps its colour while each tab's screen and caption fade in on it. Visuals are placed
            in a box with the design's 1248×640 shape; below 1280px the caption sits under that box
          */}
          <div className={cn("mt-4 overflow-hidden rounded-card", theme.stage)}>
            {tabs.map((tab, index) => (
              <TabsContent
                key={tab.label}
                value={index}
                className="relative animate-in duration-500 fade-in motion-reduce:animate-none"
              >
                <div className="relative aspect-1248/640 overflow-hidden">
                  {tab.visual}
                </div>
                <div className="flex flex-col items-start gap-4 p-6 md:p-8 xl:absolute xl:right-14 xl:bottom-14 xl:max-w-105 xl:p-0">
                  <p
                    className={cn(
                      "font-display text-feature text-balance xl:text-wrap",
                      theme.caption,
                    )}
                  >
                    {tab.caption}
                  </p>
                  <Link
                    to={caseStudy}
                    className={cn(
                      "inline-flex items-center gap-2 text-base font-medium transition-opacity hover:opacity-80",
                      theme.link,
                    )}
                  >
                    See it in the case study
                    <ChevronRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectSection;
