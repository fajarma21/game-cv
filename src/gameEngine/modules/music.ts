import { ID_MUSIC } from '@/constants';
import bgmAudio from '@/assets/audio/bgm.mp3';
import setLocalStore from '@/helpers/localStore/setLocalStore';

import { getMusicState } from '../View.helpers';
import type { MusicParams } from './types';

const music = ({ k, parent, musicState, z }: MusicParams) => {
  k.loadMusic('bgm', bgmAudio);

  const bgm = k.play('bgm', {
    loop: true,
    paused: !musicState,
  });

  const music = parent.add([
    k.sprite('music', { anim: getMusicState(musicState) }),
    k.pos(20, 205),
    k.z(z),
    {
      isPlayed: musicState,
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
      description: `Turned ${getMusicState(musicState)}`,
      getAction: () => {
        let state;
        if (music.isPlayed) {
          bgm.stop();
          state = 'off';
        } else {
          bgm.play();
          state = 'on';
        }
        music.use(k.sprite('music', { anim: state }));
        music.isPlayed = !music.isPlayed;
        setLocalStore({ music: music.isPlayed });

        const desc = `Turned ${state}`;
        collider.description = desc;
        return {
          description: desc,
        };
      },
    },
  ]);
};

export default music;
