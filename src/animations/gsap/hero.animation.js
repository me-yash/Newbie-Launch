import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimation = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      timeline
        .to(".hero-project", {
          scale: 1.5,
          y: (index) => index % 2 === 0 ? -120 : 120,
          ease: "none",
        }, 0)

        .to(".hero-title", {
          scale: 7,
          ease: "none",
        }, 0)

        .to(".hero-ring", {
          scale: 4,
          opacity: 0,
          ease: "none",
        }, 0)

        .to(".hero-glow", {
          scale: 5,
          opacity: 0,
          ease: "none",
        }, 0)

        .to(".hero-project", {
          opacity: 0,
          ease: "none",
        }, 0.55)

        .to(".hero-title", {
          color: "#ffffff",
          ease: "none",
        }, 0.55)

        .to(".hero-stage", {
          backgroundColor: "#000000",
          ease: "none",
        }, 0.55)

        .to(".hero-title", {
          opacity: 0,
          scale: 11,
          ease: "none",
        }, 0.72)

        .to(".hero-description", {
          opacity: 0,
          ease: "none",
        }, 0.5);
    });

    return () => ctx.revert();
  }, []);
};