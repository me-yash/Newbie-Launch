import React from "react";

const projects = [
  {
    number: "01",
    title: "Brand Identity",
    category: "Branding",
    description:
      "Building bold visual identities that make new brands impossible to ignore.",
  },
  {
    number: "02",
    title: "Digital Experience",
    category: "Web Design",
    description:
      "Clean, interactive and conversion-focused digital experiences for ambitious startups.",
  },
  {
    number: "03",
    title: "Creative Direction",
    category: "Creative",
    description:
      "From the first idea to the final pixel, turning rough ideas into memorable brands.",
  },
];

export default function Work() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#f5d90a] uppercase tracking-[0.3em] text-sm mb-6">
            Selected Work
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.8] tracking-[-0.07em]">
            Work<span className="text-[#f5d90a]">.</span>
          </h1>

          <div className="mt-16 max-w-2xl">
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
              We create identities, websites and digital experiences for
              brands that are ready to stop looking ordinary.
            </p>
          </div>

          <div className="mt-24 border-t border-white/20">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group border-b border-white/20 py-10 md:py-14 grid md:grid-cols-[100px_1fr_1fr] gap-8 items-start transition-all duration-300 hover:px-4"
              >
                <span className="text-[#f5d90a] text-sm font-bold">
                  {project.number}
                </span>

                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-white/40">
                    {project.category}
                  </span>

                  <h2 className="mt-3 text-4xl md:text-6xl font-black uppercase tracking-tight group-hover:text-[#f5d90a] transition-colors">
                    {project.title}
                  </h2>
                </div>

                <p className="text-white/50 text-lg leading-relaxed max-w-md md:pt-7">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}