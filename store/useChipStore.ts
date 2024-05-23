import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type States = {
  sort: string;
  gender: string[];
  event: string[];
};

type Actions = {
  setSort: (sort: string) => void;
  setGender: (gender: string[]) => void;
  setEvent: (event: string[]) => void;
};

export const useChipStore = create(
  immer<States & Actions>((set, get) => ({
    sort: "",
    gender: [],
    event: [],
    setSort: (sort) => {
      set((state) => {
        state.sort = sort;
      });
    },
    setGender: (gender) => {
      set((state) => {
        state.gender = gender;
      });
    },
    setEvent: (event) => {
      set((state) => {
        state.event = event;
      });
    },
  }))
);
