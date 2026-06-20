"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

const ROLES = [
  { id: "student", label: "Student", icon: "🎓" },
  { id: "teacher", label: "Teacher", icon: "🧑‍🏫" },
  { id: "school", label: "School", icon: "🏛️" },
  { id: "parent", label: "Parent", icon: "👤" },
];

const STATS = [
  { icon: "👥", value: "50,000+", label: "Students" },
  { icon: "🏆", value: "100+", label: "Events" },
  { icon: "🏫", value: "500+", label: "Schools" },
];

const WHY_ITEMS = [
  {
    icon: "🎓",
    title: "National Level Platform",
    desc: "Compete with the best students from across India.",
  },
  {
    icon: "🏅",
    title: "Skill Development",
    desc: "Improve communication, leadership, critical thinking and more.",
  },
  {
    icon: "🏆",
    title: "Certificate & Rewards",
    desc: "Win certificates, trophies and exciting prizes.",
  },
  {
    icon: "👤",
    title: "Mentorship",
    desc: "Learn from top mentors, speakers and industry experts.",
  },
];

/* Gallery — replace src values with your own event photos any time;
   these are placeholder web images so the slider has real content now. */
const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=900&q=80",
    caption: "National Debate Finals, Delhi",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
    caption: "Leadership Bootcamp 2026",
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80",
    caption: "Inter-School Championship",
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80",
    caption: "Winners' Felicitation Ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
    caption: "Public Speaking Workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=900&q=80",
    caption: "Regional Round, Bengaluru",
  },
];

/* Ongoing competitions — swap copy/images for your live events */
const COMPETITIONS = [
  {
    tag: "Open",
    tagTone: "open",
    title: "National Debate Championship 2026",
    desc: "India's biggest inter-school debate event. Sharpen your argument and take the national stage.",
    date: "Registrations close 15 Jul 2026",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Closing Soon",
    tagTone: "closing",
    title: "Young Leaders Summit",
    desc: "A 3-day leadership intensive with mentorship from industry speakers and live case challenges.",
    date: "Only 6 days left to register",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Coming Soon",
    tagTone: "soon",
    title: "Verbattle Public Speaking Cup",
    desc: "A platform for first-time speakers to build confidence and compete for national recognition.",
    date: "Opens 1 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
  },
];

const HOW_HEARD_OPTIONS = [
  "Social Media",
  "School / Teacher",
  "Friend or Family",
  "Search Engine",
  "Event / Workshop",
  "Other",
];

