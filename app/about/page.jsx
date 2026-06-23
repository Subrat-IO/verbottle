"use client";
import Header from "../../components/verbattle/Header";
import Footer from "../../components/verbattle/Footer";
import { footerData, navLinks } from "../../components/verbattle/data";

import { useEffect, useRef, useState } from "react";

const COLORS = {
  red: "#d11b2f",
  redDark: "#ab1122",
  redSoft: "#ffe4e7",
  navy: "#08234d",
  navyDeep: "#041227",
  ink: "#162133",
  muted: "#64748b",
  border: "rgba(12, 26, 61, 0.1)",
  surface: "#ffffff",
  surfaceSoft: "#f7f8fc",
  surfaceStrong: "#edf3ff",
  gold: "#f0a93b",
};

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Fade({ children, delay = 0, dir = "up", className = "", style = {} }) {
  const [ref, visible] = useInView();
  const translate =
    dir === "up"
      ? "translateY(28px)"
      : dir === "left"
        ? "translateX(-28px)"
        : dir === "right"
          ? "translateX(28px)"
          : "translateY(0)";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translate,
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const UNSPLASH = {
  debate: "/programs/WhatsApp Image 2026-06-21 at 00.18.39 (2).jpeg",
  students: "/programs/WhatsApp Image 2026-06-21 at 00.20.49.jpeg",
  speak: "/programs/WhatsApp Image 2026-06-21 at 00.18.40.jpeg",
  team: "/programs/WhatsApp Image 2026-06-21 at 00.20.50 (1).jpeg",
  leader: "/programs/WhatsApp Image 2026-06-21 at 00.20.52.jpeg",
  crowd: "/programs/WhatsApp Image 2026-06-21 at 00.18.41.jpeg",
  mentor: "/programs/WhatsApp Image 2026-06-21 at 00.20.47.jpeg",
  workshop: "/programs/WhatsApp Image 2026-06-21 at 00.18.39 (1).jpeg",
  stage: "/programs/WhatsApp Image 2026-06-21 at 00.20.53.jpeg",
};

const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', system-ui, sans-serif; background: #fff; color: #162133; }
  img { display: block; width: 100%; object-fit: cover; }

  .hero {
    position: relative;
    min-height: 88vh;
    background: linear-gradient(135deg, #041227 0%, #08234d 60%, #162133 100%);
    display: flex; align-items: center;
    overflow: hidden;
  }
  .hero-bg-img {
    position: absolute; inset: 0;
    background-image: url(${UNSPLASH.crowd});
    background-size: cover; background-position: center;
    opacity: 0.12;
  }
  .hero-inner {
    position: relative; z-index: 2;
    max-width: 1200px; margin: 0 auto;
    padding: 80px 48px;
    display: grid; grid-template-columns: 1fr 420px; gap: 64px; align-items: center;
  }
  .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 11px; font-weight: 700; letter-spacing: 0.15em;
    text-transform: uppercase; color: #f0a93b;
    margin-bottom: 20px;
  }
  .hero-eyebrow span { display: inline-block; width: 28px; height: 2px; background: #f0a93b; }
  .hero h1 {
    font-size: clamp(2.4rem, 5vw, 3.8rem);
    font-weight: 800; line-height: 1.1;
    color: #fff; margin-bottom: 24px;
  }
  .hero h1 em { color: #d11b2f; font-style: normal; }
  .hero-desc {
    font-size: 1.05rem; line-height: 1.75;
    color: rgba(255,255,255,0.65); max-width: 500px; margin-bottom: 36px;
  }
  .hero-meta {
    display: flex; gap: 6px; flex-wrap: wrap;
  }
  .hero-meta-tag {
    font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 5px 12px; border-radius: 100px;
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.55);
    border: 1px solid rgba(255,255,255,0.12);
  }
  .hero-image-wrap {
    position: relative;
  }
  .hero-image-wrap img {
    border-radius: 20px;
    height: 460px; object-fit: cover;
    box-shadow: 0 40px 80px rgba(0,0,0,0.4);
  }
  .hero-badge {
    position: absolute; bottom: -16px; left: -16px;
    background: #d11b2f; color: #fff;
    padding: 14px 20px; border-radius: 14px;
    font-size: 12px; font-weight: 700; letter-spacing: 0.05em;
    text-transform: uppercase; line-height: 1.3;
    box-shadow: 0 12px 30px rgba(209,27,47,0.4);
  }
  .hero-badge strong { display: block; font-size: 1.5rem; font-weight: 800; letter-spacing: 0; }

  .section { padding: 72px 0; }
  .section-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
  .section-alt { background: #f7f8fc; }
  .section-dark { background: #08234d; color: #fff; }
  .section-navy { background: #041227; color: #fff; }

  .label {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
    text-transform: uppercase; color: #d11b2f;
    margin-bottom: 14px;
  }
  .label-on-dark { color: #f0a93b; }
  .label::before { content: ''; display: inline-block; width: 20px; height: 2px; background: currentColor; }

  .section-title {
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 800; line-height: 1.2; color: #08234d;
    margin-bottom: 14px;
  }
  .section-title-light { color: #fff; }
  .section-body {
    font-size: 1rem; line-height: 1.75; color: #64748b; max-width: 560px;
  }
  .section-body-light { color: rgba(255,255,255,0.65); }

  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
  .two-col-rev { direction: rtl; }
  .two-col-rev > * { direction: ltr; }

  .img-rounded { border-radius: 18px; overflow: hidden; }
  .img-tall { height: 400px; }
  .img-med { height: 320px; }

  .img-duo {
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
  }
  .img-duo img { border-radius: 12px; height: 180px; }
  .img-duo img:first-child { margin-top: 24px; }

  .img-trio {
    display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
  }
  .img-trio img { border-radius: 12px; height: 160px; }
  .img-trio img:nth-child(1) { grid-column: 1 / -1; height: 200px; }

  .stat-row {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
    background: rgba(12,26,61,0.1);
    border-radius: 18px; overflow: hidden;
    margin-top: 48px;
  }
  .stat-item {
    background: #fff; padding: 28px 24px;
    text-align: center;
  }
  .stat-num { font-size: 2.4rem; font-weight: 800; color: #d11b2f; line-height: 1; margin-bottom: 6px; }
  .stat-label { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.1em; }

  .pillars {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px;
  }
  .pillar {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px; padding: 28px 24px;
  }
  .pillar-icon {
    width: 42px; height: 42px; border-radius: 10px;
    background: #d11b2f; display: flex; align-items: center; justify-content: center;
    margin-bottom: 16px; font-size: 20px; color: #fff;
  }
  .pillar h3 { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
  .pillar p { font-size: 0.88rem; line-height: 1.65; color: rgba(255,255,255,0.55); }

  .process-steps { display: flex; flex-direction: column; gap: 0; }
  .process-step {
    display: flex; gap: 24px; align-items: flex-start;
    padding: 20px 0; border-bottom: 1px solid rgba(12,26,61,0.08);
  }
  .process-step:last-child { border-bottom: none; }
  .step-num {
    flex-shrink: 0; width: 40px; height: 40px; border-radius: 10px;
    background: #d11b2f; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 800; font-variant-numeric: tabular-nums;
  }
  .step-content h3 { font-size: 0.95rem; font-weight: 700; color: #08234d; margin-bottom: 4px; }
  .step-content p { font-size: 0.88rem; line-height: 1.65; color: #64748b; }

  .quote-section {
    text-align: center; padding: 80px 48px;
    max-width: 800px; margin: 0 auto;
  }
  .quote-mark { font-size: 5rem; line-height: 0.6; color: #d11b2f; font-family: Georgia, serif; display: block; margin-bottom: 24px; }
  .quote-text { font-size: 1.5rem; font-weight: 600; color: #08234d; line-height: 1.5; margin-bottom: 24px; }
  .quote-attr { font-size: 0.88rem; color: #64748b; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }

  .gallery-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: auto auto; gap: 14px; margin-top: 44px;
  }
  .gallery-item { border-radius: 14px; overflow: hidden; position: relative; }
  .gallery-item img { height: 200px; transition: transform 0.4s ease; }
  .gallery-item:hover img { transform: scale(1.04); }
  .gallery-item:first-child { grid-column: 1 / 3; }
  .gallery-item:first-child img { height: 280px; }
  .gallery-caption {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 14px 16px;
    background: linear-gradient(transparent, rgba(4,18,39,0.85));
    color: #fff; font-size: 12px; font-weight: 600; line-height: 1.4;
  }

  .values-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 36px;
  }
  .value-card {
    background: #fff; border: 1px solid rgba(12,26,61,0.08);
    border-radius: 14px; padding: 24px 22px;
    border-left: 3px solid #d11b2f;
  }
  .value-card h3 { font-size: 0.95rem; font-weight: 700; color: #08234d; margin-bottom: 6px; }
  .value-card p { font-size: 0.87rem; line-height: 1.65; color: #64748b; }

  .team-strip {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px;
  }
  .team-card { border-radius: 16px; overflow: hidden; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); }
  .team-card img { height: 200px; }
  .team-card-body { padding: 16px 18px; }
  .team-card-body h3 { font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
  .team-card-body p { font-size: 0.83rem; color: rgba(255,255,255,0.5); }

  .cta-block {
    text-align: center; padding: 80px 48px;
    background: #d11b2f;
  }
  .cta-block h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 800; color: #fff; margin-bottom: 14px; }
  .cta-block p { font-size: 1rem; color: rgba(255,255,255,0.8); margin-bottom: 32px; }
  .btn-white {
    display: inline-flex; align-items: center; gap: 8px;
    background: #fff; color: #d11b2f;
    font-size: 14px; font-weight: 700; padding: 14px 28px;
    border-radius: 100px; border: none; cursor: pointer;
    letter-spacing: 0.04em; text-decoration: none;
  }
  .btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: #fff;
    font-size: 14px; font-weight: 600; padding: 14px 28px;
    border-radius: 100px; border: 2px solid rgba(255,255,255,0.4);
    cursor: pointer; letter-spacing: 0.04em; text-decoration: none;
    margin-left: 12px;
  }

  @media (max-width: 900px) {
    .hero-inner, .two-col { grid-template-columns: 1fr; gap: 36px; }
    .two-col-rev { direction: ltr; }
    .hero-inner { padding: 60px 24px; }
    .section-inner { padding: 0 24px; }
    .stat-row { grid-template-columns: repeat(2, 1fr); }
    .pillars, .team-strip { grid-template-columns: 1fr; }
    .gallery-grid { grid-template-columns: 1fr 1fr; }
    .gallery-item:first-child { grid-column: 1 / -1; }
    .values-grid { grid-template-columns: 1fr; }
    .hero-image-wrap { display: none; }
    .cta-block { padding: 56px 24px; }
    .quote-section { padding: 56px 24px; }
  }
`;

const stats = [
  { num: "50K+", label: "Students Reached" },
  { num: "200+", label: "Partner Schools" },
  { num: "12", label: "Years Running" },
  { num: "94%", label: "Recommend Rate" },
];

const pillars = [
  {
    icon: "🎤",
    title: "Student Voice",
    body: "We believe every student has a perspective worth hearing. Verbattle creates structured spaces for authentic expression.",
  },
  {
    icon: "⚡",
    title: "Critical Dialogue",
    body: "Debate builds the muscle of argument, analysis, and respectful disagreement—skills that last a lifetime.",
  },
  {
    icon: "🏆",
    title: "Youth Leadership",
    body: "Competitions and workshops cultivate confidence, clarity, and the instinct to lead in any room.",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Join a Workshop",
    body: "Students begin with structured debate workshops that introduce the foundations of argumentation and evidence.",
  },
  {
    n: "02",
    title: "Build Your Case",
    body: "Guided by mentors, participants research, structure, and refine their positions on real-world topics.",
  },
  {
    n: "03",
    title: "Compete & Grow",
    body: "Students enter regional and national competitions, testing their skills against peers across the country.",
  },
  {
    n: "04",
    title: "Lead & Mentor",
    body: "Alumni return as mentors—the cycle of voice and leadership continues, generation to generation.",
  },
];

const values = [
  {
    title: "Respect in Discourse",
    body: "We train students to disagree without diminishing—every debate begins and ends with mutual respect.",
  },
  {
    title: "Evidence Over Opinion",
    body: "Strong arguments are built on research. We teach students to support claims with credible, verified evidence.",
  },
  {
    title: "Accessible to All",
    body: "Verbattle works with schools across income levels to ensure debate is never only for the privileged few.",
  },
  {
    title: "Mentor-First Model",
    body: "Every program is backed by trained coaches and alumni mentors who guide students through every stage.",
  },
];

export default function VerbattleAboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="vb about-page">
      <Header
        menuOpen={menuOpen}
        navLinks={navLinks}
        setMenuOpen={setMenuOpen}
      />
      <main className="vb-main">
        <style>{css}</style>

        {/* ─── HERO (unchanged layout, enhanced) ─── */}
        <section className="hero">
          <div className="hero-bg-img" />
          <div className="hero-inner">
            <div>
              <div className="hero-eyebrow">
                <span />
                About Verbattle
              </div>
              <h1>
                Where Student <em>Voice</em> Becomes Leadership
              </h1>
              <p className="hero-desc">
                Verbattle is a student-centered debate and dialogue program
                trusted by schools and families nationwide. We turn the art of
                argument into a pathway for confidence, critical thinking, and
                lifelong leadership.
              </p>
              <div className="hero-meta">
                {["About", "Verbattle Static Route", "VBT-ABOUT-2601"].map(
                  (t) => (
                    <span key={t} className="hero-meta-tag">
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="hero-image-wrap">
              <img src={UNSPLASH.speak} alt="Student speaking at Verbattle" />
              <div className="hero-badge">
                <strong>50K+</strong>
                Students Reached
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 1: Stats Bar ─── */}
        <section className="section" style={{ padding: "56px 0" }}>
          <div className="section-inner">
            <Fade>
              <div className="stat-row">
                {stats.map((s, i) => (
                  <div key={i} className="stat-item">
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </section>

        {/* ─── SECTION 2: Our Mission (text + duo images) ─── */}
        <section className="section section-alt">
          <div className="section-inner">
            <div className="two-col">
              <Fade dir="left">
                <div>
                  <div className="label">Our Mission</div>
                  <h2 className="section-title">
                    We Give Students a Platform—and the Skills to Use It
                  </h2>
                  <p className="section-body" style={{ marginBottom: 20 }}>
                    Founded on the belief that young people are not the leaders
                    of tomorrow but the voices of today, Verbattle bridges the
                    gap between school curriculum and real-world communication.
                    We train students to speak with clarity, argue with
                    integrity, and lead with purpose.
                  </p>
                  <p className="section-body">
                    Our programs are designed by educators, refined by students,
                    and validated by the hundreds of schools that have made
                    Verbattle part of their academic culture.
                  </p>
                </div>
              </Fade>
              <Fade dir="right" delay={0.15}>
                <div className="img-duo">
                  <img
                    src={UNSPLASH.students}
                    alt="Students in discussion"
                    style={{ borderRadius: 12 }}
                  />
                  <img
                    src={UNSPLASH.debate}
                    alt="Debate session"
                    style={{ borderRadius: 12 }}
                  />
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: Core Pillars (dark) ─── */}
        <section className="section section-dark">
          <div className="section-inner">
            <Fade>
              <div
                style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}
              >
                <div className="label label-on-dark">What We Stand For</div>
                <h2 className="section-title section-title-light">
                  Three Pillars. One Purpose.
                </h2>
                <p className="section-body section-body-light">
                  Every Verbattle program, competition, and curriculum is
                  anchored to the same three commitments that have defined us
                  since day one.
                </p>
              </div>
            </Fade>
            <div className="pillars">
              {pillars.map((p, i) => (
                <Fade key={i} delay={i * 0.12}>
                  <div className="pillar">
                    <div className="pillar-icon">{p.icon}</div>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: How It Works (text + process + image) ─── */}
        <section className="section">
          <div className="section-inner">
            <div className="two-col two-col-rev">
              <Fade dir="right">
                <div>
                  <div className="label">How It Works</div>
                  <h2 className="section-title">
                    A Journey from Student to Leader
                  </h2>
                  <p className="section-body" style={{ marginBottom: 28 }}>
                    Verbattle is not a one-time event. It is a
                    progression—structured to move students from first-time
                    participants to confident voices who mentor the next cohort.
                  </p>
                  <div className="process-steps">
                    {processSteps.map((s, i) => (
                      <Fade key={i} delay={i * 0.1}>
                        <div className="process-step">
                          <div className="step-num">{s.n}</div>
                          <div className="step-content">
                            <h3>{s.title}</h3>
                            <p>{s.body}</p>
                          </div>
                        </div>
                      </Fade>
                    ))}
                  </div>
                </div>
              </Fade>
              <Fade dir="left" delay={0.2}>
                <div className="img-trio">
                  <img src={UNSPLASH.workshop} alt="Verbattle workshop" />
                  <img src={UNSPLASH.mentor} alt="Mentor session" />
                  <img src={UNSPLASH.stage} alt="Competition stage" />
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: Quote / Interlude ─── */}
        <section style={{ background: COLORS.surfaceStrong }}>
          <div className="quote-section">
            <Fade>
              <span className="quote-mark">"</span>
              <p className="quote-text">
                Debate doesn't just teach students how to argue. It teaches them
                how to listen, how to think, and how to lead in a world that
                desperately needs both.
              </p>
              <p className="quote-attr">— Verbattle Founding Philosophy</p>
            </Fade>
          </div>
        </section>

        {/* ─── SECTION 6: Gallery ─── */}
        <section className="section">
          <div className="section-inner">
            <Fade>
              <div style={{ maxWidth: 520 }}>
                <div className="label">In the Field</div>
                <h2 className="section-title">Students in Action</h2>
                <p className="section-body">
                  From workshops to championship stages, Verbattle moments
                  happen across the country every week.
                </p>
              </div>
            </Fade>
            <div className="gallery-grid">
              {[
                {
                  img: UNSPLASH.crowd,
                  caption:
                    "Regional Championship Finals — 2,400 students competing",
                },
                {
                  img: UNSPLASH.debate,
                  caption: "Workshop series: structured argumentation",
                },
                {
                  img: UNSPLASH.team,
                  caption: "Team strategy session before finals",
                },
                { img: UNSPLASH.speak, caption: "Student addresses the panel" },
              ].map((g, i) => (
                <Fade key={i} delay={i * 0.1}>
                  <div className="gallery-item">
                    <img src={g.img} alt={g.caption} />
                    <div className="gallery-caption">{g.caption}</div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 7: Our Values ─── */}
        <section className="section section-alt">
          <div className="section-inner">
            <div className="two-col">
              <Fade dir="left">
                <div className="img-rounded img-tall">
                  <img
                    src={UNSPLASH.leader}
                    alt="Student leader"
                    style={{ height: "100%", borderRadius: 18 }}
                  />
                </div>
              </Fade>
              <Fade dir="right" delay={0.15}>
                <div>
                  <div className="label">Our Values</div>
                  <h2 className="section-title">
                    Built on Principles That Last
                  </h2>
                  <p className="section-body" style={{ marginBottom: 28 }}>
                    Verbattle's culture is defined by four commitments that
                    shape every interaction, program, and partnership we hold.
                  </p>
                  <div className="values-grid">
                    {values.map((v, i) => (
                      <Fade key={i} delay={i * 0.1}>
                        <div className="value-card">
                          <h3>{v.title}</h3>
                          <p>{v.body}</p>
                        </div>
                      </Fade>
                    ))}
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ─── SECTION 8: For Schools & Families (navy) ─── */}
        <section className="section section-navy">
          <div className="section-inner">
            <Fade>
              <div
                style={{
                  textAlign: "center",
                  maxWidth: 580,
                  margin: "0 auto 44px",
                }}
              >
                <div className="label label-on-dark">Who We Serve</div>
                <h2 className="section-title section-title-light">
                  Designed for Schools. Trusted by Families.
                </h2>
                <p className="section-body section-body-light">
                  Whether you are a school administrator looking for a proven
                  enrichment program, a parent wanting your child to find their
                  voice, or a student ready to compete—Verbattle was built for
                  you.
                </p>
              </div>
            </Fade>
            <div className="team-strip">
              {[
                {
                  img: UNSPLASH.students,
                  role: "Students",
                  desc: "Grades 6–12 welcome in all programs",
                },
                {
                  img: UNSPLASH.workshop,
                  role: "Schools",
                  desc: "Curriculum integration & teacher training",
                },
                {
                  img: UNSPLASH.mentor,
                  role: "Families",
                  desc: "Parent guides & progress dashboards",
                },
              ].map((t, i) => (
                <Fade key={i} delay={i * 0.12}>
                  <div className="team-card">
                    <img src={t.img} alt={t.role} />
                    <div className="team-card-body">
                      <h3>{t.role}</h3>
                      <p>{t.desc}</p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 9: CTA ─── */}
        <section className="cta-block">
          <Fade>
            <h2>Ready to Find Your Voice with Verbattle?</h2>
            <p>
              Join thousands of students, schools, and families already part of
              the Verbattle community.
            </p>
            <a href="#register" className="btn-white">
              Get Started →
            </a>
            <a href="#programs" className="btn-ghost">
              Explore Programs
            </a>
          </Fade>
        </section>
      </main>
      <Footer footerData={footerData} navLinks={navLinks} />
    </div>
  );
}
