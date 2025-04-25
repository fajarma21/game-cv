import dayjs from "dayjs";
import { ID_CLOCK } from "@/constants";
import { BasicParams } from "./types";

const clock = ({ k, parent }: BasicParams) => {
  let currHour = 0;
  let currMinute = 0;

  const wallClock = parent.add([
    k.anchor("center"),
    k.pos(305, -80),
    k.circle(20),
    k.color(k.rgb(200, 60, 60)),
    k.outline(2),
    k.area({
      shape: new k.Rect(k.vec2(0, 90), 40, 20),
    }),
    "item",
    {
      isText: true,
      uniqueId: ID_CLOCK,
      text: "Clock",
    },
  ]);

  const hourHand = wallClock.add([
    k.pos(),
    k.rect(2, 11),
    k.anchor("bot"),
    k.color(k.WHITE),
    k.rotate(90),
  ]);

  const minHand = wallClock.add([
    k.pos(),
    k.rect(2, 16),
    k.anchor("bot"),
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
