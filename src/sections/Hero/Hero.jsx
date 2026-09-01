import Navbar from "../../components/layout/Navbar";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0b0b] text-white">

      {/* =================================
          BACKGROUND
      ================================= */}

      <div className="absolute inset-0">
        {/* Hero visual will come here */}
      </div>


      {/* =================================
          MAIN CONTENT
      ================================= */}

      <div className="relative z-10 flex min-h-screen flex-col">

        {/* NAVBAR */}
        <Navbar />


        {/* HERO CONTENT */}
        <div className="flex flex-1 items-end px-6 pb-8 md:px-10 md:pb-10">

          <div className="w-full">

            {/* Small Label */}
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50">
              Digital Experience Studio
            </p>


            {/* Main Heading */}
            <h1 className="text-[18vw] font-black uppercase leading-[0.72] tracking-[-0.08em]">

              <span className="block">
                Newbie
              </span>

              <span className="block">
                Launch
              </span>

            </h1>


            {/* Bottom Row */}
            <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <p className="max-w-sm text-sm leading-relaxed text-white/60 md:text-base">
                Building bold digital experiences
                for the next generation.
              </p>


              <button className="group flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-transform duration-300 hover:scale-105">

                Explore

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>

              </button>

            </div>

          </div>

        </div>


        {/* =================================
            SCROLL INDICATOR
        ================================= */}

        <div className="absolute bottom-8 left-6 text-[10px] uppercase tracking-[0.25em] text-white/50 md:left-10">
          Scroll ↓
        </div>

      </div>

    </section>
  );
};

export default Hero;