"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../../components/verbattle/Header";
import Footer from "../../components/verbattle/Footer";
import { footerData, navLinks } from "../../components/verbattle/data";

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
    background-image: url('/programs/WhatsApp Image 2026-06-21 at 00.18.39 (1).jpeg');
    background-size: cover; background-position: center;
    opacity: 0.13;
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
    text-transform: uppercase; color: #f0a93b; margin-bottom: 20px;
  }
  .hero-eyebrow span { display: inline-block; width: 28px; height: 2px; background: #f0a93b; }
  .hero h1 {
    font-size: clamp(2.4rem, 5vw, 3.8rem);
    font-weight: 800; line-height: 1.1; color: #fff; margin-bottom: 24px;
  }
  .hero h1 em { color: #d11b2f; font-style: normal; }
  .hero-desc {
    font-size: 1.05rem; line-height: 1.75;
    color: rgba(255,255,255,0.65); max-width: 500px; margin-bottom: 36px;
  }
  .hero-meta { display: flex; gap: 6px; flex-wrap: wrap; }
  .hero-meta-tag {
    font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
    padding: 5px 12px; border-radius: 100px;
    background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.55);
    border: 1px solid rgba(255,255,255,0.12);
  }
  .hero-image-wrap { position: relative; }
  .hero-image-wrap img {
    border-radius: 20px; height: 460px; object-fit: cover;
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
  .section-dark { background: #08234d; }
  .section-navy { background: #041227; }

  .label {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
    text-transform: uppercase; color: #d11b2f; margin-bottom: 14px;
  }
  .label::before { content: ''; display: inline-block; width: 20px; height: 2px; background: currentColor; }
  .label-gold { color: #f0a93b; }
  .label-gold::before { background: #f0a93b; }

  .section-title {
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 800; line-height: 1.2; color: #08234d; margin-bottom: 14px;
  }
  .section-title-light { color: #fff; }
  .section-body { font-size: 1rem; line-height: 1.75; color: #64748b; max-width: 560px; }
  .section-body-light { color: rgba(255,255,255,0.65); }

  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
  .two-col-rev { direction: rtl; }
  .two-col-rev > * { direction: ltr; }

  .img-duo { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .img-duo img { border-radius: 12px; height: 180px; }
  .img-duo img:first-child { margin-top: 24px; }

  .img-trio { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .img-trio img { border-radius: 12px; height: 160px; }
  .img-trio img:nth-child(1) { grid-column: 1 / -1; height: 200px; }

  .stat-row {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
    background: rgba(12,26,61,0.1); border-radius: 18px; overflow: hidden;
  }
  .stat-item { background: #fff; padding: 28px 24px; text-align: center; }
  .stat-num { font-size: 2.4rem; font-weight: 800; color: #d11b2f; line-height: 1; margin-bottom: 6px; }
  .stat-label { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.1em; }

  /* pillars — used on dark bg */
  .pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px; }
  .pillar {
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px; padding: 28px 24px;
  }
  .pillar-icon {
    width: 42px; height: 42px; border-radius: 10px;
    background: #d11b2f; display: flex; align-items: center; justify-content: center;
    margin-bottom: 16px; font-size: 20px;
  }
  .pillar h3 { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
  .pillar p { font-size: 0.88rem; line-height: 1.65; color: rgba(255,255,255,0.55); }

  /* process steps */
  .process-steps { display: flex; flex-direction: column; gap: 0; }
  .process-step {
    display: flex; gap: 20px; align-items: flex-start;
    padding: 18px 0; border-bottom: 1px solid rgba(12,26,61,0.08);
  }
  .process-step:last-child { border-bottom: none; }
  .step-num {
    flex-shrink: 0; width: 38px; height: 38px; border-radius: 9px;
    background: #d11b2f; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 800;
  }
  .step-content h3 { font-size: 0.93rem; font-weight: 700; color: #08234d; margin-bottom: 4px; }
  .step-content p { font-size: 0.86rem; line-height: 1.65; color: #64748b; }

  /* value cards */
  .values-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 24px; }
  .value-card {
    background: #fff; border: 1px solid rgba(12,26,61,0.08);
    border-radius: 14px; padding: 20px 20px; border-left: 3px solid #d11b2f;
  }
  .value-card h3 { font-size: 0.93rem; font-weight: 700; color: #08234d; margin-bottom: 5px; }
  .value-card p { font-size: 0.86rem; line-height: 1.65; color: #64748b; }

  /* gallery */
  .gallery-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px;
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

  /* team strip */
  .team-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px; }
  .team-card { border-radius: 16px; overflow: hidden; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); }
  .team-card img { height: 200px; }
  .team-card-body { padding: 16px 18px; }
  .team-card-body h3 { font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
  .team-card-body p { font-size: 0.83rem; color: rgba(255,255,255,0.5); }

  /* quote interlude */
  .quote-section { text-align: center; padding: 64px 48px; max-width: 800px; margin: 0 auto; }
  .quote-mark { font-size: 5rem; line-height: 0.6; color: #d11b2f; font-family: Georgia, serif; display: block; margin-bottom: 22px; }
  .quote-text { font-size: 1.45rem; font-weight: 600; color: #08234d; line-height: 1.5; margin-bottom: 20px; }
  .quote-attr { font-size: 0.88rem; color: #64748b; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }

  /* cta */
  .cta-block { background: #d11b2f; text-align: center; padding: 76px 48px; }
  .cta-block h2 { font-size: clamp(1.8rem, 3.2vw, 2.6rem); font-weight: 800; color: #fff; margin-bottom: 12px; }
  .cta-block p { font-size: 0.97rem; color: rgba(255,255,255,0.8); margin-bottom: 30px; }
  .btn-white {
    display: inline-flex; align-items: center; gap: 8px;
    background: #fff; color: #d11b2f; font-size: 13px; font-weight: 700;
    padding: 13px 26px; border-radius: 100px; border: none;
    cursor: pointer; letter-spacing: 0.04em; text-decoration: none;
  }
  .btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: #fff; font-size: 13px; font-weight: 600;
    padding: 13px 26px; border-radius: 100px;
    border: 2px solid rgba(255,255,255,0.38); cursor: pointer;
    letter-spacing: 0.04em; text-decoration: none; margin-left: 10px;
  }

  @media (max-width: 960px) {
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
    .cta-block, .quote-section { padding: 56px 24px; }
  }
`;

const debatePillars = [
  {
    icon: "⚔️",
    title: "Argument & Rebuttal",
    body: "Students master how to build a case and immediately dismantle the opposing one — the core loop of every debate round.",
  },
  {
    icon: "🧠",
    title: "Structured Thinking",
    body: "Debate builds the mental habit of organising thought before speech, so delivery is clear even under real pressure.",
  },
  {
    icon: "🎤",
    title: "Stage Confidence",
    body: "Voice, presence, eye contact — these skills are trained in every session and transfer far beyond the debate podium.",
  },
];

const debateSteps = [
  {
    n: "01",
    title: "Observe structured rounds",
    body: "Students first watch how arguments flow, how rebuttals land, and what judges actually reward.",
  },
  {
    n: "02",
    title: "Practice in safe sessions",
    body: "Low-stakes sparring where mistakes are expected and every error becomes a lesson from the mentor.",
  },
  {
    n: "03",
    title: "Receive targeted feedback",
    body: "Coaches identify specific gaps in argument structure, delivery pace, and rebuttal timing.",
  },
  {
    n: "04",
    title: "Compete with real stakes",
    body: "Prepared students enter Verbattle circuits with actual judges, audiences, and competitive pressure.",
  },
];

const debateValues = [
  {
    title: "Evidence over assertion",
    body: "Every claim must be backed. We train students to never let opinion masquerade as fact.",
  },
  {
    title: "Listen before you respond",
    body: "The best rebuttals come from actually hearing the opponent — not just waiting to speak.",
  },
  {
    title: "Respect in every round",
    body: "Debate is vigorous, not personal. Every session begins and ends with mutual acknowledgment.",
  },
  {
    title: "Clarity beats complexity",
    body: "A simple, well-argued case wins more than a dense one. We teach students to say less, better.",
  },
];

const debateFormats = [
  {
    img: "/programs/WhatsApp Image 2026-06-21 at 00.18.39 (2).jpeg",
    caption: "British Parliamentary — four teams, live pressure",
  },
  {
    img: "/programs/WhatsApp Image 2026-06-21 at 00.18.40.jpeg",
    caption: "Asian Parliamentary — the most common school format",
  },
  {
    img: "/programs/WhatsApp Image 2026-06-21 at 00.18.40 (1).jpeg",
    caption: "Lincoln–Douglas — one-on-one value debate",
  },
  {
    img: "/programs/WhatsApp Image 2026-06-21 at 00.18.40 (2).jpeg",
    caption: "Public Forum — current events, general audiences",
  },
];

const debateAudience = [
  {
    img: "/programs/WhatsApp Image 2026-06-21 at 00.20.49.jpeg",
    role: "Students",
    desc: "Grades 6–12, any experience level",
  },
  {
    img: "/programs/WhatsApp Image 2026-06-21 at 00.20.50.jpeg",
    role: "Schools",
    desc: "Club formats and curriculum integration",
  },
  {
    img: "/programs/WhatsApp Image 2026-06-21 at 00.20.51.jpeg",
    role: "Mentors",
    desc: "Coaching frameworks and judge training",
  },
];

const debateStats = [
  { num: "4", label: "Debate Formats" },
  { num: "80+", label: "Competitions Held" },
  { num: "1M+", label: "Students on Stage" },
  { num: "12", label: "Years of Rounds" },
];

export default function DebatePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="vb">
      <style>{css}</style>
      <Header
        menuOpen={menuOpen}
        navLinks={navLinks}
        setMenuOpen={setMenuOpen}
      />
      <main className="vb-main">
        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-bg-img" />
          <div className="hero-inner">
            <Fade dir="left">
              <div className="hero-eyebrow">
                <span />
                Debate
              </div>
              <h1>
                Argue Clearly.
                <br />
                Think <em>Faster.</em>
              </h1>
              <p className="hero-desc">
                The Debate track is where structured thinking meets live
                pressure. Students learn to build cases, land rebuttals, and
                hold a room — in front of judges and each other.
              </p>
              <div className="hero-meta">
                {[
                  "Argument",
                  "Rebuttal",
                  "Structured Thinking",
                  "VBT-DEBATE-2608",
                ].map((t) => (
                  <span key={t} className="hero-meta-tag">
                    {t}
                  </span>
                ))}
              </div>
            </Fade>
            <Fade dir="right" delay={0.15}>
              <div className="hero-image-wrap">
                <img
                  src="/programs/WhatsApp Image 2026-06-21 at 00.18.39 (1).jpeg"
                  alt="Debate session"
                />
                <div className="hero-badge">
                  <strong>80+</strong>
                  Competitions Run
                </div>
              </div>
            </Fade>
          </div>
        </section>

        {/* ── S1: Stats ── */}
        <section className="section" style={{ padding: "52px 0" }}>
          <div className="section-inner">
            <Fade>
              <div className="stat-row">
                {debateStats.map((s, i) => (
                  <div key={i} className="stat-item">
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </section>

        {/* ── S2: Gallery — debate formats (plain bg, left-aligned head) ── */}
        <section className="section">
          <div className="section-inner">
            <Fade>
              <div style={{ maxWidth: 520 }}>
                <div className="label">Debate Formats</div>
                <h2 className="section-title">
                  Four formats. One goal — sharper thinking.
                </h2>
                <p className="section-body">
                  From one-on-one value rounds to parliamentary chambers, every
                  format Verbattle uses trains the same core muscle through a
                  different lens.
                </p>
              </div>
            </Fade>
            <div className="gallery-grid">
              {debateFormats.map((f, i) => (
                <Fade key={i} delay={i * 0.1}>
                  <div className="gallery-item">
                    <img src={f.img} alt={f.caption} />
                    <div className="gallery-caption">{f.caption}</div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── S3: Pillars (dark, centered) ── */}
        <section className="section section-dark">
          <div className="section-inner">
            <Fade>
              <div
                style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}
              >
                <div className="label label-gold">What Debate Trains</div>
                <h2 className="section-title section-title-light">
                  Three skills every debater builds — whether they know it or
                  not.
                </h2>
                <p className="section-body section-body-light">
                  Debate is not about winning. It is about building the mental
                  architecture to think clearly in any room — boardroom,
                  classroom, or stage.
                </p>
              </div>
            </Fade>
            <div className="pillars">
              {debatePillars.map((p, i) => (
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

        {/* ── S4: Values (alt, image LEFT + cards RIGHT) ── */}
        <section className="section section-alt">
          <div className="section-inner">
            <div className="two-col">
              <Fade dir="left">
                <div
                  className="img-rounded"
                  style={{ overflow: "hidden", borderRadius: 18 }}
                >
                  <img
                    src="/programs/WhatsApp Image 2026-06-21 at 00.20.47.jpeg"
                    alt="Debate values"
                    style={{ height: 400, borderRadius: 18 }}
                  />
                </div>
              </Fade>
              <Fade dir="right" delay={0.15}>
                <div>
                  <div className="label">Debate Values</div>
                  <h2 className="section-title">
                    The principles behind every Verbattle round.
                  </h2>
                  <p className="section-body" style={{ marginBottom: 20 }}>
                    How students argue matters as much as what they argue. These
                    four values are embedded in every session, every coaching
                    note, and every competition Verbattle runs.
                  </p>
                  <div className="values-grid">
                    {debateValues.map((v, i) => (
                      <Fade key={i} delay={i * 0.09}>
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

        {/* ── S5: Quote interlude ── */}
        <section style={{ background: "#edf3ff" }}>
          <div className="quote-section">
            <Fade>
              <span className="quote-mark">"</span>
              <p className="quote-text">
                Debate doesn't just teach students how to argue. It teaches them
                how to listen, how to think, and how to lead in a world that
                desperately needs both.
              </p>
              <p className="quote-attr">— Verbattle Debate Philosophy</p>
            </Fade>
          </div>
        </section>

        {/* ── S6: Process (plain bg, image RIGHT + steps LEFT) ── */}
        <section className="section">
          <div className="section-inner">
            <div className="two-col two-col-rev">
              <Fade dir="right">
                <div>
                  <div className="label">The Process</div>
                  <h2 className="section-title">
                    From first-time listener to competition-ready speaker.
                  </h2>
                  <p className="section-body" style={{ marginBottom: 24 }}>
                    Verbattle debate training follows a deliberate sequence —
                    every stage builds on the last so growth is visible, not
                    just felt.
                  </p>
                  <div className="process-steps">
                    {debateSteps.map((s, i) => (
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
                  <img
                    src="/programs/WhatsApp Image 2026-06-21 at 00.18.41.jpeg"
                    alt="Workshop session"
                  />
                  <img
                    src="/programs/WhatsApp Image 2026-06-21 at 00.18.41 (1).jpeg"
                    alt="Mentor coaching"
                  />
                  <img
                    src="/programs/WhatsApp Image 2026-06-21 at 00.18.41 (2).jpeg"
                    alt="Competition round"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── S7: Who It's For (navy, team strip) ── */}
        <section className="section section-navy">
          <div className="section-inner">
            <Fade>
              <div
                style={{
                  textAlign: "center",
                  maxWidth: 560,
                  margin: "0 auto 44px",
                }}
              >
                <div className="label label-gold">Who It's For</div>
                <h2 className="section-title section-title-light">
                  Built for students. Designed to work for schools and mentors
                  too.
                </h2>
                <p className="section-body section-body-light">
                  Every Verbattle debate format is calibrated for a specific
                  audience — so no one walks in under-prepared or walks out
                  unchallenged.
                </p>
              </div>
            </Fade>
            <div className="team-strip">
              {debateAudience.map((a, i) => (
                <Fade key={i} delay={i * 0.12}>
                  <div className="team-card">
                    <img src={a.img} alt={a.role} />
                    <div className="team-card-body">
                      <h3>{a.role}</h3>
                      <p>{a.desc}</p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── S8: Debate in action (alt, image duo + text) ── */}
        <section className="section section-alt">
          <div className="section-inner">
            <div className="two-col">
              <Fade dir="left">
                <div className="img-duo">
                  <img
                    src="/programs/WhatsApp Image 2026-06-21 at 00.20.52.jpeg"
                    alt="Students debating"
                    style={{ borderRadius: 12 }}
                  />
                  <img
                    src="/programs/WhatsApp Image 2026-06-21 at 00.20.52 (1).jpeg"
                    alt="Peer exchange"
                    style={{ borderRadius: 12 }}
                  />
                </div>
              </Fade>
              <Fade dir="right" delay={0.15}>
                <div>
                  <div className="label">In the Room</div>
                  <h2 className="section-title">
                    Real sessions. Real arguments. Real feedback.
                  </h2>
                  <p className="section-body" style={{ marginBottom: 16 }}>
                    Verbattle debate sessions are not lectures. Every student
                    speaks, gets corrected, and tries again. The format is
                    designed so mistakes happen early — before the competition
                    clock starts.
                  </p>
                  <p className="section-body">
                    Coaches track argument quality, not just delivery. Students
                    learn that how you think is as visible as how you sound.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── S9: CTA ── */}
        <section className="cta-block">
          <Fade>
            <h2>Ready to Step into the Argument?</h2>
            <p>
              Register for a Verbattle debate track, workshop, or competition —
              students and schools both welcome.
            </p>
            <a href="/register" className="btn-white">
              Register Now →
            </a>
            <a href="/programs" className="btn-ghost">
              View Programs
            </a>
          </Fade>
        </section>
      </main>
      <Footer footerData={footerData} navLinks={navLinks} />
    </div>
  );
}
