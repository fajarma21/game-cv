export interface InitGameParams {
  canvas: HTMLCanvasElement;
  height: number;
  width: number;
  handleAction: (value: string) => void;
}
