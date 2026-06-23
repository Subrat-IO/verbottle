import { useEffect } from "react";
import { Icon } from "./icons";
import { toPublicAssetPath } from "./media";

export default function VideoModal({
  activeVideo,
  onClose,
  onPrevious,
  onNext,
  canNavigate = false,
  positionLabel = "",
}) {
  useEffect(() => {
    if (!activeVideo) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (canNavigate && activeVideo.type === "image" && event.key === "ArrowLeft") {
        onPrevious?.();
      } else if (canNavigate && activeVideo.type === "image" && event.key === "ArrowRight") {
        onNext?.();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeVideo, canNavigate, onClose, onNext, onPrevious]);

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
        {canNavigate && activeVideo.type === "image" ? (
          <>
            <button
              className="vb-modal__nav vb-modal__nav--prev"
              type="button"
              onClick={onPrevious}
              aria-label="Previous image"
            >
              <Icon.ChevronLeft className="vb-icon-18" />
            </button>
            <button
              className="vb-modal__nav vb-modal__nav--next"
              type="button"
              onClick={onNext}
              aria-label="Next image"
            >
              <Icon.ChevronRight className="vb-icon-18" />
            </button>
          </>
        ) : null}
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
          <span>
            {activeVideo.meta ? `${activeVideo.meta}${positionLabel ? `  |  ${positionLabel}` : ""}` : positionLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
