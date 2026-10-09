import Button from "@/components/Button";
import Phone from "@/components/Phone";
import site from "@/data/site";
import dprozScreen from "@/assets/hero/dproz-home-feed.png";
import fitcheckScreen from "@/assets/hero/fitcheck-overview.png";
import safariScreen from "@/assets/hero/safari-screen.png";

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-6 overflow-hidden px-page pt-20 text-center">
      <p className="inline-flex items-center gap-2 rounded-full bg-pill px-4 py-2 text-sm leading-4.5 font-medium">
        <span
          className="size-2 shrink-0 rounded-full bg-success"
          aria-hidden="true"
        ></span>
        {site.role} · {site.location}
      </p>

      <h1 className="text-hero text-balance">Hi, I'm Clara.</h1>

      <p className="max-w-200 text-lead text-pretty text-muted-foreground">
        {site.intro}
      </p>

      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Button to="#work" arrow>
          See my work
        </Button>
        <Button to="/contact" variant="soft">
          Get in touch
        </Button>
      </div>

      <div className="relative aspect-1100/445 w-full max-w-275 min-w-160 shrink-0">
        <Phone
          src={fitcheckScreen}
          alt="Fitcheck overview showing 2 of 5 must-haves met, with gaps grouped by work experience, skills and education"
          loading="eager"
          className="absolute top-[21.91%] left-[19%] w-[25.4545%] -rotate-8"
        />
        <Phone
          src={safariScreen}
          alt="Safari Spirits trip to Hell's Gate and Lake Naivasha with every cost listed"
          loading="eager"
          className="absolute top-[21.69%] left-[56.18%] w-[25.4545%] rotate-8"
        />
        <Phone
          src={dprozScreen}
          alt="Dproz home feed with job categories and the latest jobs"
          loading="eager"
          shadow="shadow-phone-lg"
          className="absolute top-[6.74%] left-[37.27%] w-[25.4545%]"
        />
      </div>
    </section>
  );
};

export default Hero;
