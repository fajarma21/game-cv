import css from './View.module.scss';
import type { ChipProps } from './View.types';

const Chip = ({ children }: ChipProps) => {
  return <div className={css.chip}>{children}</div>;
};

export default Chip;
