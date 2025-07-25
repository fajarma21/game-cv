import { Dialog } from 'fajarma-react-lib';
import type { DialogProps } from './View.types';
import Contents from './components/Contents';

const View = ({ display, onClose }: DialogProps) => {
  return (
    <Dialog display={display} onClose={onClose}>
      <Contents />
    </Dialog>
  );
};

export default View;
