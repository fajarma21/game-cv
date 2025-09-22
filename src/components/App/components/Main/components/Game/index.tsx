import loadable from '@loadable/component';

const GameLoadable = loadable(() => import('./View'));

export default GameLoadable;
