"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Header from "./components/verbattle/Header";
import Footer from "./components/verbattle/Footer";
import { footerData, navLinks } from "./components/verbattle/data";

const competitionMedia = {
  hero: "/programs/WhatsApp Image 2026-06-21 at 00.20.51.jpeg",
  cards: [
    "/programs/WhatsApp Image 2026-06-21 at 00.20.51.jpeg",
    "/programs/WhatsApp Image 2026-06-21 at 00.20.52.jpeg",
    "/programs/WhatsApp Image 2026-06-21 at 00.20.52 (1).jpeg",
    "/programs/WhatsApp Image 2026-06-21 at 00.20.53.jpeg",
    "/programs/WhatsApp Image 2026-06-21 at 00.20.53 (1).jpeg",
    "/programs/WhatsApp Image 2026-06-21 at 00.18.39.jpeg",
    "/programs/WhatsApp Image 2026-06-21 at 00.18.39 (1).jpeg",
    "/programs/WhatsApp Image 2026-06-21 at 00.18.40.jpeg",
    "/programs/WhatsApp Image 2026-06-21 at 00.18.41.jpeg",
  ],
  people: [
    "/founder.png",
    "/programs/WhatsApp Image 2026-06-21 at 00.20.49.jpeg",
    "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (1).jpeg",
    "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (2).jpeg",
    "/programs/WhatsApp Image 2026-06-21 at 00.20.50.jpeg",
    "/programs/WhatsApp Image 2026-06-21 at 00.20.50 (1).jpeg",
  ],
};

/* ═══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */

const upcomingComps = [
  {
    id: 1,
    title: "National Parliamentary Debate Championship",
    short: "NPDC 2025",
    date: "August 14–16, 2025",
    location: "IIT Delhi, New Delhi",
    prize: "₹2,00,000",
    level: "National",
    seats: 240,
    seatsLeft: 48,
    format: "Parliamentary",
    tag: "Flagship",
    tagColor: "#d11b2f",
    img: competitionMedia.cards[0],
    desc: "India's most prestigious parliamentary debate championship. 80 teams. 3 days. One winner.",
    deadline: "July 31, 2025",
  },
  {
    id: 2,
    title: "Verbattle MUN Summit",
    short: "VMUN 2025",
    date: "September 5–7, 2025",
    location: "Taj Vivanta, Bengaluru",
    prize: "₹1,20,000",
    level: "National",
    seats: 360,
    seatsLeft: 110,
    format: "Model UN",
    tag: "Popular",
    tagColor: "#08234d",
    img: competitionMedia.cards[1],
    desc: "Five committees, 22 countries represented, and a closing gala. The MUN experience redefined.",
    deadline: "August 20, 2025",
  },
  {
    id: 3,
    title: "Youth Extemporaneous Open",
    short: "YEO 2025",
    date: "October 11, 2025",
    location: "Online (Pan-India)",
    prize: "₹60,000",
    level: "Open",
    seats: 120,
    seatsLeft: 34,
    format: "Extemporaneous",
    tag: "Online",
    tagColor: "#1a6b3a",
    img: competitionMedia.cards[2],
    desc: "30-minute prep, 7-minute speech. The ultimate test of synthesis, structure, and delivery.",
    deadline: "September 28, 2025",
  },
  {
    id: 4,
    title: "Junior Debate League Finals",
    short: "JDL Finals",
    date: "November 22, 2025",
    location: "Birla Auditorium, Jaipur",
    prize: "₹40,000",
    level: "School",
    seats: 80,
    seatsLeft: 22,
    format: "Asian Parliamentary",
    tag: "School",
    tagColor: "#6b2fb5",
    img: competitionMedia.cards[3],
    desc: "The grand finale of India's largest school debate league. Season 4 champions crowned here.",
    deadline: "November 5, 2025",
  },
  {
    id: 5,
    title: "Public Speaking Masters",
    short: "PSM 2025",
    date: "December 6, 2025",
    location: "The Leela, Mumbai",
    prize: "₹80,000",
    level: "Open",
    seats: 60,
    seatsLeft: 18,
    format: "Public Speaking",
    tag: "Elite",
    tagColor: "#b5772f",
    img: competitionMedia.cards[4],
    desc: "Invitation + open category. Speechcraft, persuasion, and presence judged by a live audience.",
    deadline: "November 20, 2025",
  },
];

