import ExpandButton from "./ExpandButton";

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
              onClick={() => onOpenMedia({ type: "image", src: sponsor.image, title: sponsor.name, meta: "Verbattle Sponsor" })}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onOpenMedia({ type: "image", src: sponsor.image, title: sponsor.name, meta: "Verbattle Sponsor" });
                }
              }}
            >
              <img src={sponsor.image} alt={sponsor.name} />
              <ExpandButton label={`Expand ${sponsor.name}`} onClick={() => onOpenMedia({ type: "image", src: sponsor.image, title: sponsor.name, meta: "Verbattle Sponsor" })} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
