import { KAPLAYCtx } from "kaplay";
import clock from "./clock";
import { ITEMS } from "../index.constants";

const item = (k: KAPLAYCtx) => {
  clock(k);

  k.add([
    k.sprite("table-1"),
    k.pos(45, 97),
    k.body({ isStatic: true }),
    k.area(),
    k.z(2),
  ]);
  k.add([
    k.sprite("shelf"),
    k.pos(526, 97),
    k.body({ isStatic: true }),
    k.area(),
    k.z(2),
  ]);

  for (const item of ITEMS) {
    const { id, isBlock, isText, sprites, text, pos, area, z } = item;
    const thing = k.add([
      k.sprite(sprites, { anim: "main" }),
      k.pos(pos.x, pos.y),
      k.area({
        shape: new k.Rect(k.vec2(area.x, area.y), area.width, area.height),
      }),
      k.z(z || 2),
      "item",
      {
        isText: isText,
        uniqueId: id,
        sprites: sprites,
        text: text,
      },
    ]);

    if (isBlock) {
      thing.use(k.body({ isStatic: true }));
    }
  }

  k.add([
    k.sprite("shelf"),
    k.pos(603, 300),
    k.body({ isStatic: true }),
    k.area(),
    k.z(2),
  ]);
  k.add([
    k.sprite("shelf"),
    k.pos(677, 300),
    k.body({ isStatic: true }),
    k.area(),
    k.z(2),
  ]);
  k.add([
    k.sprite("tea", { anim: "idle" }),
    k.scale(0.5),
    k.pos(78, 92),
    k.z(3),
  ]);
};

export default item;
