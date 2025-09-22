import { FAJARMA_URL, MUSIC_CREDIT } from './View.constants';
import css from './View.module.scss';

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.container}>
        <p>
          Music{' '}
          <a href={MUSIC_CREDIT.url} target="_blank">
            <span>New Life</span> by <span>{MUSIC_CREDIT.name}</span>
          </a>
        </p>
        <p>
          &copy; 2025{' '}
          <a href={FAJARMA_URL} target="_blank">
            fajarma
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
