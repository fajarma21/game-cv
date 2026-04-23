import { ID_TV } from '@/constants';
import type { BasicParams } from './types';

const TOTAL_CHANNEL = 5;
const CHANNEL_TEXTS = [
  '"Trust means absolutely zero inside these walls"',
  '"I am the one who knocks."',
  '"It\'s never lupus."',
  '"No God. The only man in the sky is me."',
  '"You\'ll float too."',
];

const tv = ({ k, parent }: BasicParams) => {
  const tv = parent.add([
    k.sprite('tv'),
    k.anchor('botleft'),
    k.pos(255, 30),
    k.body({ isStatic: true }),
    k.area(),
    {
      channel: 0,
      prevChannel: 0,
    },
  ]);

  const collider = parent.add([
    k.area({
      shape: new k.Rect(k.vec2(285, 30), 50, 20),
    }),
    'item',
    {
      uniqueId: ID_TV,
      label: 'TV',
      description: 'Turned off',
      getAction: () => {
        let state;
        if (tv.channel) {
          tv.channel = 0;
          tv.children[0].destroy();
          state = 'Turned off';
        } else {
          const getRandom = () => Math.ceil(Math.random() * TOTAL_CHANNEL);
          let randomChannel = getRandom();
          while (randomChannel === tv.prevChannel) {
            randomChannel = getRandom();
          }

          tv.channel = randomChannel;
          tv.prevChannel = randomChannel;

          tv.add([
            k.sprite('tv-content', { anim: `ch${randomChannel}` }),
            k.pos(13, -127),
          ]);

          state = CHANNEL_TEXTS[randomChannel - 1];
          // state = 'Turned on';
        }
        const desc = String(state);
        // const desc = `Turned ${state}`;
        collider.description = desc;

        return {
          description: desc,
        };
      },
    },
  ]);
};

export default tv;
