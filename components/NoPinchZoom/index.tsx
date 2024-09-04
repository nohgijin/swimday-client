"use client";

import { useEffect } from "react";

function NoPinchZoom() {
  useEffect(() => {
    const listener = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    document.addEventListener("touchmove", listener, false);

    return () => {
      document.removeEventListener("touchmove", listener, false);
    };
  }, []);

  return null;
}

export default NoPinchZoom;
