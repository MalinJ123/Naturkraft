import { create } from "zustand";

export const useStore = create((set) => ({
  authorizedState: false,
  setAuthorizedState: (setAuthorizedState) =>
    set({ authorizedState: setAuthorizedState }),
}));
