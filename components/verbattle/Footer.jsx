"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./icons";
import { resolveNavHref } from "./navigation";

const socialIconMap = {
  Facebook: Icon.Facebook,
  Instagram: Icon.Instagram,
  YouTube: Icon.Youtube,
  LinkedIn: Icon.LinkedIn,
};

export default function Footer({ footerData, navLinks }) {
  const pathname = usePathname();

  return (
    <footer id="contact" className="vb-footer">
      <div className="vb-container vb-footer__grid">
        <div className="vb-footer__col vb-footer__brand">
          <Link className="vb-logo vb-logo--footer" href={resolveNavHref("#home", pathname)} aria-label="Verbattle home">
            <img className="vb-logo__image vb-logo__image--footer" src="/logo.png" alt="Verbattle" />
            <span className="vb-logo__tag">Debate. Lead. Inspire.</span>
          </Link>
          <p>
            India&apos;s leading debate and leadership platform with a sharper, more animated modular landing
            page for easier customization.
          </p>
          <div className="vb-footer__social">
            {footerData.socials.map((social) => {
              const SocialIcon = socialIconMap[social.label];

              return (
                <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
                  <SocialIcon className="vb-icon-16" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="vb-footer__col">
          <h5>Quick Links</h5>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={resolveNavHref(link.href, pathname)}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="vb-footer__col">
          <h5>Resources</h5>
          <ul>
            {footerData.resources.map((resource) => (
              <li key={resource}>
                <a href="https://verbattle.com/index.html" target="_blank" rel="noreferrer">
                  {resource}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="vb-footer__col">
          <h5>Contact</h5>
          <ul className="vb-footer__contact">
            <li>
              <span className="vb-footer__contact-icon"><Icon.Phone className="vb-icon-14" /></span>
              <span>{footerData.phone}</span>
            </li>
            <li>
              <span className="vb-footer__contact-icon"><Icon.Mail className="vb-icon-14" /></span>
              <span>{footerData.email}</span>
            </li>
            <li>
              <span className="vb-footer__contact-icon"><Icon.Pin className="vb-icon-14" /></span>
              <span>{footerData.address}</span>
            </li>
          </ul>
        </div>

        <div className="vb-footer__col">
          <h5>Newsletter</h5>
          <p>Subscribe for events, competitions and workshop updates.</p>
          <form className="vb-newsletter" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Your email" aria-label="Email" />
            <button type="submit" aria-label="Subscribe">
              <Icon.Send className="vb-icon-14" />
            </button>
          </form>
        </div>
      </div>

      <div className="vb-container vb-footer__bottom">
        <span>© 2026 Verbattle. All Rights Reserved.</span>
        <span className="vb-footer__legal">
          <Link href={resolveNavHref("#home", pathname)}>Back To Top</Link>
          <a href="https://verbattle.com/index.html" target="_blank" rel="noreferrer">
            Official Site
          </a>
        </span>
      </div>
    </footer>
  );
}
