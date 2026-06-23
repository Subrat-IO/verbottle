"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { footerData, navLinks } from "./data";
import styles from "./StaticVerbattlePage.module.css";

export default function StaticVerbattlePage({
  eyebrow,
  title,
  description,
  heroImage,
  heroAlt,
  heroMeta = [],
  quote,
  sections = [],
  gallery = [],
  highlights = [],
  ctaTitle,
  ctaText,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleHeroMeta = heroMeta.filter((item) => !/^VBT-/i.test(item));

  return (
    <div className={`vb ${styles.page}`}>
      <Header menuOpen={menuOpen} navLinks={navLinks} setMenuOpen={setMenuOpen} />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroCard}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>

            {visibleHeroMeta.length ? (
              <div className={styles.heroMeta}>
                {visibleHeroMeta.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ) : null}
          </div>

          <div className={`${styles.heroCard} ${styles.heroImageWrap}`}>
            <img src={heroImage} alt={heroAlt || title} />
          </div>
        </section>

        <section className={styles.topGrid}>
          <div className={styles.quoteCard}>
            <strong>Verbattle Lens</strong>
            <p>{quote}</p>
          </div>
        </section>

        <section className={styles.sections}>
          {sections.map((section) => (
            <article key={section.title} className={styles.sectionCard}>
              <h2>{section.title}</h2>
              <p>{section.copy}</p>
              {section.bullets?.length ? (
                <ul className={styles.bulletList}>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>

        <section className={styles.gallerySection}>
          <h2 className={styles.sectionHeading}>Visual Highlights</h2>
          <div className={styles.galleryGrid}>
            {gallery.map((item) => (
              <article key={item.title} className={styles.galleryCard}>
                <img src={item.image} alt={item.title} />
                <div className={styles.galleryCopy}>
                  <strong>{item.title}</strong>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.highlightsSection}>
          <h2 className={styles.sectionHeading}>What Makes This Page Useful</h2>
          <div className={styles.highlightsGrid}>
            {highlights.map((item) => (
              <article key={item.title} className={styles.highlightCard}>
                <strong>{item.title}</strong>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.ctaCard}>
          <div>
            <h3>{ctaTitle}</h3>
            <p>{ctaText}</p>
          </div>
          <Link href="/register" className={styles.ctaButton}>
            Start Registration
          </Link>
        </section>
      </main>

      <Footer footerData={footerData} navLinks={navLinks} />
    </div>
  );
}
