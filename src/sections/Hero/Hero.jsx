import Navbar from "../../components/layout/Navbar";
import HeroText from "./HeroText";
import HeroVisual from "./HeroVisual";
import { useHeroAnimation } from "../../animations/gsap/hero.animation";
import HoneycombMaze from "../../components/common/HoneycombMaze";
import Footer from "../../components/layout/Footer";

const projects = [
  {
    title: "NEW AGE WEB",
    year: "2026",
    type: "WEB DEVELOPMENT",
  },
  {
    title: "DIGITAL SYSTEM",
    year: "2026",
    type: "UI / UX DESIGN",
  },
  {
    title: "MOBILE FIRST",
    year: "2026",
    type: "APP DEVELOPMENT",
  },
  {
    title: "AUTOMATE EVERYTHING",
    year: "2026",
    type: "AI & AUTOMATION",
  },
  {
    title: "MAKE IT MEMORABLE",
    year: "2026",
    type: "BRANDING",
  },
];

const services = [
  "Web Development",
  "UI / UX Design",
  "App Development",
  "AI & Automation",
  "Branding",
];

const Hero = () => {
  useHeroAnimation();

  return (
    <>
      {/* ================= HERO ================= */}

     <section className="hero-section relative h-[300vh] bg-[#ffcc00]">
  <div className="hero-stage sticky top-0 min-h-screen overflow-hidden">
    <Navbar />
    <HoneycombMaze />
    <HeroVisual />
    <HeroText />

    <div className="absolute bottom-7 left-6 z-20 text-[10px] uppercase tracking-[0.25em] text-black/50 md:left-10">
      Scroll to explore
    </div>
  </div>
</section>

      {/* ================= WORK ================= */}

      <section
        id="work"
        className="relative overflow-hidden bg-black py-24 text-white md:py-32"
      >
        {/* Work Header */}

        <div className="mb-28 flex items-center justify-between px-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40 md:mb-10 md:px-10">
          <span>Newbie Launch</span>
          <span>02 — Selected Work</span>
        </div>

        {/* Work Intro — KEEP THIS */}

       <div className="mb-28 px-5 md:mb-40 md:px-10">
  {/* Label ABOVE */}
  <div className="mb-10 md:mb-14">
    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
      What We Build
    </span>
  </div>

  {/* Heading BELOW */}
  <div>
    <h2 className="max-w-[1200px] text-[15vw] font-black uppercase leading-[0.76] tracking-[-0.095em] md:text-[10.5vw]">
      <span className="block whitespace-nowrap">
        Ideas into
      </span>

      <span className="block whitespace-nowrap md:ml-[7vw]">
        experiences.
      </span>
    </h2>

    <p className="mt-12 max-w-xl border-t border-white/15 pt-6 text-xs leading-7 text-white/45 md:mt-20 md:ml-[7vw] md:text-sm md:leading-7">
      We combine design, technology and strategy to turn ambitious ideas
      into digital products people actually want to use.
    </p>
  </div>
</div>

        {/* ================= EXISTING MARQUEE — UNTOUCHED ================= */}

        <div className="projects-marquee">
          <div className="projects-track">
            {[...projects, ...projects].map((project, index) => (
              <article
                className="project-marquee-card"
                key={`${project.title}-${index}`}
              >
                <div className="project-placeholder">
                  <span>PROJECT</span>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>

                  <div>
                    <span>{project.year}</span>
                    <span>{project.type}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ================= WORK DETAILS ================= */}

        {/* HOW WE WORK — TIMELINE */}

        <div className="relative mt-32 bg-[#ffcc00] px-5 py-20 text-black md:mt-48 md:px-10 md:py-28">
          {/* heading */}
          <div className="mb-20 flex items-center justify-between border-b border-black/20 pb-6">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
              How We Work
            </span>

            <span className="text-[9px] uppercase tracking-[0.15em] text-black/40">
              03 — Process
            </span>
          </div>

          <div className="mx-auto max-w-4xl">
            {/* 01 */}
            <div className="relative grid grid-cols-[56px_1fr] gap-7 pb-20 md:grid-cols-[72px_1fr] md:gap-10">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-[#ffcc00] text-xs font-black md:h-[72px] md:w-[72px]">
                01
              </div>

              <div className="pt-1">
                <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em] md:text-5xl">
                  Tell us your vision
                </h3>

                <p className="mt-4 max-w-2xl text-xs leading-6 text-black/55 md:text-sm">
                  Share your business details — what you do, who you serve, and
                  how you want your site to feel.
                </p>
              </div>

              {/* line */}
              <div className="absolute left-[27px] top-14 bottom-0 w-[2px] bg-black/20 md:left-[35px]" />
            </div>

            {/* 02 */}
            <div className="relative grid grid-cols-[56px_1fr] gap-7 pb-20 md:grid-cols-[72px_1fr] md:gap-10">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-black text-xs font-black text-[#ffcc00] md:h-[72px] md:w-[72px]">
                02
              </div>

              <div className="pt-1">
                <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em] md:text-5xl">
                  We design &amp; build
                </h3>

                <p className="mt-4 max-w-2xl text-xs leading-6 text-black/55 md:text-sm">
                  Our team crafts your website with clean design and fast
                  performance, built specifically for your brand.
                </p>
              </div>

              <div className="absolute left-[27px] top-14 bottom-0 w-[2px] bg-black/20 md:left-[35px]" />
            </div>

            {/* 03 */}
            <div className="relative grid grid-cols-[56px_1fr] gap-7 pb-20 md:grid-cols-[72px_1fr] md:gap-10">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-[#ffcc00] text-xs font-black md:h-[72px] md:w-[72px]">
                03
              </div>

              <div className="pt-1">
                <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em] md:text-5xl">
                  You review &amp; approve
                </h3>

                <p className="mt-4 max-w-2xl text-xs leading-6 text-black/55 md:text-sm">
                  Preview your site and request changes. We revise until
                  everything feels right.
                </p>
              </div>

              <div className="absolute left-[27px] top-14 bottom-0 w-[2px] bg-black/20 md:left-[35px]" />
            </div>

            {/* 04 */}
            <div className="relative grid grid-cols-[56px_1fr] gap-7 md:grid-cols-[72px_1fr] md:gap-10">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-black text-xs font-black text-[#ffcc00] md:h-[72px] md:w-[72px]">
                04
              </div>

              <div className="pt-1">
                <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em] md:text-5xl">
                  We go live
                </h3>

                <p className="mt-4 max-w-2xl text-xs leading-6 text-black/55 md:text-sm">
                  We deploy, connect your domain, SSL and business email — and
                  get your business officially online.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Work Closing */}

        <div className="mt-28 px-5 md:mt-40 md:px-10">
          <p className="max-w-5xl text-[12vw] font-black uppercase leading-[0.78] tracking-[-0.085em] md:text-[8vw]">
            Built to
            <br />
            <span className="ml-0 text-[#ffcc00] md:ml-[8vw]">make noise.</span>
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="relative overflow-hidden bg-[#ffcc00] px-5 py-24 text-black md:px-10 md:py-32"
      >
        <div className="mb-28 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-black/50 md:mb-44">
          <span>04 — About</span>
          <span>Newbie Launch</span>
        </div>

        <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-10">
          <span className="pt-2 text-[9px] font-bold uppercase tracking-[0.2em]">
            Who We Are
          </span>

          <div>
            <h2 className="text-[16vw] font-black uppercase leading-[0.76] tracking-[-0.09em] md:text-[11vw]">
              Small team.
              <br />
              <span className="ml-0 md:ml-[8vw]">Big energy.</span>
            </h2>

            <p className="mt-16 max-w-3xl text-[7vw] font-bold leading-[0.95] tracking-[-0.05em] md:mt-24 md:text-[3vw]">
              Newbie Launch is a digital studio for people who want to build
              something that matters.
            </p>

            <p className="mt-8 max-w-xl text-xs leading-7 md:mt-10 md:text-sm md:leading-7">
              From the first idea to the final interaction, we bring together
              strategy, design, development and technology under one roof. No
              unnecessary layers. No boring templates. Just thoughtful digital
              work made to move businesses forward.
            </p>

            {/* Services */}

            <div className="mt-20 border-t border-black/25">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="group grid grid-cols-[45px_1fr] gap-4 border-b border-black/25 py-4 text-[9px] font-bold uppercase tracking-[0.08em] transition-all duration-300 hover:px-3 md:grid-cols-[70px_1fr] md:py-5 md:text-[11px]"
                >
                  <span className="opacity-40">0{index + 1}</span>

                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Statement */}

        <div className="mt-28 flex flex-col gap-12 border-t border-black/30 pt-8 md:mt-44 md:flex-row md:justify-between">
          <p className="text-[11vw] font-black uppercase leading-[0.8] tracking-[-0.07em] md:text-[5vw]">
            Good design
            <br />
            gets attention.
          </p>

          <p className="text-[11vw] font-black uppercase leading-[0.8] tracking-[-0.07em] md:text-[5vw]">
            Great digital
            <br />
            experiences keep it.
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="flex min-h-screen flex-col justify-between bg-black px-5 py-7 text-white md:px-10 md:py-10"
      >
        <div className="flex justify-between text-[8px] font-semibold uppercase tracking-[0.22em] text-white/40 md:text-[10px]">
          <span>05 — Contact</span>
          <span>Let's build something</span>
        </div>

        <div className="py-24 md:py-32">
          <span className="mb-7 block text-[8px] font-bold uppercase tracking-[0.2em] text-white/40 md:text-[10px]">
            Have an idea?
          </span>

          <h2 className="text-[20vw] font-black uppercase leading-[0.72] tracking-[-0.1em] md:text-[15vw]">
            Let's make
            <br />
            <span className="ml-0 text-[#ffcc00] md:ml-[10vw]">it real.</span>
          </h2>

          <a
            href="mailto:hello@newbielaunch.com"
            className="mt-16 flex w-full max-w-2xl items-center justify-between border-y border-white/30 py-5 text-[8px] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:px-4 hover:text-[#ffcc00] md:mt-24 md:text-[10px]"
          >
            <span>Start a project</span>
            <span className="text-xl">↗</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-white/15 pt-7 md:grid-cols-3">
          <div className="col-span-2 flex flex-col gap-2 md:col-span-1">
            <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-white/30">
              Email
            </span>

            <a
              href="mailto:hello@newbielaunch.com"
              className="text-[10px] font-semibold md:text-xs"
            >
              hello@newbielaunch.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-white/30">
              Social
            </span>

            <a href="#contact" className="text-[9px] font-semibold">
              Instagram ↗
            </a>

            <a href="#contact" className="text-[9px] font-semibold">
              LinkedIn ↗
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-white/30">
              Location
            </span>

            <span className="text-[9px] font-semibold">India / Worldwide</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Hero;
