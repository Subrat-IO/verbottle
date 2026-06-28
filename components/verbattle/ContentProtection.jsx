"use client";

import { useEffect } from "react";

function shouldAllowInteraction(target) {
  return Boolean(target?.closest?.("input, textarea, [contenteditable='true']"));
}

export default function ContentProtection() {
  useEffect(() => {
    const onKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const isModifierPressed = event.ctrlKey || event.metaKey;

      if (!isModifierPressed) {
        return;
      }

      if ((key === "a" || key === "c" || key === "x") && !shouldAllowInteraction(event.target)) {
        event.preventDefault();
      }
    };

    const blockEvent = (event) => {
      if (shouldAllowInteraction(event.target)) {
        return;
      }

      event.preventDefault();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("copy", blockEvent);
    document.addEventListener("cut", blockEvent);
    document.addEventListener("selectstart", blockEvent);
    document.addEventListener("dragstart", blockEvent);
    document.addEventListener("contextmenu", blockEvent);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("copy", blockEvent);
      document.removeEventListener("cut", blockEvent);
      document.removeEventListener("selectstart", blockEvent);
      document.removeEventListener("dragstart", blockEvent);
      document.removeEventListener("contextmenu", blockEvent);
    };
  }, []);

  return null;
}
