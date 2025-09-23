import { checkIsMobile, checkTouchScreen } from 'fajarma-package';

import Main from './components/Main';
import Mobile from './components/Mobile';

const App = () => {
  const isMobile = checkIsMobile();
  const isTouchScreen = checkTouchScreen();

  if (isMobile || isTouchScreen) return <Mobile />;

  return <Main />;
};

export default App;
