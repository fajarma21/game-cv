import fajarmaIcon from '@/assets/fajarma_icon.png';

import css from './View.module.scss';

const LoaderIcon = () => {
  return (
    <img
      src={fajarmaIcon}
      alt="fajarma"
      width={52}
      height={52}
      className={css.icon}
    />
  );
};

export default LoaderIcon;
