"use client";

import { useState, useEffect, useRef } from "react";
import Header from "./components/verbattle/Header";
import Footer from "./components/verbattle/Footer";
import { footerData, navLinks } from "./components/verbattle/data";

/* ─── DATA ─── */
const programs = [
  {
    id: 1,
    tag: "Flagship",
    title: "Parliamentary Debate",
    subtitle: "Master structured argumentation",
    desc: "The gold standard of competitive debate. Learn to construct, rebut, and persuade under pressure across live motions on global issues.",
    duration: "12 Weeks",
    level: "Intermediate",
    seats: 24,
    color: "#d11b2f",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
  },
  {
    id: 2,
    tag: "Popular",
    title: "Model United Nations",
    subtitle: "Diplomacy & global policy",
    desc: "Represent nations, draft resolutions, and negotiate consensus. Develop diplomatic language and geopolitical reasoning.",
    duration: "10 Weeks",
    level: "All Levels",
    seats: 36,
    color: "#08234d",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
  },
  {
    id: 3,
    tag: "New",
    title: "Public Speaking Bootcamp",
    subtitle: "Voice, presence & delivery",
    desc: "From stagefright to spotlight. Practical techniques for vocal delivery, body language, and audience connection.",
    duration: "6 Weeks",
    level: "Beginner",
    seats: 18,
    color: "#f0a93b",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  },
  {
    id: 4,
    tag: "Advanced",
    title: "Extemporaneous Speaking",
    subtitle: "Think fast. Speak sharp.",
    desc: "Prepare a 7-minute speech on any topic in 30 minutes. The ultimate test of research, synthesis and delivery under time pressure.",
    duration: "8 Weeks",
    level: "Advanced",
    seats: 16,
    color: "#162133",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
  },
  {
    id: 5,
    tag: "Intensive",
    title: "Leadership Lab",
    subtitle: "Command rooms. Build influence.",
    desc: "Crisis simulations, negotiation exercises, and leadership challenges designed to build real-world executive presence.",
    duration: "8 Weeks",
    level: "Intermediate",
    seats: 20,
    color: "#1a6b3a",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  },
  {
    id: 6,
    tag: "School",
    title: "Junior Debate League",
    subtitle: "For ages 12–17",
    desc: "A nurturing environment for young minds to explore critical thinking, ethical reasoning and structured debate competition.",
    duration: "16 Weeks",
    level: "Beginner",
    seats: 30,
    color: "#6b2fb5",
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
  },
];

const sliderSlides = [
  {
    id: 1,
    label: "National Champions 2024",
    stat: "147 Trophies",
    img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1400&q=80",
    desc: "Our students dominated nationals across 6 debate formats",
  },
  {
    id: 2,
    label: "International MUN Circuit",
    stat: "22 Countries",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=80",
    desc: "Verbattle delegations represented India on the world stage",
  },
  {
    id: 3,
    label: "Campus Outreach 2024",
    stat: "200+ Schools",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80",
    desc: "Taking structured debate to every corner of India",
  },
];

const masonryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=700&q=80",
    title: "Inter-University Debate Finals",
    tag: "Competition",
    size: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
    title: "Leadership Workshop 2024",
    tag: "Workshop",
    size: "wide",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=700&q=80",
    title: "National Public Speaking Open",
    tag: "Events",
    size: "normal",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80",
    title: "Campus Debate Drive",
    tag: "Outreach",
    size: "normal",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=700&q=80",
    title: "MUN Conference, Delhi",
    tag: "MUN",
    size: "tall",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80",
    title: "Youth Parliament Session",
    tag: "Parliament",
    size: "wide",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=700&q=80",
    title: "Junior League Finals",
    tag: "School",
    size: "normal",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&q=80",
    title: "Extemp Training Camp",
    tag: "Training",
    size: "normal",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=700&q=80",
    title: "Award Ceremony 2024",
    tag: "Awards",
    size: "wide",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Riya Menon",
    college: "IIM Ahmedabad",
    text: "Verbattle's Parliamentary program transformed how I think on my feet. I cracked my CAT GD-PI with zero nerves.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    stars: 5,
    program: "Parliamentary Debate",
  },
  {
    id: 2,
    name: "Arjun Sinha",
    college: "SRCC, Delhi University",
    text: "The MUN program taught me more about geopolitics in 10 weeks than three years of reading news. Exceptional faculty.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    stars: 5,
    program: "Model United Nations",
  },
  {
    id: 3,
    name: "Priya Chakraborty",
    college: "NIT Warangal",
    text: "I was terrified of speaking in public. Now I lead team presentations across departments. Verbattle changed my career trajectory.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    stars: 5,
    program: "Public Speaking Bootcamp",
  },
];

