import { useCallback, useEffect, useRef, useState } from "react";
import { GameObj } from "kaplay";

import { CANVAS_HEIGHT, CANVAS_WIDTH } from "@/constants";
import initGame from "@/gameEngine";
import useResizeObserver from "@/hooks/useResizeObserver";

import Dialog from "./components/Dialog";

import * as css from "./View.styles";

const Game = () => {
  const isLoaded = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { elementRef, elementSize } = useResizeObserver();

  const [display, setDisplay] = useState(false);
  const [id, setId] = useState(0);
  const [gameObj, setGameObj] = useState<GameObj>();

  const wrapperHeigth = Math.floor(
    (CANVAS_HEIGHT * elementSize.width) / CANVAS_WIDTH
  );

  const handleCloseDialog = () => {
    setDisplay(false);
    if (canvasRef.current) canvasRef.current.focus();
    if (gameObj) gameObj.paused = false;
  };

  const handleAction = useCallback(
    (value: number, game: GameObj) => {
      setDisplay(true);
      setId(value);
      if (!gameObj) setGameObj(game);
    },
    [gameObj]
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
    <div className={css.container}>
      <div ref={elementRef}>
        <div
          className={css.wrapper}
          style={{
            height: wrapperHeigth,
          }}
        >
          <canvas ref={canvasRef} />
        </div>
        <Dialog display={display} id={id} onClose={handleCloseDialog} />
      </div>
    </div>
  );
};

export default Game;
