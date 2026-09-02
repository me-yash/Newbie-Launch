import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimation = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        gsap.set(".hero-title-wrap", {
          scale: 1,
          opacity: 1,
          transformOrigin: "50% 50%",
        });

        gsap.set(".services-scene", {
          opacity: 0,
        });

        gsap.set(".services-canvas", {
          scale: 1.18,
        });

        gsap.set(".navbar-item", {
          color: "#000",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Title zoom
        timeline.to(".hero-title-wrap", {
          scale: 2,
          duration: 0.16,
          ease: "none",
        });

        timeline.to(".hero-title-wrap", {
          scale: 5,
          duration: 0.22,
          ease: "none",
        });

        // IMPORTANT:
        // Black services scene starts BEFORE title completely disappears.
        timeline.to(".services-scene", {
          opacity: 1,
          duration: 0.16,
          ease: "none",
        });

        timeline.to(
          ".hero-title-wrap",
          {
            scale: 14,
            opacity: 0,
            duration: 0.18,
            ease: "none",
          },
          "<"
        );

        // Services settle in while the zoom finishes.
        timeline.to(".services-canvas", {
          scale: 1,
          duration: 0.14,
          ease: "none",
        });

        timeline.to(
          ".navbar-item",
          {
            color: "#fff",
            duration: 0.06,
            ease: "none",
          },
          "<"
        );

        timeline.to(
          ".service-card-1",
          {
            x: -45,
            y: -25,
            rotate: -9,
            duration: 0.18,
            ease: "none",
          },
          "<"
        );

        timeline.to(
          ".service-card-2",
          {
            x: 25,
            y: -35,
            rotate: 5,
            duration: 0.18,
            ease: "none",
          },
          "<"
        );

        timeline.to(
          ".service-card-3",
          {
            x: 50,
            y: 20,
            rotate: 10,
            duration: 0.18,
            ease: "none",
          },
          "<"
        );

        timeline.to(
          ".service-card-4",
          {
            x: -30,
            y: 35,
            rotate: 7,
            duration: 0.18,
            ease: "none",
          },
          "<"
        );

        timeline.to(
          ".service-card-5",
          {
            x: 35,
            y: 30,
            rotate: -8,
            duration: 0.18,
            ease: "none",
          },
          "<"
        );

        // Services hold here.
        timeline.to({}, {
          duration: 1.45,
        });

        return () => {
          timeline.scrollTrigger?.kill();
        };
      });

      mm.add("(max-width: 768px)", () => {
        gsap.set(".hero-title-wrap", {
          scale: 1,
          opacity: 1,
          transformOrigin: "50% 50%",
        });

        gsap.set(".services-scene", {
          opacity: 0,
        });

        gsap.set(".services-canvas", {
          y: 0,
          scale: 1,
        });

        gsap.set(".navbar-item", {
          color: "#000",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        // Mobile title zoom
        timeline.to(".hero-title-wrap", {
          scale: 2,
          duration: 0.15,
          ease: "none",
        });

        timeline.to(".hero-title-wrap", {
          scale: 5,
          duration: 0.2,
          ease: "none",
        });

        // Black scene enters together with the final zoom.
        timeline.to(".services-scene", {
          opacity: 1,
          duration: 0.15,
          ease: "none",
        });

        timeline.to(
          ".hero-title-wrap",
          {
            scale: 10,
            opacity: 0,
            duration: 0.18,
            ease: "none",
          },
          "<"
        );

        timeline.to(
          ".navbar-item",
          {
            color: "#fff",
            duration: 0.05,
            ease: "none",
          },
          "<"
        );

        // Mobile services move vertically.
        timeline.to(".services-canvas", {
          y: "-68vh",
          duration: 0.5,
          ease: "none",
        });

        // Hold services before Work section.
        timeline.to({}, {
          duration: 0.9,
        });

        return () => {
          timeline.scrollTrigger?.kill();
        };
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
};