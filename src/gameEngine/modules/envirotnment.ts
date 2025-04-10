import { KAPLAYCtx } from "kaplay";

const environtment = (k: KAPLAYCtx) => {
  // top area
  const top = k.add([k.pos(45, 100), k.rect(710, 300)]);

  // bottom area
  const bottom = k.add([
    k.pos(20, k.height() - 300),
    k.rect(k.width() - 40, 300),
    k.color(k.rgb(251, 189, 145)),
  ]);

  // floor
  k.addLevel(
    [
      "                             ",
      "                             ",
      "                             ",
      "                             ",
      "                             ",
      "                             ",
      "                             ",
      "                             ",
      "                             ",
      "                             ",
      "                             ",
      "                             ",
      "                             ",
    ],
    {
      tileWidth: 25,
      tileHeight: 25,
      tiles: {
        " ": () => [
          k.sprite("floor", { frame: ~~k.rand(0, 10) }),
          k.pos(45, 100),
        ],
      },
    }
  );

  // wall
  // left
  k.add([
    k.pos(20, 0),
    k.rect(25, 475),
    k.area(),
    k.body({ isStatic: true }),
    k.color(k.rgb(204, 132, 77)),
    k.z(10),
    "wall",
  ]);
  // right
  k.add([
    k.pos(k.width() - 45, 0),
    k.rect(25, 475),
    k.area(),
    k.body({ isStatic: true }),
    k.color(k.rgb(204, 132, 77)),
    k.z(10),
    "wall",
  ]);
  // top
  k.add([
    k.sprite("wall-h", {
      tiled: true,
      width: k.width() - 85,
      height: 100,
    }),
    k.pos(40, -1),
    k.area(),
    k.body({ isStatic: true }),
    "wall",
  ]);
  //bottom
  k.add([
    k.sprite("wall-h", {
      tiled: true,
      width: k.width() - 41,
      height: 100,
    }),
    k.pos(20, 400),
    k.area({ shape: new k.Rect(k.vec2(0, 100), 760, 25) }),
    k.body({ isStatic: true }),
    k.anchor("botleft"),
    k.z(10),
    "wall",
  ]);

  return {
    top,
    bottom,
  };
};

export default environtment;
