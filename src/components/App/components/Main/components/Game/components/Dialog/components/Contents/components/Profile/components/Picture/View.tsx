import css from './View.module.scss';
import type { PhotoProps } from './View.types';

const Picture = ({ src }: PhotoProps) => {
  return (
    <div className={css.imageWrapper}>
      <img
        src={src}
        alt="profile pic"
        width={200}
        height={200}
        className={css.profPic}
      />
    </div>
  );
};

export default Picture;
