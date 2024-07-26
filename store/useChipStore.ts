import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type States = {
  resultSort: string;
  gender: string[];
  event: string[];
  scheduleSort: string;
  location: string[];
  meter: string[],
  startDate: string;
  depth: string;
};

type Actions = {
  setResultSort: (resultSort: States['resultSort']) => void;
  setGender: (gender: States['gender']) => void;
  setEvent: (event: States['event']) => void;
  setScheduleSort: (scheduleSort: States['scheduleSort']) => void;
  setLocation: (location: States['location']) => void;
  setMeter: (meter: States['meter']) => void;
  setDate: (startDate: States['date']) => void;
  setDepth: (depth: States['depth']) => void;
};

export const initialState: States = {
  resultSort: 'new',
  gender: ['male', 'female'],
  event: ['free', 'back', 'breast', 'butterfly', 'im', 'relay', 'imRelay', 'mixedGenderRelay', 'mixedGenderImRelay'],
  scheduleSort: 'deadline',
  location: [
    'seoul',
    'gyeonggi',
    'incheon',
    'chungbuk',
    'chungnam',
    'daejeon',
    'sejong',
    'gangwon',
    'daegu',
    'gyeongbuk',
    'gyeongnam',
    'busan',
    'ulsan',
    'jeonbuk',
    'jeonnam',
    'gwangju',
    'jeju',
  ],
  meter: ['half', 'full'],
  startDate: '2010-01-01',
  depth: '1.3',
}

export const useChipStore = create(
  immer<States & Actions>((set, get) => ({
    ...initialState,
    setResultSort: (resultSort) => {
      set((state) => {
        state.resultSort = resultSort
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
    setDate: (startDate) => {
      set((state) => {
        state.startDate = startDate
      })
    },
    setDepth: (depth) => {
      set((state) => {
        state.depth = depth
      })
    },
  })),
)
