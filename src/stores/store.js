import { create } from "zustand";

export const useStore = create((set) => ({
  authedState: false,
  setAuthedState: (setAuthedState) => set({ authedState: setAuthedState }),
}));
