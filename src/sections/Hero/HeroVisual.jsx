import webVideo from "../../assets/videos/coding.mp4";
import uiVideo from "../../assets/videos/6036459_Document_Business_1280x720.mp4";
import appVideo from "../../assets/videos/ui.mp4";
import aiVideo from "../../assets/videos/0_Filmmaking_Video_Production_1280x720.mp4";
import brandingVideo from "../../assets/videos/Branding.mp4";

const services = [
  {
    name: "WEB DEVELOPMENT",
    video: webVideo,
    className:
      "service-card-1 left-[14%] top-[8%] h-[28vw] w-[21vw] -rotate-6",
  },
  {
    name: "UI / UX DESIGN",
    video: appVideo,
    className:
      "service-card-2 left-[39%] top-[10%] h-[17vw] w-[27vw] rotate-3",
  },
  {
    name: "APP DEVELOPMENT",
    video: uiVideo,
    className:
      "service-card-3 right-[11%] top-[8%] h-[27vw] w-[24vw] rotate-[7deg]",
  },
  {
    name: "AI & AUTOMATION",
    video: aiVideo,
    className:
      "service-card-4 bottom-[8%] left-[22%] h-[18vw] w-[27vw] rotate-[5deg]",
  },
  {
    name: "BRANDING",
    video: brandingVideo,
    className:
      "service-card-5 bottom-[9%] right-[17%] h-[17vw] w-[24vw] -rotate-[5deg]",
  },
];

const HeroVisual = () => {
  return (
    <div className="hero-visual absolute inset-0 overflow-hidden">

      {/* =====================================================
          SERVICES
          These are already behind the transparent title.
      ===================================================== */}

      <div className="services-scene absolute inset-0 z-10 overflow-hidden bg-black">

        <div className="services-heading absolute left-[18px] top-[72px] z-20 text-[7px] font-semibold uppercase tracking-[0.2em] text-white md:left-10 md:top-[120px] md:text-[10px]">
          01 — WHAT WE DO
        </div>

        <div className="services-canvas absolute inset-x-0 top-[6vh] bottom-[6vh] w-full origin-center">

          {services.map((service) => (
            <div
              key={service.name}
              className={`service-card absolute overflow-hidden rounded-[18px] bg-[#181818] md:rounded-3xl ${service.className}`}
            >
              <div className="relative h-full w-full overflow-hidden">

                <video
                  className="absolute inset-0 h-full w-full scale-[1.05] object-cover"
                  src={service.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <span className="absolute bottom-[11px] left-3 z-10 text-[7px] font-semibold tracking-[0.12em] text-white md:bottom-3 md:left-4 md:text-[9px]">
                  {service.name}
                </span>

              </div>
            </div>
          ))}

        </div>
      </div>


      {/* =====================================================
          YELLOW COVER
          The text itself is cut out of this layer.
          Therefore services show THROUGH NEWBIE LAUNCH.
      ===================================================== */}

      <div className="hero-yellow-cover absolute inset-0 z-20">

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>

            <mask id="newbie-launch-cutout">

              {/* Entire yellow layer is visible */}
              <rect
                x="0"
                y="0"
                width="1000"
                height="600"
                fill="white"
              />

              {/* NEWBIE hole */}
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
                NEWBIE
              </text>

              {/* LAUNCH hole */}
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
                LAUNCH
              </text>

            </mask>

          </defs>

          <rect
            x="0"
            y="0"
            width="1000"
            height="600"
            fill="#ffcc00"
            mask="url(#newbie-launch-cutout)"
          />

        </svg>

      </div>


      {/* =====================================================
          TITLE SCALE CONTROLLER

          Invisible text used only for GSAP zoom.
      ===================================================== */}

      <div className="hero-title-wrap pointer-events-none absolute inset-0 z-30 flex items-center justify-center">

        <div className="flex flex-col items-center justify-center">

          <span className="hero-title-line block text-[17.5vw] font-black uppercase leading-[0.77] tracking-[-0.095em] text-transparent md:text-[13vw]">
            NEWBIE
          </span>

          <span className="hero-title-line block text-[17.5vw] font-black uppercase leading-[0.77] tracking-[-0.095em] text-transparent md:text-[13vw]">
            LAUNCH
          </span>

        </div>

      </div>

    </div>
  );
};

export default HeroVisual;