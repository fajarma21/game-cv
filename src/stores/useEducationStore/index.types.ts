import type { EducationData } from '@/types';

export interface EducationStore {
  education: EducationData | null;
  updateEducation: (data: EducationData) => void;
}
