"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";
import { isNavLinkActive, resolveNavHref } from "./navigation";

function MenuTrigger({
  link,
  isOpen,
  isMobileMenuOpen,
  onCloseMenu,
  onEnter,
  onLeave,
  onToggle,
  pathname,
}) {
  const hasChildren = Array.isArray(link.children) && link.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={resolveNavHref(link.href, pathname)}
        className={`vb-navlinks__item ${isNavLinkActive(link, pathname) ? "is-active" : ""}`}
        onClick={onCloseMenu}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div
      className={`vb-navgroup ${isOpen ? "is-open" : ""}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <button
        type="button"
        className={`vb-navlinks__item vb-navlinks__item--trigger ${isOpen ? "is-active" : ""}`}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{link.label}</span>
        <Icon.Caret className="vb-navlinks__caret vb-icon-14" />
      </button>

      <div className={`vb-navdropdown ${isOpen ? "is-open" : ""}`}>
        <div className="vb-navdropdown__grid">
          <div className="vb-navdropdown__head">
            <span className="vb-navdropdown__eyebrow">{link.label}</span>
            <Link
              href={resolveNavHref(link.href, pathname)}
              className="vb-navdropdown__viewall"
              onClick={onCloseMenu}
            >
              <span>Explore {link.label}</span>
              <Icon.ArrowRight className="vb-icon-14" />
            </Link>
          </div>

          <div className="vb-navdropdown__links">
            {link.children.map((child) => {
              const MenuIcon = Icon[child.icon] || Icon.Sparkles;

              return (
                <Link
                  key={child.label}
                  href={resolveNavHref(child.href, pathname)}
                  className="vb-navdropdown__link"
                  onClick={onCloseMenu}
                >
                  <span className="vb-navdropdown__icon">
                    <MenuIcon className="vb-icon-18" />
                  </span>
                  <span className="vb-navdropdown__copy">
                    <strong>{child.label}</strong>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && isOpen && link.children?.length > 0 && (
        <div className="vb-navmobile-submenu">
          {link.children.map((child) => {
            const MenuIcon = Icon[child.icon] || Icon.Sparkles;

            return (
              <Link
                key={`${link.label}-${child.label}`}
                href={resolveNavHref(child.href, pathname)}
                className="vb-navmobile-submenu__item"
                onClick={onCloseMenu}
              >
                <span className="vb-navmobile-submenu__icon">
                  <MenuIcon className="vb-icon-16" />
                </span>
                <span className="vb-navmobile-submenu__copy">
                  <strong>{child.label}</strong>
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Header({ menuOpen, navLinks, setMenuOpen }) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimerRef = useRef(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMenu = (label) => {
    clearCloseTimer();
    setOpenDropdown(label);
  };

  const queueCloseMenu = (label) => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown((current) => (current === label ? null : current));
    }, 180);
  };

  useEffect(() => {
    setOpenDropdown(null);
    setMenuOpen(false);
  }, [pathname, setMenuOpen]);

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <header className={`vb-nav ${menuOpen ? "is-open" : ""}`}>
      <button
        className="vb-nav__backdrop"
        aria-label="Close menu"
        onClick={() => {
          setOpenDropdown(null);
          setMenuOpen(false);
        }}
      />
      <div className="vb-nav__inner">
        <Link className="vb-logo" href={resolveNavHref("#home", pathname)} aria-label="Verbattle home">
          <img className="vb-logo__image" src="/logo.png" alt="Verbattle" />
        </Link>

        <nav className={`vb-navlinks ${menuOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <MenuTrigger
              key={link.label}
              link={link}
              isOpen={openDropdown === link.label}
              isMobileMenuOpen={menuOpen}
              pathname={pathname}
              onCloseMenu={() => {
                clearCloseTimer();
                setOpenDropdown(null);
                setMenuOpen(false);
              }}
              onEnter={() => openMenu(link.label)}
              onLeave={() => queueCloseMenu(link.label)}
              onToggle={() => setOpenDropdown((current) => (current === link.label ? null : link.label))}
            />
          ))}
          <Link
            className="vb-btn vb-btn--red vb-btn--sm vb-navlinks__cta"
            href="/register"
            onClick={() => {
              setOpenDropdown(null);
              setMenuOpen(false);
            }}
          >
            <span className="vb-btn__text">Register</span>
            <span className="vb-btn__circle">
              <Icon.ArrowRight className="vb-icon-14" />
            </span>
          </Link>
        </nav>

        <div className="vb-nav__right">
          <Link
            className="vb-btn vb-btn--red vb-btn--sm"
            href="/register"
            onClick={() => {
              setOpenDropdown(null);
              setMenuOpen(false);
            }}
          >
            <span className="vb-btn__text">Register</span>
            <span className="vb-btn__circle">
              <Icon.ArrowRight className="vb-icon-14" />
            </span>
          </Link>
          <button
            className={`vb-burger ${menuOpen ? "is-open" : ""}`}
            aria-label="Toggle menu"
            onClick={() => {
              setOpenDropdown(null);
              setMenuOpen((value) => !value);
            }}
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
