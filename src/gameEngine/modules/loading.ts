import type { KAPLAYCtx } from 'kaplay';

const loading = (k: KAPLAYCtx) => {
  k.onLoading((progress) => {
    k.drawRect({
      width: k.width(),
      height: k.height(),
      color: k.rgb(152, 231, 95),
    });

    k.drawCircle({
      pos: k.center().sub(0, 35),
      radius: 32,
      end: k.map(progress, 0, 1, 0, 360),
    });

    k.drawCircle({
      pos: k.center().sub(0, 35),
      radius: 26,
      color: k.rgb(152, 231, 95),
    });

    k.drawText({
      text: 'loading' + '.'.repeat(k.wave(1, 4, k.time() * 12)),
      font: 'monospace',
      size: 24,
      anchor: 'center',
      pos: k.center().add(0, 35),
    });
  });
};

export default loading;
