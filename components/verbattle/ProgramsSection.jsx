import { impactList } from "./data";
import { Icon } from "./icons";

export default function ProgramsSection({ programs }) {
  return (
    <section id="programs" className="vb-section vb-reveal vb-reveal--up">
      <div className="vb-container">
        <div className="vb-section__head">
          <div>
            <span className="vb-section__eyebrow">Programs</span>
            <h2 className="vb-section__title vb-underline">Programs That Shape Future Leaders</h2>
          </div>
          <a href="#contact" className="vb-link-red">
            Build A Custom Program <Icon.ArrowRight className="vb-icon-14" />
          </a>
        </div>

        <div className="vb-programs">
          {programs.map((program) => {
            const ProgramIcon = Icon[program.icon];

            return (
              <article className="vb-program-card" key={program.title}>
                <div className="vb-program-card__art" style={{ background: program.bg }}>
                  <span
                    className="vb-program-card__badge"
                    style={{ background: program.iconBg, color: program.iconColor }}
                  >
                    <ProgramIcon className="vb-icon-22" />
                  </span>
                  <img className="vb-program-card__img" src={program.image} alt={program.title} />
                </div>
                <div className="vb-program-card__body">
                  <h3>{program.title}</h3>
                  <p>{program.desc}</p>
                  <a href="#recent-competitions" className="vb-link-red vb-link-red--sm">
                    See It In Action <Icon.ArrowRight className="vb-icon-12" />
                  </a>
                </div>
              </article>
            );
          })}

          <aside className="vb-impact-card">
            <h3>Why It Works</h3>
            <ul>
              {impactList.map((item) => (
                <li key={item}>
                  <span className="vb-impact-check">
                    <Icon.Check className="vb-icon-12" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Icon.Trophy className="vb-impact-card__trophy" />
          </aside>
        </div>
      </div>
    </section>
  );
}
