import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type States = {
  enablePinchZoom: boolean;
};

type Actions = {
  setEnablePinchZoom: (enablePinchZoom: States["enablePinchZoom"]) => void;
};

export const initialState: States = {
  enablePinchZoom: false,
};

export const usePinchZoomStore = create(
  immer<States & Actions>((set, get) => ({
    ...initialState,
    setEnablePinchZoom: (enablePinchZoom) => {
      set((state) => {
        state.enablePinchZoom = enablePinchZoom;
      });
    },
  }))
);
