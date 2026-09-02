// Hero.jsx

import Navbar from "../../components/layout/Navbar";
import HeroText from "./HeroText";
import HeroVisual from "./HeroVisual";
import { useHeroAnimation } from "../../animations/gsap/hero.animation";
import HoneycombMaze from "../../components/common/HoneycombMaze";

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

const Hero = () => {
  useHeroAnimation();

  return (
    <>
      <section className="hero-section relative h-[400vh] bg-[#ffcc00]">
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

     <section
  id="work"
  className="work-section relative min-h-screen overflow-hidden bg-black py-24 text-white"
>
  <div className="work-topline px-6 md:px-10">
    <p>Newbie Launch</p>
    <p>02 — Selected Work</p>
  </div>

  <div className="work-intro px-6 md:px-10">
    <h2>
      Ideas into
      <br />
      <span>experiences.</span>
    </h2>
  </div>

  <div className="projects-marquee">
    <div className="projects-track">
      {[...projects, ...projects].map((project, index) => (
        <article className="project-marquee-card" key={`${project.title}-${index}`}>
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
</section>
    </>
  );
};

export default Hero;