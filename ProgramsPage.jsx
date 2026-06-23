"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./components/verbattle/Header";
import Footer from "./components/verbattle/Footer";
import { footerData, navLinks } from "./components/verbattle/data";

/* ─── animation hook ─── */
function useInView(threshold = 0.13) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
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
    dir === "left"
      ? "translateX(-32px)"
      : dir === "right"
        ? "translateX(32px)"
        : "translateY(28px)";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translate,
        transition: `opacity 0.62s ease ${delay}s, transform 0.62s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── data ─── */
const programTracks = [
  {
    id: "forum",
    eyebrow: "Conversation-led",
    title: "Forum",
    summary:
      "A guided speaking space where students learn to listen, respond, and build confidence before stepping into more competitive formats.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.52.jpeg",
    points: [
      "Confidence building",
      "Discussion flow",
      "Learner-friendly entry",
    ],
  },
  {
    id: "academy",
    eyebrow: "Structured growth",
    title: "Verbattle Academy",
    summary:
      "A deeper training route for students who want sustained improvement in communication, public speaking, and stage performance.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.48.jpeg",
    points: [
      "Regular learning rhythm",
      "Performance coaching",
      "Long-term improvement",
    ],
  },
  {
    id: "club",
    eyebrow: "Practice culture",
    title: "Debate Club",
    summary:
      "A recurring debate environment built around repetition, sparring, feedback, and stronger argument habits over time.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (1).jpeg",
    points: ["Weekly sparring", "Argument training", "Team energy"],
  },
  {
    id: "activity",
    eyebrow: "Junior engagement",
    title: "Activity Zone",
    summary:
      "Interactive communication activities for younger learners, designed to make expression feel natural, joyful, and visible.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.50.jpeg",
    points: [
      "Younger learners",
      "Creative expression",
      "Confidence through activity",
    ],
  },
  {
    id: "teachers",
    eyebrow: "School enablement",
    title: "Teachers Workshop",
    summary:
      "Workshops that help educators support student speaking, build debate culture, and mentor learners more effectively in school settings.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.18.40.jpeg",
    points: ["Faculty support", "Classroom strategy", "Mentor readiness"],
  },
  {
    id: "certification",
    eyebrow: "Recognition pathway",
    title: "Certification",
    summary:
      "A clear completion route that gives learners visible progress, structured goals, and stronger recognition for their work.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.53.jpeg",
    points: ["Visible milestones", "Completion track", "Student motivation"],
  },
];

const showcaseCards = [
  {
    title: "Stage and delivery",
    copy: "Programs are built to improve presence, articulation, voice control, and audience connection.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.18.39.jpeg",
  },
  {
    title: "Debate and logic",
    copy: "Students learn how to think under pressure, structure arguments, and respond with clarity.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.18.39 (2).jpeg",
  },
  {
    title: "School partnerships",
    copy: "The program ecosystem works for students, educators, and institutions that want stronger communication culture.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.53 (1).jpeg",
  },
];

const pathway = [
  {
    step: "01",
    title: "Enter through the right format",
    copy: "You can begin with discussion spaces, confidence-building activities, debate practice, or a more structured academy route.",
  },
  {
    step: "02",
    title: "Train with continuity",
    copy: "The strongest progress comes from regular exposure, repeated speaking, and feedback across multiple sessions.",
  },
  {
    step: "03",
    title: "Move toward outcomes",
    copy: "Programs connect with competitions, workshops, school engagement, and certification so the growth does not stay abstract.",
  },
];

const faqItems = [
  {
    q: "Who are Verbattle programs for?",
    a: "Verbattle programs are designed for students, schools, educators, and families looking to build stronger speaking, thinking, and leadership skills.",
  },
  {
    q: "Are these only debate programs?",
    a: "No. The program mix spans communication training, activity-based confidence building, debate practice, teacher enablement, and certification pathways.",
  },
  {
    q: "Can a school partner with Verbattle for a custom format?",
    a: "Yes. The current program structure is well suited for school-based workshops, faculty development, student clubs, and larger institutional partnerships.",
  },
  {
    q: "How should a first-time student start?",
    a: "A lighter entry point such as Forum or Activity Zone works well for beginners, while Debate Club and Academy suit students ready for more consistent training.",
  },
];

const stats = [
  { num: "6", label: "Program Tracks" },
  { num: "200+", label: "Partner Schools" },
  { num: "50K+", label: "Students Trained" },
  { num: "94%", label: "Satisfaction Rate" },
];

const outcomes = [
  {
    icon: "🎤",
    title: "Confident Speaking",
    body: "Students who complete Verbattle programs speak more clearly, hold attention better, and step forward instead of back.",
  },
  {
    icon: "🧠",
    title: "Structured Thinking",
    body: "Debate and discussion practice builds the habit of organizing thoughts before they leave your mouth—in any setting.",
  },
  {
    icon: "🏆",
    title: "Stage-Ready Performance",
    body: "Live competitions, certification events, and presentations give students real audiences and real stakes to grow against.",
  },
  {
    icon: "🤝",
    title: "Mentor Network",
    body: "Every program connects students and teachers to a wider Verbattle community of coaches, alumni, and educators.",
  },
];

const css = `
  *{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Inter',system-ui,sans-serif;background:#fff;color:#162133;}
  img{display:block;width:100%;object-fit:cover;}

  /* ── hero ── */
  .pgm-hero{
    position:relative;min-height:72vh;
    background:linear-gradient(135deg,#041227 0%,#08234d 65%,#162133 100%);
    display:flex;align-items:center;overflow:hidden;
  }
  .pgm-hero__overlay{
    position:absolute;inset:0;
    background-image:url('/programs/WhatsApp Image 2026-06-21 at 00.18.40 (2).jpeg');
    background-size:cover;background-position:center;opacity:0.13;
  }
  .pgm-hero__inner{
    position:relative;z-index:2;
    max-width:1200px;margin:0 auto;padding:80px 48px;
    display:grid;grid-template-columns:1fr 400px;gap:64px;align-items:center;
  }
  .pgm-hero__eyebrow{
    display:inline-flex;align-items:center;gap:10px;
    font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;
    color:#f0a93b;margin-bottom:18px;
  }
  .pgm-hero__eyebrow span{display:inline-block;width:26px;height:2px;background:#f0a93b;}
  .pgm-hero__title{
    font-size:clamp(2.2rem,4.5vw,3.6rem);font-weight:800;line-height:1.1;
    color:#fff;margin-bottom:20px;
  }
  .pgm-hero__title em{color:#d11b2f;font-style:normal;}
  .pgm-hero__desc{font-size:1rem;line-height:1.75;color:rgba(255,255,255,0.62);margin-bottom:32px;max-width:520px;}
  .pgm-hero__crumbs{display:flex;gap:6px;flex-wrap:wrap;}
  .pgm-hero__crumb{
    font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;
    padding:5px 12px;border-radius:100px;
    background:rgba(255,255,255,0.07);color:rgba(255,255,255,0.5);
    border:1px solid rgba(255,255,255,0.11);
  }
  .pgm-hero__img{border-radius:18px;overflow:hidden;height:400px;position:relative;}
  .pgm-hero__img img{height:100%;border-radius:18px;box-shadow:0 40px 80px rgba(0,0,0,0.35);}
  .pgm-hero__badge{
    position:absolute;bottom:-14px;left:-14px;
    background:#d11b2f;color:#fff;padding:13px 18px;border-radius:12px;
    font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;
    line-height:1.3;box-shadow:0 12px 28px rgba(209,27,47,0.38);
  }
  .pgm-hero__badge strong{display:block;font-size:1.45rem;font-weight:800;letter-spacing:0;}

  /* ── shared section layout ── */
  .pgm-section{padding:72px 0;}
  .pgm-section--alt{background:#f7f8fc;}
  .pgm-section--dark{background:#08234d;}
  .pgm-section--navy{background:#041227;}
  .pgm-inner{max-width:1200px;margin:0 auto;padding:0 48px;}

  .pgm-label{
    display:inline-flex;align-items:center;gap:8px;
    font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;
    color:#d11b2f;margin-bottom:12px;
  }
  .pgm-label::before{content:'';display:inline-block;width:20px;height:2px;background:currentColor;}
  .pgm-label--gold{color:#f0a93b;}
  .pgm-label--gold::before{background:#f0a93b;}

  .pgm-h2{font-size:clamp(1.55rem,2.8vw,2.3rem);font-weight:800;line-height:1.22;color:#08234d;margin-bottom:12px;}
  .pgm-h2--light{color:#fff;}
  .pgm-body{font-size:0.97rem;line-height:1.75;color:#64748b;max-width:540px;}
  .pgm-body--light{color:rgba(255,255,255,0.62);}

  /* ── stats strip ── */
  .pgm-stats{
    display:grid;grid-template-columns:repeat(4,1fr);gap:1px;
    background:rgba(12,26,61,0.1);border-radius:16px;overflow:hidden;
    margin-top:0;
  }
  .pgm-stat{background:#fff;padding:26px 22px;text-align:center;}
  .pgm-stat__num{font-size:2.3rem;font-weight:800;color:#d11b2f;line-height:1;margin-bottom:5px;}
  .pgm-stat__label{font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;}

  /* ── two-col ── */
  .pgm-twocol{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;}
  .pgm-twocol--rev{direction:rtl;}
  .pgm-twocol--rev>*{direction:ltr;}

  /* ── track grid ── */
  .pgm-trackGrid{
    display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:44px;
  }
  .pgm-trackCard{
    background:#fff;border:1px solid rgba(12,26,61,0.08);
    border-radius:16px;overflow:hidden;
    transition:box-shadow 0.28s ease,transform 0.28s ease;
  }
  .pgm-trackCard:hover{box-shadow:0 18px 48px rgba(12,26,61,0.1);transform:translateY(-3px);}
  .pgm-trackCard__img{height:170px;overflow:hidden;}
  .pgm-trackCard__img img{height:170px;transition:transform 0.4s ease;}
  .pgm-trackCard:hover .pgm-trackCard__img img{transform:scale(1.05);}
  .pgm-trackCard__body{padding:20px 20px 22px;}
  .pgm-trackCard__eyebrow{
    font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;
    color:#d11b2f;margin-bottom:7px;display:block;
  }
  .pgm-trackCard__title{font-size:1.05rem;font-weight:800;color:#08234d;margin-bottom:8px;}
  .pgm-trackCard__copy{font-size:0.85rem;line-height:1.65;color:#64748b;margin-bottom:14px;}
  .pgm-trackCard__tags{display:flex;flex-wrap:wrap;gap:6px;}
  .pgm-trackCard__tag{
    font-size:10px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;
    padding:4px 10px;border-radius:100px;
    background:#edf3ff;color:#08234d;border:1px solid rgba(12,26,61,0.12);
  }

  /* ── showcase (dark) ── */
  .pgm-showcase__head{max-width:580px;margin-bottom:44px;}
  .pgm-showcase__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
  .pgm-showcaseCard{
    border-radius:16px;overflow:hidden;
    background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.09);
  }
  .pgm-showcaseCard img{height:190px;transition:transform 0.4s ease;}
  .pgm-showcaseCard:hover img{transform:scale(1.05);}
  .pgm-showcaseCard__body{padding:18px 18px 20px;}
  .pgm-showcaseCard__body h3{font-size:0.97rem;font-weight:700;color:#fff;margin-bottom:7px;}
  .pgm-showcaseCard__body p{font-size:0.85rem;line-height:1.65;color:rgba(255,255,255,0.55);}

  /* ── pathway ── */
  .pgm-pathway__img{border-radius:18px;overflow:hidden;}
  .pgm-pathway__img img{height:460px;border-radius:18px;}
  .pgm-pathway__steps{display:flex;flex-direction:column;gap:0;margin-top:28px;}
  .pgm-pathway__step{
    display:flex;gap:20px;align-items:flex-start;
    padding:18px 0;border-bottom:1px solid rgba(12,26,61,0.08);
  }
  .pgm-pathway__step:last-child{border-bottom:none;}
  .pgm-step-num{
    flex-shrink:0;width:38px;height:38px;border-radius:9px;
    background:#d11b2f;color:#fff;
    display:flex;align-items:center;justify-content:center;
    font-size:12px;font-weight:800;
  }
  .pgm-step-content h3{font-size:0.93rem;font-weight:700;color:#08234d;margin-bottom:4px;}
  .pgm-step-content p{font-size:0.86rem;line-height:1.65;color:#64748b;}

  /* ── outcomes grid ── */
  .pgm-outcomes{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:44px;}
  .pgm-outcome{
    background:#fff;border:1px solid rgba(12,26,61,0.08);
    border-radius:14px;padding:24px 22px;border-left:3px solid #d11b2f;
  }
  .pgm-outcome__icon{font-size:1.6rem;margin-bottom:12px;}
  .pgm-outcome h3{font-size:0.95rem;font-weight:700;color:#08234d;margin-bottom:6px;}
  .pgm-outcome p{font-size:0.86rem;line-height:1.65;color:#64748b;}

  /* ── school band (dark navy) ── */
  .pgm-schoolBand{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start;}
  .pgm-schoolBand__copy p{font-size:0.97rem;line-height:1.75;color:rgba(255,255,255,0.62);margin-top:12px;}
  .pgm-schoolBand__stack{display:flex;flex-direction:column;gap:12px;margin-top:8px;}
  .pgm-schoolBand__item{
    background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);
    border-radius:14px;padding:20px 20px;border-left:3px solid #d11b2f;
  }
  .pgm-schoolBand__item strong{display:block;font-size:0.95rem;font-weight:700;color:#fff;margin-bottom:4px;}
  .pgm-schoolBand__item span{font-size:0.85rem;color:rgba(255,255,255,0.5);}

  /* ── split image+text (alt) ── */
  .pgm-imgText__media{border-radius:18px;overflow:hidden;}
  .pgm-imgText__media img{height:400px;border-radius:18px;}
  .pgm-imgText__duo{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  .pgm-imgText__duo img{border-radius:12px;height:180px;}
  .pgm-imgText__duo img:first-child{margin-top:22px;}

  /* ── quote ── */
  .pgm-quote{text-align:center;padding:64px 48px;max-width:760px;margin:0 auto;}
  .pgm-quote__mark{font-size:4.5rem;line-height:0.6;color:#d11b2f;font-family:Georgia,serif;display:block;margin-bottom:22px;}
  .pgm-quote__text{font-size:1.45rem;font-weight:700;color:#08234d;line-height:1.5;margin-bottom:20px;}
  .pgm-quote__attr{font-size:0.86rem;color:#64748b;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;}

  /* ── FAQ ── */
  .pgm-faq{display:flex;flex-direction:column;gap:0;margin-top:36px;max-width:760px;}
  .pgm-faq__item{border-bottom:1px solid rgba(12,26,61,0.09);}
  .pgm-faq__btn{
    width:100%;display:flex;justify-content:space-between;align-items:center;
    padding:18px 0;background:none;border:none;cursor:pointer;
    font-size:0.97rem;font-weight:700;color:#08234d;text-align:left;gap:16px;
  }
  .pgm-faq__btn svg{flex-shrink:0;transition:transform 0.25s ease;color:#d11b2f;}
  .pgm-faq__item.is-open .pgm-faq__btn svg{transform:rotate(45deg);}
  .pgm-faq__answer{font-size:0.9rem;line-height:1.72;color:#64748b;padding-bottom:18px;}

  /* ── CTA block ── */
  .pgm-cta{background:#d11b2f;text-align:center;padding:76px 48px;}
  .pgm-cta h2{font-size:clamp(1.7rem,3.2vw,2.6rem);font-weight:800;color:#fff;margin-bottom:12px;}
  .pgm-cta p{font-size:0.97rem;color:rgba(255,255,255,0.8);margin-bottom:30px;}
  .pgm-btn-white{
    display:inline-flex;align-items:center;gap:8px;
    background:#fff;color:#d11b2f;font-size:13px;font-weight:700;
    padding:13px 26px;border-radius:100px;border:none;cursor:pointer;
    letter-spacing:0.04em;text-decoration:none;
  }
  .pgm-btn-ghost{
    display:inline-flex;align-items:center;gap:8px;
    background:transparent;color:#fff;font-size:13px;font-weight:600;
    padding:13px 26px;border-radius:100px;border:2px solid rgba(255,255,255,0.38);
    cursor:pointer;letter-spacing:0.04em;text-decoration:none;margin-left:10px;
  }

  /* ── responsive ── */
  @media(max-width:960px){
    .pgm-hero__inner,.pgm-twocol,.pgm-schoolBand{grid-template-columns:1fr;gap:36px;}
    .pgm-twocol--rev{direction:ltr;}
    .pgm-trackGrid{grid-template-columns:1fr 1fr;}
    .pgm-showcase__grid{grid-template-columns:1fr;}
    .pgm-outcomes{grid-template-columns:1fr;}
    .pgm-stats{grid-template-columns:repeat(2,1fr);}
    .pgm-hero__inner{padding:60px 24px;}
    .pgm-inner{padding:0 24px;}
    .pgm-hero__img{display:none;}
    .pgm-quote{padding:48px 24px;}
    .pgm-cta{padding:56px 24px;}
  }
  @media(max-width:600px){
    .pgm-trackGrid{grid-template-columns:1fr;}
    .pgm-imgText__duo{grid-template-columns:1fr;}
    .pgm-imgText__duo img:first-child{margin-top:0;}
  }
`;

/* ─── FAQ item ─── */
function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <Fade
      className={`pgm-faq__item${open ? " is-open" : ""}`}
      delay={index * 0.07}
    >
      <button className="pgm-faq__btn" onClick={() => setOpen((o) => !o)}>
        <span>{item.q}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      {open && <p className="pgm-faq__answer">{item.a}</p>}
    </Fade>
  );
}

/* ─── page ─── */
export default function ProgramsPage() {
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
        <section className="pgm-hero">
          <div className="pgm-hero__overlay" />
          <div className="pgm-hero__inner">
            <Fade dir="left">
              <div className="pgm-hero__eyebrow">
                <span />
                Programs
              </div>
              <h1 className="pgm-hero__title">
                Programs That Build <em>Real</em> Communicators
              </h1>
              <p className="pgm-hero__desc">
                Six distinct tracks spanning forum discussions, debate clubs,
                academy training, teacher workshops, and certification — every
                format is designed around a specific student need.
              </p>
              <div className="pgm-hero__crumbs">
                {["Programs", "6 Tracks", "Schools & Students"].map((t) => (
                  <span key={t} className="pgm-hero__crumb">
                    {t}
                  </span>
                ))}
              </div>
            </Fade>
            <Fade dir="right" delay={0.15}>
              <div className="pgm-hero__img">
                <img
                  src="/programs/WhatsApp Image 2026-06-21 at 00.18.41.jpeg"
                  alt="Students presenting"
                />
                <div className="pgm-hero__badge">
                  <strong>6</strong>
                  Program Tracks
                </div>
              </div>
            </Fade>
          </div>
        </section>

        {/* ── SECTION 1: Stats ── */}
        <section className="pgm-section" style={{ padding: "52px 0" }}>
          <div className="pgm-inner">
            <Fade>
              <div className="pgm-stats">
                {stats.map((s, i) => (
                  <div key={i} className="pgm-stat">
                    <div className="pgm-stat__num">{s.num}</div>
                    <div className="pgm-stat__label">{s.label}</div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </section>

        {/* ── SECTION 2: Program Tracks Grid ── */}
        <section className="pgm-section pgm-section--alt">
          <div className="pgm-inner">
            <Fade>
              <div className="pgm-label">Program Tracks</div>
              <h2 className="pgm-h2">
                Every program has a distinct role in the learning journey.
              </h2>
            </Fade>
            <div className="pgm-trackGrid">
              {programTracks.map((track, i) => (
                <Fade key={track.id} delay={i * 0.08}>
                  <div className="pgm-trackCard">
                    <div className="pgm-trackCard__img">
                      <img src={track.image} alt={track.title} />
                    </div>
                    <div className="pgm-trackCard__body">
                      <span className="pgm-trackCard__eyebrow">
                        {track.eyebrow}
                      </span>
                      <h3 className="pgm-trackCard__title">{track.title}</h3>
                      <p className="pgm-trackCard__copy">{track.summary}</p>
                      <div className="pgm-trackCard__tags">
                        {track.points.map((p) => (
                          <span key={p} className="pgm-trackCard__tag">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: What programs build (dark) ── */}
        <section className="pgm-section pgm-section--dark">
          <div className="pgm-inner">
            <Fade>
              <div className="pgm-showcase__head">
                <div className="pgm-label pgm-label--gold">
                  What These Programs Build
                </div>
                <h2 className="pgm-h2 pgm-h2--light">
                  Less noise. More clarity, confidence, and visible speaking
                  growth.
                </h2>
              </div>
            </Fade>
            <div className="pgm-showcase__grid">
              {showcaseCards.map((card, i) => (
                <Fade key={card.title} delay={i * 0.1}>
                  <div className="pgm-showcaseCard">
                    <img src={card.image} alt={card.title} />
                    <div className="pgm-showcaseCard__body">
                      <h3>{card.title}</h3>
                      <p>{card.copy}</p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: Learning Pathway (two-col) ── */}
        <section className="pgm-section">
          <div className="pgm-inner">
            <div className="pgm-twocol">
              <Fade dir="left">
                <div className="pgm-imgText__media">
                  <img
                    src="/programs/WhatsApp Image 2026-06-21 at 00.18.41.jpeg"
                    alt="Students presenting in a Verbattle session"
                  />
                </div>
              </Fade>
              <Fade dir="right" delay={0.15}>
                <div>
                  <div className="pgm-label">Learning Pathway</div>
                  <h2 className="pgm-h2">
                    How learners move through the program ecosystem.
                  </h2>
                  <p className="pgm-body" style={{ marginBottom: 20 }}>
                    Verbattle is not a single event. It is a layered system —
                    designed so students can enter at the right level and keep
                    progressing toward visible outcomes.
                  </p>
                  <div className="pgm-pathway__steps">
                    {pathway.map((item, i) => (
                      <Fade key={item.step} delay={i * 0.1}>
                        <div className="pgm-pathway__step">
                          <div className="pgm-step-num">{item.step}</div>
                          <div className="pgm-step-content">
                            <h3>{item.title}</h3>
                            <p>{item.copy}</p>
                          </div>
                        </div>
                      </Fade>
                    ))}
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: Outcomes (alt, two-col reversed) ── */}
        <section className="pgm-section pgm-section--alt">
          <div className="pgm-inner">
            <div className="pgm-twocol pgm-twocol--rev">
              <Fade dir="right">
                <div>
                  <div className="pgm-label">Student Outcomes</div>
                  <h2 className="pgm-h2">
                    What students actually walk away with.
                  </h2>
                  <p className="pgm-body" style={{ marginBottom: 8 }}>
                    Every track is built around measurable growth — not just
                    participation. These are the outcomes that define
                    Verbattle's impact across schools and competitions.
                  </p>
                  <div className="pgm-outcomes">
                    {outcomes.map((o, i) => (
                      <Fade key={o.title} delay={i * 0.08}>
                        <div className="pgm-outcome">
                          <div className="pgm-outcome__icon">{o.icon}</div>
                          <h3>{o.title}</h3>
                          <p>{o.body}</p>
                        </div>
                      </Fade>
                    ))}
                  </div>
                </div>
              </Fade>
              <Fade dir="left" delay={0.15}>
                <div className="pgm-imgText__duo">
                  <img
                    src="/programs/WhatsApp Image 2026-06-21 at 00.20.49 (2).jpeg"
                    alt="Student practice"
                    style={{ borderRadius: 12 }}
                  />
                  <img
                    src="/programs/WhatsApp Image 2026-06-21 at 00.20.50 (1).jpeg"
                    alt="Young speakers"
                    style={{ borderRadius: 12 }}
                  />
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: Quote interlude ── */}
        <section style={{ background: "#edf3ff" }}>
          <div className="pgm-quote">
            <Fade>
              <span className="pgm-quote__mark">"</span>
              <p className="pgm-quote__text">
                The strongest communicators are not born that way. They are
                trained — through repetition, feedback, and the courage to stand
                in front of a room.
              </p>
              <p className="pgm-quote__attr">— Verbattle Program Philosophy</p>
            </Fade>
          </div>
        </section>

        {/* ── SECTION 7: For Schools & Educators (navy) ── */}
        <section className="pgm-section pgm-section--navy">
          <div className="pgm-inner">
            <div className="pgm-schoolBand">
              <Fade dir="left">
                <div className="pgm-schoolBand__copy">
                  <div className="pgm-label pgm-label--gold">
                    For Schools and Educators
                  </div>
                  <h2 className="pgm-h2 pgm-h2--light">
                    Programs built for institutions, not just individual
                    students.
                  </h2>
                  <p>
                    Verbattle's mix of teacher workshops, school-facing program
                    formats, and student communication tracks makes this a
                    strong entry point for institutional conversations as well.
                  </p>
                </div>
              </Fade>
              <Fade dir="right" delay={0.15}>
                <div className="pgm-schoolBand__stack">
                  {[
                    {
                      title: "Teacher support",
                      desc: "Enable mentors, not just learners.",
                    },
                    {
                      title: "Student progression",
                      desc: "Give schools multiple program entry levels.",
                    },
                    {
                      title: "Program continuity",
                      desc: "Move from training to stage to recognition.",
                    },
                  ].map((item, i) => (
                    <Fade key={item.title} delay={i * 0.1}>
                      <div className="pgm-schoolBand__item">
                        <strong>{item.title}</strong>
                        <span>{item.desc}</span>
                      </div>
                    </Fade>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: Training photos (two-col) ── */}
        <section className="pgm-section">
          <div className="pgm-inner">
            <div className="pgm-twocol">
              <Fade dir="left">
                <div>
                  <div className="pgm-label">Inside the Sessions</div>
                  <h2 className="pgm-h2">
                    Real students. Real practice. Real feedback.
                  </h2>
                  <p className="pgm-body" style={{ marginBottom: 20 }}>
                    Verbattle sessions are not lectures. They are active
                    environments where students speak, get corrected, try again,
                    and develop the muscle of confident communication in real
                    time.
                  </p>
                  <p className="pgm-body">
                    Workshops are designed to keep every student visible and
                    participating — not passive observers watching someone else
                    perform.
                  </p>
                </div>
              </Fade>
              <Fade dir="right" delay={0.15}>
                <div className="pgm-imgText__duo">
                  <img
                    src="/programs/WhatsApp Image 2026-06-21 at 00.20.47.jpeg"
                    alt="Workshop in action"
                    style={{ borderRadius: 12 }}
                  />
                  <img
                    src="/programs/WhatsApp Image 2026-06-21 at 00.18.39 (1).jpeg"
                    alt="Mentor guidance"
                    style={{ borderRadius: 12 }}
                  />
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── SECTION 9: FAQ ── */}
        <section className="pgm-section pgm-section--alt">
          <div className="pgm-inner">
            <Fade>
              <div style={{ maxWidth: 560 }}>
                <div className="pgm-label">Programs FAQ</div>
                <h2 className="pgm-h2">
                  Clear answers before someone decides where to begin.
                </h2>
              </div>
            </Fade>
            <div className="pgm-faq">
              {faqItems.map((item, i) => (
                <FaqItem key={item.q} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 10: CTA ── */}
        <section className="pgm-cta">
          <Fade>
            <h2>Ready to Find the Right Program?</h2>
            <p>
              Whether you are a student, educator, or school — there is a
              Verbattle track built for you.
            </p>
            <a href="#register" className="pgm-btn-white">
              Get Started →
            </a>
            <a href="#tracks" className="pgm-btn-ghost">
              View All Tracks
            </a>
          </Fade>
        </section>
      </main>
      <Footer footerData={footerData} navLinks={navLinks} />
    </div>
  );
}
