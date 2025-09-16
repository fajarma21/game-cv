import { FS_API_KEY } from '@/constants/env';

import css from './View.module.scss';

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.container} onClick={() => console.log(FS_API_KEY)}>
        &copy; 2025 fajarma
      </div>
    </div>
  );
};

export default Footer;
