import loadable from '@loadable/component';

const MobileLoadable = loadable(() => import('./View'));

export default MobileLoadable;
