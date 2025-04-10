import { KAPLAYCtx, GameObj } from "kaplay";

export interface PlayerParams {
  activeItems: GameObj[];
  k: KAPLAYCtx;
  top: GameObj;
  handleAction: (value: string) => void;
}

export interface ItemParams {
  k: KAPLAYCtx;
  top: GameObj;
}
