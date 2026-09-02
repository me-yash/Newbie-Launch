const services = [
  {
    name: "WEB DEVELOPMENT",
    className: "service-card service-card-1",
  },
  {
    name: "UI / UX DESIGN",
    className: "service-card service-card-2",
  },
  {
    name: "APP DEVELOPMENT",
    className: "service-card service-card-3",
  },
  {
    name: "AI & AUTOMATION",
    className: "service-card service-card-4",
  },
  {
    name: "BRANDING",
    className: "service-card service-card-5",
  },
];

const HeroVisual = () => {
  return (
    <div className="hero-visual absolute inset-0">

      {/* Opening */}
      <div className="hero-title-wrap absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <h1 className="hero-title flex items-center">
          <span>NEWBIE</span>
          <span>LAUNCH</span>
        </h1>
      </div> 

      {/* Services scene */}
      <div className="services-scene absolute inset-0 z-10 bg-black opacity-0">

        <div className="services-heading">
          <span>01 — WHAT WE DO</span>
        </div>

        <div className="services-canvas">

          {services.map((service) => (
            <div
              key={service.name}
              className={service.className}
            >
              <div className="service-visual">
                <div className="service-pattern" />

                <div className="service-light" />

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