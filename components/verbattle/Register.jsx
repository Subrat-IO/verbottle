"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./icons";

const ROLES = [
  {
    id: "student",
    label: "Student",
    icon: "Graduation",
    note: "For learners ready to compete and grow.",
  },
  {
    id: "teacher",
    label: "Teacher",
    icon: "Cap",
    note: "For mentors and faculty champions.",
  },
  {
    id: "school",
    label: "School",
    icon: "Building",
    note: "For institutions planning a larger rollout.",
  },
  {
    id: "parent",
    label: "Parent",
    icon: "Users",
    note: "For families supporting young speakers.",
  },
];

const HERO_STATS = [
  { icon: "Users", value: "50,000+", label: "Students" },
  { icon: "Trophy", value: "100+", label: "Events" },
  { icon: "ShieldCheck", value: "Trusted", label: "By Schools" },
];

const WHY_ITEMS = [
  {
    icon: "Sparkles",
    title: "Premium stage experience",
    desc: "A cleaner, more guided registration flow for serious participants.",
  },
  {
    icon: "BadgeCheck",
    title: "Structured learning path",
    desc: "Build confidence with competitions, workshops and mentoring.",
  },
  {
    icon: "Trophy",
    title: "Recognition that matters",
    desc: "Awards, certificates and visibility for your effort and talent.",
  },
  {
    icon: "ShieldCheck",
    title: "Trusted by schools",
    desc: "Made for school communities, teachers and parents alike.",
  },
];

const SHOWCASE_CARDS = [
  {
    image: "/image copy 24.png",
    eyebrow: "Flagship event",
    title: "National Debate Championship",
    desc: "A polished stage for strong speakers, quick thinkers and future leaders.",
  },
  {
    image: "/image copy 21.png",
    eyebrow: "Community moment",
    title: "Students, mentors and teams",
    desc: "A vibrant classroom-to-stage experience with real participation energy.",
  },
  {
    image: "/founder.png",
    eyebrow: "Leadership lens",
    title: "Built with purpose",
    desc: "A thoughtful platform shaped around growth, confidence and impact.",
  },
];

const GALLERY_IMAGES = [
  { src: "/image copy 2.png", caption: "Students on stage" },
  { src: "/image copy 3.png", caption: "Mentorship moments" },
  { src: "/image copy 4.png", caption: "Winners' celebration" },
  { src: "/image copy 5.png", caption: "Audience and energy" },
  { src: "/image copy 6.png", caption: "Gallery collage" },
  { src: "/image copy 7.png", caption: "On-ground action" },
  { src: "/image copy 8.png", caption: "Student storytelling" },
  { src: "/image copy 9.png", caption: "Grand final moments" },
];

const COMPETITIONS = [
  {
    tag: "Open",
    tagTone: "open",
    title: "Verbattle Karnataka 2026",
    desc: "The flagship registration path for students, teachers and school partners.",
    date: "Now accepting registrations",
    image: "/image copy 20.png",
  },
  {
    tag: "Closing Soon",
    tagTone: "closing",
    title: "Summer Camp Intake",
    desc: "A sharp, practical communication track built for motivated learners.",
    date: "Seats filling fast",
    image: "/image copy 19.png",
  },
  {
    tag: "New Batch",
    tagTone: "soon",
    title: "Workshop Circuit",
    desc: "Teacher and student workshops with a flexible schedule and clear outcomes.",
    date: "Rolling admissions",
    image: "/image copy 22.png",
  },
];

