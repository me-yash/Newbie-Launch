import React from "react";

const values = [
  ["01", "Build Things", "I enjoy turning ideas into real projects, from simple interfaces to complete web experiences."],
  ["02", "Keep It Clean", "I believe good design should feel simple, intuitive and purposeful without unnecessary complexity."],
  ["03", "Keep Learning", "Technology keeps evolving, and so do I. I’m always exploring, experimenting and learning something new."],
];

export default function About() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-28">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#f5d90a] uppercase tracking-[0.3em] text-sm mb-6">
            Who I Am
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase leading-[0.8] tracking-[-0.07em]">
            About
            <br />
            <span className="text-[#f5d90a]">Me.</span>
          </h1>

          <div className="mt-24 grid lg:grid-cols-2 gap-12 lg:gap-24">
            <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
              Ideas deserve
              <span className="text-[#f5d90a]"> to be built.</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-white/55 leading-relaxed">
              <p>
                I'm Yash, a developer who enjoys building things for the web
                and turning ideas into interactive digital experiences.
              </p>

              <p>
                I work with technologies like React, JavaScript and Tailwind
                CSS, while continuously exploring backend and full-stack
                development.
              </p>

              <p>
                Beyond writing code, I enjoy experimenting with ideas,
                working on real-world projects and finding better ways to
                combine technology with good design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-14">
            My Approach
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