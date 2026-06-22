"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNavLinkActive, resolveNavHref } from "./navigation";

export default function Header({ menuOpen, navLinks, setMenuOpen }) {
  const pathname = usePathname();

  return (
    <header className="vb-nav">
      <div className="vb-container vb-nav__inner">
        <Link className="vb-logo" href={resolveNavHref("#home", pathname)} aria-label="Verbattle home">
          <img className="vb-logo__image" src="/logo.png" alt="Verbattle" />
        </Link>

        <nav className={`vb-navlinks ${menuOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={resolveNavHref(link.href, pathname)}
              className={`vb-navlinks__item ${isNavLinkActive(link, pathname) ? "is-active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="vb-nav__right">
          <Link
            className="vb-btn vb-btn--red vb-btn--sm"
            href="/register"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
          <button
            className={`vb-burger ${menuOpen ? "is-open" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
