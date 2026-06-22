"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { footerData, navLinks } from "./data";
import { Icon } from "./icons";

const TRACKS = [
  {
    eyebrow: "Flagship course",
    title: "CT Pro",
    desc: "20 sessions of structured communication training focused on voice, speech, presentation and thinking skills.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.48.jpeg",
    bullets: ["20 weekend sessions", "Age 10-16", "Zoom and guided practice"],
    meta: "Designed for students who want a confident first stage.",
  },
  {
    eyebrow: "Competition series",
    title: "National Speech Competition",
    desc: "A polished competition format that mixes live stage energy with online participation and recognition.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (3).jpeg",
    bullets: ["Speech rounds", "Trophies & certificates", "School student focus"],
    meta: "Built for students ready to test their voice in public.",
  },
  {
    eyebrow: "School rollout",
    title: "Workshop Circuit",
    desc: "In-school and campus sessions that move from classroom learning to practical speaking moments.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.18.39.jpeg",
    bullets: ["Mentor-led sessions", "On-campus delivery", "Student-friendly format"],
    meta: "Ideal for schools that want a repeatable speaking program.",
  },
  {
    eyebrow: "Recognition",
    title: "Awards & Coverage",
    desc: "Celebration images, certificates and press moments that make progress feel visible and memorable.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.50.jpeg",
    bullets: ["Certificates", "Awards", "Public recognition"],
    meta: "A finish line that feels worth the effort.",
  },
];

const GALLERY = [
  { src: "/programs/WhatsApp Image 2026-06-21 at 00.18.39.jpeg", caption: "Students in the room", span: "wide" },
  { src: "/programs/WhatsApp Image 2026-06-21 at 00.18.40.jpeg", caption: "Practice and focus", span: "tall" },
  { src: "/programs/WhatsApp Image 2026-06-21 at 00.18.41.jpeg", caption: "Speaking in action", span: "wide" },
  { src: "/programs/WhatsApp Image 2026-06-21 at 00.20.47.jpeg", caption: "Guided workshop", span: "tall" },
  { src: "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (3).jpeg", caption: "Online speech competition", span: "wide" },
  { src: "/programs/WhatsApp Image 2026-06-21 at 00.20.49.jpeg", caption: "Certificates and moments", span: "wide" },
  { src: "/programs/WhatsApp Image 2026-06-21 at 00.20.52.jpeg", caption: "Free speech stage", span: "tall" },
  { src: "/programs/WhatsApp Image 2026-06-21 at 00.20.53.jpeg", caption: "Stage recognition", span: "wide" },
];

const STEPS = [
  {
    icon: "Sparkles",
    title: "Choose a track",
    desc: "Pick the program that matches your students, school or speaking goals.",
  },
  {
    icon: "Calendar",
    title: "Lock the schedule",
    desc: "Choose session dates, workshop flow or competition timing that suits your team.",
  },
  {
    icon: "Users",
    title: "Join the room",
    desc: "Bring students into an active learning setup with real participation and stage practice.",
  },
  {
    icon: "Trophy",
    title: "Celebrate growth",
    desc: "Finish with awards, recognition and a clear next step for the learners involved.",
  },
];

function TrackIcon({ name }) {
  const map = {
    Sparkles: Icon.Sparkles,
    Calendar: Icon.Calendar,
    Users: Icon.Users,
    Trophy: Icon.Trophy,
  };

  const Selected = map[name] || Icon.Sparkles;
  return <Selected className="vbp-icon" />;
}

