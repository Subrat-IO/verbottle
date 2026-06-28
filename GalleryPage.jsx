"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/verbattle/Header";
import Footer from "./components/verbattle/Footer";
import ExpandButton from "./components/verbattle/ExpandButton";
import VideoModal from "./components/verbattle/VideoModal";
import { toPublicAssetPath } from "./components/verbattle/media";
import { footerData, galleryItems, navLinks } from "./components/verbattle/data";

const galleryFilters = ["All", "Competitions", "Students", "Workshops", "Events"];

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
    <div
      ref={ref}
      className={`vb-reveal vb-reveal--up ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function GalleryPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeMedia, setActiveMedia] = useState(null);

  const visibleItems = useMemo(() => {
    if (activeFilter === "All") {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === activeFilter || item.tags.includes(activeFilter),
    );
  }, [activeFilter]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = activeMedia ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [activeMedia]);

  function openGalleryItem(index) {
    const item = visibleItems[index];
    if (!item) return;

    setActiveMedia({
      type: "image",
      src: item.image,
      title: item.title,
      meta: item.category,
      galleryItems: visibleItems.map((entry) => ({
        image: entry.image,
        title: entry.title,
        tags: [entry.category],
      })),
      currentIndex: index,
    });
  }

  function stepGallery(direction) {
    if (!activeMedia?.galleryItems?.length) return;

    const items = activeMedia.galleryItems;
    const currentIndex = Number.isInteger(activeMedia.currentIndex)
      ? activeMedia.currentIndex
      : 0;
    const nextIndex = (currentIndex + direction + items.length) % items.length;
    const nextItem = items[nextIndex];

    setActiveMedia({
      ...activeMedia,
      src: nextItem.image,
      title: nextItem.title,
      meta: nextItem.tags?.join(" | ") || "",
      currentIndex: nextIndex,
    });
  }

  const canNavigate = Boolean(
    activeMedia?.type === "image" &&
      Array.isArray(activeMedia?.galleryItems) &&
      activeMedia.galleryItems.length > 1,
  );

  const currentPosition = canNavigate
    ? `${(activeMedia?.currentIndex ?? 0) + 1} / ${activeMedia.galleryItems.length}`
    : "";

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
              <div>
                <span className="gal-section__eyebrow">Verbattle Visual Archive</span>
              </div>
              {/* <div className="gal-topbar__meta">
                <strong>{visibleItems.length}</strong>
                <span>Visible Images</span>
              </div> */}
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
                  <article
                    className="gal-card__button"
                    role="button"
                    tabIndex={0}
                    onClick={() => openGalleryItem(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openGalleryItem(index);
                      }
                    }}
                  >
                    <img src={toPublicAssetPath(item.image)} alt={item.title} />
                    <ExpandButton
                      label={`Expand ${item.title}`}
                      onClick={() => openGalleryItem(index)}
                    />
                    <div className="gal-card__meta">
                      <span>{item.category}</span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer footerData={footerData} navLinks={navLinks} />
      <VideoModal
        activeVideo={activeMedia}
        onClose={() => setActiveMedia(null)}
        onPrevious={() => stepGallery(-1)}
        onNext={() => stepGallery(1)}
        canNavigate={canNavigate}
        positionLabel={currentPosition}
      />
    </div>
  );
}