const COMMUNITY_ITEMS = [
  {
    icon: "Sparkles",
    tone: "red",
    title: "Learn",
    desc: "Access workshops, resources and guided practice.",
  },
  {
    icon: "Trophy",
    tone: "gold",
    title: "Compete",
    desc: "Step into debates and competitive speaking formats.",
  },
  {
    icon: "ShieldCheck",
    tone: "green",
    title: "Grow",
    desc: "Develop confidence, clarity and leadership habits.",
  },
  {
    icon: "BadgeCheck",
    tone: "gold",
    title: "Inspire",
    desc: "Bring others along and lead by example.",
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

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
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

function GallerySlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideCount = GALLERY_IMAGES.length;

  const goTo = useCallback(
    (nextIndex) => {
      setIndex((nextIndex + slideCount) % slideCount);
    },
    [slideCount],
  );

  useEffect(() => {
    if (paused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slideCount);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [paused, slideCount]);

  return (
    <div
      className="vbr-gallery-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="vbr-gallery-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {GALLERY_IMAGES.map((image) => (
          <div className="vbr-gallery-slide" key={image.caption}>
            <div className="vbr-gallery-frame">
              <img src={image.src} alt={image.caption} loading="lazy" />
              <div className="vbr-gallery-caption">
                <span className="vbr-gallery-caption-dot" />
                {image.caption}
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
        {GALLERY_IMAGES.map((image, i) => (
          <button
            key={image.caption}
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

function RoleIcon({ name }) {
  const map = {
    Graduation: Icon.Cap,
    Cap: Icon.Cap,
    Building: Icon.Building,
    Users: Icon.Users,
  };

  const SelectedIcon = map[name] || Icon.Users;
  return <SelectedIcon className="vb-icon-18" />;
}

function PanelIcon({ name }) {
  const map = {
    Sparkles: Icon.Sparkles,
    BadgeCheck: Icon.BadgeCheck,
    Trophy: Icon.Trophy,
    ShieldCheck: Icon.ShieldCheck,
    Users: Icon.Users,
  };

  const SelectedIcon = map[name] || Icon.Sparkles;
  return <SelectedIcon className="vb-icon-16" />;
}

function CommunityIcon({ name }) {
  const map = {
    Sparkles: Icon.Sparkles,
    Trophy: Icon.Trophy,
    ShieldCheck: Icon.ShieldCheck,
    BadgeCheck: Icon.BadgeCheck,
  };

  const SelectedIcon = map[name] || Icon.Sparkles;
  return <SelectedIcon className="vb-icon-18" />;
}

export default function VerbattleRegister() {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [heroIn, setHeroIn] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHeroIn(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="vbr-page">
      <section className="vbr-hero">
        <div className="vbr-hero-glow vbr-hero-glow--1" />
        <div className="vbr-hero-glow vbr-hero-glow--2" />

        <div className={`vbr-hero-inner ${heroIn ? "vbr-hero-inner--in" : ""}`}>
          <div className="vbr-hero-copy">
            <span className="vbr-eyebrow">Register Now</span>
            <h1 className="vbr-hero-title">
              A polished
              <br />
              <span className="vbr-hero-title-accent">registration</span> experience
            </h1>
            <p className="vbr-hero-sub">
              Join Verbattle through a cleaner, more professional flow designed for students,
              educators and schools who want a serious stage experience.
            </p>

            <div className="vbr-hero-actions">
              <button type="button" className="vbr-hero-btn">
                Start Registration <Icon.ArrowRight className="vb-icon-14" />
              </button>
              <button type="button" className="vbr-hero-btn vbr-hero-btn--ghost">
                <Icon.Play className="vb-icon-14" />
                View Highlights
              </button>
            </div>

            <div className="vbr-hero-stats">
              {HERO_STATS.map((stat, index) => {
                const StatIcon = {
                  Users: Icon.Users,
                  Trophy: Icon.Trophy,
                  ShieldCheck: Icon.ShieldCheck,
                }[stat.icon];

                return (
                  <div
                    className="vbr-hero-stat"
                    key={stat.label}
                    style={{ transitionDelay: `${index * 90 + 200}ms` }}
                  >
                    <span className="vbr-hero-stat-icon">
                      <StatIcon className="vb-icon-18" />
                    </span>
                    <div>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="vbr-hero-visual">
            <div className="vbr-hero-card vbr-hero-card--main">
              <img src="/image copy 24.png" alt="Verbattle event spotlight" />
              <div className="vbr-hero-card__overlay">
                <div className="vbr-hero-card__chip">
                  <Icon.Sparkles className="vb-icon-14" />
                  Premium event access
                </div>
                <strong>Built for confidence, clarity and stage presence.</strong>
              </div>
            </div>

            <div className="vbr-hero-card vbr-hero-card--side vbr-hero-card--top">
              <img src="/image copy 21.png" alt="Students in a Verbattle program" />
            </div>

            <div className="vbr-hero-card vbr-hero-card--side vbr-hero-card--bottom">
              <img src="/image copy 10.png" alt="Community learning moment" />
            </div>

            <div className="vbr-hero-floating-card">
              <span className="vbr-hero-floating-icon">
                <Icon.ShieldCheck className="vb-icon-18" />
              </span>
              <div>
                <strong>Trusted by schools</strong>
                <p>Clear, professional and easy to act on.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vbr-showcase">
        <Reveal className="vbr-section-head">
          <span className="vbr-eyebrow vbr-eyebrow--dark">What You Get</span>
          <h2>Registration built like a proper campaign page</h2>
          <p>Clean visuals, strong hierarchy and the same cinematic energy as the home page.</p>
        </Reveal>

        <div className="vbr-feature-grid">
          {SHOWCASE_CARDS.map((card, index) => (
            <Reveal className="vbr-feature-card" key={card.title} delay={index * 100}>
              <img src={card.image} alt={card.title} />
              <div className="vbr-feature-card__body">
                <span className="vbr-feature-card__eyebrow">{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="vbr-main">
        <div className="vbr-main-grid">
          <Reveal className="vbr-why-card" as="aside">
            <h3>
              Why Register with <span className="vbr-text-accent">Verbattle</span>?
            </h3>

            <ul className="vbr-why-list">
              {WHY_ITEMS.map((item) => (
                <li key={item.title}>
                  <span className="vbr-why-icon">
                    <PanelIcon name={item.icon} />
                  </span>
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
                Verbattle has transformed the confidence and communication skills of our students.
                The registration experience now feels just as polished as the platform itself.
              </p>
              <div className="vbr-testimonial-person">
                <img src="/image copy 10.png" alt="Student testimonial" />
                <div>
                  <strong>Verbattle Community</strong>
                  <span>Students and mentors</span>
                  <div className="vbr-stars">★★★★★</div>
                </div>
              </div>
            </div>

            <div className="vbr-help-card">
              <h4>Need Help?</h4>
              <p>We&apos;re here to help with registration, school onboarding and event details.</p>
              <a href="tel:+919886464641">
                <Icon.Phone className="vb-icon-14" /> +91 98864 64641
              </a>
              <a href="mailto:info@verbattle.com">
                <Icon.Mail className="vb-icon-14" /> info@verbattle.com
              </a>
              <span className="vbr-help-hours">
                <Icon.Calendar className="vb-icon-14" /> Mon - Sat | 9:00 AM - 6:00 PM
              </span>
            </div>
          </Reveal>

          <Reveal className="vbr-form-card" delay={120}>
            <div className="vbr-form-head">
              <div>
                <h2>Create Your Account</h2>
                <p>Fill in the details below to get started with Verbattle.</p>
              </div>
              <span className="vbr-login-link">
                Already have an account? <a href="#login">Login</a>
              </span>
            </div>

            <form
              className="vbr-form"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <label className="vbr-field-label">
                I am registering as <span className="vbr-required">*</span>
              </label>
              <div className="vbr-role-grid">
                {ROLES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`vbr-role-btn ${role === item.id ? "vbr-role-btn--active" : ""}`}
                    onClick={() => setRole(item.id)}
                  >
                    <span className="vbr-role-icon">
                      <RoleIcon name={item.icon} />
                    </span>
                    <span>{item.label}</span>
                    <small>{item.note}</small>
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
                    <option>Karnataka</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>Tamil Nadu</option>
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
                <input type="text" placeholder="Enter your school or institution name" />
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
                      onClick={() => setShowPassword((value) => !value)}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <Icon.EyeOff className="vb-icon-16" />
                      ) : (
                        <Icon.Eye className="vb-icon-16" />
                      )}
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
                      onClick={() => setShowConfirm((value) => !value)}
                      aria-label="Toggle confirm password visibility"
                    >
                      {showConfirm ? (
                        <Icon.EyeOff className="vb-icon-16" />
                      ) : (
                        <Icon.Eye className="vb-icon-16" />
                      )}
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
                    {HOW_HEARD_OPTIONS.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <label className="vbr-checkbox-row">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(event) => setAgreed(event.target.checked)}
                />
                <span>
                  I agree to the <a href="#terms">Terms &amp; Conditions</a> and{" "}
                  <a href="#privacy">Privacy Policy</a>{" "}
                  <span className="vbr-required">*</span>
                </span>
              </label>

              <button type="submit" className="vbr-submit-btn">
                Register Now <span className="vbr-submit-arrow">→</span>
              </button>

              <p className="vbr-form-footnote">
                By registering, you agree to our <a href="#terms">Terms &amp; Conditions</a> and{" "}
                <a href="#privacy">Privacy Policy</a>.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="vbr-community">
        <h3>Join a Community of Future Leaders</h3>
        <p>
          Verbattle is more than a platform. It is a movement to empower young minds and help
          them step into the spotlight with confidence.
        </p>
        <div className="vbr-community-grid">
          {COMMUNITY_ITEMS.map((item, index) => (
            <div
              className="vbr-community-item"
              key={item.title}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <span className={`vbr-community-icon vbr-community-icon--${item.tone}`}>
                <CommunityIcon name={item.icon} />
              </span>
              <strong>{item.title}</strong>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>

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

      <section className="vbr-competitions-section">
        <Reveal className="vbr-section-head">
          <span className="vbr-eyebrow vbr-eyebrow--dark">Step Onto the Stage</span>
          <h2>Ongoing Competitions</h2>
          <p>Live and upcoming events you can register for right now.</p>
        </Reveal>

        <div className="vbr-competitions-grid">
          {COMPETITIONS.map((competition, index) => (
            <Reveal className="vbr-comp-card" key={competition.title} delay={index * 110}>
              <div className="vbr-comp-image-wrap">
                <img src={competition.image} alt={competition.title} loading="lazy" />
                <span className={`vbr-comp-tag vbr-comp-tag--${competition.tagTone}`}>
                  {competition.tag}
                </span>
              </div>
              <div className="vbr-comp-body">
                <h3>{competition.title}</h3>
                <p>{competition.desc}</p>
                <div className="vbr-comp-footer">
                  <span className="vbr-comp-date">📅 {competition.date}</span>
                  <button type="button" className="vbr-comp-btn">
                    View Details →
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="vbr-promo-banner">
          <div className="vbr-promo-glow" />
          <div className="vbr-promo-content">
            <span className="vbr-eyebrow vbr-eyebrow--light">Limited Seats</span>
            <h3>Don&apos;t Miss the Next Big Stage</h3>
            <p>
              Early registrations get priority access to mentorship sessions and a smoother
              onboarding flow.
            </p>
            <button type="button" className="vbr-promo-btn">
              Register Now <span className="vbr-submit-arrow">→</span>
            </button>
          </div>
          <img className="vbr-promo-image" src="/image copy 23.png" alt="Students celebrating a debate win" />
        </Reveal>
      </section>
    </div>
  );
}
