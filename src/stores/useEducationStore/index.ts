import { create } from 'zustand';
import type { EducationStore } from './index.types';

const useEducationStore = create<EducationStore>((set) => ({
  education: null,
  updateEducation: (data) =>
    set(() => ({
      education: data,
    })),
}));

export default useEducationStore;
