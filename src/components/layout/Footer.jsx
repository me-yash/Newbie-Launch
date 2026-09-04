const Footer = () => {
  return (
    <footer className="grid min-h-[360px] grid-cols-1 items-end gap-14 bg-[#ffcc00] px-5 py-8 text-black md:min-h-[300px] md:grid-cols-3 md:gap-8 md:px-10">
      {/* Brand */}
      <div className="text-[22vw] font-black uppercase leading-[0.75] tracking-[-0.09em] md:text-[7vw]">
        Newbie
        <br />
        Launch
      </div>

      {/* Copyright */}
      <div className="flex flex-col gap-2 text-[7px] font-bold uppercase tracking-[0.15em] opacity-50">
        <span>© 2026 Newbie Launch</span>
        <span>Built with intent.</span>
      </div>

      {/* Back to top */}
      <a
        href="#"
        className="text-[8px] font-bold uppercase tracking-[0.15em] transition-opacity duration-300 hover:opacity-50 md:justify-self-end"
      >
        Back to top ↑
      </a>
    </footer>
  );
};

export default Footer;