import { css } from "@emotion/css";

export const container = css`
  padding: 0 16px;
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const wrapper = css`
  overflow: hidden;
  border-radius: 12px;

  canvas {
    display: block;
  }
`;
