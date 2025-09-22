import fmIcon from '@/assets/fajarma_icon_big.png';

import css from './View.module.scss';
import type { LandingProps } from './View.types';

const Landing = ({ onClick }: LandingProps) => {
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
        <p className={css.warning}>
          Music will play after this.
          <br />
          You can turn it off later.
        </p>
      </div>
    </div>
  );
};

export default Landing;
