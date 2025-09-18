import { SPEED } from '../index.constants';
import type { PlayerParams } from './types';

const player = ({
  k,
  game,
  parent,
  handleAddItem,
  handleRemoveItem,
}: PlayerParams) => {
  const player = game.add([
    k.sprite('player', { anim: 'down-idle' }),
    k.area({ shape: new k.Rect(k.vec2(0, 0), 40, 20) }),
    k.body(),
    k.anchor('bot'),
    k.pos(parent.width / 2, parent.height / 2),
    'player',
    {
      speed: SPEED,
      direction: k.vec2(0, 0),
    },
  ]);

  // shadow
  parent.add([
    k.pos(),
    k.follow(player, k.vec2(0, -10)),
    k.z(2),
    {
      draw() {
        k.drawEllipse({
          radiusX: 30,
          radiusY: 20,
          color: k.BLACK,
          opacity: 0.3,
        });
      },
    },
  ]);

  player.onCollide('item', (item) => {
    handleAddItem(item);
  });

  player.onCollideEnd('item', (item) => {
    handleRemoveItem(item);
  });

  player.onUpdate(() => {
    player.direction.x = 0;
    player.direction.y = 0;

    if (k.isKeyDown('left')) player.direction.x = -1;
    else if (k.isKeyDown('right')) player.direction.x = 1;
    else if (k.isKeyDown('up')) player.direction.y = -1;
    else if (k.isKeyDown('down')) player.direction.y = 1;

    if (
      player.direction.eq(k.vec2(-1, 0)) &&
      player.getCurAnim()?.name !== 'left'
    ) {
      player.play('left');
    }
    if (
      player.direction.eq(k.vec2(1, 0)) &&
      player.getCurAnim()?.name !== 'right'
    ) {
      player.play('right');
    }
    if (
      player.direction.eq(k.vec2(0, -1)) &&
      player.getCurAnim()?.name !== 'up'
    ) {
      player.play('up');
    }
    if (
      player.direction.eq(k.vec2(0, 1)) &&
      player.getCurAnim()?.name !== 'down'
    ) {
      player.play('down');
    }

    if (
      player.direction.eq(k.vec2(0, 0)) &&
      !player.getCurAnim()?.name.includes('idle')
    ) {
      player.play(player.getCurAnim()?.name + '-idle');
    }

    player.move(player.direction.scale(player.speed));

    // dynamic z index
    // const items = k.get("item");
    // for (const item of items) {
    //   if (player.pos.y < item.pos.y) item.z = 4;
    //   else item.z = 1;
    // }
  });

  return { player };
};

export default player;
