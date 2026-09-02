const Navbar = () => {
  return (
    <header className="absolute left-0 top-0 z-50 w-full px-6 py-6 md:px-10">
      <nav className="flex items-center justify-between">

        <button className="text-sm font-medium text-black transition-opacity hover:opacity-50">
          Menu
        </button>

        {/* <a
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-lg font-bold tracking-[-0.04em] md:text-xl"
        >
          <p className="text-black font-bold">NEWBIE LAUNCH</p>
        </a> */}

        <div className="ml-auto hidden items-center text-black gap-8 text-sm md:flex">
          <a href="#work" className="transition-opacity hover:opacity-50">
            Work
          </a>

          <a href="#about" className="transition-opacity hover:opacity-50">
            About
          </a>

          <a href="#contact" className="transition-opacity hover:opacity-50">
            Contact
          </a>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;