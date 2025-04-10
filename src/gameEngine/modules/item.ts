import { ItemParams } from "./types";

const item = ({ k, top }: ItemParams) => {
  for (let i = 0; i < 3; i++) {
    const x = k.rand(100, top.width);
    const y = k.rand(150, top.height);

    k.add([
      k.pos(x, y),
      k.area({ shape: new k.Rect(k.vec2(0, 0), 50, 25) }),
      k.body({ isStatic: true }),
      k.rect(50, 50),
      k.color(k.GREEN),
      k.anchor("bot"),
      k.z(1),
      "item",
      {
        itemId: "item-" + i,
      },
    ]);
  }
};

export default item;
