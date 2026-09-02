// hero.animation.js

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

      // Enter the title
      timeline.to(
        ".hero-title-wrap",
        {
          scale: 2,
          ease: "none",
        },
        0.18
      );

      timeline.to(
        ".hero-title-wrap",
        {
          scale: 7,
          ease: "none",
        },
        0.42
      );

      // Pass through the title
      timeline.to(
        ".hero-title-wrap",
        {
          scale: 16,
          opacity: 0,
          ease: "none",
        },
        0.60
      );

      // Reveal services
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

      // Service movement
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

      // Keep the services scene on screen for a long hold.
      timeline.to(
        ".services-scene",
        {
          opacity: 1,
          duration: 3,
          ease: "none",
        },
        1.15
      );

      // Navbar changes after the title is gone.
      timeline.to(
        ".navbar-item",
        {
          color: "#fff",
          ease: "none",
        },
        0.62
      );
    });

    return () => ctx.revert();
  }, []);
};