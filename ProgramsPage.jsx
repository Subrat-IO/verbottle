"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./components/verbattle/Header";
import Footer from "./components/verbattle/Footer";
import { footerData, navLinks } from "./components/verbattle/data";

const programTracks = [
  {
    id: "forum",
    eyebrow: "Conversation-led",
    title: "Forum",
    summary:
      "A guided speaking space where students learn to listen, respond, and build confidence before stepping into more competitive formats.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.52.jpeg",
    points: ["Confidence building", "Discussion flow", "Learner-friendly entry"],
  },
  {
    id: "academy",
    eyebrow: "Structured growth",
    title: "Verbattle Academy",
    summary:
      "A deeper training route for students who want sustained improvement in communication, public speaking, and stage performance.",
    image: "/programs/WhatsApp Image 2026-06-21 at 00.20.48.jpeg",
    points: ["Regular learning rhythm", "Performance coaching", "Long-term improvement"],
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
    points: ["Younger learners", "Creative expression", "Confidence through activity"],
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

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return ref;
}

function Reveal({ className = "", children, delay = 0 }) {
  const ref = useReveal();

  return (
    <div ref={ref} className={`vb-reveal vb-reveal--up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function ProgramsHero() {
  return (
    <section className="pgm-hero">
      <div
        className="pgm-hero__bg"
        style={{ backgroundImage: "url(/programs/WhatsApp Image 2026-06-21 at 00.20.49 (3).jpeg)" }}
      />
      <div className="pgm-hero__mesh" />
      <div className="vb-container pgm-hero__inner">
        <Reveal className="pgm-hero__content">
          <span className="pgm-hero__eyebrow">Programs</span>
          <h1 className="pgm-hero__title">
            <span>Programs that shape</span>
            <span className="pgm-hero__titleAccent">clear thinkers,</span>
            <span>confident speakers, and stronger school communities.</span>
          </h1>
          <p className="pgm-hero__desc">
            Verbattle&apos;s program ecosystem is built around communication, debate, confidence, educator support,
            and student growth. Each format serves a different need, but all of them move toward better thinking and
            better expression.
          </p>
          <div className="pgm-hero__actions">
            <a href="#tracks" className="vb-btn vb-btn--red">
              Explore Programs
              <span className="vb-btn__circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
            </a>
            <a href="/register" className="pgm-hero__ghost">
              Start Registration
            </a>
          </div>
        </Reveal>

        <Reveal className="pgm-hero__visual" delay={80}>
          <div className="pgm-hero__feature">
            <img
              src="/programs/WhatsApp Image 2026-06-21 at 00.20.48.jpeg"
              alt="Verbattle students in program session"
            />
            <div className="pgm-hero__featureCopy">
              <strong>Signature learning routes</strong>
              <p>Forum, Academy, Debate Club, Activity Zone, Teachers Workshop, and Certification.</p>
            </div>
          </div>
          <div className="pgm-hero__stats">
            <article>
              <strong>6</strong>
              <span>core formats</span>
            </article>
            <article>
              <strong>Students</strong>
              <span>school-first design</span>
            </article>
            <article>
              <strong>Teachers</strong>
              <span>faculty support included</span>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProgramsTracks() {
  return (
    <section className="pgm-section pgm-section--surface" id="tracks">
      <div className="vb-container">
        <Reveal className="pgm-section__head">
          <span className="pgm-section__eyebrow">Program Tracks</span>
          <h2 className="pgm-section__title">Every program has a distinct role in the learning journey.</h2>
        </Reveal>

        <div className="pgm-trackGrid">
          {programTracks.map((track, index) => (
            <Reveal key={track.id} className="pgm-trackCard" delay={index * 70}>
              <div className="pgm-trackCard__media">
                <img src={track.image} alt={track.title} />
              </div>
              <div className="pgm-trackCard__body">
                <span>{track.eyebrow}</span>
                <h3>{track.title}</h3>
                <p>{track.summary}</p>
                <div className="pgm-trackCard__points">
                  {track.points.map((point) => (
                    <small key={point}>{point}</small>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramsShowcase() {
  return (
    <section className="pgm-section pgm-section--dark">
      <div className="vb-container">
        <div className="pgm-showcase">
          <Reveal className="pgm-showcase__lead">
            <span className="pgm-section__eyebrow pgm-section__eyebrow--light">What these programs build</span>
            <h2 className="pgm-section__title pgm-section__title--light">
              Less noise. More clarity, confidence, and visible speaking growth.
            </h2>
          </Reveal>

          <div className="pgm-showcase__grid">
            {showcaseCards.map((card, index) => (
              <Reveal key={card.title} className="pgm-showcaseCard" delay={index * 90}>
                <img src={card.image} alt={card.title} />
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsPathway() {
  return (
    <section className="pgm-section">
      <div className="vb-container">
        <div className="pgm-pathway">
          <Reveal className="pgm-pathway__media">
            <img
              src="/programs/WhatsApp Image 2026-06-21 at 00.18.41.jpeg"
              alt="Students presenting in a Verbattle session"
            />
          </Reveal>

          <div className="pgm-pathway__content">
            <Reveal>
              <span className="pgm-section__eyebrow">Learning Pathway</span>
              <h2 className="pgm-section__title">A stronger programs page should show how learners move forward.</h2>
            </Reveal>

            <div className="pgm-pathway__steps">
              {pathway.map((item, index) => (
                <Reveal key={item.step} className="pgm-pathway__step" delay={index * 80}>
                  <strong>{item.step}</strong>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSchoolBand() {
  return (
    <section className="pgm-section pgm-section--surface">
      <div className="vb-container">
        <Reveal className="pgm-schoolBand">
          <div className="pgm-schoolBand__copy">
            <span className="pgm-section__eyebrow">For Schools and Educators</span>
            <h2 className="pgm-section__title">Programs should work for institutions too, not just individual students.</h2>
            <p>
              Verbattle&apos;s mix of teacher workshops, school-facing program formats, and student communication
              tracks makes this page a stronger entry point for institutional conversations as well.
            </p>
          </div>
          <div className="pgm-schoolBand__stack">
            <article>
              <strong>Teacher support</strong>
              <span>Enable mentors, not just learners.</span>
            </article>
            <article>
              <strong>Student progression</strong>
              <span>Give schools multiple program entry levels.</span>
            </article>
            <article>
              <strong>Program continuity</strong>
              <span>Move from training to stage to recognition.</span>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProgramsFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="pgm-section">
      <div className="vb-container">
        <Reveal className="pgm-section__head">
          <span className="pgm-section__eyebrow">Programs FAQ</span>
          <h2 className="pgm-section__title">Clear answers before someone decides where to begin.</h2>
        </Reveal>

        <div className="pgm-faq">
          {faqItems.map((item, index) => (
            <Reveal key={item.q} className={`pgm-faq__item${open === index ? " is-open" : ""}`} delay={index * 60}>
              <button className="pgm-faq__button" onClick={() => setOpen(open === index ? -1 : index)}>
                <span>{item.q}</span>
                <span>{open === index ? "−" : "+"}</span>
              </button>
              {open === index ? <p className="pgm-faq__answer">{item.a}</p> : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProgramsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="vb">
      <Header menuOpen={menuOpen} navLinks={navLinks} setMenuOpen={setMenuOpen} />
      <main className="vb-main">
        <ProgramsHero />
        <ProgramsTracks />
        <ProgramsShowcase />
        <ProgramsPathway />
        <ProgramsSchoolBand />
        <ProgramsFaq />
      </main>
      <Footer footerData={footerData} navLinks={navLinks} />
    </div>
  );
}
