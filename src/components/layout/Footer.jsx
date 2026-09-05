const Footer = () => {
  const backToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="grid min-h-[340px] grid-cols-1 items-end gap-12 bg-[#ffcc00] px-5 py-8 text-black md:min-h-[300px] md:grid-cols-3 md:px-10">
      <div className="text-[20vw] font-black uppercase leading-[0.75] tracking-[-0.09em] md:text-[7vw]">
        Newbie
        <br />
        Launch
      </div>

      <div className="flex flex-col gap-2 text-[7px] font-bold uppercase tracking-[0.15em] opacity-50">
        <span>© 2026 Newbie Launch</span>
        <span>Built with intent.</span>
      </div>

      <a
        href="#top"
        onClick={backToTop}
        className="text-[8px] font-bold uppercase tracking-[0.15em] transition-opacity hover:opacity-50 md:justify-self-end"
      >
        Back to top ↑
      </a>
    </footer>
  );
};

export default Footer;