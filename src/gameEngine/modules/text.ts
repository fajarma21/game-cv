import type { BasicParams } from './types';

const text = ({ k, parent }: BasicParams) => {
  const greetings = parent.add([
    k.text('', {
      size: 24,
      width: parent.width - 40,
      align: 'left',
      lineSpacing: 12,
    }),
    k.pos(20, 20),
    k.color(k.BLACK),
    'label',
  ]);
  const label = parent.add([
    k.text('', {
      size: 24,
      width: parent.width - 40,
      align: 'left',
    }),
    k.pos(20, 20),
    k.color(k.BLACK),
    'label',
  ]);
  const description = parent.add([
    k.text('', { size: 24, width: parent.width - 40, align: 'left' }),
    k.pos(20, 60),
    k.color(k.BLACK),
    'description',
  ]);

  return { greetings, label, description };
};

export default text;
