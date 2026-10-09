import safariCover from "@/assets/safari/cover.jpg";
import hiringCover from "@/assets/hiring/cover.png";
import resumeConfidencePhone from "@/assets/resume-feedback/resume-confidence-phone.jpg";
import prideCover from "@/assets/pride/cover.jpg";
import pastriesCover from "@/assets/pastries/cover.jpg";
import meditationCover from "@/assets/meditation/cover.jpg";
import Phone from "@/components/Phone";
import type { MoreProject } from "./types";

const moreWork: MoreProject[] = [
  {
    name: "Safari Spirits",
    summary:
      "Trips matched to budget and time, with every cost shown up front.",
    to: "/work/safari-spirits",
    cover: (
      <img
        src={safariCover}
        alt="Safari Spirits homepage"
        loading="lazy"
        decoding="async"
        className="size-full object-cover"
      />
    ),
  },
  {
    name: "Dproz Hiring Applications Tracker",
    summary:
      "Kanban and table views that help recruiters follow every candidate through each stage.",
    to: "/work/hiring-tracker",
    cover: (
      <img
        src={hiringCover}
        alt="Hiring tracker kanban board with candidates grouped by stage"
        loading="lazy"
        decoding="async"
        className="size-full object-cover"
      />
    ),
  },
  {
    name: "AI Resume Feedback",
    summary:
      "A mobile flow that scores a resume and gives bullet-by-bullet suggestions.",
    to: "/work/resume-feedback",
    cover: (
      <div className="relative size-full bg-resume-feedback">
        <Phone
          src={resumeConfidencePhone}
          alt="AI Resume Feedback screen showing a resume's confidence score"
          className="absolute top-[13.33%] left-[17.75%] w-[64.5%]"
        />
      </div>
    ),
  },
  {
    name: "Pride",
    summary: "A landing page for an ad-free music streaming service.",
    to: "/concepts/pride",
    tag: "Concept",
    cover: (
      <img
        src={prideCover}
        alt="Pride homepage hero, Music Without Limits"
        loading="lazy"
        decoding="async"
        className="size-full object-cover"
      />
    ),
  },
  {
    name: "Pastries Landing Page",
    summary:
      "A bakery site for browsing pastries and ordering custom celebration cakes.",
    to: "/concepts/pastries",
    tag: "Concept",
    cover: (
      <img
        src={pastriesCover}
        alt="Bakery homepage hero with a celebration cake and cupcakes"
        loading="lazy"
        decoding="async"
        className="size-full object-cover"
      />
    ),
  },
  {
    name: "Serenity",
    summary:
      "A calming meditation app with guided onboarding and breathing exercises.",
    to: "/concepts/meditation",
    tag: "Concept",
    cover: (
      <img
        src={meditationCover}
        alt="Serenity meditation app screens"
        loading="lazy"
        decoding="async"
        className="size-full object-cover"
      />
    ),
  },
];

export default moreWork;
