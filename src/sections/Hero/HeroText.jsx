const HeroText = () => {
  return (
    <div className="hero-description pointer-events-none absolute inset-0 z-20">
      <div className="absolute bottom-8 right-6 max-w-[180px] text-right md:right-10 md:max-w-xs">
        <p className="text-xs uppercase leading-relaxed tracking-wide text-black/50">
          Digital experiences
          <br />
          for the next generation.
        </p>
      </div>
    </div>
  );
};

export default HeroText;