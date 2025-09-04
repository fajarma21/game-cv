import loadable from '@loadable/component';
import LoaderIcon from '@/components/LoaderIcon';

const EducationLoadable = loadable(() => import('./View'), {
  fallback: <LoaderIcon />,
});

export default EducationLoadable;