const faqs = [
  {
    q: "Who can enroll in Verbattle programs?",
    a: "Programs are open to students aged 12 and above, as well as working professionals. Each program specifies its level — Beginner, Intermediate, or Advanced — so you can find the right fit.",
  },
  {
    q: "Are sessions online, offline, or hybrid?",
    a: "We offer all three modes. Most programs run in hybrid format with live online sessions and optional in-person intensives in major cities including Delhi, Mumbai, Bengaluru, and Bhubaneswar.",
  },
  {
    q: "What happens after I complete a program?",
    a: "Graduates receive a Verbattle certification, access to alumni competitions, and priority registration for advanced programs. Top performers get nominated for national and international circuits.",
  },
  {
    q: "Is financial aid or a scholarship available?",
    a: "Yes. Verbattle offers merit-based scholarships covering up to 100% of the program fee. Apply via the scholarship portal during registration.",
  },
  {
    q: "Can schools or colleges register as a batch?",
    a: "Absolutely. We have institutional pricing and dedicated batch programs for schools and colleges. Write to us at programs@verbattle.in for a proposal.",
  },
];

/* ─── HOOKS ─── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("is-visible"); obs.unobserve(el); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── SMALL COMPONENTS ─── */
function RevealDiv({ className = "", children, delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`vb-reveal vb-reveal--up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Stars({ count = 5 }) {
  return (
    <span className="pgm-stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

/* ─── SECTION 1: HERO BANNER ─── */
function ProgramsHero() {
  return (
    <section className="pgm-hero">
      <div className="pgm-hero__bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1800&q=80)" }} />
      <div className="pgm-hero__mesh" />
      <div className="vb-container">
        <div className="pgm-hero__inner">
          <RevealDiv className="pgm-hero__content">
            <span className="vb-chip">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
              &nbsp;Live Enrollments Open
            </span>
            <h1 className="pgm-hero__title">
              <span>Programs</span>
              <span className="pgm-hero__title--accent">That Build</span>
              <span>Leaders</span>
            </h1>
            <p className="pgm-hero__desc">
              From your first speech to the national stage — Verbattle has a program for every level, every ambition, every future leader.
            </p>
            <div className="pgm-hero__cta">
              <a href="#programs" className="vb-btn vb-btn--red">
                Explore All Programs
                <span className="vb-btn__circle vb-btn__circle--white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="#gallery" className="vb-btn vb-btn--outline">
                View Gallery
              </a>
            </div>
          </RevealDiv>
          <div className="pgm-hero__stats-col">
            {[
              { val: "6", label: "Programs" },
              { val: "12K+", label: "Alumni" },
              { val: "147", label: "Trophies" },
              { val: "22", label: "Countries" },
            ].map((s, i) => (
              <RevealDiv key={s.label} delay={i * 80} className="pgm-hero__stat">
                <strong>{s.val}</strong>
                <span>{s.label}</span>
              </RevealDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 2: PROGRAMS GRID ─── */
function ProgramsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Beginner", "Intermediate", "Advanced"];
  const filtered = activeFilter === "All" ? programs : programs.filter(p => p.level === activeFilter);

  return (
    <section className="pgm-section pgm-section--light pgm-section--entry" id="programs">
      <div className="vb-container">
        <div className="pgm-section__head">
          <RevealDiv>
            <span className="vb-section__eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              Our Programs
            </span>
            <h2 className="vb-section__title vb-underline">Find Your Arena</h2>
          </RevealDiv>
          <div className="pgm-filters">
            {filters.map(f => (
              <button key={f} className={`pgm-filter-btn${activeFilter === f ? " is-active" : ""}`} onClick={() => setActiveFilter(f)}>{f}</button>
            ))}
          </div>
        </div>
        <div className="pgm-grid">
          {filtered.map((p, i) => (
            <RevealDiv key={p.id} delay={i * 60} className="pgm-card">
              <div className="pgm-card__art" style={{ backgroundImage: `url(${p.img})` }}>
                <div className="pgm-card__art-overlay" style={{ background: `linear-gradient(180deg, transparent 30%, ${p.color}ee 100%)` }} />
                <span className="pgm-card__tag" style={{ background: p.color }}>{p.tag}</span>
                <div className="pgm-card__art-bottom">
                  <span className="pgm-card__duration">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    {p.duration}
                  </span>
                  <span className="pgm-card__seats">{p.seats} Seats</span>
                </div>
              </div>
              <div className="pgm-card__body">
                <span className="pgm-card__level">{p.level}</span>
                <h3>{p.title}</h3>
                <p className="pgm-card__subtitle">{p.subtitle}</p>
                <p className="pgm-card__desc">{p.desc}</p>
                <a href="/register" className="vb-btn vb-btn--red vb-btn--sm pgm-card__cta">
                  Enroll Now
                  <span className="vb-btn__circle vb-btn__circle--white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </a>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: FULL-WIDTH SLIDER ─── */
function AchievementsSlider() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => setActive(a => (a + 1) % sliderSlides.length), 4500);
    return () => clearInterval(intervalRef.current);
  }, []);

  const go = (dir) => {
    clearInterval(intervalRef.current);
    setActive(a => (a + dir + sliderSlides.length) % sliderSlides.length);
    intervalRef.current = setInterval(() => setActive(a => (a + 1) % sliderSlides.length), 4500);
  };

  const s = sliderSlides[active];

  return (
    <section className="pgm-slider">
      <div className="pgm-slider__track" style={{ backgroundImage: `url(${s.img})` }}>
        <div className="pgm-slider__overlay" />
        <div className="vb-container pgm-slider__inner">
          <RevealDiv className="pgm-slider__content">
            <span className="pgm-slider__eyebrow">{s.label}</span>
            <div className="pgm-slider__stat">{s.stat}</div>
            <p className="pgm-slider__desc">{s.desc}</p>
          </RevealDiv>
          <div className="pgm-slider__controls">
            <button className="pgm-slider__arrow" onClick={() => go(-1)} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <div className="pgm-slider__dots">
              {sliderSlides.map((_, i) => (
                <button key={i} className={`pgm-slider__dot${i === active ? " is-active" : ""}`} onClick={() => { clearInterval(intervalRef.current); setActive(i); }} />
              ))}
            </div>
            <button className="pgm-slider__arrow" onClick={() => go(1)} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 4: MASONRY GALLERY ─── */
function MasonryGallery() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? masonryImages : masonryImages.slice(0, 6);

  return (
    <section className="pgm-section pgm-section--dark" id="gallery">
      <div className="vb-container">
        <div className="pgm-section__head pgm-section__head--light">
          <RevealDiv>
            <span className="vb-section__eyebrow vb-section__eyebrow--light">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
              Moments
            </span>
            <h2 className="vb-section__title vb-section__title--light vb-underline">Inside Verbattle</h2>
          </RevealDiv>
        </div>
        <div className={`pgm-masonry${showAll ? " pgm-masonry--expanded" : ""}`}>
          {visible.map((img, i) => (
            <div key={img.id} className={`pgm-masonry__item pgm-masonry__item--${img.size}`} style={{ animationDelay: `${i * 60}ms` }}>
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="pgm-masonry__overlay">
                <span className="pgm-masonry__tag">{img.tag}</span>
                <strong className="pgm-masonry__title">{img.title}</strong>
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="pgm-seemore">
            <button className="vb-btn vb-btn--outline pgm-seemore__btn" onClick={() => setShowAll(true)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
              See All Photos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── SECTION 5: PROCESS STEPS ─── */
function HowItWorks() {
  const steps = [
    { num: "01", title: "Choose Your Program", desc: "Browse formats by level, duration, and goal. Filter for what fits your schedule and ambition." },
    { num: "02", title: "Enroll & Onboard", desc: "Complete registration, receive your welcome kit, and join the student community portal before Day 1." },
    { num: "03", title: "Train with Champions", desc: "Weekly live sessions, recorded replays, and feedback from coaches who've won nationally." },
    { num: "04", title: "Compete & Certify", desc: "Enter internal tournaments, earn your Verbattle certification, and qualify for national circuits." },
  ];

  return (
    <section className="pgm-section pgm-section--light">
      <div className="vb-container">
        <RevealDiv className="pgm-section__head">
          <span className="vb-section__eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            Process
          </span>
          <h2 className="vb-section__title vb-underline">How It Works</h2>
        </RevealDiv>
        <div className="pgm-steps">
          {steps.map((s, i) => (
            <RevealDiv key={s.num} delay={i * 100} className="pgm-step">
              <div className="pgm-step__num">{s.num}</div>
              <div className="pgm-step__connector" />
              <div className="pgm-step__body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 6: TESTIMONIALS SLIDER ─── */
function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="pgm-section pgm-testi-section">
      <div className="vb-container">
        <RevealDiv className="pgm-section__head pgm-section__head--center">
          <span className="vb-section__eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            Testimonials
          </span>
          <h2 className="vb-section__title vb-underline">Alumni Speak</h2>
        </RevealDiv>
        <div className="pgm-testi">
          <div className="pgm-testi__card">
            <div className="pgm-testi__quote-mark">"</div>
            <p className="pgm-testi__text">{t.text}</p>
            <div className="pgm-testi__foot">
              <img src={t.img} alt={t.name} className="pgm-testi__avatar" />
              <div>
                <strong>{t.name}</strong>
                <span>{t.college}</span>
                <span className="pgm-testi__program">{t.program}</span>
              </div>
              <Stars count={t.stars} />
            </div>
          </div>
          <div className="pgm-testi__nav">
            {testimonials.map((_, i) => (
              <button key={i} className={`pgm-testi__dot${i === active ? " is-active" : ""}`} onClick={() => setActive(i)}>
                <img src={testimonials[i].img} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 7: FAQ ─── */
function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="pgm-section pgm-section--light">
      <div className="vb-container">
        <div className="pgm-faq-wrap">
          <RevealDiv className="pgm-faq__head">
            <span className="vb-section__eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              FAQ
            </span>
            <h2 className="vb-section__title vb-underline">Questions Answered</h2>
            <p className="pgm-faq__sub">Everything you need to know before you enroll. Still curious? Write to us.</p>
          </RevealDiv>
          <div className="pgm-faq__list">
            {faqs.map((f, i) => (
              <RevealDiv key={i} delay={i * 60} className={`pgm-faq__item${open === i ? " is-open" : ""}`}>
                <button className="pgm-faq__q" onClick={() => setOpen(open === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="pgm-faq__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d={open === i ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} /></svg>
                  </span>
                </button>
                {open === i && <div className="pgm-faq__a">{f.a}</div>}
              </RevealDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function ProgramsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="vb">
      <Header menuOpen={menuOpen} navLinks={navLinks} setMenuOpen={setMenuOpen} />
      <main className="vb-main">
        <ProgramsGrid />
        <AchievementsSlider />
        <MasonryGallery />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer footerData={footerData} navLinks={navLinks} />
    </div>
  );
}
