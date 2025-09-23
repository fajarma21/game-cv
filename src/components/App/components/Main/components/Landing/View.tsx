import fmIcon from '@/assets/fajarma_icon_big.png';
import getLocalStore from '@/helpers/localStore/getLocalStore';

import css from './View.module.scss';
import type { LandingProps } from './View.types';

const Landing = ({ onClick }: LandingProps) => {
  const localData = getLocalStore();

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.inner}>
          <button type="button" className={css.startBtn} onClick={onClick}>
            <b>Start</b>
          </button>
          <img
            src={fmIcon}
            alt="fajarma icon"
            width={150}
            height={150}
            className={css.img}
          />
        </div>
        {localData.music ? (
          <p className={css.warning}>
            Music will play after you click start button.
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
      </div>
    </div>
  );
};

export default Landing;
