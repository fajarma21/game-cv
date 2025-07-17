import Game from './components/Game';
import Nav from './components/Nav';
import css from './View.module.scss';

// TODO: table & big potrait

const App = () => {
  return (
    <div className={css.container}>
      <Nav />
      <Game />
    </div>
  );
};

export default App;
