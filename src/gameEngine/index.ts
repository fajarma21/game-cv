import { getLS, setLS } from 'fajarma-package';
import type { GameObj } from 'kaplay';
import kaplay from 'kaplay';

import { LS_VISIT, SPACE_TEXT } from './index.constants';
import type { InitGameParams } from './index.types';
import environmentObj from './modules/environment';
import loadingObj from './modules/loading';
import playerObj from './modules/player';
import spritesObj from './modules/sprites';
import textObj from './modules/text';
import backgroundObj from './modules/background';
import foregroundObj from './modules/foreground';
import colliderObj from './modules/collider';

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
    debug: false,
  });

  loadingObj(k);

  spritesObj(k);
  const { top, bottom } = environmentObj(k);
  const game = top.add([k.z(4), k.timer()]);
  playerObj({
    k,
    game,
    parent: top,
    handleAddItem,
    handleRemoveItem,
  });
  backgroundObj({ k, parent: top });
  foregroundObj({ k, parent: top });
  colliderObj({ k, parent: top });
  const { greetings, label, description, space } = textObj({
    k,
    parent: bottom,
  });

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

  k.onKeyPress('space', () => {
    if (!activeItems.length) return;

    k.tween(k.vec2(0.8), k.vec2(1), 0.1, (v) => {
      space.scale = v;
    });

    const item = activeItems[0];

    if (item.getAction) {
      const data = item.getAction();

      description.text = data.description;
      label.text = data.label || label.text;
      space.text = data.space === undefined ? space.text : data.space;
    } else {
      handleAction(item.uniqueId, game);
      game.paused = true;
    }
  });

  k.onUpdate(() => {
    if (activeItems.length) {
      const newItem = activeItems[0];
      if (
        !latestItem ||
        (latestItem && latestItem.uniqueId !== newItem.uniqueId)
      ) {
        greetings.text = '';
        label.text = `${newItem.label}`;
        description.text = newItem.description || '';
        space.text = SPACE_TEXT;

        latestItem = newItem;
      }
    } else {
      label.text = '';
      description.text = '';
      space.text = '';
      latestItem = undefined;
    }
  });

  // k.debug.inspect = true;
};

export default initGame;
