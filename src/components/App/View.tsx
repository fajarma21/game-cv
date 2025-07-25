import { checkIsMobile } from 'fajarma-package';

import Main from './components/Main';
import Mobile from './components/Mobile';

// TODO: table & big potrait

const App = () => {
  const isMobile = checkIsMobile();

  if (isMobile) return <Mobile />;

  return <Main />;
};

export default App;
