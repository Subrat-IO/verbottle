import ExpandButton from "./ExpandButton";

export default function AwardeesSection({ awardees, onOpenMedia }) {
  return (
    <section id="awardees" className="vb-section vb-section--dark vb-reveal vb-reveal--up">
      <div className="vb-container">
        <div className="vb-section__head">
          <div>
            <span className="vb-section__eyebrow vb-section__eyebrow--light">Wall Of Fame</span>
            <h2 className="vb-section__title vb-section__title--light vb-underline">Awardees</h2>
          </div>
          <p className="vb-section__copy">
            Winner categories inspired by the live Verbattle site, redesigned as cleaner modular cards.
          </p>
        </div>

        <div className="vb-awardees">
          {awardees.map((award) => (
            <article className="vb-award-card" key={award.title}>
              <div className="vb-award-card__badge">Winner</div>
              <div
                className="vb-award-card__media"
                onClick={() => onOpenMedia({ type: "image", src: award.image, title: award.title, meta: award.subtitle })}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onOpenMedia({ type: "image", src: award.image, title: award.title, meta: award.subtitle });
                  }
                }}
              >
                <img src={award.image} alt={award.title} />
                <ExpandButton label={`Expand ${award.title}`} onClick={() => onOpenMedia({ type: "image", src: award.image, title: award.title, meta: award.subtitle })} />
              </div>
              <h3>{award.title}</h3>
              <p>{award.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
