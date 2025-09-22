import loadable from '@loadable/component';

import Fallback from './View.fallback';

const GameLoadable = loadable(() => import('./View'), {
  fallback: <Fallback />,
});

export default GameLoadable;
