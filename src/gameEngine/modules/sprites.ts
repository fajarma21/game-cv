import achievementSprites from '@/assets/game/achievement_sprites.png';
import aquarium from '@/assets/game/aquarium.png';
import bedSprites from '@/assets/game/bed_sprites.png';
import carpet from '@/assets/game/carpet.png';
import catSprites from '@/assets/game/cat_sprites.png';
import eduSprites from '@/assets/game/edu_sprites.png';
import expSprites from '@/assets/game/exp_sprites.png';
import fishSprites from '@/assets/game/fish_sprites.png';
import mirrorSprites from '@/assets/game/mirror_sprites.png';
import photoSprites from '@/assets/game/photo_sprites.png';
import playerSprites from '@/assets/game/player_sprites.png';
import projectSprites from '@/assets/game/project_sprites.png';
import shelf from '@/assets/game/shelf.png';
import table from '@/assets/game/table.png';
import tableBack from '@/assets/game/table_back.png';
import tableLong from '@/assets/game/table_long.png';
import teaSprites from '@/assets/game/tea_sprites.png';
import wallH from '@/assets/game/wall_h.png';

import type { KAPLAYCtx } from 'kaplay';

const sprites = (k: KAPLAYCtx) => {
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
  k.loadSprite('wall-h', wallH);
  k.loadSprite('table', table);
  k.loadSprite('table-long', tableLong);
  k.loadSprite('table-back', tableBack);
  k.loadSprite('shelf', shelf);
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
  k.loadSprite('project', projectSprites, {
    sliceX: 2,
    sliceY: 1,
    anims: {
      main: 0,
      selected: 1,
    },
  });
  k.loadSprite('exp', expSprites, {
    sliceX: 2,
    sliceY: 1,
    anims: {
      main: 0,
      selected: 1,
    },
  });
  k.loadSprite('achievement', achievementSprites, {
    sliceX: 2,
    sliceY: 1,
    anims: {
      main: 0,
      selected: 1,
    },
  });
  k.loadSprite('edu', eduSprites, {
    sliceX: 2,
    sliceY: 1,
    anims: {
      main: 0,
      selected: 1,
    },
  });
  k.loadSprite('mirror', mirrorSprites, {
    sliceX: 2,
    sliceY: 1,
    anims: {
      main: 0,
      selected: 1,
    },
  });
  k.loadSprite('bed', bedSprites, {
    sliceX: 2,
    sliceY: 1,
    anims: {
      main: 0,
      selected: 1,
    },
  });
  k.loadSprite('photo', photoSprites, {
    sliceX: 2,
    sliceY: 1,
    anims: {
      main: 0,
      selected: 1,
    },
  });
  k.loadSprite('carpet', carpet);
  k.loadSprite('aquarium', aquarium);
  k.loadSprite('cat', catSprites, {
    sliceX: 5,
    sliceY: 3,
    anims: {
      idle: { from: 0, to: 14, loop: true },
    },
  });
};

export default sprites;
