import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="navbar-item mobile-menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`menu-line ${open ? "is-open" : ""}`} />
          <span className={`menu-line ${open ? "is-open middle" : ""}`} />
          <span className={`menu-line ${open ? "is-open bottom" : ""}`} />
        </button>

        <Link
          to="/"
          onClick={closeMenu}
          className="navbar-item navbar-logo"
        >
          NEWBIE LAUNCH
        </Link>

        <div className="navbar-links">
          <a href="/#work" className="navbar-item">Work</a>
          <a href="/#about" className="navbar-item">About</a>
          <a href="/#contact" className="navbar-item">Contact</a>
        </div>

        <button type="button" className="navbar-item navbar-menu-label">
          Menu
        </button>
      </nav>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <div className="mobile-menu-links">
          <a href="/#work" onClick={closeMenu}>Work</a>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a href="/#contact" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