export default function ProgramsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="vbp-page">
      <Header menuOpen={menuOpen} navLinks={navLinks} setMenuOpen={setMenuOpen} />

      <main>
        <section className="vbp-hero">
          <div className="vbp-hero__glow vbp-hero__glow--1" />
          <div className="vbp-hero__glow vbp-hero__glow--2" />

          <div className="vb-container vbp-hero__inner">
            <div className="vbp-hero__copy">
              <span className="vbp-kicker">Programs</span>
              <h1>
                Programs built for
                <br />
                classrooms, competitions and
                <span> confident speakers.</span>
              </h1>
              <p>
                We used the actual images from the new public/programs folder to shape this page
                around the real Verbattle story: training, speeches, recognition and student energy.
              </p>

              <div className="vbp-hero__actions">
                <Link className="vb-btn vb-btn--red" href="/register">
                  Register Now <Icon.ArrowRight className="vb-icon-14" />
                </Link>
                <Link className="vbp-btn vbp-btn--ghost" href="/#programs">
                  Back To Home Programs <Icon.ChevronRight className="vb-icon-14" />
                </Link>
              </div>

              <div className="vbp-stats">
                <div className="vbp-stat">
                  <strong>20 Sessions</strong>
                  <span>CT Pro training rhythm</span>
                </div>
                <div className="vbp-stat">
                  <strong>Stage + School</strong>
                  <span>Competition and workshop formats</span>
                </div>
                <div className="vbp-stat">
                  <strong>Recognition</strong>
                  <span>Certificates, trophies and coverage</span>
                </div>
              </div>
            </div>

            <div className="vbp-hero__visual">
              <div className="vbp-card vbp-card--main">
                <img
                  src="/programs/WhatsApp Image 2026-06-21 at 00.20.48.jpeg"
                  alt="CT Pro communication training poster"
                />
                <div className="vbp-card__overlay">
                  <span className="vbp-card__eyebrow">Featured Program</span>
                  <strong>Communication Training Program CT Pro</strong>
                  <p>20 sessions of guided public speaking and presentation practice.</p>
                </div>
              </div>

              <div className="vbp-card vbp-card--side vbp-card--top">
                <img
                  src="/programs/WhatsApp Image 2026-06-21 at 00.18.39.jpeg"
                  alt="Students taking part in a workshop"
                />
              </div>

              <div className="vbp-card vbp-card--side vbp-card--bottom">
                <img
                  src="/programs/WhatsApp Image 2026-06-21 at 00.20.49 (3).jpeg"
                  alt="Students in an online speech competition"
                />
              </div>

              <div className="vbp-floating">
                <span className="vbp-floating__icon">
                  <Icon.ShieldCheck className="vbp-icon" />
                </span>
                <div>
                  <strong>School ready</strong>
                  <p>Designed for students, teachers and institutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vb-section vbp-section">
          <div className="vb-container">
            <div className="vbp-section__head">
              <div>
                <span className="vb-section__eyebrow">Featured Tracks</span>
                <h2 className="vb-section__title vb-underline">A more complete program lineup</h2>
              </div>
              <p className="vbp-section__lede">
                Each card below uses the new local program photos so the page feels tied to the real
                content instead of generic stock art.
              </p>
            </div>

            <div className="vbp-track-grid">
              {TRACKS.map((track) => (
                <article className="vbp-track" key={track.title}>
                  <div className="vbp-track__media">
                    <img src={track.image} alt={track.title} loading="lazy" />
                    <span className="vbp-track__eyebrow">{track.eyebrow}</span>
                  </div>
                  <div className="vbp-track__body">
                    <div className="vbp-track__meta">{track.meta}</div>
                    <h3>{track.title}</h3>
                    <p>{track.desc}</p>
                    <ul className="vbp-track__bullets">
                      {track.bullets.map((bullet) => (
                        <li key={bullet}>
                          <Icon.Check className="vbp-icon vbp-icon--sm" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vb-section vbp-gallery">
          <div className="vb-container">
            <div className="vbp-section__head">
              <div>
                <span className="vb-section__eyebrow">Program Gallery</span>
                <h2 className="vb-section__title vb-underline">Photos first, so the page feels real</h2>
              </div>
              <p className="vbp-section__lede">
                These images are the strongest way to tell the story of Verbattle, so the layout lets
                them breathe instead of hiding them in tiny tiles.
              </p>
            </div>

            <div className="vbp-gallery-grid">
              {GALLERY.map((item) => (
                <figure className={`vbp-gallery-item vbp-gallery-item--${item.span}`} key={item.caption}>
                  <img src={item.src} alt={item.caption} loading="lazy" />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="vb-section vbp-steps">
          <div className="vb-container">
            <div className="vbp-section__head">
              <div>
                <span className="vb-section__eyebrow">How It Works</span>
                <h2 className="vb-section__title vb-underline">A simple path from interest to impact</h2>
              </div>
            </div>

            <div className="vbp-step-grid">
              {STEPS.map((step, index) => (
                <article className="vbp-step" key={step.title}>
                  <span className="vbp-step__index">0{index + 1}</span>
                  <span className="vbp-step__icon">
                    <TrackIcon name={step.icon} />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              ))}
            </div>

            <div className="vbp-cta">
              <div>
                <span className="vbp-cta__eyebrow">Ready to move</span>
                <h3>Pick the right program and let the images do the talking.</h3>
                <p>
                  Start with CT Pro, extend into workshops, or register for a competition pathway that
                  fits your school.
                </p>
              </div>
              <Link className="vb-btn vb-btn--red" href="/register">
                Go To Registration <Icon.ArrowRight className="vb-icon-14" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer footerData={footerData} navLinks={navLinks} />
    </div>
  );
}
