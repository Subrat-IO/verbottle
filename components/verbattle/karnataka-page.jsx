"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { footerData, navLinks } from "./data";
import {
  seasonMeta,
  levelStages,
  scheduleRows,
  cityCircuit,
  categoryTracks,
  outcomeMetrics,
  seasonHighlights,
  faqItems,
} from "./karnataka-data";
import "./karnataka.css";

const stageFilters = [
  { id: "all", label: "Full Season" },
  { id: "clamber", label: "Clamber & Prelims" },
  { id: "skirmish", label: "Skirmish" },
  { id: "combat", label: "Combat & Confrontation" },
  { id: "semis", label: "Semi-Finals" },
  { id: "finals", label: "Face-Off & Finals" },
];

const miniNavSections = [
  { id: "vbk-sec-stages", label: "Stages" },
  { id: "vbk-sec-circuit", label: "Circuit" },
  { id: "vbk-sec-outcomes", label: "Outcomes" },
  { id: "vbk-sec-schedule", label: "Schedule" },
  { id: "vbk-sec-highlights", label: "Highlights" },
  { id: "vbk-sec-faq", label: "FAQ" },
];

const categoryPosterCards = [
  {
    name: "Junior",
    format: "Debate Championship",
    image: "/competitions/karnatakaposter.png",
    imageAlt: "Verbattle Junior Karnataka 2026 poster",
    ageGroup: "12-16 years",
    grade: "Grades 7-10",
    fee: "Rs 2000 per team",
    prize: "Winning team Rs 1,00,000",
    highlight: "Big-format debate stage for students ready to battle ideas with speed and structure.",
  },
  {
    name: "Junior Plus",
    format: "Advanced Debate Track",
    image: "/competitions/verbattlekarntaka.png",
    imageAlt: "Verbattle Junior Plus Karnataka 2026 poster",
    ageGroup: "16-18 years",
    grade: "Grades 11-12 and 1st-2nd PUC",
    fee: "Rs 2000 per team",
    prize: "Winning team Rs 30,000",
    highlight: "A sharper, senior-school arena built for confident speakers who want higher-stakes rounds.",
  },
];

/* ---------- scroll reveal hook ---------- */
function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: options.threshold ?? 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options.threshold]);

  return ref;
}

