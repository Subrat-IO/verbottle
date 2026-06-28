import { Icon } from "./icons";
import ExpandButton from "./ExpandButton";
import { toPublicAssetPath } from "./media";

export default function FounderSection({ founder, onOpenMedia, testimonial }) {
  return (
    <section id="founder" className="vb-section vb-reveal vb-reveal--up">
      <div className="vb-container vb-split">
        <div className="vb-founder">
          <span className="vb-section__eyebrow">From Our Founder</span>
          <h2 className="vb-section__title vb-underline vb-underline--sm">{founder.name}</h2>
          <div className="vb-founder__row">
            <div
              className="vb-founder__photo-wrap"
              onClick={() => onOpenMedia({ type: "image", src: founder.image, title: founder.name, meta: founder.role })}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onOpenMedia({ type: "image", src: founder.image, title: founder.name, meta: founder.role });
                }
              }}
            >
              <img className="vb-founder__photo" src={toPublicAssetPath(founder.image)} alt={founder.name} />
              <ExpandButton label={`Expand ${founder.name}`} onClick={() => onOpenMedia({ type: "image", src: founder.image, title: founder.name, meta: founder.role })} />
            </div>
            <div className="vb-founder__quote">
              <p>{founder.quote}</p>
              <div className="vb-founder__sign">
                <div>
                  <strong>{founder.name}</strong>
                  <small>{founder.role}</small>
                </div>
                <span className="vb-founder__signature">{founder.name}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="vb-testimonials">
          <div className="vb-section__head vb-section__head--inline">
            <div>
              <span className="vb-section__eyebrow">Channel Spotlight</span>
              <h2 className="vb-section__title vb-underline vb-underline--sm">Watch The Movement</h2>
            </div>
            <button className="vb-link-red vb-link-button" onClick={() => onOpenMedia(testimonial)}>
              Play Feature <Icon.ArrowRight className="vb-icon-14" />
            </button>
          </div>
          <div className="vb-testimonial-card">
            <div
              className="vb-testimonial-card__video"
              onClick={() => onOpenMedia(testimonial)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onOpenMedia(testimonial);
                }
              }}
            >
              <img src={toPublicAssetPath(testimonial.image)} alt={testimonial.title || testimonial.name} />
              <button className="vb-play vb-play--md" aria-label="Play highlight" onClick={() => onOpenMedia(testimonial)}>
                <Icon.Play className="vb-icon-16" />
              </button>
              <ExpandButton label={`Expand ${testimonial.name}`} onClick={() => onOpenMedia(testimonial)} />
            </div>
            <div className="vb-testimonial-card__body">
              <p>&quot;{testimonial.quote}&quot;</p>
              <strong>{testimonial.name}</strong>
              <small>{testimonial.role}</small>
              <div className="vb-testimonial-card__foot">
                <span className="vb-stats__stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon.Star key={index} className="vb-icon-14" />
                  ))}
                </span>
                <span className="vb-chip">Animated YouTube popup enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
