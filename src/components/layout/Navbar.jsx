const Navbar = () => {
  return (
    <header className="relative z-50 w-full px-6 py-6 md:px-10">

      <nav className="flex items-center justify-between">

        {/* ================================
            LOGO
        ================================= */}

        <a
          href="/"
          className="text-lg font-bold tracking-[-0.04em] md:text-xl"
        >
          NEWBIE
          <span className="font-normal"> LAUNCH</span>
        </a>


        {/* ================================
            DESKTOP NAVIGATION
        ================================= */}

        <div className="hidden items-center gap-10 text-sm md:flex">

          <a
            href="#work"
            className="transition-opacity duration-300 hover:opacity-50"
          >
            Work
          </a>

          <a
            href="#about"
            className="transition-opacity duration-300 hover:opacity-50"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition-opacity duration-300 hover:opacity-50"
          >
            Contact
          </a>

        </div>


        {/* ================================
            MENU BUTTON
        ================================= */}

        <button
          className="
            rounded-full
            border
            border-white/60
            px-5
            py-2
            text-sm
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
          "
        >
          Menu
        </button>

      </nav>

    </header>
  );
};

export default Navbar;