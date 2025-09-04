import { create } from 'zustand';
import type { ExperienceStore } from './index.types';

const useExperienceStore = create<ExperienceStore>((set) => ({
  experience: null,
  updateExperience: (data) => set(() => ({ experience: data })),
}));

export default useExperienceStore;
