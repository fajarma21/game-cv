import {
  ID_AQUARIUM,
  ID_EDU,
  ID_EXP,
  ID_MIRROR,
  ID_PHOTO,
  ID_PROJECT,
} from '@/constants';

import { getRandomText } from '../View.helpers';
import { AQURIUM_TEXTS, PHOTO_TEXTS } from '../index.constants';

import type { BasicParams } from './types';

/**
 *
 * all external collider
 */

/*
  other collider exist in
  background.ts: cat, bed, tv
  foreground.ts: music
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
      label: 'Projects',
    },
  ]);

  parent.add([
    k.area({
      shape: new k.Rect(k.vec2(145, 0), 20, 20),
    }),
    'item',
    {
      uniqueId: ID_EXP,
      label: 'Experience',
    },
  ]);

  parent.add([
    k.area({
      shape: new k.Rect(k.vec2(440, 0), 10, 40),
    }),
    'item',
    {
      uniqueId: ID_MIRROR,
      label: 'Mirror',
    },
  ]);

  parent.add([
    k.area({
      shape: new k.Rect(k.vec2(585, 250), 25, 20),
    }),
    'item',
    {
      uniqueId: ID_EDU,
      label: 'Education',
    },
  ]);

  // secondary
  const photo = parent.add([
    k.area({
      shape: new k.Rect(k.vec2(495, 30), 50, 20),
    }),
    'item',
    {
      uniqueId: ID_PHOTO,
      label: 'Photo',
      prevDesc: '',
      getAction: () => {
        const newDesc = getRandomText(PHOTO_TEXTS, photo.prevDesc);
        photo.prevDesc = newDesc;
        return { description: newDesc };
      },
    },
  ]);

  const aquarium = parent.add([
    k.area({
      shape: new k.Rect(k.vec2(660, 250), 25, 20),
    }),
    'item',
    {
      uniqueId: ID_AQUARIUM,
      label: 'Aquarium',
      prevDesc: '',
      getAction: () => {
        const newDesc = getRandomText(AQURIUM_TEXTS, aquarium.prevDesc);
        aquarium.prevDesc = newDesc;
        return { description: newDesc };
      },
    },
  ]);
};

export default collider;