function Reveal({ as = "div", className = "", delay = 0, variant = "up", children }) {
  const ref = useReveal();
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`vbk-reveal vbk-reveal--${variant} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------- animated count-up ---------- */
function useCountUp(target, isVisible, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return undefined;
    let raf;
    const start = performance.now();
    const numericTarget = parseFloat(String(target).replace(/[^\d.]/g, "")) || 0;

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(numericTarget * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, target, duration]);

  return value;
}

function StatNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, isVisible);

  return (
    <span ref={ref} className="vbk-stat__num">
      {count}
      {suffix}
    </span>
  );
}

/* ---------- animated comparison bar ---------- */
function BarRow({ label, before, after, delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="vbk-bar">
      <div className="vbk-bar__label">
        <span>{label}</span>
      </div>
      <div className="vbk-bar__track">
        <div
          className="vbk-bar__fill vbk-bar__fill--before"
          style={{
            width: isVisible ? `${before}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
      <div className="vbk-bar__track">
        <div
          className="vbk-bar__fill vbk-bar__fill--after"
          style={{
            width: isVisible ? `${after}%` : "0%",
            transitionDelay: `${delay + 160}ms`,
          }}
        >
          <span className="vbk-bar__value">{isVisible ? `${after}%` : ""}</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- auto-rotating highlight carousel ---------- */
function HighlightCarousel({ items }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, 5200);
    return () => clearInterval(id);
  }, [paused, items.length]);

  return (
    <div
      className="vbk-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="vbk-carousel__viewport">
        {items.map((item, index) => (
          <article
            key={item.initials + index}
            className={`vbk-carousel__slide${index === active ? " is-active" : ""}`}
            aria-hidden={index !== active}
          >
            <span className="vbk-carousel__mark" aria-hidden="true">
              &ldquo;
            </span>
            <p>{item.quote}</p>
            <div className="vbk-carousel__byline">
              <span className="vbk-carousel__avatar">{item.initials}</span>
              <span className="vbk-carousel__role">{item.role}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="vbk-carousel__dots">
        {items.map((item, index) => (
          <button
            key={item.initials + index}
            type="button"
            aria-label={`Show highlight ${index + 1}`}
            className={`vbk-carousel__dot${index === active ? " is-active" : ""}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- FAQ accordion ---------- */
function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="vbk-faq">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.q} className={`vbk-faq__item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="vbk-faq__question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.q}</span>
              <span className="vbk-faq__icon" aria-hidden="true" />
            </button>
            <div
              className="vbk-faq__answer"
              style={{ maxHeight: isOpen ? "240px" : "0px" }}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function VerbattleKarnatakaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStage, setActiveStage] = useState("all");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNavId, setActiveNavId] = useState(miniNavSections[0].id);
  const [showMiniNav, setShowMiniNav] = useState(false);

  const visibleRows = useMemo(() => {
    if (activeStage === "all") return scheduleRows;
    return scheduleRows.filter((row) => row.stage === activeStage);
  }, [activeStage]);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = miniNavSections
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b));
          setActiveNavId(top.target.id);
        }
        const firstSection = targets[0];
        const firstTop = firstSection.getBoundingClientRect().top;
        setShowMiniNav(firstTop < 120);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  function scrollToSection(id) {
    const node = document.getElementById(id);
    if (!node) return;
    const offset = 88;
    const top = node.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }

  const totalDates = scheduleRows.length;
  const totalCities = seasonMeta.cities.length;

  return (
    <div className="vb vbk-page">
      <div className="vbk-scrollbar" style={{ transform: `scaleX(${scrollProgress})` }} />

      <nav className={`vbk-mininav${showMiniNav ? " is-visible" : ""}`} aria-label="Section navigation">
        {miniNavSections.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`vbk-mininav__btn${activeNavId === item.id ? " is-active" : ""}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <Header menuOpen={menuOpen} navLinks={navLinks} setMenuOpen={setMenuOpen} />

      <main className="vb-main vbk-main">
        {/* ============ 1. HERO ============ */}
        <section className="vbk-hero">
          <div className="vbk-hero__glow" aria-hidden="true" />
          <div className="vb-container vbk-hero__inner">
            <div className="vbk-hero__layout">
              <div className="vbk-hero__content">
                <Reveal variant="up" className="vbk-hero__crumbs">
                  <span>Home</span>
                  <span className="vbk-hero__sep">/</span>
                  <span>Competitions</span>
                  <span className="vbk-hero__sep">/</span>
                  <span className="is-current">Karnataka</span>
                </Reveal>

                <Reveal variant="up" delay={60} className="vbk-hero__kicker">
                  <span className="vbk-dot" /> Season Now Open · Registrations Live
                </Reveal>

                <Reveal variant="up" delay={120}>
                  <h1 className="vbk-hero__title">
                    Verbattle <span>Karnataka</span> 2026
                  </h1>
                </Reveal>

                <Reveal variant="up" delay={180}>
                  <p className="vbk-hero__subtitle">{seasonMeta.subtitle}</p>
                </Reveal>

                <Reveal variant="up" delay={240} className="vbk-hero__meta">
                  <div className="vbk-hero__meta-item">
                    <strong>{seasonMeta.startDate}</strong>
                    <span>Season Opens</span>
                  </div>
                  <div className="vbk-hero__meta-divider" />
                  <div className="vbk-hero__meta-item">
                    <strong>{seasonMeta.endDate}</strong>
                    <span>Grand Finals</span>
                  </div>
                  <div className="vbk-hero__meta-divider" />
                  <div className="vbk-hero__meta-item">
                    <strong>{totalCities} Cities</strong>
                    <span>Across Karnataka</span>
                  </div>
                </Reveal>

                <Reveal variant="up" delay={300} className="vbk-hero__actions">
                  <a href={seasonMeta.registerUrl} className="vbk-btn vbk-btn--primary">
                    Register Today
                  </a>
                  <a href={`tel:${seasonMeta.phone.replace(/\s/g, "")}`} className="vbk-btn vbk-btn--ghost">
                    {seasonMeta.phone}
                  </a>
                </Reveal>
              </div>

              <Reveal variant="up" delay={180} className="vbk-hero__media">
                <div className="vbk-hero__image-shell">
                  <img src="/competitions/image.png" alt="Verbattle Karnataka competition artwork" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ 2. STAT STRIP ============ */}
        <section className="vbk-stats">
          <div className="vb-container vbk-stats__grid">
            {[
              { value: totalDates, label: "Competition Dates", suffix: "" },
              { value: totalCities, label: "Host Cities", suffix: "" },
              { value: 5, label: "Stages To Finals", suffix: "" },
              { value: 4, label: "Category Tracks", suffix: "" },
            ].map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80} className="vbk-stat">
                <StatNumber value={stat.value} suffix={stat.suffix} />
                <span className="vbk-stat__label">{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ 3. STAGE PROGRESSION ============ */}
        <section id="vbk-sec-stages" className="vbk-stages">
          <div className="vb-container">
            <Reveal className="vbk-section__head">
              <span className="vbk-section__eyebrow">The Climb To Finals</span>
              <h2>Five stages. One path to the stage that matters.</h2>
            </Reveal>

            <div className="vbk-stages__track">
              <div className="vbk-stages__line" aria-hidden="true" />
              {levelStages.map((stage, index) => (
                <Reveal
                  key={stage.id}
                  delay={index * 90}
                  variant={index % 2 === 0 ? "up" : "up"}
                  className="vbk-stage-card"
                >
                  <span className="vbk-stage-card__order">{stage.order}</span>
                  <h3>{stage.name}</h3>
                  <span className="vbk-stage-card__window">{stage.window}</span>
                  <p>{stage.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 4. CITY CIRCUIT ============ */}
        <section id="vbk-sec-circuit" className="vbk-circuit">
          <div className="vb-container">
            <Reveal className="vbk-section__head vbk-section__head--light">
              <span className="vbk-section__eyebrow">The Circuit</span>
              <h2>Four cities, one season-long stage.</h2>
            </Reveal>

            <div className="vbk-circuit__grid">
              {cityCircuit.map((city, index) => (
                <Reveal key={city.city} delay={index * 70} className="vbk-circuit-card">
                  <div className="vbk-circuit-card__top">
                    <h3>{city.city}</h3>
                    <span className="vbk-circuit-card__tag">{city.tag}</span>
                  </div>
                  <div className="vbk-circuit-card__row">
                    <span>{city.dates}</span>
                    <span>
                      {city.rounds} {city.rounds === 1 ? "round" : "rounds"}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 5. CATEGORY TRACKS ============ */}
        <section className="vbk-tracks">
          <div className="vb-container">
            <Reveal className="vbk-section__head">
              <span className="vbk-section__eyebrow">Who Competes</span>
              <h2>Every voice has a track built for it.</h2>
            </Reveal>

            <div className="vbk-tracks__grid">
              {categoryTracks.map((track, index) => (
                <Reveal key={track.name} delay={index * 80} className="vbk-track-card">
                  <span className="vbk-track-card__type">{track.type}</span>
                  <h3>{track.name}</h3>
                  <p>{track.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="vbk-category-showcase">
          <div className="vb-container">
            <Reveal className="vbk-section__head">
              <span className="vbk-section__eyebrow">Featured Categories</span>
              <h2>Two headline Karnataka tracks, now framed like they deserve the spotlight.</h2>
            </Reveal>

            <div className="vbk-category-showcase__grid">
              {categoryPosterCards.map((card, index) => (
                <Reveal key={card.name} delay={index * 90} className="vbk-category-card">
                  <div className="vbk-category-card__poster">
                    <img src={card.image} alt={card.imageAlt} />
                  </div>

                  <div className="vbk-category-card__body">
                    <div className="vbk-category-card__actions">
                      <a href={seasonMeta.registerUrl} className="vbk-btn vbk-btn--primary">
                        Register Now
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 6. OUTCOMES — BEFORE / AFTER ============ */}
        <section id="vbk-sec-outcomes" className="vbk-outcomes">
          <div className="vbk-outcomes__glow" aria-hidden="true" />
          <div className="vb-container vbk-outcomes__layout">
            <Reveal className="vbk-outcomes__intro">
              <span className="vbk-section__eyebrow vbk-section__eyebrow--onred">What The Season Builds</span>
              <h2 className="vbk-outcomes__title">
                Think Better. <span>Speak Better.</span> Lead Better.
              </h2>
              <p>
                Every Clamber round, Skirmish bout and Face-Off is designed to move a
                student from first nerves to stage command. Here&rsquo;s the shift
                Verbattle competitors typically report across a single season.
              </p>
              <div className="vbk-outcomes__legend">
                <span className="vbk-outcomes__legend-item vbk-outcomes__legend-item--before">Before Season</span>
                <span className="vbk-outcomes__legend-item vbk-outcomes__legend-item--after">After Finals</span>
              </div>
            </Reveal>

            <Reveal delay={120} className="vbk-outcomes__panel">
              {outcomeMetrics.map((metric, index) => (
                <BarRow
                  key={metric.label}
                  label={metric.label}
                  before={metric.before}
                  after={metric.after}
                  delay={index * 90}
                />
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ 7. FULL SCHEDULE TABLE ============ */}
        <section id="vbk-sec-schedule" className="vbk-schedule">
          <div className="vb-container">
            <Reveal className="vbk-section__head">
              <span className="vbk-section__eyebrow">Full Calendar</span>
              <h2>Verbattle Karnataka 2026 — Debate &amp; Speech Schedule</h2>
            </Reveal>

            <Reveal delay={60} className="vbk-schedule__filters">
              {stageFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={`vbk-filter-btn${activeStage === filter.id ? " is-active" : ""}`}
                  onClick={() => setActiveStage(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </Reveal>

            <Reveal delay={100} className="vbk-schedule__tablewrap">
              <table className="vbk-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Debate</th>
                    <th>Speech</th>
                    <th>Location</th>
                    <th>Level</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleRows.map((row, index) => (
                    <tr
                      key={`${row.date}-${row.level}`}
                      className="vbk-table__row"
                      style={{ animationDelay: `${Math.min(index * 35, 600)}ms` }}
                    >
                      <td className="vbk-table__date">{row.date}</td>
                      <td>{row.day}</td>
                      <td>{row.debate ? <strong>{row.debate}</strong> : <span className="vbk-table__dash">—</span>}</td>
                      <td>{row.speech ? <strong>{row.speech}</strong> : <span className="vbk-table__dash">—</span>}</td>
                      <td>{row.location}</td>
                      <td>
                        <span className={`vbk-pill vbk-pill--${row.stage}`}>{row.level}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>

        {/* ============ 8. SEASON HIGHLIGHTS ============ */}
        <section id="vbk-sec-highlights" className="vbk-highlights">
          <div className="vb-container">
            <Reveal className="vbk-section__head">
              <span className="vbk-section__eyebrow">From The Circuit</span>
              <h2>What each stage is actually building.</h2>
            </Reveal>

            <Reveal delay={100}>
              <HighlightCarousel items={seasonHighlights} />
            </Reveal>
          </div>
        </section>

        {/* ============ 9. FAQ ============ */}
        <section id="vbk-sec-faq" className="vbk-faqsection">
          <div className="vb-container vbk-faqsection__layout">
            <Reveal className="vbk-section__head vbk-faqsection__head">
              <span className="vbk-section__eyebrow">Before You Register</span>
              <h2>Questions Karnataka families ask most.</h2>
              <p className="vbk-faqsection__sub">
                Can&rsquo;t find your answer here? Call or WhatsApp the team using the
                details below the calendar.
              </p>
            </Reveal>

            <Reveal delay={100} className="vbk-faqsection__panel">
              <FaqAccordion items={faqItems} />
            </Reveal>
          </div>
        </section>

        {/* ============ 10. REGISTER CTA ============ */}
        <section className="vbk-cta">
          <Reveal className="vb-container vbk-cta__inner">
            <div>
              <span className="vbk-section__eyebrow vbk-section__eyebrow--onred">Don't Miss The Season</span>
              <h2>Karnataka takes the stage on {seasonMeta.startDate}.</h2>
              <p>Registrations are open across Hubballi, Mangaluru, Mysuru and Bengaluru. Lock your slot before Clamber & Prelims fill up.</p>
            </div>
            <div className="vbk-cta__actions">
              <a href={seasonMeta.registerUrl} className="vbk-btn vbk-btn--light">
                Register Now
              </a>
              <a href={`https://wa.me/91${seasonMeta.whatsapp}`} className="vbk-btn vbk-btn--outline-light">
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer footerData={footerData} navLinks={navLinks} />
    </div>
  );
}
