import { checkIsMobile } from 'fajarma-package';

import Main from './components/Main';
import Mobile from './components/Mobile';

const App = () => {
  const isMobile = checkIsMobile();

  if (isMobile) return <Mobile />;

  return <Main />;
};

export default App;
