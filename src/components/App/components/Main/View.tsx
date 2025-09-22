import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';
import Landing from './components/Landing';

import css from './View.module.scss';
import { useState } from 'react';

const Main = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className={css.container}>
      <Header />
      <div className={css.gameWrapper}>
        {play ? <Game /> : <Landing onClick={() => setPlay(true)} />}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
