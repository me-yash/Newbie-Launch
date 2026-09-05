import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-28">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#f5d90a] uppercase tracking-[0.3em] text-sm mb-6">
            Start Something
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase leading-[0.8] tracking-[-0.07em]">
            Let's
            <br />
            <span className="text-[#f5d90a]">Talk.</span>
          </h1>

          <div className="mt-20 grid lg:grid-cols-2 gap-16 lg:gap-28">
            <div>
              <p className="text-2xl md:text-3xl font-bold leading-tight max-w-lg">
                Got an idea? A new brand? A weird little thing you can't stop
                thinking about?
              </p>

              <p className="mt-8 text-white/50 text-lg leading-relaxed max-w-md">
                Tell us what you're building. We'll figure out the rest
                together.
              </p>

              <a
                href="mailto:hello@newbielaunch.com"
                className="inline-block mt-10 text-[#f5d90a] text-lg border-b border-[#f5d90a] pb-2 hover:text-white hover:border-white transition-colors"
              >
                hello@newbielaunch.com
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
                  Name
                </label>

                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none placeholder:text-white/20 focus:border-[#f5d90a] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
                  Email
                </label>

                <input
                  required
                  type="email"
                  placeholder="you@email.com"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none placeholder:text-white/20 focus:border-[#f5d90a] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
                  Tell us about it
                </label>

                <textarea
                  required
                  rows="4"
                  placeholder="What's on your mind?"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none resize-none placeholder:text-white/20 focus:border-[#f5d90a] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-5 bg-[#f5d90a] text-black px-8 py-5 font-black uppercase tracking-wide hover:bg-white transition-colors"
              >
                {submitted ? "Message Sent ✓" : "Send Message"}

                {!submitted && (
                  <span className="text-xl group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}