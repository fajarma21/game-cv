import { KAPLAYCtx } from "kaplay";

const sprites = (k: KAPLAYCtx) => {
  k.loadSprite("player", "./player_sprites.png", {
    sliceX: 3,
    sliceY: 4,
    anims: {
      "down-idle": 1,
      "right-idle": 4,
      "up-idle": 7,
      "left-idle": 10,
      down: { from: 0, to: 2, loop: true },
      right: { from: 3, to: 5, loop: true },
      up: { from: 6, to: 8, loop: true },
      left: { from: 9, to: 11, loop: true },
    },
  });
  k.loadSprite("wall-h", "./wall_h.png");
  k.loadSprite("table-1", "./table_1.png");
  k.loadSprite("table-2", "./table_2.png");
  k.loadSprite("shelf", "./shelf.png");
  k.loadSprite("tea", "./tea_sprites.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
      idle: { from: 0, to: 3, loop: true, speed: 6 },
    },
  });
  k.loadSprite("project", "./project_sprites.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
      main: 0,
      selected: 1,
    },
  });
  k.loadSprite("exp", "./exp_sprites.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
      main: 0,
      selected: 1,
    },
  });
  k.loadSprite("achievement", "./achievement_sprites.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
      main: 0,
      selected: 1,
    },
  });
  k.loadSprite("edu", "./edu_sprites.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
      main: 0,
      selected: 1,
    },
  });
  k.loadSprite("mirror", "./mirror_sprites.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
      main: 0,
      selected: 1,
    },
  });
  k.loadSprite("bed", "./bed_sprites.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
      main: 0,
      selected: 1,
    },
  });
  k.loadSprite("photo", "./photo_sprites.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
      main: 0,
      selected: 1,
    },
  });
};

export default sprites;
