import useModalStore from '@/stores/useModalStore';
import { useResizeObserver } from 'fajarma-react-lib';
import type { GameObj } from 'kaplay';
import { useCallback, useEffect, useRef, useState } from 'react';

import { CANVAS_HEIGHT, CANVAS_WIDTH } from '@/constants';
import initGame from '@/gameEngine';

import Dialog from './components/Dialog';
import css from './View.module.scss';
import { INIT_HEIGTH } from './View.constants';

const Game = () => {
  const isLoaded = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { ref, elementSize } = useResizeObserver<HTMLDivElement>();

  const [display, setDisplay] = useState(false);

  const gameRef = useRef<GameObj>(null);
  const changeContentId = useModalStore((state) => state.changeContentId);

  const wrapperHeigth =
    Math.floor((CANVAS_HEIGHT * elementSize.width) / CANVAS_WIDTH) ||
    INIT_HEIGTH;

  const handleCloseDialog = () => {
    setDisplay(false);
    if (canvasRef.current) canvasRef.current.focus();
    if (gameRef.current) gameRef.current.paused = false;
  };

  const handleAction = useCallback(
    (value: number, game: GameObj) => {
      setDisplay(true);
      changeContentId(value);
      if (!gameRef.current) gameRef.current = game;
    },
    [changeContentId]
  );

  useEffect(() => {
    if (canvasRef.current && !isLoaded.current) {
      initGame({
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        canvas: canvasRef.current,
        handleAction,
      });

      isLoaded.current = true;
    }
  }, [handleAction]);

  return (
    <div ref={ref} className={css.container}>
      <div
        className={css.wrapper}
        style={{
          height: wrapperHeigth,
        }}
      >
        <canvas ref={canvasRef} />
      </div>
      <Dialog display={display} onClose={handleCloseDialog} />
    </div>
  );
};

export default Game;
