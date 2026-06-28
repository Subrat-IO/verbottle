import Link from "next/link";
import { Icon } from "./icons";
import ExpandButton from "./ExpandButton";
import { toPublicAssetPath } from "./media";

export default function GallerySection({
  activeTab,
  galleryItems,
  galleryTabs,
  onSetActiveTab,
  onOpenMedia,
}) {
  return (
    <section id="gallery" className="vb-section vb-reveal vb-reveal--up">
      <div className="vb-container">
        <div className="vb-section__head">
          <div>
            <span className="vb-section__eyebrow">Visual Story</span>
            <h2 className="vb-section__title vb-underline">Gallery</h2>
          </div>
        </div>

        <div className="vb-gallery-tabs">
          {galleryTabs.map((tab) => (
            <button
              key={tab}
              className={`vb-gallery-tab ${activeTab === tab ? "is-active" : ""}`}
              onClick={() => onSetActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div key={activeTab} className="vb-gallery-grid vb-gallery-grid--animated">
          {galleryItems.map((item, index) => (
            <article
              className="vb-gallery-item"
              key={`${item.title}-${item.image}`}
              role="button"
              tabIndex={0}
              onClick={() =>
                onOpenMedia({
                  type: "image",
                  src: item.image,
                  title: item.title,
                  meta: item.tags.join(" | "),
                  galleryItems,
                  currentIndex: index,
                })
              }
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onOpenMedia({
                    type: "image",
                    src: item.image,
                    title: item.title,
                    meta: item.tags.join(" | "),
                    galleryItems,
                    currentIndex: index,
                  });
                }
              }}
            >
              <img src={toPublicAssetPath(item.image)} alt={item.title} />
              <ExpandButton
                label={`Expand ${item.title}`}
                onClick={() =>
                  onOpenMedia({
                    type: "image",
                    src: item.image,
                    title: item.title,
                    meta: item.tags.join(" | "),
                    galleryItems,
                    currentIndex: index,
                  })
                }
              />
              <div className="vb-gallery-item__overlay">
                <strong>{item.title}</strong>
                <small>{item.tags.join(" | ")}</small>
              </div>
            </article>
          ))}
        </div>

        <div className="vb-gallery-more">
          <Link href="/gallery" className="vb-btn vb-btn--red vb-btn--sm">
            <span className="vb-btn__text">Load More</span>
            <span className="vb-btn__circle">
              <Icon.ArrowRight className="vb-icon-14" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
