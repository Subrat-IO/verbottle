import { Icon } from "./icons";

export default function StatsSection({ stats }) {
  return (
    <section className="vb-stats-wrap vb-reveal vb-reveal--up">
      <div className="vb-container">
        <div className="vb-stats">
          {stats.map((item, index) => {
            const StatIcon = Icon[item.icon];

            return (
              <div className="vb-stats__item" key={item.label}>
                <span className="vb-stats__icon" style={{ background: item.bg, color: item.color }}>
                  <StatIcon className="vb-icon-20" />
                </span>
                <span className="vb-stats__text">
                  <strong>{item.value}</strong>
                  <small>{item.label}</small>
                </span>
                {index < stats.length - 1 && <span className="vb-stats__divider" />}
              </div>
            );
          })}

          <div className="vb-stats__item vb-stats__rating">
            <span className="vb-stats__score">22,000+</span>
            <span className="vb-stats__stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Icon.Star key={index} className="vb-icon-14" />
              ))}
            </span>
            <small className="vb-stats__trust">Student Lives Touched</small>
          </div>
        </div>
      </div>
    </section>
  );
}
