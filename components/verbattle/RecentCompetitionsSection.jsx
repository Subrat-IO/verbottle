import { Icon } from "./icons";
import ExpandButton from "./ExpandButton";
import { toPublicAssetPath } from "./media";

export default function RecentCompetitionsSection({ onOpenVideo, videos }) {
  return (
    <section id="recent-competitions" className="vb-section vb-reveal vb-reveal--up">
      <div className="vb-container">
        <div className="vb-section__head">
          <div>
            <span className="vb-section__eyebrow">Verbattle on YouTube</span>
            <h2 className="vb-section__title vb-underline">Recent Competitions</h2>
          </div>
          <a
            href="https://www.youtube.com/@verbattle"
            className="vb-link-red"
            target="_blank"
            rel="noreferrer"
          >
            Open Channel <Icon.Youtube className="vb-icon-14" />
          </a>
        </div>

        <div className="vb-yt-grid">
          {videos.map((video) => (
            <article className="vb-yt-card" key={video.videoId}>
              <div
                className="vb-yt-card__thumb"
                role="button"
                tabIndex={0}
                onClick={() => onOpenVideo(video)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onOpenVideo(video);
                  }
                }}
              >
                <img
                  src={
                    video.thumb
                      ? toPublicAssetPath(video.thumb)
                      : `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`
                  }
                  alt={video.title}
                />
                <span className="vb-yt-card__dur">{video.meta}</span>
                <span className="vb-play vb-play--md" aria-hidden="true">
                  <Icon.Play className="vb-icon-16" />
                </span>
                <ExpandButton label={`Expand ${video.title}`} onClick={() => onOpenVideo(video)} />
              </div>
              <p className="vb-yt-card__title">{video.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
