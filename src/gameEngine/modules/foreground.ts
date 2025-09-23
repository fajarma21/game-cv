import music from './music';
import type { ForegroundParams } from './types';

/**
 *
 * all the objects in front of the player
 */

const Z = 4;

const foreground = (params: ForegroundParams) => {
  const { k, parent } = params;

  parent.add([
    k.sprite('table-back'),
    k.pos(0, 220),
    k.body({ isStatic: true }),
    k.area({
      shape: new k.Rect(k.vec2(3, 50), 74, 30),
    }),
    k.z(Z),
  ]);
  music({ ...params, z: Z });

  parent.add([
    k.sprite('table-back'),
    k.pos(557, 220),
    k.body({ isStatic: true }),
    k.area({
      shape: new k.Rect(k.vec2(3, 50), 74, 30),
    }),
    k.z(Z),
  ]);
  parent.add([k.sprite('edu'), k.pos(560, 210), k.z(Z)]);

  parent.add([
    k.sprite('table-back'),
    k.pos(631, 220),
    k.body({ isStatic: true }),
    k.area({
      shape: new k.Rect(k.vec2(3, 50), 74, 30),
    }),
    k.z(Z),
  ]);
  parent.add([k.sprite('aquarium'), k.pos(637, 200), k.z(Z)]);
  parent.add([k.sprite('fish', { anim: 'idle' }), k.pos(644, 215), k.z(Z)]);
};

export default foreground;
