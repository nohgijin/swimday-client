import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type States = {
  sort: string;
  gender: string[];
  event: string[];
  scheduleSort: string;
  location: string[];
  meter: string[],
  date: string;
  depth: string[]
};

type Actions = {
  setSort: (sort: States['sort']) => void;
  setGender: (gender: States['gender']) => void;
  setEvent: (event: States['event']) => void;
  setScheduleSort: (scheduleSort: States['scheduleSort']) => void;
  setLocation: (location: States['location']) => void;
  setMeter: (meter: States['meter']) => void;
  setDate: (date: States['date']) => void;
  setDepth: (depth: States['depth']) => void;
};

const initialState = {
  sort: '',
  gender: [],
  event: [],
  scheduleSort: '',
  location: [],
  meter: [],
  date: '',
  depth: [],
}

export const useChipStore = create(
  immer<States & Actions>((set, get) => ({
    ...initialState,
    setSort: (sort) => {
      set((state) => {
        state.sort = sort
      })
    },
    setGender: (gender) => {
      set((state) => {
        state.gender = gender
      })
    },
    setEvent: (event) => {
      set((state) => {
        state.event = event
      })
    },
    setScheduleSort: (scheduleSort) => {
      set((state) => {
        state.scheduleSort = scheduleSort
      })
    },
    setLocation: (location) => {
      set((state) => {
        state.location = location
      })
    },
    setMeter: (meter) => {
      set((state) => {
        state.meter = meter
      })
    },
    setDate: (date) => {
      set((state) => {
        state.date = date
      })
    },
    setDepth: (depth) => {
      set((state) => {
        state.depth = depth
      })
    },
  })),
)
