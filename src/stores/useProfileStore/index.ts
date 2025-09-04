import { create } from 'zustand';
import type { ProfileStore } from './index.types';

const useProfileStore = create<ProfileStore>((set) => ({
  profile: null,
  updateProfile: (data) => set(() => ({ profile: data })),
}));

export default useProfileStore;
