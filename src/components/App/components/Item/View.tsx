import * as css from "./View.styles";
import { ItemProps } from "./View.types";

const Item = ({
  isActive,
  top,
  left,
  width,
  height,
  onClickAction,
}: ItemProps) => {
  return (
    <div
      className={css.item}
      style={{
        top,
        left,
        width,
        height,
      }}
      data-active={isActive || undefined}
    >
      {isActive && (
        <div className={css.container}>
          <button
            type="button"
            className={css.actionBtn}
            onClick={onClickAction}
          >
            SPACE
          </button>
        </div>
      )}
    </div>
  );
};

export default Item;
