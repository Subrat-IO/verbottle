import { Icon } from "./icons";
import ExpandButton from "./ExpandButton";
import { toBackgroundImage, toPublicAssetPath } from "./media";

function getHeroKey(video) {
  return video.videoId || video.src;
}

function renderHeroLine(line, accent, index, lines) {
  const isLastLine = index === lines.length - 1;

  if (!isLastLine || !accent || !line.includes(accent)) {
    return (
      <span key={`${line}-${index}`} className="vb-hero__line">
        {line}
      </span>
    );
  }

  return (
    <span key={`${line}-${index}`} className="vb-hero__line vb-hero__line--accent">
      <span className="vb-hero__line-text">{line.replace(accent, "")}</span>
      <span className="vb-text-red vb-hero__line-accent">{accent}</span>
    </span>
  );
}

export default function HeroSection({
  activeHero,
  activeHeroVideo,
  heroVideos,
  onOpenMedia,
  onSelectHero,
}) {

  
  return (
    <section id="home" className="vb-hero">
      <div className="vb-hero__bg" style={{ backgroundImage: toBackgroundImage("/competitions/herobg.webp") }} />
      <div className="vb-hero__mesh" />
      <div className="vb-container vb-hero__inner">
        <div className="vb-hero__left vb-reveal vb-reveal--left">
          <div key={getHeroKey(activeHeroVideo)} className="vb-hero__copy">
            <a className="vb-hero__event-cta" href="/register">
              <span>Register for Upcoming Event</span>
              <Icon.ArrowRight className="vb-icon-14" />
            </a>
            <h1 className="vb-hero__title">
              {activeHeroVideo.titleLines.map((line, index, lines) =>
                renderHeroLine(line, activeHeroVideo.accent, index, lines),
              )}
            </h1>
            <p className="vb-hero__desc">{activeHeroVideo.description}</p>
          </div>
          <div className="vb-hero__cta">
            {activeHeroVideo.ctaLink ? (
              <a className="vb-btn vb-btn--red" href={activeHeroVideo.ctaLink}>
                <span className="vb-btn__label">{activeHeroVideo.cta}</span>
                <span className="vb-btn__circle">
                  <Icon.ArrowRight className="vb-icon-14" />
                </span>
              </a>
            ) : (
              <button className="vb-btn vb-btn--red" onClick={() => onOpenMedia(activeHeroVideo)}>
                <span className="vb-btn__label">{activeHeroVideo.cta}</span>
                <span className="vb-btn__circle">
                  <Icon.ArrowRight className="vb-icon-14" />
                </span>
              </button>
            )}
            <a className="vb-btn vb-btn--hero-secondary" href="#programs">
              <span className="vb-btn__label">Explore Programs</span>
              <span className="vb-btn__circle vb-btn__circle--red">
                <Icon.ArrowRight className="vb-icon-14" />
              </span>
            </a>
          </div>
        </div>

        <div className="vb-hero__media vb-reveal vb-reveal--right">
          <div key={getHeroKey(activeHeroVideo)} className="vb-hero__main-video">
            {activeHeroVideo.type === "local" ? (
              <video
                className="vb-hero__media-element"
                src={toPublicAssetPath(activeHeroVideo.src)}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={activeHeroVideo.thumb ? toPublicAssetPath(activeHeroVideo.thumb) : undefined}
              />
            ) : (
              <iframe
                className="vb-hero__media-element"
                src={`https://www.youtube-nocookie.com/embed/${activeHeroVideo.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${activeHeroVideo.videoId}&modestbranding=1&playsinline=1&rel=0`}
                title={activeHeroVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
            <button
              className="vb-play vb-play--lg"
              aria-label={`Play ${activeHeroVideo.title}`}
              onClick={() => onOpenMedia(activeHeroVideo)}
            >
              <Icon.Play className="vb-icon-20" />
            </button>
            <ExpandButton label={`Expand ${activeHeroVideo.title}`} onClick={() => onOpenMedia(activeHeroVideo)} />
          </div>

          <div className="vb-hero__thumbs">
            {heroVideos.map((video, index) => (
              <button
                key={getHeroKey(video)}
                className={`vb-hero__thumb ${index === activeHero ? "is-active" : ""}`}
                onClick={() => onSelectHero(index)}
              >
                <img src={toPublicAssetPath(video.thumb)} alt={video.title} />
                <span className="vb-hero__thumb-label">{video.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
