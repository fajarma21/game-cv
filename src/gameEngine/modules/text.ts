import type { BasicParams } from './types';

const text = ({ k, parent }: BasicParams) => {
  const space = parent.add([
    k.text('', {
      align: 'right',
      size: 18,
    }),
    k.anchor('center'),
    k.pos(parent.width - 70, parent.height - 30),
    k.color(k.BLACK),
    k.scale(1),
    'space',
  ]);

  const greetings = parent.add([
    k.text('', {
      size: 24,
      width: parent.width - 20,
      align: 'left',
      lineSpacing: 10,
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
    k.text('', {
      size: 24,
      width: parent.width - space.width - 20,
      align: 'left',
      lineSpacing: 10,
    }),
    k.pos(20, 60),
    k.color(k.BLACK),
    'description',
  ]);

  return { greetings, label, description, space };
};

export default text;
