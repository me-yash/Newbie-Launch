import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#111] text-white">

      {/* Background */}
      <div className="absolute inset-0">
        {/* Visual will come here */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">

        <Navbar />

        {/* Hero Content */}
        <div className="flex flex-1 items-end px-6 pb-10 md:px-10">

          <div className="w-full">

            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50">
              Digital Experience Studio
            </p>

            <h1
              className="
                text-[19vw]
                font-black
                uppercase
                leading-[0.72]
                tracking-[-0.08em]
              "
            >
              Newbie
            </h1>

            <div className="mt-2 flex items-end justify-between">

              <h1
                className="
                  text-[19vw]
                  font-black
                  uppercase
                  leading-[0.72]
                  tracking-[-0.08em]
                "
              >
                Launch
              </h1>

              <p className="hidden max-w-xs pb-3 text-sm leading-relaxed text-white/60 md:block">
                Building bold digital experiences
                for the next generation.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;