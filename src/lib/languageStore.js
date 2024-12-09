import { create } from "zustand";

export const useLanguageStore = create((set) => ({
	language: "en",
	setLanguage: (newLanguage) => set({ language: newLanguage }),
}));
