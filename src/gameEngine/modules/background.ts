import { ID_BED, ID_CAT } from '@/constants';

import { getBedText, getRandomText } from '../View.helpers';
import { CAT_TEXTS } from '../index.constants';

import tv from './tv';
import clock from './clock';
import type { BasicParams } from './types';

/**
 *
 * all the objects behind the player
 */

const background = (params: BasicParams) => {
  const { k, parent } = params;

  const projectTable = parent.add([
    k.sprite('table-long'),
    k.anchor('botleft'),
    k.pos(0, 30),
    k.body({ isStatic: true }),
    k.area(),
  ]);
  projectTable.onDraw(() => {
    k.drawSprite({
      sprite: 'project',
      pos: k.vec2(5, -135),
    });
  });
  projectTable.add([k.sprite('tea', { anim: 'idle' }), k.pos(33, -88)]);

  parent.add([k.sprite('exp'), k.pos(125, -100)]);

  clock(params);
  tv(params);

  parent.add([k.sprite('mirror'), k.pos(425, -100)]);

  const photoShelf = parent.add([
    k.sprite('shelf'),
    k.anchor('botleft'),
    k.pos(480, 30),
    k.body({ isStatic: true }),
    k.area(),
  ]);
  photoShelf.onDraw(() => {
    k.drawSprite({
      sprite: 'photo',
      pos: k.vec2(5, -95),
    });
  });

  parent.add([
    k.sprite('bed'),
    k.anchor('botleft'),
    k.pos(558, 199),
    k.body({ isStatic: true }),
    k.area(),
    'item',
    {
      uniqueId: ID_BED,
      label: 'Bed',
      getAction: () => ({ description: getBedText(), space: '' }),
    },
  ]);

  parent.onDraw(() => {
    k.drawSprite({
      sprite: 'carpet',
      pos: k.vec2(160, 60),
    });
  });

  const cat = parent.add([
    k.sprite('cat', { anim: 'idle' }),
    k.pos(150, 185),
    k.body({ isStatic: true }),
    k.area({
      shape: new k.Rect(k.vec2(25, 5), 60, 30),
    }),
    'item',
    {
      uniqueId: ID_CAT,
      label: 'Belang',
      prevDesc: '',
      getAction: () => {
        const newDesc = getRandomText(CAT_TEXTS, cat.prevDesc);
        cat.prevDesc = newDesc;
        return { description: newDesc };
      },
    },
  ]);
};

export default background;
