import Header from './components/Header';

import css from './View.module.scss';
import Game from './components/Game';
import Footer from './components/Footer';

const Main = () => {
  return (
    <div className={css.container}>
      <Header />
      <div className={css.gameWrapper}>
        <Game />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
