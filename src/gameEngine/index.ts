import { getLS, setLS } from 'fajarma-package';
import type { GameObj } from 'kaplay';
import kaplay from 'kaplay';

import { LS_VISIT } from './index.constants';
import type { InitGameParams } from './index.types';
import environmentObj from './modules/environment';
import loadingObj from './modules/loading';
import playerObj from './modules/player';
import spritesObj from './modules/sprites';
import textObj from './modules/text';
import background from './modules/background';
import foreground from './modules/foreground';
import collider from './modules/collider';

const initGame = ({ width, height, canvas, handleAction }: InitGameParams) => {
  let activeItems: GameObj[] = [];
  let latestItem: GameObj | undefined;
  const secondVisit = getLS(LS_VISIT);

  const handleAddItem = (value: GameObj) => {
    activeItems.unshift(value);
  };

  const handleRemoveItem = (value: GameObj) => {
    activeItems = activeItems.filter(
      (item) => item.uniqueId !== value.uniqueId
    );
    description.text = '';
  };

  const k = kaplay({
    canvas,
    width,
    height,
    letterbox: true,
    global: false,
    background: [79, 79, 84],
    texFilter: 'linear',
  });

  loadingObj(k);

  spritesObj(k);
  const { top, bottom } = environmentObj(k);
  const game = top.add([k.z(4), k.timer()]);
  const { player } = playerObj({
    k,
    game,
    parent: top,
    handleAddItem,
    handleRemoveItem,
  });
  background({ k, parent: top });
  foreground({ k, parent: top });
  collider({ k, parent: top });

  k.onLoad(() => {
    let greet = '';
    if (secondVisit) greet = 'Welcome back!';
    else {
      setLS(LS_VISIT, true);
      greet = 'Welcome to my house!';
    }
    greetings.text =
      greet + '\nPlease make yourself comfortable.\n<use arrow keys to move>';
  });

  let spaceKey: GameObj;

  const { greetings, label, description } = textObj({ k, parent: bottom });

  k.onKeyPress('space', () => {
    if (!activeItems.length) return;

    const item = activeItems[0];

    if (item.getText) description.text = item.getText();
    else {
      handleAction(item.uniqueId, game);
      game.paused = true;
    }
  });

  k.onUpdate(() => {
    if (activeItems.length) {
      greetings.text = '';
      const newItem = activeItems[0];
      if (
        !latestItem ||
        (latestItem && latestItem.uniqueId !== newItem.uniqueId)
      ) {
        label.text = `${newItem.text}`;
        description.text = '';
        latestItem = newItem;
        if (!spaceKey || (spaceKey && !spaceKey.parent)) {
          spaceKey = player.add([
            k.pos(0, -130),
            k.rect(70, 30, { radius: 4 }),
            k.anchor('center'),
            k.color(k.WHITE),
            k.outline(2, k.rgb(196, 196, 196)),
            k.animate(),
          ]);
          spaceKey.add([
            k.text('SPACE', { size: 16 }),
            k.anchor('center'),
            k.color(k.BLACK),
          ]);
          spaceKey.animate('scale', [k.vec2(1), k.vec2(0.8), k.vec2(1)], {
            duration: 0.5,
          });
        }
      }
    } else {
      label.text = '';
      description.text = '';
      latestItem = undefined;
      if (spaceKey) spaceKey.destroy();
    }
  });

  k.debug.inspect = true;
};

export default initGame;
