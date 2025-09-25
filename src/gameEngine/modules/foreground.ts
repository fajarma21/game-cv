import music from './music';
import type { ForegroundParams } from './types';

/**
 *
 * all the objects in front of the player
 */

const Z = 4;

const foreground = (params: ForegroundParams) => {
  const { k, parent } = params;

  const musciTable = parent.add([
    k.sprite('table-back'),
    k.pos(0, 220),
    k.body({ isStatic: true }),
    k.area({
      shape: new k.Rect(k.vec2(3, 50), 74, 30),
    }),
    k.z(Z),
  ]);
  music({ ...params, parent: musciTable });

  const eduTable = parent.add([
    k.sprite('table-back'),
    k.pos(557, 220),
    k.body({ isStatic: true }),
    k.area({
      shape: new k.Rect(k.vec2(3, 50), 74, 30),
    }),
    k.z(Z),
  ]);
  eduTable.onDraw(() => {
    k.drawSprite({
      sprite: 'edu',
      pos: k.vec2(3, -10),
    });
  });

  const aquariumTable = parent.add([
    k.sprite('table-back'),
    k.pos(631, 220),
    k.body({ isStatic: true }),
    k.area({
      shape: new k.Rect(k.vec2(3, 50), 74, 30),
    }),
    k.z(Z),
  ]);
  aquariumTable.onDraw(() => {
    k.drawSprite({
      sprite: 'aquarium',
      pos: k.vec2(4, -20),
    });
  });
  aquariumTable.add([k.sprite('fish', { anim: 'idle' }), k.pos(13, 0)]);
};

export default foreground;
