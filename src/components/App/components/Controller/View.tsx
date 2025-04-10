import { MouseEvent } from "react";

import { KEY_DOWN, KEY_LEFT, KEY_RIGHT, KEY_SPACE, KEY_UP } from "@/constants";

import * as css from "./View.styles";
import { ControllerProps } from "./View.types";

const Controller = ({
  activeKeys,
  onClick,
  onRemoveClick,
}: ControllerProps) => {
  const getButtonAction = (key: string) => {
    return {
      onContextMenu: (e: MouseEvent) => e.preventDefault(),
      onMouseDown: () => onClick(key),
      onTouchStart: () => onClick(key),
      onMouseUp: () => onRemoveClick(key),
      onMouseLeave: () => onRemoveClick(key),
      onTouchEnd: () => onRemoveClick(key),
      onTouchMove: () => onRemoveClick(key),
    };
  };

  return (
    <div className={css.controller}>
      <div>
        <div className={css.directionRow}>
          <button
            type="button"
            className={css.directionBtn}
            data-direction="up"
            data-active={activeKeys.includes(KEY_UP) || undefined}
            {...getButtonAction(KEY_UP)}
          />
        </div>
        <div className={css.directionRow}>
          <button
            type="button"
            className={css.directionBtn}
            data-direction="left"
            data-active={activeKeys.includes(KEY_LEFT) || undefined}
            {...getButtonAction(KEY_LEFT)}
          />
          <button
            type="button"
            className={css.directionBtn}
            data-direction="right"
            data-active={activeKeys.includes(KEY_RIGHT) || undefined}
            {...getButtonAction(KEY_RIGHT)}
          />
        </div>
        <div className={css.directionRow}>
          <button
            type="button"
            className={css.directionBtn}
            data-direction="down"
            data-active={activeKeys.includes(KEY_DOWN) || undefined}
            {...getButtonAction(KEY_DOWN)}
          />
        </div>
      </div>
      <button
        type="button"
        className={css.spaceBtn}
        data-active={activeKeys.includes(KEY_SPACE) || undefined}
        {...getButtonAction(KEY_SPACE)}
      >
        SPACE
      </button>
    </div>
  );
};

export default Controller;
