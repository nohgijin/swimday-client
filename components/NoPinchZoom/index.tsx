"use client";

import { useEffect } from "react";

function NoPinchZoom() {
  useEffect(() => {
    document.body.style.touchAction = "pan-x pan-y";
    const listener = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    document.addEventListener("touchmove", listener, { passive: false });

    return () => {
      document.body.style.touchAction = "";
      document.removeEventListener("touchmove", listener);
    };
  }, []);

  return null;
}

export default NoPinchZoom;
