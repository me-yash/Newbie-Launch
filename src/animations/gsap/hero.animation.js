// hero.animation.js
// 🔥 ONLY CHANGE:
// Services ab LEFT EDGE se start hongi.
// Baaki hero entry + see-through effect SAME.

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimation = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* =====================================================
         DESKTOP
      ===================================================== */

      mm.add("(min-width: 769px)", () => {
        gsap.set(".hero-title-wrap", {
          scale: 1,
          opacity: 1,
          visibility: "visible",
          transformOrigin: "50% 36.5%",
        });

        gsap.set(".hero-yellow-cover", {
          opacity: 1,
          scale: 1,
          visibility: "visible",

          // YOUR EXACT ENTRY POSITION — UNCHANGED
          transformOrigin: "48.65% 37%",
        });

        gsap.set(".services-scene", {
          opacity: 1,
          visibility: "visible",
        });

        gsap.set(".services-canvas", {
          scale: 1.18,
          x: 0,
          transformOrigin: "50% 50%",
        });

        /* =====================================================
           🔥 START FROM LEFT EDGE
        ===================================================== */

        gsap.set(".services-track", {
          x: "10vw",
        });

        gsap.set(".navbar-item", {
          color: "#000",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        /* =====================================================
           NEWBIE LAUNCH ENTRY
        ===================================================== */

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 2,
            duration: 0.18,
            ease: "power1.inOut",
          }
        );

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 4,
            duration: 0.22,
            ease: "power1.inOut",
          }
        );

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 7,
            opacity: 1,
            duration: 0.22,
            ease: "power2.in",
          }
        );

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 13,
            opacity: 1,
            duration: 0.32,
            ease: "power2.in",
          }
        );

        /* =====================================================
           NO FADE
        ===================================================== */

        timeline.set(".hero-yellow-cover", {
          visibility: "hidden",
        });

        timeline.set(".hero-title-wrap", {
          visibility: "hidden",
        });

        /* =====================================================
           SERVICES
           LEFT → RIGHT
        ===================================================== */

        timeline.to(".services-canvas", {
          scale: 1,
          duration: 0.18,
          ease: "power2.out",
        });

        timeline.to(".services-track", {
          x: "-90vw",
          duration: 4.5,
          ease: "none",
        });

        /* =====================================================
           NAVBAR
        ===================================================== */

        timeline.to(
          ".navbar-item",
          {
            color: "#fff",
            duration: 0.08,
            ease: "none",
          },
          "<"
        );

        timeline.to(
          {},
          {
            duration: 0.5,
          }
        );

        return () => {
          timeline.scrollTrigger?.kill();
        };
      });

      /* =====================================================
         MOBILE
      ===================================================== */

      mm.add("(max-width: 768px)", () => {
        gsap.set(".hero-title-wrap", {
          scale: 1,
          opacity: 1,
          visibility: "visible",
          transformOrigin: "50% 36.5%",
        });

        gsap.set(".hero-yellow-cover", {
          opacity: 1,
          scale: 1,
          visibility: "visible",
          transformOrigin: "50% 36.5%",
        });

        gsap.set(".services-scene", {
          opacity: 1,
          visibility: "visible",
        });

        gsap.set(".services-canvas", {
          scale: 1,
          x: 0,
          transformOrigin: "50% 50%",
        });

        /* 🔥 MOBILE LEFT EDGE */
        gsap.set(".services-track", {
          x: "-4vw",
        });

        gsap.set(".navbar-item", {
          color: "#000",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.05,
            invalidateOnRefresh: true,
          },
        });

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 2,
            duration: 0.16,
            ease: "power1.inOut",
          }
        );

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 4,
            duration: 0.20,
            ease: "power1.inOut",
          }
        );

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 7,
            opacity: 1,
            duration: 0.20,
            ease: "power2.in",
          }
        );

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 13,
            opacity: 1,
            duration: 0.30,
            ease: "power2.in",
          }
        );

        timeline.set(".hero-yellow-cover", {
          visibility: "hidden",
        });

        timeline.set(".hero-title-wrap", {
          visibility: "hidden",
        });

        /* 🔥 RIGHT → LEFT */
        timeline.to(".services-track", {
          x: "-90vw",
          duration: 4.5,
          ease: "none",
        });

        timeline.to(".services-canvas", {
          scale: 0.92,
          duration: 0.18,
          ease: "power2.out",
        });

        timeline.to(
          ".navbar-item",
          {
            color: "#fff",
            duration: 0.06,
          },
          "<"
        );

        timeline.to(
          {},
          {
            duration: 0.5,
          }
        );

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