"use client";

import { Icon } from "./icons";

export default function CompetitionsSection({ activities = [] }) {
  if (!activities.length) {
    return null;
  }

  return (
    <section id="competitions" className="vb-section vb-section--tinted vb-reveal vb-reveal--up">
      <div className="vb-container">
        <div className="vb-section__head">
          <div>
            <span className="vb-section__eyebrow">Upcoming Activities</span>
            <h2 className="vb-section__title vb-underline">Upcoming Activities and Events of Verbattle</h2>
          </div>
          <a href="/register" className="vb-link-red">
            Register Interest <Icon.ArrowRight className="vb-icon-14" />
          </a>
        </div>

        <div className="vb-upcoming-grid">
          {activities.map((activity, index) => (
            <article className="vb-upcoming-card" key={`${activity.timeframe}-${activity.title}`}>
              <div className="vb-upcoming-card__image">
                <img
                  src={activity.image}
                  alt={`${activity.title} event image`}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className="vb-upcoming-card__badge">
                  <Icon.Calendar className="vb-icon-14" />
                  <span>{activity.accent}</span>
                </div>
              </div>

              <div className="vb-upcoming-card__body">
                <div className="vb-upcoming-card__timeframe">{activity.timeframe}</div>
                <h3 className="vb-upcoming-card__title">{activity.title}</h3>
                <p className="vb-upcoming-card__paragraph">{activity.paragraph}</p>
                <div className="vb-upcoming-card__meta">
                  <span>
                    <strong>{activity.format}</strong>
                  </span>
                  <span className="vb-upcoming-card__location">
                    <Icon.MapPin className="vb-icon-12" />
                    {activity.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
