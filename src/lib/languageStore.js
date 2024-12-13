import { create } from "zustand";

export const useLanguageStore = create((set) => ({
	language: "sv",
	setLanguage: (newLanguage) => set({ language: newLanguage }),
}));
