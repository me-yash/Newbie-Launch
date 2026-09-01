const HeroVisual = () => {
  return (
    <div className="hero-visual absolute inset-0 flex items-center justify-center">

      <div className="hero-glow absolute left-1/2 top-1/2 h-[35vw] w-[35vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.04] blur-3xl" />

      <div className="hero-ring absolute left-1/2 top-1/2 h-[32vw] w-[32vw] min-h-[280px] min-w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10" />

      <div className="hero-ring hero-ring-two absolute left-1/2 top-1/2 h-[44vw] w-[44vw] min-h-[360px] min-w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.06]" />

      <div className="hero-title-wrap relative z-10 overflow-visible">
        <h1 className="hero-title text-center text-[15vw] font-black uppercase leading-[0.78] tracking-[-0.08em] text-black">
  <span className="block">Newbie</span>
  <span className="block">Launch</span>
</h1>
      </div>

    </div>
  );
};

export default HeroVisual;