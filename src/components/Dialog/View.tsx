import { useCallback, useEffect, useRef, useState } from "react";
import { cx } from "@emotion/css";

import Portal from "../Portal";
import * as css from "./View.styles";
import { DialogProps } from "./View.types";

const Dialog = ({
  children,
  className = "",
  overlayClassName = "",
  onClose,
}: DialogProps) => {
  const [display, setDisplay] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleClose = useCallback(() => {
    setDisplay(false);
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, 500);
  }, [onClose]);

  useEffect(() => {
    const handleKeyClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyClose);
    return () => {
      window.removeEventListener("keydown", handleKeyClose);
    };
  }, [display, handleClose]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Portal>
      <div
        className={cx(css.overlay, overlayClassName)}
        data-show={display}
        onClick={handleClose}
      />
      <div className={cx(css.dialog, className)} data-show={display}>
        {children}
      </div>
    </Portal>
  );
};

export default Dialog;
