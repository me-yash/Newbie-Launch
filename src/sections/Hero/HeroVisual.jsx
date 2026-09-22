// HeroVisual.jsx
// Services wider + horizontally arranged.
// Animation next message/code below handles LEFT -> RIGHT movement.

import webVideo from "../../assets/videos/coding.mp4";
import uiVideo from "../../assets/videos/6036459_Document_Business_1280x720.mp4";
import appVideo from "../../assets/videos/ui.mp4";
import aiVideo from "../../assets/videos/0_Filmmaking_Video_Production_1280x720.mp4";
import brandingVideo from "../../assets/videos/Branding.mp4";

const services = [
  {
    name: "WEB DEVELOPMENT",
    video: webVideo,
  },
  {
    name: "AI & AUTOMATION",
    video: aiVideo,
  },
  {
    name: "UI / UX DESIGN",
    video: appVideo,
  },
  {
    name: "APP DEVELOPMENT",
    video: uiVideo,
  },
  {
    name: "BRANDING",
    video: brandingVideo,
  },
];

const HeroVisual = () => {
  return (
    <div className="hero-visual absolute inset-0 overflow-hidden">

      {/* SERVICES */}
      <div className="services-scene absolute inset-0 z-10 overflow-hidden bg-black">

        <div className="services-heading absolute left-[18px] top-[72px] z-50 text-[7px] font-semibold uppercase tracking-[0.2em] text-white md:left-10 md:top-[120px] md:text-[10px]">
          01 — WHAT WE DO
        </div>

        {/* =====================================================
            SERVICES CANVAS
            Wider cards + horizontal track
        ===================================================== */}

        <div className="services-canvas absolute inset-0 flex items-center overflow-hidden">

          <div className="services-track flex w-max items-center gap-[2vw] px-[4vw]">

            {services.map((service, index) => (
              <div
                key={service.name}
                className={`
                  service-card
                  service-card-${index + 1}
                  relative
                  shrink-0
                  h-[58vh]
                  w-[27vw]
                  overflow-hidden
                  rounded-[24px]
                  bg-[#181818]
                  md:rounded-[32px]
                `}
              >
                <div className="relative h-full w-full overflow-hidden">

                  <video
                    className="absolute inset-0 h-full w-full scale-[1.03] object-cover"
                    src={service.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-5 z-10 text-[8px] font-semibold tracking-[0.12em] text-white md:bottom-7 md:left-7 md:text-[11px]">
                    {service.name}
                  </span>

                  <span className="absolute right-5 top-5 z-10 text-[8px] font-medium tracking-[0.12em] text-white/70 md:right-7 md:top-7 md:text-[10px]">
                    0{index + 1}
                  </span>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* =====================================================
          YELLOW SEE-THROUGH COVER
          DON'T CHANGE
      ===================================================== */}

      <div
        className="hero-yellow-cover absolute inset-0 z-20 overflow-hidden"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <mask
              id="newbie-launch-cutout"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1000"
              height="600"
            >
              <rect
                x="0"
                y="0"
                width="1000"
                height="600"
                fill="white"
              />

              <text
                x="500"
                y="310"
                textAnchor="middle"
                fill="black"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="145"
                fontWeight="900"
                letterSpacing="-12"
              >
                HELLO
              </text>

              <text
                x="500"
                y="450"
                textAnchor="middle"
                fill="black"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="145"
                fontWeight="900"
                letterSpacing="-12"
              >
                THERE
              </text>
            </mask>
          </defs>

          <rect
            x="0"
            y="0"
            width="1000"
            height="600"
            fill="#ff00bf"
            mask="url(#newbie-launch-cutout)"
          />
        </svg>
      </div>

      {/* =====================================================
          TRANSPARENT TITLE
      ===================================================== */}

      <div className="hero-title-wrap pointer-events-none absolute inset-0 z-30 flex items-center justify-center">

        <div className="flex flex-col items-center justify-center">

          <span className="hero-title-line block text-[17.5vw] font-black uppercase leading-[0.77] tracking-[-0.095em] text-transparent md:text-[13vw]">
            HELLO
          </span>

          <span className="hero-title-line block text-[17.5vw] font-black uppercase leading-[0.77] tracking-[-0.095em] text-transparent md:text-[13vw]">
            THERE
          </span>

        </div>

      </div>

    </div>
  );
};

export default HeroVisual;