"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/verbattle/Header";
import Footer from "./components/verbattle/Footer";
import { footerData, navLinks } from "./components/verbattle/data";

const galleryFilters = ["All", "Competitions", "Students", "Workshops", "Events"];

const galleryItems = [
  { image: "/image copy 2.png", title: "Awards and recognition", category: "Competitions" },
  { image: "/image copy 3.png", title: "Speaker addressing the audience", category: "Events" },
  { image: "/image copy 4.png", title: "Leadership and partner gathering", category: "Events" },
  { image: "/image copy 5.png", title: "Team and guest moments", category: "Events" },
  { image: "/image copy 6.png", title: "Students at the debate podium", category: "Competitions" },
  { image: "/image copy 7.png", title: "Competition stage group photo", category: "Competitions" },
  { image: "/image copy 8.png", title: "Young participants on stage", category: "Students" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.18.39.jpeg", title: "Classroom training session", category: "Workshops" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.18.39 (1).jpeg", title: "Mentor-guided workshop", category: "Workshops" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.18.39 (2).jpeg", title: "Students in discussion", category: "Students" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.18.40.jpeg", title: "Speaking practice round", category: "Workshops" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.18.40 (1).jpeg", title: "Facilitated coaching moment", category: "Workshops" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.18.40 (2).jpeg", title: "Recognition and celebration", category: "Events" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.18.41.jpeg", title: "Stage celebration frame", category: "Events" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.18.41 (1).jpeg", title: "Learner spotlight", category: "Students" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.18.41 (2).jpeg", title: "Team activity session", category: "Students" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.20.47.jpeg", title: "Workshop room in action", category: "Workshops" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.20.49.jpeg", title: "Student learning environment", category: "Students" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (1).jpeg", title: "Debate club interaction", category: "Students" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.20.49 (2).jpeg", title: "Participant movement and energy", category: "Students" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.20.50.jpeg", title: "Activity-based learning", category: "Workshops" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.20.50 (1).jpeg", title: "Young speakers together", category: "Students" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.20.50 (2).jpeg", title: "Interactive classroom exchange", category: "Workshops" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.20.51.jpeg", title: "Stage rehearsal portrait", category: "Competitions" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.20.52.jpeg", title: "Speaking lineup", category: "Students" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.20.52 (1).jpeg", title: "Peer conversation", category: "Students" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.20.53.jpeg", title: "Certificate presentation", category: "Events" },
  { image: "/programs/WhatsApp Image 2026-06-21 at 00.20.53 (2).jpeg", title: "Completion day moments", category: "Events" },
];

function useReveal() {
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
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Reveal({ className = "", delay = 0, children }) {
  const ref = useReveal();

  return (
    <div ref={ref} className={`vb-reveal vb-reveal--up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function GalleryPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleItems = useMemo(() => {
    if (activeFilter === "All") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="vb gal-page">
      <Header menuOpen={menuOpen} navLinks={navLinks} setMenuOpen={setMenuOpen} />
      <main className="vb-main">
        <section className="gal-hero">
          <div className="vb-container gal-hero__inner">
            <Reveal className="gal-hero__content">
              <span className="gal-hero__kicker">Gallery</span>
              <h1>Gallery</h1>
              <p>
                Home <span>/</span> Gallery
              </p>
            </Reveal>
          </div>
        </section>

        <section className="gal-section">
          <div className="vb-container gal-shell">
            <Reveal className="gal-topbar">
              <span className="gal-section__eyebrow">Verbattle Visual Archive</span>
              <div className="gal-topbar__meta">
                <strong>{visibleItems.length}</strong>
                <span>{activeFilter === "All" ? "Photos" : `${activeFilter} Photos`}</span>
              </div>
            </Reveal>

            <Reveal className="gal-filterBar" delay={40}>
              {galleryFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`gal-filterBar__btn${activeFilter === filter ? " is-active" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </Reveal>

            <div className="gal-grid">
              {visibleItems.map((item, index) => (
                <Reveal key={`${item.image}-${item.title}`} className="gal-card" delay={index * 28}>
                  <img src={item.image} alt={item.title} />
                  <div className="gal-card__meta">
                    <span>{item.category}</span>
                    <strong>{item.title}</strong>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer footerData={footerData} navLinks={navLinks} />
    </div>
  );
}
