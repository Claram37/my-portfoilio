import { useId, useState } from "react";
import { Link } from "react-router";
import {
  BriefcaseBusiness,
  ChevronRight,
  FileCheck,
  Store,
} from "lucide-react";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Button from "./Button";
import ProjectTab, { type Project } from "./ProjectTab";
import Browser from "./Browser";
import Phone from "./Phone";
import homepageDesktop from "@/assets/dproz/homepage-desktop.png";
import homeFeedPhone from "@/assets/hero/dproz-home-feed.png";
import openVisitsDesktop from "@/assets/shopxray/open-visits-desktop.png";
import visitCardZoom from "@/assets/shopxray/visit-card-zoom.png";
import nextStepsPhone from "@/assets/fitcheck/next-steps-phone.png";
import nextStepsZoom from "@/assets/fitcheck/next-steps-zoom.png";

const projects: Project[] = [
  {
    name: "Dproz",
    kind: "Job platform",
    icon: BriefcaseBusiness,
    caption: "One home for Tanzania's job market.",
    caseStudy: "/work/dproz",
    theme: {
      tile: "bg-tab-blue",
      tint: "bg-tab-blue-tint",
      stage: "bg-dproz bg-radial-[at_28%_35%] from-dproz-glow to-transparent",
      caption: "text-paper",
      link: "text-dproz-label",
    },
    visual: (
      <>
        <Browser
          url="dproz.com"
          src={homepageDesktop}
          alt="Dproz homepage with a job search and jobs grouped by category"
          shadow="shadow-dproz"
          className="absolute top-[6.25%] left-[39.42%] w-[56.09%]"
        />
        <Phone
          src={homeFeedPhone}
          alt="Dproz home feed with job categories and the latest jobs"
          shadow="shadow-dproz"
          className="absolute top-[23.44%] left-[13.62%] w-[33.17%]"
        />
      </>
    ),
  },
  {
    name: "ShopXray",
    kind: "Shop management",
    icon: Store,
    caption:
      "A digital daftari to records visits and reconcile cash in real time.",
    caseStudy: "/work/shopxray",
    theme: {
      tile: "bg-tab-green",
      tint: "bg-tab-green-tint",
      stage:
        "bg-shopxray bg-radial-[at_28%_35%] from-shopxray-glow to-transparent",
      caption: "text-paper",
      link: "text-shopxray-label",
    },
    visual: (
      <>
        <Browser
          url="mkatabahq.com/shopxray"
          src={openVisitsDesktop}
          alt="ShopXray's Today page with the day's revenue and its open visits, each listing services and a total"
          shadow="shadow-shopxray"
          className="absolute top-[7.5%] left-[-4.01%] w-[64.1%]"
        />
        <img
          src={visitCardZoom}
          alt="Visit #05: pedicure, wash and set, and gel nails, totalling TZS 45,000"
          loading="lazy"
          decoding="async"
          className="absolute top-[8.75%] left-[57.69%] w-[32.05%] rounded-card shadow-shopxray"
        />
      </>
    ),
  },
  {
    name: "Dproz Fitcheck",
    kind: "AI feature",
    icon: FileCheck,
    caption: "An AI feature to Fitcheck and tailor resumes.",
    caseStudy: "/work/fitcheck",
    theme: {
      tile: "bg-tab-purple",
      tint: "bg-tab-purple-tint",
      stage:
        "bg-fitcheck bg-radial-[at_40%_30%] from-fitcheck-glow to-transparent",
      caption: "text-ink",
      link: "text-muted-foreground",
    },
    visual: (
      <>
        <Phone
          src={nextStepsPhone}
          alt="Fitcheck's next steps: 3 quick edits for a stronger match, listing the experience and knowledge to add to the CV"
          shadow="shadow-fitcheck"
          className="absolute top-[10%] left-[16.83%] w-[33.17%]"
        />
        <img
          src={nextStepsZoom}
          alt="2 on your CV, 3 to add, 0 to build toward, shown as a five-part bar"
          loading="lazy"
          decoding="async"
          className="absolute top-[27.5%] left-[53.21%] w-[38.14%] rounded-card shadow-fitcheck-card"
        />
      </>
    ),
  },
];

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
