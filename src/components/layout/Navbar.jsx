// Navbar.jsx

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(location.pathname === "/");

  useEffect(() => {
    setMenuOpen(false);

    // Other pages = black background → white navbar
    if (location.pathname !== "/") {
      setIsLight(true);
      return;
    }

    // Home = yellow hero → black navbar initially
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;

      // Hero entry ke baad services section black ho jata hai
      // Is point par navbar white ho jayega.
      setIsLight(scrollY > viewport * 0.72);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname]);

  const textColor = isLight ? "text-white" : "text-black";
  const lineColor = isLight ? "bg-white" : "bg-black";

  return (
    <nav
      className={`
        fixed
        left-0
        top-0
        z-[99999]
        w-full
        px-6
        py-6
        md:px-10
        md:py-7
        ${textColor}
        transition-colors
        duration-300
      `}
    >
      <div className="relative flex w-full items-center justify-between">

        {/* DESKTOP MENU */}
        {/* <button
          type="button"
          className="hidden items-center gap-3 text-[11px] font-semibold uppercase tracking-wide md:flex"
        >
          <span className="flex w-4 flex-col gap-[4px]">
            <span className={`h-[1.5px] w-full ${lineColor}`} />
            <span className={`h-[1.5px] w-full ${lineColor}`} />
          </span>

          <span>Menu</span>
        </button> */}

        {/* LOGO */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-bold md:text-[14px]"
        >
         Home
        </Link>

        {/* DESKTOP LINKS */}
        <div className="ml-auto hidden items-center gap-7 text-[15px] font-semibold md:flex">
          <Link
            to="/work"
            className="transition-opacity duration-200 hover:opacity-50"
          >
            Work
          </Link>

          <Link
            to="/about"
            className="transition-opacity duration-200 hover:opacity-50"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="transition-opacity duration-200 hover:opacity-50"
          >
            Contact
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="ml-auto flex h-8 w-8 items-center justify-center md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="relative flex h-4 w-5 flex-col justify-center">

            <span
              className={`
                absolute
                left-0
                h-[1.5px]
                w-5
                ${lineColor}
                transition-all
                duration-300
                ${
                  menuOpen
                    ? "rotate-45"
                    : "-translate-y-[3px]"
                }
              `}
            />

            <span
              className={`
                absolute
                left-0
                h-[1.5px]
                w-5
                ${lineColor}
                transition-all
                duration-300
                ${
                  menuOpen
                    ? "-rotate-45"
                    : "translate-y-[3px]"
                }
              `}
            />

          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          absolute
          left-0
          top-full
          w-full
          overflow-hidden
          bg-black
          transition-all
          duration-300
          md:hidden
          ${
            menuOpen
              ? "pointer-events-auto max-h-[320px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div className="flex flex-col px-6 pb-7 pt-3 text-white">

          <Link
            to="/work"
            onClick={() => setMenuOpen(false)}
            className="border-b border-white/15 py-4 text-[13px] font-semibold uppercase"
          >
            Work
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="border-b border-white/15 py-4 text-[13px] font-semibold uppercase"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="py-4 text-[13px] font-semibold uppercase"
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;