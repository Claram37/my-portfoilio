import Button from '@/components/Button';
import Phone from '@/components/Phone';
import dprozScreen from '@/assets/hero/dproz-home-feed.png';
import fitcheckScreen from '@/assets/hero/fitcheck-overview.png';
import safariScreen from '@/assets/hero/safari-screen.png';

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 overflow-hidden px-page pt-20 text-center">
      <p className="inline-flex items-center gap-2.5 rounded-full bg-pill px-4 py-2 text-sm leading-[18px] font-medium">
        <span className="size-2 shrink-0 rounded-full bg-success" aria-hidden="true"></span>
        Product Designer · Nairobi, Kenya
      </p>

      <h1 className="text-hero text-balance">
        I design products people can actually use,{' '}
        <br className="max-md:hidden" />
        and I can help build them too.
      </h1>

      <p className="max-w-[640px] text-lead text-pretty text-muted-foreground">
        Hi, I'm Clara. Two years shaping mobile-first products for job seekers, employers and small business owners across
        East Africa.
      </p>

      <div className="flex flex-wrap justify-center gap-3 pt-1.5">
        <Button to="#work" arrow>
          See my work
        </Button>
        <Button to="/contact" variant="soft">
          Get in touch
        </Button>
      </div>

      {/*
        Device fan: 1100×445 visible area of the design's 1100×520 stage. The hero clips the phones' lower edge.
        Below 640px the fan keeps its 640px width and the side phones run off-screen.
      */}
      <div className="relative aspect-[1100/445] w-[max(100%,640px)] max-w-[1100px] shrink-0">
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
          shadow="shadow-[0_30px_60px_#00000030]"
          className="absolute top-[6.74%] left-[37.27%] w-[25.4545%]"
        />
      </div>
    </section>
  );
}
