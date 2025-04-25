import { useCallback, useEffect, useRef, useState } from "react";
import initGame from "@/gameEngine";

import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./View.constants";
import * as css from "./View.styles";
import useResizeObserver from "@/hooks/useResizeObserver";

const Game = () => {
  const isLoaded = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { elementRef, elementSize } = useResizeObserver();

  const [display, setDisplay] = useState(false);
  const [id, setId] = useState("");

  const wrapperHeigth = Math.floor(
    (CANVAS_HEIGHT * elementSize.width) / CANVAS_WIDTH
  );

  const handleChangeFocus = () => {
    if (display && canvasRef.current) {
      canvasRef.current.focus();
      setDisplay(false);
    }
  };

  const handleAction = useCallback((value: string) => {
    setDisplay(true);
    setId(value);
  }, []);

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
    <div ref={elementRef} className={css.container}>
      <div
        className={css.wrapper}
        style={{
          height: wrapperHeigth,
        }}
      >
        <canvas ref={canvasRef} />
      </div>
      {display && <div onClick={handleChangeFocus}>{id}</div>}
    </div>
  );
};

export default Game;
