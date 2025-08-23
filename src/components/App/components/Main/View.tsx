import Nav from './components/Nav';

import css from './View.module.scss';
import Game from './components/Game';
import Footer from './components/Footer';

const Main = () => {
  return (
    <div className={css.container}>
      <Nav />
      <div className={css.gameWrapper}>
        <Game />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
