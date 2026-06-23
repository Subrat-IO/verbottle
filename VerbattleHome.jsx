'use client';

import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/verbattle/Header";
import HeroSection from "./components/verbattle/HeroSection";
import StatsSection from "./components/verbattle/StatsSection";
import ProgramsSection from "./components/verbattle/ProgramsSection";
import CompetitionsSection from "./components/verbattle/CompetitionsSection";
import GallerySection from "./components/verbattle/GallerySection";
import FounderSection from "./components/verbattle/FounderSection";
import AwardeesSection from "./components/verbattle/AwardeesSection";
import SponsorsSection from "./components/verbattle/SponsorsSection";
import RecentCompetitionsSection from "./components/verbattle/RecentCompetitionsSection";
import CtaSection from "./components/verbattle/CtaSection";
import Footer from "./components/verbattle/Footer";
import VideoModal from "./components/verbattle/VideoModal";
import {
  awardees,
  competitions,
  footerData,
  founder,
  galleryItems,
  galleryTabs,
  heroVideos,
  navLinks,
  programs,
  recentVideos,
  sponsors,
  stats,
  testimonial,
} from "./components/verbattle/data";

export default function VerbattleHome() {
  const [activeTab, setActiveTab] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHero, setActiveHero] = useState(0);
  const [activeMedia, setActiveMedia] = useState(null);

  const filteredGalleryItems = useMemo(() => {
    if (activeTab === "All") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.tags.includes(activeTab));
  }, [activeTab]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroVideos.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".vb-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = activeMedia ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [activeMedia]);

  const activeHeroVideo = heroVideos[activeHero];

  const openVideo = (video) => {
    setActiveMedia(video);
  };

  const closeVideo = () => {
    setActiveMedia(null);
  };

  const canNavigateGallery = Boolean(
    activeMedia?.type === "image" &&
      Array.isArray(activeMedia?.galleryItems) &&
      activeMedia.galleryItems.length > 1,
  );

  const activeGalleryIndex =
    activeMedia?.type === "image" && Number.isInteger(activeMedia?.currentIndex)
      ? activeMedia.currentIndex
      : 0;

  const activeGalleryCount =
    activeMedia?.type === "image" && Array.isArray(activeMedia?.galleryItems)
      ? activeMedia.galleryItems.length
      : 0;

  const stepGallery = (direction) => {
    if (!canNavigateGallery) return;

    const items = activeMedia.galleryItems;
    const nextIndex =
      (activeGalleryIndex + direction + items.length) % items.length;
    const nextItem = items[nextIndex];

    setActiveMedia({
      ...activeMedia,
      src: nextItem.image,
      title: nextItem.title,
      meta: nextItem.tags?.join(" | ") || activeMedia.meta,
      currentIndex: nextIndex,
    });
  };

  return (
    <div className="vb vb-shell">
      <Header
        menuOpen={menuOpen}
        navLinks={navLinks}
        setMenuOpen={setMenuOpen}
      />

      <div className="vb-main">
        <main>
          <HeroSection
            activeHero={activeHero}
            activeHeroVideo={activeHeroVideo}
            heroVideos={heroVideos}
            onOpenMedia={openVideo}
            onSelectHero={setActiveHero}
          />

          <StatsSection stats={stats} />
          <ProgramsSection programs={programs} />
          <CompetitionsSection competitions={competitions} />
          <GallerySection
            activeTab={activeTab}
            galleryItems={filteredGalleryItems}
            galleryTabs={galleryTabs}
            onOpenMedia={openVideo}
            onSetActiveTab={setActiveTab}
          />
          <SponsorsSection sponsors={sponsors} onOpenMedia={openVideo} />
          <FounderSection founder={founder} onOpenMedia={openVideo} testimonial={testimonial} />
          <AwardeesSection awardees={awardees} onOpenMedia={openVideo} />
          <RecentCompetitionsSection onOpenVideo={openVideo} videos={recentVideos} />
          <CtaSection onOpenVideo={openVideo} spotlightVideo={heroVideos[1]} />
        </main>

        <Footer footerData={footerData} navLinks={navLinks} />
      </div>

      <VideoModal
        activeVideo={activeMedia}
        onClose={closeVideo}
        onPrevious={() => stepGallery(-1)}
        onNext={() => stepGallery(1)}
        canNavigate={canNavigateGallery}
        positionLabel={
          canNavigateGallery ? `${activeGalleryIndex + 1} / ${activeGalleryCount}` : ""
        }
      />
    </div>
  );
}
