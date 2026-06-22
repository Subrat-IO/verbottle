import { Icon } from "./icons";

export default function ExpandButton({ label = "Expand", onClick }) {
  return (
    <button
      type="button"
      className="vb-expand"
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      <Icon.Expand className="vb-icon-14" />
    </button>
  );
}
