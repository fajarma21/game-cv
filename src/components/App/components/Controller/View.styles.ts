import { css } from "@emotion/css";

export const controller = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 128px;
  margin-top: 32px;
`;

export const directionRow = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const controllBtn = css`
  all: unset;
  cursor: pointer;
`;

export const directionBtn = css`
  ${controllBtn};

  &::before,
  &::after {
    content: "";
    display: block;
    box-sizing: border-box;
  }

  &[data-direction="up"] {
    &::before {
      height: 40px;
      width: 50px;
      background-color: var(--foreground);
      border-radius: 4px 4px 0 0;
    }
    &::after {
      width: 50px;
      border-width: 25px 15px 0px;
      border-style: solid;
      border-color: var(--foreground) transparent transparent transparent;
    }
  }

  &[data-direction="down"] {
    &::before {
      width: 50px;
      border-width: 0 15px 25px;
      border-style: solid;
      border-color: transparent transparent var(--foreground) transparent;
    }
    &::after {
      height: 40px;
      width: 50px;
      background-color: var(--foreground);
      border-radius: 0 0 4px 4px;
    }
  }

  &[data-direction="left"] {
    display: flex;
    align-items: center;
    &::before {
      height: 50px;
      width: 40px;
      background-color: var(--foreground);
      border-radius: 4px 0 0 4px;
    }
    &::after {
      height: 50px;
      border-width: 15px 0px 15px 25px;
      border-style: solid;
      border-color: transparent transparent transparent var(--foreground);
    }
  }

  &[data-direction="right"] {
    display: flex;
    align-items: center;
    &::before {
      height: 50px;
      border-width: 15px 25px 15px 0;
      border-style: solid;
      border-color: transparent var(--foreground) transparent transparent;
    }
    &::after {
      height: 50px;
      width: 40px;
      background-color: var(--foreground);
      border-radius: 0 4px 4px 0;
    }
  }

  &[data-active],
  &:active {
    &[data-direction="up"] {
      &::before {
        background-color: khaki;
      }
      &::after {
        border-top-color: khaki;
      }
    }
    &[data-direction="left"] {
      &::before {
        background-color: khaki;
      }
      &::after {
        border-left-color: khaki;
      }
    }
    &[data-direction="down"] {
      &::before {
        border-bottom-color: khaki;
      }
      &::after {
        background-color: khaki;
      }
    }
    &[data-direction="right"] {
      &::before {
        border-right-color: khaki;
      }
      &::after {
        background-color: khaki;
      }
    }
  }
`;

export const spaceBtn = css`
  ${controllBtn};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 250px;
  border-radius: 4px;
  font-weight: bold;
  color: var(--background);
  background-color: var(--foreground);

  &[data-active],
  &:active {
    background-color: khaki;
  }
`;
