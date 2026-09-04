// hero.animation.js
// X = EXACT CENTER
// Y = SAME ENTRY HEIGHT
// 🔥 47.5% HATA DIYA — 50% CENTER HAI

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
         EXACT CENTER ENTRY
      ===================================================== */

      mm.add("(min-width: 769px)", () => {
        gsap.set(".hero-title-wrap", {
          scale: 1,
          opacity: 1,
          visibility: "visible",

          // X = 50% EXACT CENTER
          // Y = marked entry height
          transformOrigin: "50% 36.5%",
        });

        gsap.set(".services-scene", {
          opacity: 1,
          visibility: "visible",
        });

        gsap.set(".services-canvas", {
          scale: 1.18,
          transformOrigin: "50% 50%",
        });

        gsap.set(".hero-yellow-cover", {
          opacity: 1,
          scale: 1,
          visibility: "visible",

          // SAME EXACT POINT
          transformOrigin: "48.65% 37%",
        });

        gsap.set(".navbar-item", {
          color: "#000",
        });

        gsap.set(
          [
            ".service-card-1",
            ".service-card-2",
            ".service-card-3",
            ".service-card-4",
            ".service-card-5",
          ],
          {
            clearProps: "x,y,rotation",
          }
        );

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.4,
            invalidateOnRefresh: true,
          },
        });

        /* =====================================================
           ZOOM
        ===================================================== */

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 2,
            duration: 0.20,
            ease: "power1.inOut",
          }
        );

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 4,
            duration: 0.25,
            ease: "power1.inOut",
          }
        );

        /* =====================================================
           SERVICES MOVE
        ===================================================== */

        timeline.to(".services-canvas", {
          scale: 1.08,
          duration: 0.12,
          ease: "power1.inOut",
        });

        /* =====================================================
           ENTER THROUGH CENTER OF W
        ===================================================== */

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 7,
            opacity: 1,
            duration: 0.25,
            ease: "power2.in",
          },
          "<"
        );

        /* =====================================================
           FULL ENTRY
        ===================================================== */

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 13,
            opacity: 1,
            duration: 0.35,
            ease: "power2.in",
          }
        );

        /* =====================================================
           NO FADE — JUST REMOVE AFTER ENTERING
        ===================================================== */

        timeline.set(".hero-yellow-cover", {
          visibility: "hidden",
        });

        timeline.set(".hero-title-wrap", {
          visibility: "hidden",
        });

        /* =====================================================
           SERVICES
        ===================================================== */

        timeline.to(".services-canvas", {
          scale: 1,
          duration: 0.22,
          ease: "power1.inOut",
        });

        /* =====================================================
           NAVBAR
        ===================================================== */

        timeline.to(
          ".navbar-item",
          {
            color: "#fff",
            duration: 0.08,
            ease: "power1.inOut",
          },
          "<"
        );

        /* =====================================================
           CARDS
        ===================================================== */

        timeline.to(
          ".service-card-1",
          {
            x: -45,
            y: -25,
            rotation: -9,
            duration: 0.20,
            ease: "power1.inOut",
          },
          "<"
        );

        timeline.to(
          ".service-card-2",
          {
            x: 25,
            y: -35,
            rotation: 5,
            duration: 0.20,
            ease: "power1.inOut",
          },
          "<"
        );

        timeline.to(
          ".service-card-3",
          {
            x: 50,
            y: 20,
            rotation: 10,
            duration: 0.20,
            ease: "power1.inOut",
          },
          "<"
        );

        timeline.to(
          ".service-card-4",
          {
            x: -30,
            y: 35,
            rotation: 7,
            duration: 0.20,
            ease: "power1.inOut",
          },
          "<"
        );

        timeline.to(
          ".service-card-5",
          {
            x: 35,
            y: 30,
            rotation: -8,
            duration: 0.20,
            ease: "power1.inOut",
          },
          "<"
        );

        timeline.to(
          {},
          {
            duration: 1.45,
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

        gsap.set(".services-scene", {
          opacity: 1,
          visibility: "visible",
        });

        gsap.set(".services-canvas", {
          y: 0,
          scale: 1,
          transformOrigin: "50% 50%",
        });

        gsap.set(".hero-yellow-cover", {
          opacity: 1,
          scale: 1,
          visibility: "visible",
          transformOrigin: "50% 36.5%",
        });

        gsap.set(".navbar-item", {
          color: "#000",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.1,
            invalidateOnRefresh: true,
          },
        });

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

        timeline.to(".services-canvas", {
          scale: 1.05,
          duration: 0.12,
          ease: "power1.inOut",
        });

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 7,
            opacity: 1,
            duration: 0.22,
            ease: "power2.in",
          },
          "<"
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

        /* NO FADE */

        timeline.set(".hero-yellow-cover", {
          visibility: "hidden",
        });

        timeline.set(".hero-title-wrap", {
          visibility: "hidden",
        });

        timeline.to(
          ".navbar-item",
          {
            color: "#fff",
            duration: 0.06,
            ease: "power1.inOut",
          },
          "<"
        );

        timeline.to(".services-canvas", {
          y: "-68vh",
          duration: 0.5,
          ease: "power1.inOut",
        });

        timeline.to(
          {},
          {
            duration: 0.9,
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