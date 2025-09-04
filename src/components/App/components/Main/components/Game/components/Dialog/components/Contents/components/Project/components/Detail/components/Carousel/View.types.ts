import type { ProjectData } from '@/types';

export type CarouselProps = Pick<
  ProjectData,
  'imageTotal' | 'videoTotal' | 'prefix' | 'title'
>;
