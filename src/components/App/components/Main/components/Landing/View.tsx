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
            <b>Music</b> is turned <b>on</b>
            <br />
            and will play after you click Enter button.
            <br />
            You can turn off the music inside.
          </p>
        ) : (
          <p className={css.warning}>
            <b>Music</b> is turned <b>off</b>.
            <br />
            You can turn on the music inside.
          </p>
        )}
        <Clock />
      </div>
    </div>
  );
};

export default Landing;
