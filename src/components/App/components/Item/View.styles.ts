import { css, keyframes } from "@emotion/css";

const show = keyframes`
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const item = css`
  position: absolute;
  background-color: crimson;

  &[data-active] {
    border: 1px solid white;
  }
`;

export const container = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const actionBtn = css`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 30px);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 60px;
  font-weight: bold;
  font-size: 0.8rem;
  color: #242424;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #242424;
  animation: ${show} 150ms 1 ease-out forwards;
`;
