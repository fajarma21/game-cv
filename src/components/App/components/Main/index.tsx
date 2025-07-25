import loadable from '@loadable/component';

const MainLoadable = loadable(() => import('./View'));

export default MainLoadable;
