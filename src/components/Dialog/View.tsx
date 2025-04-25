import { useEffect, useRef, useState } from "react";
import { cx } from "@emotion/css";

import Portal from "../Portal";
import * as css from "./View.styles";
import { DialogProps } from "./View.types";

const Dialog = ({
  display,
  children,
  className = "",
  overlayClassName = "",
  onClose,
}: DialogProps) => {
  const [displayDOM, setDisplayDOM] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const handleKeyClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyClose);
    return () => {
      window.removeEventListener("keydown", handleKeyClose);
    };
  }, [display, onClose]);

  useEffect(() => {
    if (display) setDisplayDOM(true);
    else {
      timeoutRef.current = setTimeout(() => {
        setDisplayDOM(false);
      }, 750);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [display]);

  if (displayDOM) {
    return (
      <Portal>
        <div
          className={cx(css.overlay, overlayClassName)}
          data-show={display}
          onClick={onClose}
        />
        <div className={cx(css.dialog, className)} data-show={display}>
          {children}
        </div>
      </Portal>
    );
  }
  return null;
};

export default Dialog;
