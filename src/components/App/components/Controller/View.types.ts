export interface ControllerProps {
  activeKeys: string[];
  onClick: (key: string) => void;
  onRemoveClick: (key: string) => void;
}
