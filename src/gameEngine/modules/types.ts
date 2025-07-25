import type { GameObj, KAPLAYCtx } from 'kaplay';

export interface BasicParams {
  k: KAPLAYCtx;
  parent: GameObj;
}

export interface PlayerParams extends BasicParams {
  game: GameObj;
  handleAddItem: (value: GameObj) => void;
  handleRemoveItem: (value: GameObj) => void;
}
