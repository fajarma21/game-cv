import aquarium from '@/assets/game/aquarium.png';
import bed from '@/assets/game/bed.png';
import carpet from '@/assets/game/carpet.png';
import catSprites from '@/assets/game/cat_sprites.png';
import edu from '@/assets/game/edu.png';
import exp from '@/assets/game/exp.png';
import fishSprites from '@/assets/game/fish_sprites.png';
import mirror from '@/assets/game/mirror.png';
import photo from '@/assets/game/photo.png';
import playerSprites from '@/assets/game/player_sprites.png';
import project from '@/assets/game/project.png';
import shelf from '@/assets/game/shelf.png';
import table from '@/assets/game/table.png';
import tableBack from '@/assets/game/table_back.png';
import tableLong from '@/assets/game/table_long.png';
import teaSprites from '@/assets/game/tea_sprites.png';
import wallH from '@/assets/game/wall_h.png';

import type { KAPLAYCtx } from 'kaplay';

// TODO: remove white outline img

const sprites = (k: KAPLAYCtx) => {
  // animated
  k.loadSprite('player', playerSprites, {
    sliceX: 3,
    sliceY: 4,
    anims: {
      'down-idle': 1,
      'right-idle': 4,
      'up-idle': 7,
      'left-idle': 10,
      down: { from: 0, to: 2, loop: true },
      right: { from: 3, to: 5, loop: true },
      up: { from: 6, to: 8, loop: true },
      left: { from: 9, to: 11, loop: true },
    },
  });
  k.loadSprite('tea', teaSprites, {
    sliceX: 4,
    sliceY: 1,
    anims: {
      idle: { from: 0, to: 3, loop: true, speed: 6 },
    },
  });
  k.loadSprite('fish', fishSprites, {
    sliceX: 6,
    sliceY: 2,
    anims: {
      idle: { from: 0, to: 11, loop: true, speed: 9 },
    },
  });
  k.loadSprite('cat', catSprites, {
    sliceX: 5,
    sliceY: 3,
    anims: {
      idle: { from: 0, to: 14, loop: true },
    },
  });

  // static
  k.loadSprite('wall-h', wallH);
  k.loadSprite('table', table);
  k.loadSprite('table-long', tableLong);
  k.loadSprite('table-back', tableBack);
  k.loadSprite('shelf', shelf);
  k.loadSprite('project', project);
  k.loadSprite('exp', exp);
  k.loadSprite('edu', edu);
  k.loadSprite('mirror', mirror);
  k.loadSprite('bed', bed);
  k.loadSprite('photo', photo);
  k.loadSprite('carpet', carpet);
  k.loadSprite('aquarium', aquarium);
};

export default sprites;
