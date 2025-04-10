import { useCallback, useEffect, useRef, useState } from "react";

import { KEY_DOWN, KEY_LEFT, KEY_RIGHT, KEY_SPACE, KEY_UP } from "@/constants";
import useResizeObserver from "@/hooks/useResizeObserver";
// import Controller from "./components/Controller";
import Item from "./components/Item";
import ItemDialog from "./components/ItemDialog";

import { checkCollision } from "./View.helpers";
import { BLOCKERS, MOVEMENT, MOVEMENT_KEYS, PLAYER } from "./View.constants";
import * as css from "./View.styles";
import { CollisionData } from "./View.types";

// NOTE: to heavy

const App = () => {
  const playerRef = useRef<HTMLDivElement>(null);
  const { elementRef: viewportRef, elementSize: viewportSize } =
    useResizeObserver();
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [direction, setDirection] = useState<string>(KEY_DOWN);
  const [position, setPosition] = useState({
    left: 450,
    top: 150,
  });
  const [collisionData, setCollisionData] = useState<CollisionData>({
    id: 0,
    from: "",
    blockerData: null,
  });
  const [display, setDisplay] = useState(false);

  const toggleDialog = useCallback(() => {
    setDisplay((prev) => !prev);
  }, []);

  const checkKeys = useCallback(
    (key: string) => {
      if (!activeKeys.includes(key)) setActiveKeys((prev) => [...prev, key]);
    },
    [activeKeys]
  );

  const handleMove = useCallback(
    (key: string) => {
      let tempLeft = 0;
      let tempTop = 0;
      if (key === KEY_RIGHT) tempLeft = MOVEMENT;
      else if (key === KEY_LEFT) tempLeft = -MOVEMENT;
      else if (key === KEY_UP) tempTop = -MOVEMENT;
      else if (key === KEY_DOWN) tempTop = MOVEMENT;

      let newLeft = position.left + tempLeft;
      let newTop = position.top + tempTop;
      const newCollision = checkCollision(newTop, newLeft);
      if (newCollision.blockerData) {
        // blocker
        const blocker = newCollision.blockerData;
        if (
          newCollision.from === "l" &&
          newLeft < blocker.left + blocker.width
        ) {
          newLeft = blocker.left + blocker.width;
        } else if (
          newCollision.from === "r" &&
          newLeft > blocker.left - PLAYER.width
        ) {
          newLeft = blocker.left - PLAYER.width;
        } else if (
          newCollision.from === "t" &&
          newTop < blocker.top + blocker.height
        ) {
          newTop = blocker.top + blocker.height;
        } else if (
          newCollision.from === "b" &&
          newTop > blocker.top - PLAYER.height
        ) {
          newTop = blocker.top - PLAYER.height;
        }
      } else {
        // wall
        if (newLeft < 0) newLeft = 0;
        else if (newLeft > viewportSize.width - PLAYER.width)
          newLeft = viewportSize.width - PLAYER.width;
        else if (newTop > viewportSize.height - PLAYER.height)
          newTop = viewportSize.height - PLAYER.width;
        else if (newTop < 0) newTop = 0;
      }

      if (collisionData.id !== newCollision.id) setCollisionData(newCollision);
      if (key !== direction) setDirection(key);
      setPosition({
        left: newLeft,
        top: newTop,
      });
    },
    [
      collisionData.id,
      direction,
      position.left,
      position.top,
      viewportSize.height,
      viewportSize.width,
    ]
  );

  const handleAction = useCallback(() => {
    if (collisionData.id) setDisplay(true);
  }, [collisionData.id]);

  const handleClickKey = useCallback(
    (key: string) => {
      checkKeys(key);
      if (MOVEMENT_KEYS.includes(key)) handleMove(key);
      else if (key === KEY_SPACE) handleAction();
    },
    [checkKeys, handleAction, handleMove]
  );

  const handleRemoveKey = useCallback(
    (key: string) => {
      if (activeKeys.includes(key))
        setActiveKeys((prev) => prev.filter((item) => item !== key));
    },
    [activeKeys]
  );

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key;
      if (!display) handleClickKey(key);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      handleRemoveKey(e.key);
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.addEventListener("keyup", handleKeyUp);
    };
  }, [display, handleClickKey, handleRemoveKey]);

  return (
    <div className={css.container}>
      <div ref={viewportRef} className={css.viewPort}>
        {BLOCKERS.map((item) => (
          <Item
            key={item.id}
            isActive={collisionData.id === item.id}
            {...item}
            onClickAction={toggleDialog}
          />
        ))}
        <div
          ref={playerRef}
          className={css.player}
          style={{
            left: `${position.left}px`,
            top: `${position.top}px`,
            width: PLAYER.width,
            height: PLAYER.height,
          }}
        />
      </div>

      {/* <Controller
        activeKeys={activeKeys}
        onClick={handleClickKey}
        onRemoveClick={handleRemoveKey}
      /> */}

      {collisionData.blockerData && display ? (
        <ItemDialog data={collisionData.blockerData} onClose={toggleDialog} />
      ) : null}
    </div>
  );
};

export default App;
