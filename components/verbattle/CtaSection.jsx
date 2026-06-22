import { Icon } from "./icons";
import Link from "next/link";

export default function CtaSection({ onOpenVideo, spotlightVideo }) {
  return (
    <section className="vb-cta-wrap vb-reveal vb-reveal--up">
      <div className="vb-container">
        <div className="vb-cta">
          <div className="vb-cta__visual">
            <img
              className="vb-cta__students"
              src={spotlightVideo.thumb}
              alt={spotlightVideo.title}
            />
            <button className="vb-play vb-play--lg vb-cta__play" onClick={() => onOpenVideo(spotlightVideo)}>
              <Icon.Play className="vb-icon-20" />
            </button>
          </div>

          <div className="vb-cta__body">
            <span className="vb-section__eyebrow vb-section__eyebrow--light">Join The Energy</span>
            <h2>
              Register For The
              <br />
              Next Stage.
            </h2>
            <p>
              Move from browsing to booking with a clearer call-to-action that takes visitors straight
              to the registration page.
            </p>
            <div className="vb-hero__cta">
              <Link className="vb-btn vb-btn--red" href="/register">
                Register Now
                <span className="vb-btn__circle">
                  <Icon.ArrowRight className="vb-icon-14" />
                </span>
              </Link>
              <button className="vb-btn vb-btn--white" onClick={() => onOpenVideo(spotlightVideo)}>
                Replay Feature
                <span className="vb-btn__circle vb-btn__circle--red">
                  <Icon.Play className="vb-icon-14" />
                </span>
              </button>
            </div>
          </div>

          <Icon.Trophy className="vb-cta__trophy" />
        </div>
      </div>
    </section>
  );
}
