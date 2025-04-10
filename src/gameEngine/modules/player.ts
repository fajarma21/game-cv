import { SPEED } from "../index.constants";
import { PlayerParams } from "./types";

const player = ({ activeItems, k, top, handleAction }: PlayerParams) => {
  const player = k.add([
    k.sprite("player", { anim: "down-idle" }),
    k.area({ shape: new k.Rect(k.vec2(0, 0), 60, 40) }),
    k.body(),
    k.anchor("bot"),
    k.pos(top.width / 2, top.height / 2),
    k.scale(0.8),
    k.z(3),
    "player",
    {
      speed: SPEED,
      direction: k.vec2(0, 0),
    },
  ]);

  // shadow
  k.add([
    k.pos(),
    k.follow(player, k.vec2(0, 10)),
    k.z(2),
    {
      draw() {
        k.drawEllipse({
          anchor: "bot",
          radiusX: 30,
          radiusY: 20,
          color: k.BLACK,
          opacity: 0.3,
        });
      },
    },
  ]);

  player.onCollide("item", (item) => {
    item.use(k.color(k.WHITE));
    activeItems = [];
    activeItems.unshift(item);
    handleAction(item.itemId);
  });

  player.onCollideEnd("item", (item) => {
    item.use(k.color(k.GREEN));
    activeItems = activeItems.filter((v) => v.itemId !== item.itemId);
    handleAction("");
  });

  player.onUpdate(() => {
    player.direction.x = 0;
    player.direction.y = 0;

    if (k.isKeyDown("left")) player.direction.x = -1;
    else if (k.isKeyDown("right")) player.direction.x = 1;
    else if (k.isKeyDown("up")) player.direction.y = -1;
    else if (k.isKeyDown("down")) player.direction.y = 1;

    if (
      player.direction.eq(k.vec2(-1, 0)) &&
      player.getCurAnim()?.name !== "left"
    ) {
      player.play("left");
    }
    if (
      player.direction.eq(k.vec2(1, 0)) &&
      player.getCurAnim()?.name !== "right"
    ) {
      player.play("right");
    }
    if (
      player.direction.eq(k.vec2(0, -1)) &&
      player.getCurAnim()?.name !== "up"
    ) {
      player.play("up");
    }
    if (
      player.direction.eq(k.vec2(0, 1)) &&
      player.getCurAnim()?.name !== "down"
    ) {
      player.play("down");
    }
    if (
      player.direction.eq(k.vec2(0, 0)) &&
      !player.getCurAnim()?.name.includes("idle")
    ) {
      player.play(player.getCurAnim()?.name + "-idle");
    }

    player.move(player.direction.scale(player.speed));

    const items = k.get("item");
    for (const item of items) {
      if (player.pos.y < item.pos.y) item.z = 4;
      else item.z = 1;
    }
  });
};

export default player;
