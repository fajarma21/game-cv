import kaplay, { GameObj } from "kaplay";

import environtmentObj from "./modules/envirotnment";
import itemObj from "./modules/item";
import playerObj from "./modules/player";
import spritesObj from "./modules/sprites";
import { InitGameParams } from "./index.types";

const initGame = ({ width, height, canvas, handleAction }: InitGameParams) => {
  const activeItems: GameObj[] = [];

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

  playerObj({ activeItems, k, top, handleAction });

  itemObj({ k, top });

  const label = k.add([
    k.text("", { size: 24, width: bottom.width - 20, align: "center" }),
    k.pos(20, 520),
    k.color(k.BLACK),
    "label",
  ]);

  k.onKeyPress("space", () => {
    if (activeItems.length) k.debug.log(activeItems[0].itemId + " is active.");
  });

  k.onUpdate(() => {
    if (activeItems.length) {
      label.text = `${activeItems[0].itemId}, press SPACE to see it.`;
    } else {
      label.text = "";
    }
  });

  // k.debug.inspect = true;
};

export default initGame;