const completedComps = [
  {
    id: 1,
    title: "NPDC 2024",
    date: "August 2024",
    location: "IIM Ahmedabad",
    winner: "Team Prometheus — SRCC Delhi",
    img: competitionMedia.cards[5],
    highlight: "82 teams · 3 days · Record attendance",
    format: "Parliamentary",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "VMUN Summit 2024",
    date: "July 2024",
    location: "Taj Palace, New Delhi",
    winner: "Best Delegation: NIT Warangal",
    img: competitionMedia.cards[6],
    highlight: "340 delegates · 5 committees",
    format: "Model UN",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "YEO 2024",
    date: "October 2024",
    location: "Online",
    winner: "Priya Chakraborty, NIT Warangal",
    img: competitionMedia.cards[7],
    highlight: "112 speakers · 6 rounds",
    format: "Extemporaneous",
    video: null,
  },
];

const awardees = [
  {
    id: 1,
    name: "Aryan Kapoor",
    award: "Best Speaker 2024",
    school: "IIT Bombay",
    img: competitionMedia.people[0],
    comp: "NPDC 2024",
    rank: "1st",
    badge: "🏆",
    quote: "Verbattle gave me the tools to argue what matters.",
  },
  {
    id: 2,
    name: "Riya Menon",
    award: "Outstanding Delegate",
    school: "IIM Ahmedabad",
    img: competitionMedia.people[1],
    comp: "VMUN 2024",
    rank: "Best Delegate",
    badge: "🥇",
    quote: "VMUN changed how I see global policy.",
  },
  {
    id: 3,
    name: "Sameer Joshi",
    award: "Best Team Captain",
    school: "SRCC Delhi",
    img: competitionMedia.people[2],
    comp: "NPDC 2024",
    rank: "Team Champion",
    badge: "🥇",
    quote: "Three years of prep. One perfect weekend.",
  },
  {
    id: 4,
    name: "Priya Chakraborty",
    award: "Extemp Champion",
    school: "NIT Warangal",
    img: competitionMedia.people[3],
    comp: "YEO 2024",
    rank: "1st",
    badge: "🏆",
    quote: "30 minutes. 7 minutes. A lifetime of preparation.",
  },
  {
    id: 5,
    name: "Rohan Sharma",
    award: "Rookie of the Year",
    school: "Delhi Public School",
    img: competitionMedia.people[4],
    comp: "JDL 2024",
    rank: "Rising Star",
    badge: "⭐",
    quote: "My first competition. My best moment.",
  },
  {
    id: 6,
    name: "Ananya Singh",
    award: "Best Oratory",
    school: "Symbiosis Pune",
    img: competitionMedia.people[5],
    comp: "PSM 2024",
    rank: "2nd",
    badge: "🥈",
    quote: "Words are weapons. Verbattle sharpened mine.",
  },
];

const galleryItems = [
  { id: 1, type: "image", src: competitionMedia.cards[0], title: "NPDC 2024 Finals", tag: "Competition" },
  { id: 2, type: "video", src: competitionMedia.cards[5], title: "Award Ceremony Highlights", tag: "Awards", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 3, type: "image", src: competitionMedia.cards[6], title: "VMUN Opening Ceremony", tag: "MUN" },
  { id: 4, type: "image", src: competitionMedia.cards[1], title: "Campus Drive - Bengaluru", tag: "Outreach" },
  { id: 5, type: "video", src: competitionMedia.cards[2], title: "Best Speech of 2024", tag: "Highlights", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 6, type: "image", src: competitionMedia.cards[4], title: "Leadership Summit 2024", tag: "Summit" },
];

