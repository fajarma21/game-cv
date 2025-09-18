import { ID_CAT } from '@/constants';

import { getBedText, randomText } from '../View.helpers';
import { CAT_TEXTS } from '../index.constants';

import clock from './clock';
import type { BasicParams } from './types';

/**
 *
 * all the objects behind the player
 */

const background = (params: BasicParams) => {
  const { k, parent } = params;

  parent.add([
    k.sprite('table-long'),
    k.pos(0, -53),
    k.body({ isStatic: true }),
    k.area(),
  ]);
  parent.add([k.sprite('project', { anim: 'main' }), k.pos(5, -105)]);
  parent.add([k.sprite('tea', { anim: 'idle' }), k.pos(33, -58)]);

  parent.add([k.sprite('exp', { anim: 'main' }), k.pos(125, -100)]);

  clock(params);

  // TODO: change this to tv
  parent.add([
    k.sprite('table-long'),
    k.pos(255, -53),
    k.body({ isStatic: true }),
    k.area(),
  ]);

  parent.add([k.sprite('mirror', { anim: 'main' }), k.pos(425, -100)]);

  parent.add([
    k.sprite('shelf'),
    k.pos(480, -53),
    k.body({ isStatic: true }),
    k.area(),
  ]);
  parent.add([k.sprite('photo', { anim: 'main' }), k.pos(485, -65)]);

  parent.add([
    k.sprite('bed', { anim: 'main' }),
    k.pos(558, -40),
    k.body({ isStatic: true }),
    k.area(),
    'item',
    {
      text: 'Bed',
      getText: getBedText,
    },
  ]);

  parent.add([k.sprite('carpet'), k.pos(160, 60)]);

  parent.add([
    k.sprite('cat', { anim: 'idle' }),
    k.pos(5, 235),
    k.body({ isStatic: true }),
    k.area({
      shape: new k.Rect(k.vec2(25, 5), 60, 30),
    }),
    'item',
    {
      uniqueId: ID_CAT,
      text: 'Belang',
      getText: () => randomText(CAT_TEXTS),
    },
  ]);
};

export default background;
