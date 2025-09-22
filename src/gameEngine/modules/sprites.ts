import type { KAPLAYCtx } from 'kaplay';

import aquarium from '@/assets/game/aquarium.png';
import bed from '@/assets/game/bed.png';
import carpet from '@/assets/game/carpet.png';
import edu from '@/assets/game/edu.png';
import exp from '@/assets/game/exp.png';
import mirror from '@/assets/game/mirror.png';
import photo from '@/assets/game/photo.png';
import project from '@/assets/game/project.png';
import shelf from '@/assets/game/shelf.png';
import table from '@/assets/game/table.png';
import tableBack from '@/assets/game/table_back.png';
import tableLong from '@/assets/game/table_long.png';
import tv from '@/assets/game/tv.png';
import wallH from '@/assets/game/wall_h.png';

import catSprites from '@/assets/game/cat_sprites.png';
import fishSprites from '@/assets/game/fish_sprites.png';
import musicSprites from '@/assets/game/music_sprites.png';
import playerSprites from '@/assets/game/player_sprites.png';
import teaSprites from '@/assets/game/tea_sprites.png';
import tvContentSprites from '@/assets/game/tv_content_sprites.png';

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
  k.loadSprite('music', musicSprites, {
    sliceX: 3,
    sliceY: 1,
    anims: {
      on: { from: 0, to: 1, loop: true, speed: 2 },
      off: 2,
    },
  });
  k.loadSprite('tv-content', tvContentSprites, {
    sliceX: 3,
    sliceY: 1,
    anims: {
      ch1: 0,
      ch2: 1,
      ch3: 2,
    },
  });

  // static
  k.loadSprite('aquarium', aquarium);
  k.loadSprite('bed', bed);
  k.loadSprite('carpet', carpet);
  k.loadSprite('edu', edu);
  k.loadSprite('exp', exp);
  k.loadSprite('mirror', mirror);
  k.loadSprite('photo', photo);
  k.loadSprite('project', project);
  k.loadSprite('shelf', shelf);
  k.loadSprite('table', table);
  k.loadSprite('table-back', tableBack);
  k.loadSprite('table-long', tableLong);
  k.loadSprite('tv', tv);
  k.loadSprite('wall-h', wallH);
};

export default sprites;
