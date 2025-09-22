import { ID_MUSIC } from '@/constants';

import type { MusicParams } from './types';

// TODO: add music

const music = ({ k, parent, z }: MusicParams) => {
  // const musicState = 1;

  const music = parent.add([
    k.sprite('music', { anim: 'on' }),
    k.pos(20, 205),
    k.z(z),
    {
      state: 1,
    },
  ]);

  const collider = parent.add([
    k.area({
      shape: new k.Rect(k.vec2(28, 250), 25, 20),
    }),
    'item',
    {
      uniqueId: ID_MUSIC,
      label: `Music`,
      description: 'Turned on',
      getAction: () => {
        let textState;
        if (music.state) {
          music.state = 0;
          textState = 'off';
        } else {
          music.state = 1;
          textState = 'on';
        }
        music.use(k.sprite('music', { anim: textState }));

        const desc = `Turned ${textState}`;
        collider.description = desc;
        return {
          description: desc,
        };
      },
    },
  ]);
};

export default music;
