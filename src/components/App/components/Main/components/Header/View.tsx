import Nav from 'fajarma-react-lib/dist/fajarma/Nav';

import css from './View.module.scss';

const Header = () => {
  return (
    <header className={css.container}>
      <Nav />
    </header>
  );
};

export default Header;
