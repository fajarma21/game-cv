import loadable from '@loadable/component';
import LoaderIcon from '@/components/LoaderIcon';

const ExperienceLoadable = loadable(() => import('./View'), {
  fallback: <LoaderIcon />,
});

export default ExperienceLoadable;
