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
  k.loadSprite("floor", "./floor_sprites.png", {
    sliceX: 10,
    sliceY: 1,
  });
};

export default sprites;
