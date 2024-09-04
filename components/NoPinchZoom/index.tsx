"use client";

import { useEffect } from "react";
import { usePinchZoomStore } from "@/store/usePinchZoomStore";

function NoPinchZoom() {
  const { enablePinchZoom } = usePinchZoomStore();

  useEffect(() => {
    if (!enablePinchZoom) {
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
    } else {
      document.body.style.touchAction = "";
    }
  }, [enablePinchZoom]);

  return null;
}

export default NoPinchZoom;
