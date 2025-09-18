import dayjs from 'dayjs';
import type { BasicParams } from './types';

const clock = ({ k, parent }: BasicParams) => {
  let currHour: number;
  let currMinute: number;

  const wallClock = parent.add([
    k.anchor('center'),
    k.pos(630, -80),
    k.circle(20),
    k.color(k.rgb(89, 186, 194)),
    k.outline(2, k.rgb(19, 76, 81)),
  ]);

  const hourHand = wallClock.add([
    k.pos(),
    k.rect(2, 11),
    k.anchor('bot'),
    k.color(k.WHITE),
    k.rotate(90),
  ]);

  const minHand = wallClock.add([
    k.pos(),
    k.rect(2, 16),
    k.anchor('bot'),
    k.color(k.WHITE),
    k.rotate(),
  ]);

  wallClock.onUpdate(() => {
    const hour = dayjs().hour();
    const minute = dayjs().minute();
    if (currHour !== hour) {
      currHour = hour;
      hourHand.use(k.rotate(hour * 30));
    }
    if (currMinute !== minute) {
      currMinute = minute;
      minHand.use(k.rotate(minute * 6));
    }
  });
};

export default clock;
