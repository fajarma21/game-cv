import clock from "./clock";
import { ITEMS } from "../index.constants";
import { BasicParams } from "./types";

const item = ({ k, parent }: BasicParams) => {
  clock({ k, parent });

  parent.add([
    k.sprite("table-1"),
    k.pos(0, -53),
    k.body({ isStatic: true }),
    k.area(),
    k.z(2),
  ]);
  parent.add([
    k.sprite("shelf"),
    k.pos(480, -53),
    k.body({ isStatic: true }),
    k.area(),
    k.z(2),
  ]);

  for (const item of ITEMS) {
    const { id, isBlock, isText, sprites, text, pos, area, z } = item;
    const thing = parent.add([
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

  parent.add([
    k.sprite("shelf"),
    k.pos(558, 150),
    k.body({ isStatic: true }),
    k.area(),
    k.z(2),
  ]);
  parent.add([
    k.sprite("shelf"),
    k.pos(632, 150),
    k.body({ isStatic: true }),
    k.area(),
    k.z(2),
  ]);
  parent.add([
    k.sprite("tea", { anim: "idle" }),
    k.scale(0.5),
    k.pos(33, -58),
    k.z(3),
  ]);
};

export default item;