const heroSlides = [
  {
    img: competitionMedia.hero,
    eyebrow: "Season 5 · 2025",
    title: ["National Debate", "Leadership", "Circuit"],
    sub: "A professional stage for debate, MUN, public speaking, and student leadership across India.",
  },
  {
    img: competitionMedia.hero,
    eyebrow: "₹5,00,000+ Prize Pool",
    title: ["Compete With", "Clarity and", "Confidence"],
    sub: "From school league to national championship — prizes, scholarships, and recognition await.",
  },
  {
    img: competitionMedia.hero,
    eyebrow: "12,000+ Alumni",
    title: ["Build Your", "Voice on a", "Bigger Stage"],
    sub: "Join a growing network of speakers, debaters, delegates, and student leaders shaping the future.",
  },
];

/* ═══════════════════════════════════════════════
   HOOKS
═══════════════════════════════════════════════ */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("cmp-visible"); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ═══════════════════════════════════════════════
   POPUP / MODAL
═══════════════════════════════════════════════ */
function Popup({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="cmp-popup" role="dialog" aria-modal="true">
      <button className="cmp-popup__backdrop" onClick={onClose} aria-label="Close" />
      <div className="cmp-popup__panel">
        <button className="cmp-popup__close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="cmp-popup__media">
          {item.videoUrl ? (
            <iframe
              src={item.videoUrl + "?autoplay=1&rel=0"}
              title={item.title}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="cmp-popup__iframe"
            />
          ) : (
            <img src={item.src || item.img} alt={item.title || item.name} className="cmp-popup__img" />
          )}
        </div>

        {(item.title || item.name) && (
          <div className="cmp-popup__meta">
            <div>
              {item.tag && <span className="cmp-popup__tag">{item.tag}</span>}
              {item.award && <span className="cmp-popup__tag">{item.award}</span>}
              <strong className="cmp-popup__title">{item.title || item.name}</strong>
              {item.school && <span className="cmp-popup__sub">{item.school} · {item.comp}</span>}
              {item.quote && <p className="cmp-popup__quote">"{item.quote}"</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SMALL HELPERS
═══════════════════════════════════════════════ */
function Fade({ children, className = "", delay = 0, dir = "up" }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`cmp-fade cmp-fade--${dir} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function CompetitionsPageHero() {
  return (
    <section className="cmp-page-hero">
      <div className="vb-container cmp-page-hero__inner">
        <Fade className="cmp-page-hero__content">
          <span className="cmp-page-hero__kicker">Competitions</span>
          <h1>Competitions</h1>
          <p>
            Home <span>/</span> Competitions
          </p>
        </Fade>
      </div>
    </section>
  );
}

function SeatBar({ total, left }) {
  const pct = Math.round(((total - left) / total) * 100);
  const color = pct > 80 ? "#d11b2f" : pct > 60 ? "#f0a93b" : "#1a6b3a";
  return (
    <div className="cmp-seat">
      <div className="cmp-seat__bar">
        <div className="cmp-seat__fill" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="cmp-seat__label" style={{ color }}>{left} seats left</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 1 — HERO SLIDER
═══════════════════════════════════════════════ */
function CompHero() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  const restart = useCallback((idx) => {
    clearInterval(intervalRef.current);
    setActive(idx);
    intervalRef.current = setInterval(() => setActive(a => (a + 1) % heroSlides.length), 5000);
  }, []);

  useEffect(() => { restart(0); return () => clearInterval(intervalRef.current); }, [restart]);

  const slide = heroSlides[active];

  return (
    <section className="cmp-hero">
      {heroSlides.map((s, i) => (
        <div key={i} className={`cmp-hero__bg${i === active ? " is-active" : ""}`}
          style={{ backgroundImage: `url(${s.img})` }} />
      ))}
      <div className="cmp-hero__mesh" />

      <div className="vb-container cmp-hero__inner">
        <div className="cmp-hero__content" key={active}>
          <span className="cmp-hero__eyebrow">{slide.eyebrow}</span>
          <div className="cmp-hero__kicker-row">
            <span className="cmp-hero__kicker-pill">National Circuit</span>
            <span className="cmp-hero__kicker-pill">Live + Online</span>
          </div>
          <h1 className="cmp-hero__title">
            {slide.title.map((line, i) => (
              <span key={i} className="cmp-hero__line" style={{ animationDelay: `${i * 90}ms` }}>{line}</span>
            ))}
          </h1>
          <p className="cmp-hero__sub">{slide.sub}</p>
          <div className="cmp-hero__cta">
            <a href="#upcoming" className="vb-btn vb-btn--red">
              View Competitions
              <span className="cmp-btn__arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="#awardees" className="cmp-hero__ghostlink">
              Hall of Fame
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="cmp-hero__footstats">
            {[
              { val: "₹5L+", label: "Prize Pool" },
              { val: "22+", label: "Cities" },
              { val: "12K+", label: "Participants" },
            ].map((item) => (
              <div key={item.label} className="cmp-hero__footstat">
                <strong>{item.val}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cmp-hero__spotlight">
          <div className="cmp-hero__spotlight-main">
            <div
              className="cmp-hero__spotlight-media"
              style={{ backgroundImage: `url(${competitionMedia.hero})` }}
              aria-hidden="true"
            />
            <div className="cmp-hero__spotlight-top">
              <span className="cmp-hero__spotlight-label">Featured Competition</span>
              <span className="cmp-hero__spotlight-chip">{upcomingComps[active].level}</span>
            </div>
            <div className="cmp-hero__spotlight-body">
              <strong>{upcomingComps[active].title}</strong>
              <div className="cmp-hero__spotlight-meta">
                <span>{upcomingComps[active].format}</span>
                <span>{upcomingComps[active].prize}</span>
              </div>
              <p>{upcomingComps[active].date} · {upcomingComps[active].location}</p>
            </div>
          </div>

          <div className="cmp-hero__stack">
            <div className="cmp-hero__stack-card">
              <span>Seats Left</span>
              <strong>{upcomingComps[active].seatsLeft}</strong>
            </div>
            <div className="cmp-hero__stack-card">
              <span>Prize Pool</span>
              <strong>{upcomingComps[active].prize}</strong>
            </div>
          </div>

          <div className="cmp-hero__mini-nav">
            {heroSlides.map((item, i) => (
              <button
                key={item.eyebrow}
                className={`cmp-hero__mini-item${i === active ? " is-active" : ""}`}
                onClick={() => restart(i)}
              >
                <span className="cmp-hero__mini-index">0{i + 1}</span>
                <span className="cmp-hero__mini-copy">
                  <strong>{upcomingComps[i].short}</strong>
                  <small>{item.eyebrow}</small>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="cmp-hero__nav">
        {heroSlides.map((_, i) => (
          <button key={i} className={`cmp-hero__dot${i === active ? " is-active" : ""}`} onClick={() => restart(i)} />
        ))}
      </div>

      <div className="cmp-hero__scroll-hint">
        <span>Scroll</span>
        <div className="cmp-hero__scroll-line" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 2 — UPCOMING COMPETITIONS
═══════════════════════════════════════════════ */
function UpcomingSection() {
  const [popup, setPopup] = useState(null);

  return (
    <section className="cmp-section cmp-section--light" id="upcoming">
      <div className="vb-container">
        <Fade className="cmp-section__head">
          <span className="vb-section__eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
            Upcoming
          </span>
          <h2 className="vb-section__title vb-underline">Open for Registration</h2>
        </Fade>

        <div className="cmp-upcoming-grid">
          {upcomingComps.map((c, i) => (
            <Fade key={c.id} delay={i * 70} className="cmp-ucard">
              <div className="cmp-ucard__art" onClick={() => setPopup({ ...c, src: c.img, title: c.title })}>
                <img src={c.img} alt={c.title} loading="lazy" />
                <div className="cmp-ucard__art-overlay" />
                <span className="cmp-ucard__format">{c.format}</span>
                <span className="cmp-ucard__tag" style={{ background: c.tagColor }}>{c.tag}</span>
                <div className="cmp-ucard__expand">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
              <div className="cmp-ucard__body">
                <div className="cmp-ucard__meta">
                  <span className="cmp-ucard__level" style={{ color: c.tagColor }}>{c.level}</span>
                  <span className="cmp-ucard__prize">🏆 {c.prize}</span>
                </div>
                <h3 className="cmp-ucard__title">{c.title}</h3>
                <p className="cmp-ucard__desc">{c.desc}</p>
                <div className="cmp-ucard__details">
                  <span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                    {c.date}
                  </span>
                  <span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {c.location}
                  </span>
                  <span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    Deadline: {c.deadline}
                  </span>
                </div>
                <SeatBar total={c.seats} left={c.seatsLeft} />
                <a href="/register" className="vb-btn vb-btn--red cmp-ucard__cta">
                  Register Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      {popup && <Popup item={popup} onClose={() => setPopup(null)} />}
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 3 — COMPLETED
═══════════════════════════════════════════════ */
function CompletedSection() {
  const [popup, setPopup] = useState(null);

  return (
    <section className="cmp-section cmp-section--dark">
      <div className="vb-container">
        <Fade className="cmp-section__head cmp-section__head--light">
          <span className="vb-section__eyebrow vb-section__eyebrow--light">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Archives
          </span>
          <h2 className="vb-section__title vb-section__title--light vb-underline">Completed Competitions</h2>
        </Fade>

        <div className="cmp-done-grid">
          {completedComps.map((c, i) => (
            <Fade key={c.id} delay={i * 80} className="cmp-done-card">
              <div className="cmp-done-card__media" onClick={() => setPopup({ ...c, src: c.img, videoUrl: c.video, title: c.title })}>
                <img src={c.img} alt={c.title} loading="lazy" />
                <div className="cmp-done-card__overlay" />
                {c.video && (
                  <div className="cmp-done-card__play">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z" /></svg>
                  </div>
                )}
                <span className="cmp-done-card__format">{c.format}</span>
                <div className="cmp-done-card__expand">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
              <div className="cmp-done-card__body">
                <div className="cmp-done-card__row">
                  <span className="cmp-done-card__date">{c.date}</span>
                  <span className="cmp-done-card__loc">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {c.location}
                  </span>
                </div>
                <h3 className="cmp-done-card__title">{c.title}</h3>
                <div className="cmp-done-card__winner">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#f0a93b" }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>{c.winner}</span>
                </div>
                <span className="cmp-done-card__highlight">{c.highlight}</span>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      {popup && <Popup item={popup} onClose={() => setPopup(null)} />}
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 4 — AWARDEES / HALL OF FAME
═══════════════════════════════════════════════ */
function AwardeesSection() {
  const [popup, setPopup] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <section className="cmp-section cmp-section--light cmp-awardees-section" id="awardees">
      <div className="vb-container">
        <Fade className="cmp-section__head">
          <div>
            <span className="vb-section__eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Hall of Fame
            </span>
            <h2 className="vb-section__title vb-underline">Champions of 2024</h2>
          </div>
          <p className="cmp-awardees__sub">Our finest — every one a Verbattle story.</p>
        </Fade>

        <div className="cmp-awardees-grid">
          {awardees.map((a, i) => (
            <Fade key={a.id} delay={i * 60} className="cmp-awardee"
              onMouseEnter={() => setHovered(a.id)}
              onMouseLeave={() => setHovered(null)}>
              <div className="cmp-awardee__card" onClick={() => setPopup({ ...a, src: a.img, title: a.name })}>
                <div className="cmp-awardee__photo-wrap">
                  <img src={a.img} alt={a.name} className="cmp-awardee__photo" loading="lazy" />
                  <div className={`cmp-awardee__photo-ring${hovered === a.id ? " is-hovered" : ""}`} />
                  <span className="cmp-awardee__badge">{a.badge}</span>
                  <div className="cmp-awardee__expand">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
                <div className="cmp-awardee__info">
                  <strong className="cmp-awardee__name">{a.name}</strong>
                  <span className="cmp-awardee__award">{a.award}</span>
                  <span className="cmp-awardee__school">{a.school}</span>
                  <div className="cmp-awardee__foot">
                    <span className="cmp-awardee__comp">{a.comp}</span>
                    <span className="cmp-awardee__rank">{a.rank}</span>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      {popup && <Popup item={popup} onClose={() => setPopup(null)} />}
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 5 — MEDIA GALLERY
═══════════════════════════════════════════════ */
function MediaGallery() {
  const [popup, setPopup] = useState(null);
  const [filter, setFilter] = useState("All");
  const filters = ["All", "image", "video"];
  const visible = filter === "All" ? galleryItems : galleryItems.filter(g => g.type === filter);

  return (
    <section className="cmp-section cmp-section--white">
      <div className="vb-container">
        <div className="cmp-media-head">
          <Fade>
            <span className="vb-section__eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="2.18" /><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5" />
              </svg>
              Gallery
            </span>
            <h2 className="vb-section__title vb-underline">Photos & Highlights</h2>
          </Fade>
          <div className="cmp-media-filters">
            {filters.map(f => (
              <button key={f} className={`pgm-filter-btn${filter === f ? " is-active" : ""}`} onClick={() => setFilter(f)}>
                {f === "All" ? "All" : f === "image" ? "Photos" : "Videos"}
              </button>
            ))}
          </div>
        </div>

        <div className="cmp-gallery-grid">
          {visible.map((g, i) => (
            <Fade key={g.id} delay={i * 55} className={`cmp-gallery-item cmp-gallery-item--${g.type}`}
              onClick={() => setPopup(g)}>
              <img src={g.src} alt={g.title} loading="lazy" />
              <div className="cmp-gallery-item__overlay">
                {g.type === "video" && (
                  <div className="cmp-gallery-item__play">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z" /></svg>
                  </div>
                )}
                <span className="cmp-gallery-item__tag">{g.tag}</span>
                <strong className="cmp-gallery-item__title">{g.title}</strong>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      {popup && <Popup item={popup} onClose={() => setPopup(null)} />}
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 6 — CTA BANNER
═══════════════════════════════════════════════ */
function CTABanner() {
  return (
    <section className="cmp-cta-wrap">
      <div className="vb-container">
        <Fade className="cmp-cta">
          <div className="cmp-cta__bg" />
          <div className="cmp-cta__mesh" />
          <div className="cmp-cta__content">
            <span className="vb-section__eyebrow vb-section__eyebrow--light">Ready to compete?</span>
            <h2 className="cmp-cta__title">Your Stage Awaits.</h2>
            <p className="cmp-cta__sub">Register for any open competition and join the ranks of India's finest debaters and leaders.</p>
            <div className="cmp-cta__btns">
              <a href="/register" className="vb-btn vb-btn--red">
                Register Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="#upcoming" className="vb-btn vb-btn--outline">Browse Competitions</a>
            </div>
          </div>
          <div className="cmp-cta__trophy">
            <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 10h80v60c0 33-80 33-80 0V10z" fill="rgba(240,169,59,0.22)" stroke="rgba(240,169,59,0.5)" strokeWidth="2"/>
              <path d="M10 10h20v30c0 16-20 16-20 0V10z" fill="rgba(240,169,59,0.12)" stroke="rgba(240,169,59,0.3)" strokeWidth="1.5"/>
              <path d="M90 10h20v30c0 16-20 16-20 0V10z" fill="rgba(240,169,59,0.12)" stroke="rgba(240,169,59,0.3)" strokeWidth="1.5"/>
              <rect x="45" y="90" width="30" height="12" fill="rgba(240,169,59,0.3)" stroke="rgba(240,169,59,0.5)" strokeWidth="1.5"/>
              <rect x="30" y="102" width="60" height="10" rx="5" fill="rgba(240,169,59,0.35)" stroke="rgba(240,169,59,0.5)" strokeWidth="1.5"/>
              <path d="M55 30l3.09 6.26L65 37.27l-5 4.87 1.18 6.88L55 45.77l-6.18 3.25L50 42.14 45 37.27l6.91-1.01L55 30z" fill="rgba(240,169,59,0.7)"/>
            </svg>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function CompetitionsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="vb">
      <Header menuOpen={menuOpen} navLinks={navLinks} setMenuOpen={setMenuOpen} />
      <main className="vb-main">
        <CompetitionsPageHero />
        <UpcomingSection />
        <CompletedSection />
        <AwardeesSection />
        <MediaGallery />
        <CTABanner />
      </main>
      <Footer footerData={footerData} navLinks={navLinks} />
    </div>
  );
}
