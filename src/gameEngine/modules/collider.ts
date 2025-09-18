import {
  ID_AQUARIUM,
  ID_EDU,
  ID_EXP,
  ID_MIRROR,
  ID_PHOTO,
  ID_PROJECT,
} from '@/constants';

import { randomText } from '../View.helpers';
import { AQURIUM_TEXTS, PHOTO_TEXTS } from '../index.constants';

import type { BasicParams } from './types';

/**
 *
 * all external collider
 */

/*
  other collider exist in
  background.ts: cat, bed
*/

const collider = ({ k, parent }: BasicParams) => {
  // main
  parent.add([
    k.area({
      shape: new k.Rect(k.vec2(25, 30), 60, 20),
    }),
    'item',
    {
      uniqueId: ID_PROJECT,
      text: 'Projects',
    },
  ]);

  parent.add([
    k.area({
      shape: new k.Rect(k.vec2(145, 0), 20, 20),
    }),
    'item',
    {
      uniqueId: ID_EXP,
      text: 'Experience',
    },
  ]);

  parent.add([
    k.area({
      shape: new k.Rect(k.vec2(440, 0), 10, 40),
    }),
    'item',
    {
      uniqueId: ID_MIRROR,
      text: 'Mirror',
    },
  ]);

  parent.add([
    k.area({
      shape: new k.Rect(k.vec2(585, 250), 25, 20),
    }),
    'item',
    {
      uniqueId: ID_EDU,
      text: 'Education',
    },
  ]);

  // secondary
  parent.add([
    k.area({
      shape: new k.Rect(k.vec2(495, 30), 50, 20),
    }),
    'item',
    {
      uniqueId: ID_PHOTO,
      text: 'Photo',
      getText: () => randomText(PHOTO_TEXTS),
    },
  ]);

  parent.add([
    k.area({
      shape: new k.Rect(k.vec2(660, 250), 25, 20),
    }),
    'item',
    {
      uniqueId: ID_AQUARIUM,
      text: 'Aquarium',
      getText: () => randomText(AQURIUM_TEXTS),
    },
  ]);
};

export default collider;
