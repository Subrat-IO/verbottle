import { Icon } from "./icons";

export default function CompetitionsSection({ competitions }) {
  return (
    <section id="competitions" className="vb-section vb-section--tinted vb-reveal vb-reveal--up">
      <div className="vb-container">
        <div className="vb-section__head">
          <div>
            <span className="vb-section__eyebrow">Live Opportunities</span>
            <h2 className="vb-section__title vb-underline">Upcoming Competitions & Programs</h2>
          </div>
          <a href="https://verbattle.com/index.html" className="vb-link-red" target="_blank" rel="noreferrer">
            Visit Official Site <Icon.ArrowRight className="vb-icon-14" />
          </a>
        </div>

        <div className="vb-comp-grid">
          {competitions.map((competition) => (
            <article className="vb-comp-card" key={competition.title}>
              <div className="vb-comp-card__img">
                <img src={competition.image} alt={competition.title} />
              </div>
              <div className="vb-comp-card__body">
                <span className="vb-comp-card__state">{competition.state}</span>
                <h4>{competition.title}</h4>
                <span className="vb-comp-card__date">{competition.date}</span>
                <span className="vb-pill">{competition.status}</span>
                <a href="#recent-competitions" className="vb-link-red vb-link-red--sm">
                  Preview Energy <Icon.ArrowRight className="vb-icon-12" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
