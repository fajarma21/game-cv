import { KAPLAYCtx, GameObj } from "kaplay";

export interface PlayerParams {
  k: KAPLAYCtx;
  top: GameObj;
  handleAddItem: (value: GameObj) => void;
  handleRemoveItem: (value: GameObj) => void;
}
