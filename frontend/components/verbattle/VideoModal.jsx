import { useEffect } from "react";
import { Icon } from "./icons";
import { toPublicAssetPath } from "./media";

export default function VideoModal({ activeVideo, onClose }) {
  useEffect(() => {
    if (!activeVideo) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeVideo, onClose]);

  if (!activeVideo) {
    return null;
  }

  return (
    <div className="vb-modal" role="dialog" aria-modal="true" aria-label={activeVideo.title}>
      <button className="vb-modal__backdrop" onClick={onClose} aria-label="Close video" />
      <div className="vb-modal__panel">
        <button className="vb-modal__close" onClick={onClose} aria-label="Close">
          <Icon.Close className="vb-icon-18" />
        </button>
        <div className="vb-modal__frame">
          {activeVideo.type === "image" ? (
            <img src={toPublicAssetPath(activeVideo.src)} alt={activeVideo.title || activeVideo.name} />
          ) : activeVideo.type === "local" ? (
            <video
              src={toPublicAssetPath(activeVideo.src)}
              autoPlay
              controls
              playsInline
              preload="metadata"
            />
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
        <div className="vb-modal__meta">
          <strong>{activeVideo.title || activeVideo.name}</strong>
          {activeVideo.meta ? <span>{activeVideo.meta}</span> : null}
        </div>
      </div>
    </div>
  );
}
