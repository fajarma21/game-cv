import loadable from '@loadable/component';
import LoaderIcon from '@/components/LoaderIcon';

const ProfileLoadable = loadable(() => import('./View'), {
  fallback: <LoaderIcon />,
});

export default ProfileLoadable;
