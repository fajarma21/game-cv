import type { ProjectData } from '@/types';

export interface ProjectStore {
  project: ProjectData[] | null;
  updateProject: (data: ProjectData[]) => void;
}
