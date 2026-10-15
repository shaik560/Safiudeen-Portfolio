import { useState } from "react";
import { NAV_ITEMS } from "../data/portfolio";

export default function Header({ isScrolled, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <a className="site-logo" href="#home" aria-label="UIUX Designer home">
        UIUX Designer
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
        <span className="sr-only">Toggle navigation</span>
      </button>

      <nav
        className={`primary-navigation ${menuOpen ? "is-open" : ""}`}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        {NAV_ITEMS.map(({ id, label, href }) => (
          <a
            key={id}
            className={id === activeSection ? "is-active" : ""}
            href={href}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
      </nav>

      <a className="connect-button" href="#contact">
        Connect Me
      </a>
    </header>
  );
}
