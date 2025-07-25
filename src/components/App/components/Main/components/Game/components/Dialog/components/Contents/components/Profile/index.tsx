import loadable from '@loadable/component';

const ProfileLoadable = loadable(() => import('./View'), {
  fallback: <div style={{ height: 50, backgroundColor: 'red' }} />,
});

export default ProfileLoadable;
