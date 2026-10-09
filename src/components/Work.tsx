import { useId, useState } from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import projects from "@/data/projects";
import ProjectTab from "./ProjectTab";

const Work = () => {
  const headingId = useId();
  const [active, setActive] = useState(0);

  return (
    <section
      id="work"
      aria-labelledby={headingId}
      className="px-page pt-30 lg:pt-28 2xl:pt-35"
    >
      <div className="mx-auto max-w-content">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id={headingId} className="text-chapter">
              My best work
            </h2>
            <p className="text-lg mt-2 font-medium">
              Showcasing exceptional projects that pushed my boundaries and
              created meaningful impact.
            </p>
          </div>
        </div>
        <Tabs
          value={active}
          onValueChange={(value) => setActive(value)}
          className="group/tabs mt-12"
        >
          <TabsList className="grid gap-3 md:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectTab
                key={project.name}
                project={project}
                index={index}
                onFilled={() => setActive((index + 1) % projects.length)}
              />
            ))}
          </TabsList>

          <div
            className={cn(
              "mt-4 overflow-hidden rounded-card",
              projects[active].theme.stage,
            )}
          >
            {projects.map((project, index) => (
              <TabsContent
                key={project.name}
                value={index}
                keepMounted
                className="relative animate-in duration-500 fade-in motion-reduce:animate-none"
              >
                <div className="relative aspect-1248/640 overflow-hidden">
                  {project.visual}
                </div>
                <div className="flex flex-col items-start gap-4 p-6 md:p-8 xl:absolute xl:right-14 xl:bottom-14 xl:max-w-105 xl:p-0">
                  <p
                    className={cn(
                      "font-display text-feature text-balance xl:text-wrap",
                      project.theme.caption,
                    )}
                  >
                    {project.caption}
                  </p>
                  <Link
                    to={project.caseStudy}
                    className={cn(
                      "inline-flex items-center gap-2 text-base font-bold transition-opacity hover:opacity-80",
                      project.theme.link,
                    )}
                  >
                    View case study
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

export default Work;
