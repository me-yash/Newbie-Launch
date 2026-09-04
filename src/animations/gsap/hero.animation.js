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
          transformOrigin: "50% 50%",
        });

        /*
         * Services are ALWAYS present behind the
         * transparent NEWBIE LAUNCH cutout.
         */
        gsap.set(".services-scene", {
          opacity: 1,
          visibility: "visible",
        });

        gsap.set(".services-canvas", {
          scale: 1.18,
          transformOrigin: "50% 50%",
        });

        /*
         * Yellow knockout layer.
         */
        gsap.set(".hero-yellow-cover", {
          opacity: 1,
          scale: 1,
          visibility: "visible",
          transformOrigin: "50% 50%",
        });

        gsap.set(".navbar-item", {
          color: "#000",
        });

        /*
         * Reset cards.
         */
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
           HERO ZOOM — PHASE 1
        ===================================================== */

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 2,
            duration: 0.22,
            ease: "power1.inOut",
          }
        );

        /* =====================================================
           HERO ZOOM — PHASE 2
        ===================================================== */

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 4,
            duration: 0.28,
            ease: "power1.inOut",
          }
        );

        /* =====================================================
           SERVICES START MOVING
        ===================================================== */

        timeline.to(".services-canvas", {
          scale: 1.08,
          duration: 0.16,
          ease: "power1.inOut",
        });

        /* =====================================================
           KNOCKOUT ZOOM

           Services remain visible through NEWBIE LAUNCH.
        ===================================================== */

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 5.5,
            duration: 0.24,
            ease: "power1.inOut",
          },
          "<"
        );

        /* =====================================================
           YELLOW COVER EXITS
        ===================================================== */

        timeline.to(".hero-yellow-cover", {
          opacity: 0,
          scale: 7,
          duration: 0.24,
          ease: "power2.inOut",
        });

        timeline.to(
          ".hero-title-wrap",
          {
            opacity: 0,
            scale: 7,
            duration: 0.24,
            ease: "power2.inOut",
          },
          "<"
        );

        /* =====================================================
           SERVICES SETTLE
        ===================================================== */

        timeline.to(".services-canvas", {
          scale: 1,
          duration: 0.20,
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
           CARD 01
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

        /* =====================================================
           CARD 02
        ===================================================== */

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

        /* =====================================================
           CARD 03
        ===================================================== */

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

        /* =====================================================
           CARD 04
        ===================================================== */

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

        /* =====================================================
           CARD 05
        ===================================================== */

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

        /* =====================================================
           HOLD
        ===================================================== */

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
          transformOrigin: "50% 50%",
        });

        /*
         * Services remain behind the knockout.
         */
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
          transformOrigin: "50% 50%",
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

        /* =====================================================
           HERO ZOOM — PHASE 1
        ===================================================== */

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 2,
            duration: 0.18,
            ease: "power1.inOut",
          }
        );

        /* =====================================================
           HERO ZOOM — PHASE 2
        ===================================================== */

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 4,
            duration: 0.24,
            ease: "power1.inOut",
          }
        );

        /* =====================================================
           SERVICES START MOVING
        ===================================================== */

        timeline.to(".services-canvas", {
          scale: 1.05,
          duration: 0.12,
          ease: "power1.inOut",
        });

        /* =====================================================
           KNOCKOUT ZOOM
        ===================================================== */

        timeline.to(
          [".hero-title-wrap", ".hero-yellow-cover"],
          {
            scale: 5.5,
            duration: 0.22,
            ease: "power1.inOut",
          },
          "<"
        );

        /* =====================================================
           YELLOW COVER EXITS
        ===================================================== */

        timeline.to(".hero-yellow-cover", {
          opacity: 0,
          scale: 8,
          duration: 0.22,
          ease: "power2.inOut",
        });

        timeline.to(
          ".hero-title-wrap",
          {
            opacity: 0,
            scale: 8,
            duration: 0.22,
            ease: "power2.inOut",
          },
          "<"
        );

        /* =====================================================
           NAVBAR
        ===================================================== */

        timeline.to(
          ".navbar-item",
          {
            color: "#fff",
            duration: 0.06,
            ease: "power1.inOut",
          },
          "<"
        );

        /* =====================================================
           MOBILE SERVICES
        ===================================================== */

        timeline.to(".services-canvas", {
          y: "-68vh",
          duration: 0.5,
          ease: "power1.inOut",
        });

        /* =====================================================
           HOLD
        ===================================================== */

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