/* ------------------------------------------------------------------ */
/*  Reveal-on-scroll hook                                              */
/* ------------------------------------------------------------------ */

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Reveal({ as = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, visible] = useReveal();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`vbr-reveal ${visible ? "vbr-reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  Gallery slider                                                     */
/* ------------------------------------------------------------------ */

function GallerySlider() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideCount = GALLERY_IMAGES.length;

  const goTo = useCallback(
    (i) => {
      const next = (i + slideCount) % slideCount;
      setIndex(next);
    },
    [slideCount]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideCount);
    }, 3500);
    return () => clearInterval(id);
  }, [paused, slideCount]);

  return (
    <div
      className="vbr-gallery-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="vbr-gallery-track"
        ref={trackRef}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {GALLERY_IMAGES.map((img, i) => (
          <div className="vbr-gallery-slide" key={i}>
            <div className="vbr-gallery-frame">
              <img src={img.src} alt={img.caption} loading="lazy" />
              <div className="vbr-gallery-caption">
                <span className="vbr-gallery-caption-dot" />
                {img.caption}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="vbr-gallery-arrow vbr-gallery-arrow--prev"
        onClick={() => goTo(index - 1)}
        aria-label="Previous photo"
        type="button"
      >
        ‹
      </button>
      <button
        className="vbr-gallery-arrow vbr-gallery-arrow--next"
        onClick={() => goTo(index + 1)}
        aria-label="Next photo"
        type="button"
      >
        ›
      </button>

      <div className="vbr-gallery-dots">
        {GALLERY_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`vbr-gallery-dot ${i === index ? "vbr-gallery-dot--active" : ""}`}
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function VerbattleRegister() {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [heroIn, setHeroIn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroIn(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="vbr-page">
      {/* ============================= HERO ============================= */}
      <section className="vbr-hero">
        <div className="vbr-hero-glow vbr-hero-glow--1" />
        <div className="vbr-hero-glow vbr-hero-glow--2" />

        <div className={`vbr-hero-inner ${heroIn ? "vbr-hero-inner--in" : ""}`}>
          <div className="vbr-hero-copy">
            <span className="vbr-eyebrow">Register Now</span>
            <h1 className="vbr-hero-title">
              Begin Your
              <br />
              <span className="vbr-hero-title-accent">Leadership</span> Journey
            </h1>
            <p className="vbr-hero-sub">
              Join thousands of students across India who are learning,
              growing and leading with confidence.
            </p>

            <div className="vbr-hero-stats">
              {STATS.map((s, i) => (
                <div
                  className="vbr-hero-stat"
                  key={s.label}
                  style={{ transitionDelay: `${i * 90 + 200}ms` }}
                >
                  <span className="vbr-hero-stat-icon">{s.icon}</span>
                  <div>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="vbr-hero-visual">
            <div className="vbr-hero-photo-ring" />
            <img
              className="vbr-hero-photo"
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=700&q=80"
              alt="Verbattle student award winners"
            />
            <div className="vbr-hero-badges">
              <div
                className="vbr-badge-card"
                style={{ transitionDelay: "260ms" }}
              >
                <span className="vbr-badge-icon vbr-badge-icon--red">🎯</span>
                <div>
                  <strong>Debate</strong>
                  <p>Sharpen your critical thinking and argument skills.</p>
                </div>
              </div>
              <div
                className="vbr-badge-card"
                style={{ transitionDelay: "380ms" }}
              >
                <span className="vbr-badge-icon vbr-badge-icon--navy">🏛️</span>
                <div>
                  <strong>Leadership</strong>
                  <p>Build confidence and become an inspiring leader.</p>
                </div>
              </div>
              <div
                className="vbr-badge-card"
                style={{ transitionDelay: "500ms" }}
              >
                <span className="vbr-badge-icon vbr-badge-icon--gold">🏆</span>
                <div>
                  <strong>Recognition</strong>
                  <p>Win awards and get national recognition for your talent.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== WHY + FORM + SIDEBAR ===================== */}
      <section className="vbr-main">
        <div className="vbr-main-grid">
          {/* ---- Left column ---- */}
          <Reveal className="vbr-why-card" as="aside">
            <h3>
              Why Register with <span className="vbr-text-accent">Verbattle</span>?
            </h3>

            <ul className="vbr-why-list">
              {WHY_ITEMS.map((item) => (
                <li key={item.title}>
                  <span className="vbr-why-icon">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="vbr-testimonial">
              <span className="vbr-quote-mark">“</span>
              <p>
                Verbattle has truly transformed my confidence and public
                speaking skills. It&apos;s a wonderful platform for students
                like me.
              </p>
              <div className="vbr-testimonial-person">
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=120&q=80"
                  alt="Ananya Sharma"
                />
                <div>
                  <strong>Ananya Sharma</strong>
                  <span>Student</span>
                  <div className="vbr-stars">★★★★★</div>
                </div>
              </div>
            </div>

            <div className="vbr-help-card">
              <h4>Need Help?</h4>
              <p>We&apos;re here to assist you with your registration.</p>
              <a href="tel:+919876543210">📞 +91 98765 43210</a>
              <a href="mailto:info@verbattle.com">✉️ info@verbattle.com</a>
              <span className="vbr-help-hours">🕒 Mon – Sat | 9:00 AM – 6:00 PM</span>
            </div>
          </Reveal>

          {/* ---- Form column ---- */}
          <Reveal className="vbr-form-card" delay={120}>
            <div className="vbr-form-head">
              <div>
                <h2>Create Your Account</h2>
                <p>Fill in your details to get started with Verbattle.</p>
              </div>
              <span className="vbr-login-link">
                Already have an account? <a href="#login">Login</a>
              </span>
            </div>

            <form
              className="vbr-form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label className="vbr-field-label">
                I am registering as <span className="vbr-required">*</span>
              </label>
              <div className="vbr-role-grid">
                {ROLES.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    className={`vbr-role-btn ${
                      role === r.id ? "vbr-role-btn--active" : ""
                    }`}
                    onClick={() => setRole(r.id)}
                  >
                    <span className="vbr-role-icon">{r.icon}</span>
                    {r.label}
                  </button>
                ))}
              </div>

              <h4 className="vbr-section-title">Personal Information</h4>

              <div className="vbr-row-2">
                <div className="vbr-field">
                  <label>
                    Full Name <span className="vbr-required">*</span>
                  </label>
                  <input type="text" placeholder="Enter your full name" />
                </div>
                <div className="vbr-field">
                  <label>
                    Email Address <span className="vbr-required">*</span>
                  </label>
                  <input type="email" placeholder="Enter your email address" />
                </div>
              </div>

              <div className="vbr-row-2">
                <div className="vbr-field">
                  <label>
                    Mobile Number <span className="vbr-required">*</span>
                  </label>
                  <input type="tel" placeholder="Enter your mobile number" />
                </div>
                <div className="vbr-field">
                  <label>
                    Date of Birth <span className="vbr-required">*</span>
                  </label>
                  <input type="date" />
                </div>
              </div>

              <div className="vbr-row-3">
                <div className="vbr-field">
                  <label>
                    Gender <span className="vbr-required">*</span>
                  </label>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="vbr-field">
                  <label>
                    State <span className="vbr-required">*</span>
                  </label>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select State
                    </option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Puducherry</option>
                    <option>Odisha</option>
                  </select>
                </div>
                <div className="vbr-field">
                  <label>
                    City <span className="vbr-required">*</span>
                  </label>
                  <input type="text" placeholder="Enter your city" />
                </div>
              </div>

              <div className="vbr-field">
                <label>
                  School / Institution <span className="vbr-required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your school or institution name"
                />
              </div>

              <h4 className="vbr-section-title">Account Security</h4>

              <div className="vbr-row-2">
                <div className="vbr-field">
                  <label>
                    Create Password <span className="vbr-required">*</span>
                  </label>
                  <div className="vbr-input-icon-wrap">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      className="vbr-input-icon-btn"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>
                <div className="vbr-field">
                  <label>
                    Confirm Password <span className="vbr-required">*</span>
                  </label>
                  <div className="vbr-input-icon-wrap">
                    <input
                      type={showConfirm ? "text" : "password"}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      className="vbr-input-icon-btn"
                      onClick={() => setShowConfirm((v) => !v)}
                      aria-label="Toggle confirm password visibility"
                    >
                      {showConfirm ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>
              </div>

              <h4 className="vbr-section-title">Additional Information</h4>

              <div className="vbr-row-2">
                <div className="vbr-field">
                  <label>
                    Grade / Class <span className="vbr-required">*</span>
                  </label>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select Grade / Class
                    </option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>
                    <option>College / University</option>
                  </select>
                </div>
                <div className="vbr-field">
                  <label>How did you hear about us?</label>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select an option
                    </option>
                    {HOW_HEARD_OPTIONS.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <label className="vbr-checkbox-row">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <span>
                  I agree to the <a href="#terms">Terms &amp; Conditions</a>{" "}
                  and <a href="#privacy">Privacy Policy</a>{" "}
                  <span className="vbr-required">*</span>
                </span>
              </label>

              <button type="submit" className="vbr-submit-btn">
                Register Now <span className="vbr-submit-arrow">→</span>
              </button>

              <p className="vbr-form-footnote">
                By registering, you agree to our{" "}
                <a href="#terms">Terms &amp; Conditions</a> and{" "}
                <a href="#privacy">Privacy Policy</a>.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ===================== COMMUNITY STRIP ===================== */}
      <Reveal as="section" className="vbr-community">
        <h3>Join a Community of Future Leaders</h3>
        <p>
          Verbattle is more than a platform — it&apos;s a movement to empower
          young minds and build a better tomorrow.
        </p>
        <div className="vbr-community-grid">
          {[
            { icon: "🔓", tone: "red", title: "Learn", desc: "Access workshops, resources and expert sessions." },
            { icon: "🏆", tone: "gold", title: "Compete", desc: "Participate in debates and win exciting prizes." },
            { icon: "🏛️", tone: "green", title: "Grow", desc: "Build skills that shape your future and career." },
            { icon: "✨", tone: "gold", title: "Inspire", desc: "Lead with confidence and inspire others." },
          ].map((item, i) => (
            <div
              className="vbr-community-item"
              key={item.title}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className={`vbr-community-icon vbr-community-icon--${item.tone}`}>
                {item.icon}
              </span>
              <strong>{item.title}</strong>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ============================ GALLERY ============================ */}
      <section className="vbr-gallery-section">
        <Reveal className="vbr-section-head">
          <span className="vbr-eyebrow vbr-eyebrow--dark">Moments That Matter</span>
          <h2>Our Gallery</h2>
          <p>A glimpse into the events, victories and friendships built on the Verbattle stage.</p>
        </Reveal>

        <Reveal delay={100}>
          <GallerySlider />
        </Reveal>
      </section>

      {/* ======================= ONGOING COMPETITIONS ===================== */}
      <section className="vbr-competitions-section">
        <Reveal className="vbr-section-head">
          <span className="vbr-eyebrow vbr-eyebrow--dark">Step Onto the Stage</span>
          <h2>Ongoing Competitions</h2>
          <p>Live and upcoming events you can register for right now.</p>
        </Reveal>

        <div className="vbr-competitions-grid">
          {COMPETITIONS.map((c, i) => (
            <Reveal
              className="vbr-comp-card"
              key={c.title}
              delay={i * 110}
            >
              <div className="vbr-comp-image-wrap">
                <img src={c.image} alt={c.title} loading="lazy" />
                <span className={`vbr-comp-tag vbr-comp-tag--${c.tagTone}`}>
                  {c.tag}
                </span>
              </div>
              <div className="vbr-comp-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="vbr-comp-footer">
                  <span className="vbr-comp-date">📅 {c.date}</span>
                  <button type="button" className="vbr-comp-btn">
                    View Details →
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Marketing / promo banner */}
        <Reveal delay={200} className="vbr-promo-banner">
          <div className="vbr-promo-glow" />
          <div className="vbr-promo-content">
            <span className="vbr-eyebrow vbr-eyebrow--light">Limited Seats</span>
            <h3>Don&apos;t Miss the Next Big Stage</h3>
            <p>
              Early registrations get priority access to mentorship sessions
              and a discounted entry fee. Spots are filling fast.
            </p>
            <button type="button" className="vbr-promo-btn">
              Register Now <span className="vbr-submit-arrow">→</span>
            </button>
          </div>
          <img
            className="vbr-promo-image"
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=700&q=80"
            alt="Students celebrating a debate win"
          />
        </Reveal>
      </section>
    </div>
  );
}
