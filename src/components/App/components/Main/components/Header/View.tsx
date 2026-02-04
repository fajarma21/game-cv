import { FMContacts, FMTitle } from 'fajarma-react-lib';

import { LINKS } from './View.constants';
import css from './View.module.scss';

const Header = () => {
  return (
    <header className={css.container}>
      <FMTitle />
      <FMContacts className={css.contacts} links={LINKS} />
    </header>
  );
};

export default Header;
