import { useEffect } from 'react';

import fajarmaIcon from '@/assets/fajarma_icon.png';
import { CV_URL } from './View.constants';
import css from './View.module.scss';

const Mobile = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.assign(CV_URL);
    }, 3000);
  }, []);

  return (
    <div className={css.mobileContainer}>
      <div className={css.ticker}>
        This website currently doesn't support mobile versions.
        <br />
        You will be redirected to{' '}
        <a href={CV_URL}>
          <u>my cv</u>
        </a>{' '}
        in a few second.
      </div>
      <img src={fajarmaIcon} alt="fajarma" className={css.icon} />
    </div>
  );
};

export default Mobile;
