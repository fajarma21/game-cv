import { css } from "@emotion/css";

export const container = css`
  margin: 32px auto;
`;

export const viewPort = css`
  position: relative;
  width: 800px;
  height: 600px;
  margin: 0 auto;
  overflow: hidden;
  border: 2px solid var(--foreground);
  border-radius: 12px;
`;

export const player = css`
  position: absolute;
  height: 50px;
  width: 25px;
  background-color: lightgreen;
`;
