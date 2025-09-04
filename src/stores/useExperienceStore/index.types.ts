import type { ExperienceData } from '@/types';

export interface ExperienceStore {
  experience: ExperienceData[] | null;
  updateExperience: (data: ExperienceData[]) => void;
}
