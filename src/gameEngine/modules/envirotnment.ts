import { KAPLAYCtx } from "kaplay";

const environtment = (k: KAPLAYCtx) => {
  // top area
  const top = k.add([
    k.pos(45, 150),
    k.rect(710, 300),
    k.color(k.rgb(244, 206, 138)),
  ]);

  // bottom area
  const bottom = k.add([
    k.pos(20, k.height() - 180),
    k.rect(k.width() - 40, 300),
    k.color(k.rgb(251, 189, 145)),
  ]);

  // walls
  // left
  k.add([
    k.pos(20, 0),
    k.rect(25, top.height + 25),
    k.area(),
    k.body({ isStatic: true }),
    k.color(k.rgb(240, 163, 104)),
    k.z(10),
    "wall",
  ]);
  k.add([
    k.sprite("wall-h", {
      width: 25,
      height: 150,
    }),
    k.pos(20, top.height + 25),
    k.area(),
    k.body({ isStatic: true }),
    k.z(10),
    "wall",
  ]);
  // right
  k.add([
    k.pos(top.width + 45, 0),
    k.rect(25, top.height + 25),
    k.area(),
    k.body({ isStatic: true }),
    k.color(k.rgb(240, 163, 104)),
    k.z(10),
    "wall",
  ]);
  k.add([
    k.sprite("wall-h", {
      width: 25,
      height: 150,
    }),
    k.pos(top.width + 45, top.height + 25),
    k.area(),
    k.body({ isStatic: true }),
    k.z(10),
    "wall",
  ]);
  // top
  k.add([
    k.sprite("wall-h", {
      tiled: true,
      width: top.width + 5,
      height: 150,
    }),
    k.pos(40, -1),
    k.area(),
    k.body({ isStatic: true }),
    "wall",
  ]);
  //bottom
  k.add([
    k.pos(45, 450),
    k.rect(top.width, 25),
    k.area(),
    k.body({ isStatic: true }),
    k.color(k.rgb(207, 162, 84)),
    "wall",
  ]);

  return {
    top,
    bottom,
  };
};

export default environtment;
