import React from "react";

const values = [
  ["01", "Think Different", "We don't follow templates. We build ideas around the brand."],
  ["02", "Keep It Sharp", "Simple doesn't mean boring. Every detail has a reason."],
  ["03", "Make It Move", "Static brands are forgotten. We create experiences people remember."],
];

export default function About() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-28">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#f5d90a] uppercase tracking-[0.3em] text-sm mb-6">
            Who We Are
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase leading-[0.8] tracking-[-0.07em]">
            About
            <br />
            <span className="text-[#f5d90a]">Us.</span>
          </h1>

          <div className="mt-24 grid lg:grid-cols-2 gap-12 lg:gap-24">
            <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
              New ideas deserve
              <span className="text-[#f5d90a]"> better launches.</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-white/55 leading-relaxed">
              <p>
                Newbie Launch is a creative studio for ambitious new brands,
                founders and ideas.
              </p>

              <p>
                We combine strategy, design and technology to turn early-stage
                ideas into brands people actually want to interact with.
              </p>

              <p>
                No unnecessary noise. No boring templates. Just sharp ideas,
                strong design and digital experiences built to launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-14">
            Our Approach
          </p>

          <div>
            {values.map(([number, title, text]) => (
              <div
                key={number}
                className="border-t border-white/20 py-10 grid md:grid-cols-[100px_1fr_1fr] gap-8"
              >
                <span className="text-[#f5d90a] font-bold">{number}</span>

                <h3 className="text-3xl md:text-5xl font-black uppercase">
                  {title}
                </h3>

                <p className="text-white/50 text-lg leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}