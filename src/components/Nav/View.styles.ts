import { css } from "@emotion/css";

export const container = css`
  position: fixed;
  left: 0;
  width: 100%;
  background-color: rgb(36 36 36 / 50%);
  backdrop-filter: blur(3px);
`;

export const wrapper = css`
  width: 1024px;
  padding: 8px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const title = css`
  margin-right: auto;
  h1 {
    margin: 0;
  }
  span {
    opacity: 0.2;
  }
`;

export const menu = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 12px;
`;
