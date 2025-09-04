import { create } from 'zustand';
import type { ProjectStore } from './index.types';

const useProjectStore = create<ProjectStore>((set) => ({
  project: null,
  updateProject: (data) => set(() => ({ project: data })),
}));

export default useProjectStore;
