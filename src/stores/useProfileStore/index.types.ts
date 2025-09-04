import type { ProfileData } from '@/types';

export interface ProfileStore {
  profile: ProfileData | null;
  updateProfile: (data: ProfileData) => void;
}
