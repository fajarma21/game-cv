import achievementSprites from '@/assets/achievement_sprites.png';
import bedSprites from '@/assets/bed_sprites.png';
import eduSprites from '@/assets/edu_sprites.png';
import expSprites from '@/assets/exp_sprites.png';
import mirrorSprites from '@/assets/mirror_sprites.png';
import photoSprites from '@/assets/photo_sprites.png';
import playerSprites from '@/assets/player_sprites.png';
import projectSprites from '@/assets/project_sprites.png';
import shelf from '@/assets/shelf.png';
import table1 from '@/assets/table_1.png';
import table2 from '@/assets/table_2.png';
import teaSprites from '@/assets/tea_sprites.png';
import wallH from '@/assets/wall_h.png';

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
  k.loadSprite('table-1', table1);
  k.loadSprite('table-2', table2);
  k.loadSprite('shelf', shelf);
  k.loadSprite('tea', teaSprites, {
    sliceX: 4,
    sliceY: 1,
    anims: {
      idle: { from: 0, to: 3, loop: true, speed: 6 },
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
};

export default sprites;
