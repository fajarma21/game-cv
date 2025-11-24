import getLocalStore from '@/helpers/localStore/getLocalStore';

import Clock from './components/Clock';
import css from './View.module.scss';
import type { LandingProps } from './View.types';

const Landing = ({ onClick }: LandingProps) => {
  const localData = getLocalStore();

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <button type="button" className={css.startBtn} onClick={onClick}>
          <b>Enter</b>
        </button>
        {localData.music ? (
          <p className={css.warning}>
            Music will play after you click Enter button.
            <br />
            You can turn off the music later.
          </p>
        ) : (
          <p className={css.warning}>
            Music is turned off.
            <br />
            You can turn on the music later.
          </p>
        )}
        <Clock />
      </div>
    </div>
  );
};

export default Landing;
