import { ID_EDU, ID_EXP, ID_MIRROR, ID_PROJECT } from '@/constants';
import useModalStore from '@/stores/useModalStore';

import Education from './components/Education';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Project from './components/Project';

const Contents = () => {
  const contentId = useModalStore((state) => state.contentId);

  if (contentId === ID_MIRROR) return <Profile />;
  if (contentId === ID_EDU) return <Education />;
  if (contentId === ID_EXP) return <Experience />;
  if (contentId === ID_PROJECT) return <Project />;

  return null;
};

export default Contents;
