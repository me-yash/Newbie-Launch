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

      /*
       * Phase 1
       * Keep the title centered.
       */

      timeline.to(
        ".hero-title-wrap",
        {
          scale: 2,
          ease: "none",
        },
        0.18
      );

      /*
       * Phase 2
       * Enter the title.
       */

      timeline.to(
        ".hero-title-wrap",
        {
          scale: 7,
          ease: "none",
        },
        0.42
      );

      /*
       * Phase 3
       * Title disappears as we pass through it.
       */

      timeline.to(
        ".hero-title-wrap",
        {
          scale: 16,
          opacity: 0,
          ease: "none",
        },
        0.60
      );

      /*
       * Phase 4
       * Services appear AFTER entering the title.
       */

      timeline.to(
        ".services-scene",
        {
          opacity: 1,
          ease: "none",
        },
        0.62
      );

      timeline.fromTo(
        ".services-canvas",
        {
          scale: 1.5,
        },
        {
          scale: 1,
          ease: "none",
        },
        0.62
      );

      /*
       * Give each service its own movement.
       */

      timeline.to(
        ".service-card-1",
        {
          x: -50,
          y: -30,
          rotate: -10,
          ease: "none",
        },
        0.65
      );

      timeline.to(
        ".service-card-2",
        {
          x: 30,
          y: -40,
          rotate: 5,
          ease: "none",
        },
        0.65
      );

      timeline.to(
        ".service-card-3",
        {
          x: 60,
          y: 20,
          rotate: 10,
          ease: "none",
        },
        0.65
      );

      timeline.to(
        ".service-card-4",
        {
          x: -30,
          y: 40,
          rotate: 8,
          ease: "none",
        },
        0.65
      );

      timeline.to(
        ".service-card-5",
        {
          x: 40,
          y: 35,
          rotate: -8,
          ease: "none",
        },
        0.65
      );

      timeline.to(
        ".navbar-item",
        {
          color: "#ffffff",
          ease: "none",
        },
        0.63
      );
    });

    return () => ctx.revert();
  }, []);
};