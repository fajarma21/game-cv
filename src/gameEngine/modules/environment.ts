import { CANVAS_HEIGHT } from "@/constants";
import { KAPLAYCtx } from "kaplay";

const environment = (k: KAPLAYCtx) => {
  // top area
  const top = k.add([
    k.pos(45, 170),
    k.rect(710, 300),
    k.color(k.rgb(244, 206, 138)),
    k.z(1),
  ]);

  // bottom area
  const bottom = k.add([
    k.pos(20, top.height + 215),
    k.rect(k.width() - 40, CANVAS_HEIGHT - 535), // top height + gaps
    k.color(k.rgb(251, 189, 145)),
  ]);

  // walls
  // left
  top.add([
    k.pos(-25, -150),
    k.rect(25, top.height + 25),
    k.area(),
    k.body({ isStatic: true }),
    k.color(k.rgb(240, 163, 104)),
    k.z(10),
    "wall",
  ]);
  top.add([
    k.sprite("wall-h", {
      width: 25,
      height: 150,
    }),
    k.pos(-25, top.height - 125),
    k.area(),
    k.body({ isStatic: true }),
    k.z(10),
    "wall",
  ]);
  // right
  top.add([
    k.pos(top.width, -150),
    k.rect(25, top.height + 25),
    k.area(),
    k.body({ isStatic: true }),
    k.color(k.rgb(240, 163, 104)),
    k.z(10),
    "wall",
  ]);
  top.add([
    k.sprite("wall-h", {
      width: 25,
      height: 150,
    }),
    k.pos(top.width, top.height - 125),
    k.area(),
    k.body({ isStatic: true }),
    k.z(10),
    "wall",
  ]);
  // top
  top.add([
    k.sprite("wall-h", {
      tiled: true,
      width: top.width + 10,
      height: 150,
    }),
    k.pos(-5, -151),
    k.area(),
    k.body({ isStatic: true }),
    "wall",
  ]);
  //bottom
  top.add([
    k.pos(0, top.height),
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

export default environment;
