import loadable from '@loadable/component';
import LoaderIcon from '@/components/LoaderIcon';

const ProjectLoadable = loadable(() => import('./View'), {
  fallback: <LoaderIcon />,
});

export default ProjectLoadable;
