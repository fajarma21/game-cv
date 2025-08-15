import Nav from './components/Nav';

import css from './View.module.scss';
import Game from './components/Game';

const Main = () => {
  return (
    <div className={css.container}>
      <Nav />
      <div className={css.gameWrapper}>
        <Game />
      </div>
    </div>
  );
};

export default Main;
