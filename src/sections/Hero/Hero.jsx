import Navbar from "../../components/layout/Navbar";
import HeroText from "./HeroText";
import HeroVisual from "./HeroVisual";
import { useHeroAnimation } from "../../animations/gsap/hero.animation";

const Hero = () => {
  useHeroAnimation();

  return (
    <>
      <section className="hero-section relative h-[350vh] bg-[#f4f3ef]">
        <div className="hero-stage sticky top-0 h-screen overflow-hidden">
          <Navbar />

          <HeroVisual />
          <HeroText />

          <div className="absolute bottom-7 left-6 z-20 text-[10px] uppercase tracking-[0.25em] text-black/50 md:left-10">
            Scroll to explore
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-black px-6 py-20 text-white md:px-10">
        <p className="mb-8 text-xs uppercase tracking-[0.25em] text-white/40">
          Newbie Launch
        </p>

        <h2 className="max-w-6xl text-[11vw] font-black uppercase leading-[0.82] tracking-[-0.07em]">
          Ideas into
          <br />
          experiences.
        </h2>
      </section>
    </>
  );
};

export default Hero;