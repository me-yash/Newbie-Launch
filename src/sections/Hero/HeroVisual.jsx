import webVideo from "../../assets/videos/coding.mp4";
import uiVideo from "../../assets/videos/6036459_Document_Business_1280x720.mp4";
import appVideo from "../../assets/videos/ui.mp4";
import aiVideo from "../../assets/videos/0_Filmmaking_Video_Production_1280x720.mp4";
import brandingVideo from "../../assets/videos/Branding.mp4";

const services = [
  {
    name: "WEB DEVELOPMENT",
    video: webVideo,
    className: "service-card service-card-1",
  },
  {
    name: "UI / UX DESIGN",
    video: appVideo,
    className: "service-card service-card-2",
  },
  {
    name: "APP DEVELOPMENT",
    video: uiVideo,
    className: "service-card service-card-3",
  },
  {
    name: "AI & AUTOMATION",
    video: aiVideo,
    className: "service-card service-card-4",
  },
  {
    name: "BRANDING",
    video: brandingVideo,
    className: "service-card service-card-5",
  },
];

const HeroVisual = () => {
  return (
    <div className="hero-visual absolute inset-0">
      <div className="hero-title-wrap absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <h1 className="hero-title flex items-center">
          <span className="text-purple-950">NEWBIE</span>
          <span className="text-purple-950">LAUNCH</span>
        </h1>
      </div>

      <div className="services-scene absolute inset-0 z-10 bg-black opacity-0">
        <div className="services-heading mt-10">
          <span className="text-white">01 — WHAT WE DO</span>
        </div>

        <div className="services-canvas">
          {services.map((service) => (
            <div
              key={service.name}
              className={`${service.className} rounded-3xl`}
            >
              <div className="service-visual">
                <video
                  className="service-video"
                  src={service.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <div className="service-video-overlay" />

                <span>{service.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;