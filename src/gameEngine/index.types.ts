import type { GameObj } from 'kaplay';

export interface InitGameParams {
  canvas: HTMLCanvasElement;
  height: number;
  width: number;
  handleAction: (value: number, unPausefn: GameObj) => void;
}
