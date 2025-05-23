import Game from './components/Game';
import Nav from './components/Nav';
import * as css from './View.styles';

const App = () => {
  return (
    <div className={css.container}>
      <Nav />
      <Game />
    </div>
  );
};

export default App;
