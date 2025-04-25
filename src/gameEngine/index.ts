import kaplay, { GameObj } from "kaplay";

import environtmentObj from "./modules/envirotnment";
import itemObj from "./modules/item";
import playerObj from "./modules/player";
import spritesObj from "./modules/sprites";
import { InitGameParams } from "./index.types";
import { ID_BED, ID_CLOCK, ID_PHOTO } from "./index.constants";
import dayjs from "dayjs";

const initGame = ({ width, height, canvas, handleAction }: InitGameParams) => {
  let activeItems: GameObj[] = [];
  let latestItem: GameObj | undefined;

  const handleAddItem = (value: GameObj) => {
    activeItems.unshift(value);
  };

  const handleRemoveItem = (value: GameObj) => {
    activeItems = activeItems.filter(
      (item) => item.uniqueId !== value.uniqueId
    );
    description.text = "";
  };

  const k = kaplay({
    canvas,
    width,
    height,
    letterbox: true,
    global: false,
    background: [152, 231, 95],
  });

  spritesObj(k);

  const { top, bottom } = environtmentObj(k);

  let spaceKey: GameObj;
  const { player } = playerObj({
    k,
    top,
    handleAddItem,
    handleRemoveItem,
  });

  itemObj(k);

  const label = bottom.add([
    k.text("", { size: 24, width: bottom.width - 40, align: "left" }),
    k.pos(20, 20),
    k.color(k.BLACK),
    "label",
  ]);
  const description = bottom.add([
    k.text("", { size: 24, width: bottom.width - 40, align: "left" }),
    k.pos(20, 60),
    k.color(k.BLACK),
    "description",
  ]);

  k.onKeyPress("space", () => {
    if (activeItems.length) {
      const item = activeItems[0];
      if (!item.isText) {
        handleAction(item.uniqueId);
      } else if (item.uniqueId === ID_CLOCK) {
        description.text = dayjs().format("hh:mm:ss A");
      } else if (item.uniqueId === ID_BED) {
        const currentTime = dayjs().hour();
        description.text = String(currentTime);
      } else if (item.uniqueId === ID_PHOTO) {
        description.text = "Wife, son, & daughter";
      }
    }
  });

  k.onUpdate(() => {
    if (activeItems.length) {
      const newItem = activeItems[0];
      if (
        !latestItem ||
        (latestItem && latestItem.uniqueId !== newItem.uniqueId)
      ) {
        label.text = `${newItem.text}`;
        latestItem = newItem;
        if (!spaceKey || (spaceKey && !spaceKey.parent)) {
          spaceKey = player.add([
            k.pos(0, -130),
            k.rect(70, 30, { radius: 4 }),
            k.anchor("center"),
            k.color(k.WHITE),
            k.outline(2, k.rgb(196, 196, 196)),
            k.animate(),
          ]);
          spaceKey.add([
            k.text("SPACE", { size: 16 }),
            k.anchor("center"),
            k.color(k.BLACK),
          ]);
          spaceKey.animate("scale", [k.vec2(1), k.vec2(0.8), k.vec2(1)], {
            duration: 0.5,
          });
        }
      }
    } else {
      label.text = "";
      description.text = "";
      latestItem = undefined;
      if (spaceKey) spaceKey.destroy();
    }
  });

  k.debug.inspect = true;
};

export default initGame;
