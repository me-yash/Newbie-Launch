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
      "left-[14%] top-[8%] h-[28vw] w-[21vw] -rotate-6",
  },
  {
    name: "UI / UX DESIGN",
    video: appVideo,
    className:
      "left-[39%] top-[10%] h-[17vw] w-[27vw] rotate-3",
  },
  {
    name: "APP DEVELOPMENT",
    video: uiVideo,
    className:
      "right-[11%] top-[8%] h-[27vw] w-[24vw] rotate-[7deg]",
  },
  {
    name: "AI & AUTOMATION",
    video: aiVideo,
    className:
      "bottom-[8%] left-[22%] h-[18vw] w-[27vw] rotate-[5deg]",
  },
  {
    name: "BRANDING",
    video: brandingVideo,
    className:
      "bottom-[9%] right-[17%] h-[17vw] w-[24vw] -rotate-[5deg]",
  },
];

const HeroVisual = () => {
  return (
    <div className="hero-visual absolute inset-0">

      {/* HERO TITLE */}

      <div className="hero-title-wrap absolute inset-0 z-30 grid place-items-center">
        <h1 className="flex w-max flex-col items-center justify-center text-[17.5vw] font-black uppercase leading-[0.77] tracking-[-0.095em] text-purple-950 md:text-[13vw]">
          <span className="block whitespace-nowrap text-black">
            NEWBIE
          </span>

          <span className="block whitespace-nowrap text-black">
            LAUNCH
          </span>
        </h1>
      </div>

      {/* SERVICES */}

      <div className="services-scene absolute inset-0 z-10 bg-black opacity-0">
       <div className="services-heading absolute left-[18px] top-[72px] z-20 text-[7px] font-semibold uppercase tracking-[0.2em] text-white md:left-10 md:top-30 md:text-[10px]">
  01 — WHAT WE DO
</div>

        <div className="services-canvas absolute inset-x-0 top-[6vh] bottom-[6vh] w-full origin-center">

          {services.map((service) => (
            <div
              key={service.name}
              className={`service-card absolute overflow-hidden rounded-[18px] bg-[#181818] md:rounded-3xl ${service.className}`}
            >
              <div className="relative h-full w-full overflow-hidden bg-[#181818]">

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
    </div>
  );
};

export default HeroVisual;