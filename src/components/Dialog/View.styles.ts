import { css, keyframes } from "@emotion/css";

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const overlayClose = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const dialogShow = keyframes`
  from {
      opacity: 0;
      transform: translate(-50%, calc(-50% + 100px));
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
`;

const dialogClose = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  to {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 100px));
  }
`;

const baseDialog = css`
  position: fixed;
  z-index: 50;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
`;

export const overlay = css`
  ${baseDialog}
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgb(36 36 36 / 70%);

  &[data-show="true"] {
    animation-name: ${overlayShow};
  }

  &[data-show="false"] {
    animation-name: ${overlayClose};
  }
`;

export const dialog = css`
  ${baseDialog};
  top: 50%;
  left: 50%;
  width: 80%;
  padding: 16px;
  border-radius: 16px;
  border: 2px solid var(--accent);
  background-color: var(--background);
  transform: translate(-50%, -50%);

  &[data-show="true"] {
    animation-name: ${dialogShow};
  }

  &[data-show="false"] {
    animation-name: ${dialogClose};
  }
`;
