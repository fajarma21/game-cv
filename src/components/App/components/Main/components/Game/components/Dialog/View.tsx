import { Dialog } from 'fajarma-react-lib';

import css from './View.module.scss';
import type { DialogProps } from './View.types';
import Contents from './components/Contents';

const View = ({ display, onClose }: DialogProps) => {
  return (
    <Dialog display={display} className={css.dialogModifier} onClose={onClose}>
      <button type="button" className={css.closeBtn} onClick={onClose} />
      <Contents />
    </Dialog>
  );
};

export default View;
