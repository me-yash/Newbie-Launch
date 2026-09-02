// Navbar.jsx

const Navbar = () => {
  return (
    <header className="navbar fixed left-0 top-0 z-50 w-full px-6 py-6 md:px-10">
      <nav className="relative flex items-center justify-between">
        <button className="navbar-item text-sm font-medium transition-colors duration-300">
          Menu
        </button>

        <a
          href="/"
          className="navbar-item absolute left-1/2 -translate-x-1/2 text-lg font-bold tracking-[-0.04em] transition-colors duration-300 md:text-xl"
        >
          NEWBIE LAUNCH
        </a>

        <div className="ml-auto hidden items-center gap-8 text-sm md:flex">
          <a
            href="#work"
            className="navbar-item transition-colors duration-300"
          >
            Work
          </a>

          <a
            href="#about"
            className="navbar-item transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="navbar-item transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;