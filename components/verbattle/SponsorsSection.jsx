import ExpandButton from "./ExpandButton";
import { toPublicAssetPath } from "./media";

export default function SponsorsSection({ sponsors, onOpenMedia }) {
  return (
    <section className="vb-section vb-section--sponsors vb-reveal vb-reveal--up">
      <div className="vb-container">
        <div className="vb-sponsors__heading">
          <span className="vb-sponsors__eyebrow">Verbattle</span>
          <h2>Our Sponsors</h2>
          <p>
            We extend our heartfelt gratitude to our sponsors for their invaluable support and
            commitment. Their partnership drives our mission forward, making our endeavors a success.
          </p>
        </div>

        <div className="vb-sponsors__grid">
          {sponsors.map((sponsor) => (
            <div
              className="vb-sponsor-card"
              key={sponsor.name}
              onClick={() =>
                sponsor.image
                  ? onOpenMedia({
                      type: "image",
                      src: sponsor.image,
                      title: sponsor.name,
                      meta: "Verbattle Sponsor",
                    })
                  : undefined
              }
              role={sponsor.image ? "button" : undefined}
              tabIndex={sponsor.image ? 0 : undefined}
              onKeyDown={(event) => {
                if (sponsor.image && (event.key === "Enter" || event.key === " ")) {
                  event.preventDefault();
                  onOpenMedia({ type: "image", src: sponsor.image, title: sponsor.name, meta: "Verbattle Sponsor" });
                }
              }}
            >
              {sponsor.image ? (
                <>
                  <img src={toPublicAssetPath(sponsor.image)} alt={sponsor.name} />
                  <ExpandButton
                    label={`Expand ${sponsor.name}`}
                    onClick={() =>
                      onOpenMedia({ type: "image", src: sponsor.image, title: sponsor.name, meta: "Verbattle Sponsor" })
                    }
                  />
                </>
              ) : (
                <div
                  className="vb-sponsor-card__fallback"
                  style={{ "--sponsor-accent": sponsor.accent || "#ef4444" }}
                >
                  <span className="vb-sponsor-card__mark">{sponsor.mark || sponsor.name.slice(0, 2)}</span>
                  <strong>{sponsor.name}</strong>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
