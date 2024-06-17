/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import "./drawer.scss";
import { useClickOutside } from "../../../hooks/useClickOutSide";

export const Drawer = ({
  isOpen,
  onClose,
  placement = "right",
  width = "50%",
  maxWidth = "unset",
  children,
}) => {
  const ref = useRef(null);

  useClickOutside(ref, () => {
    onClose();
  });

  useEffect(() => {
    if (isOpen) {
      const body = document.querySelector("body");
      body.style.overflow = "hidden";
    } else {
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="container-drawer">
      <div
        ref={ref}
        data-testid={"drawer"}
        className={`drawer ${isOpen ? "open" : ""} ${placement}`}
        style={{ width, maxWidth }}>
        <span
          onClick={onClose}
          className="material-symbols-outlined d-flex justify-content-end">
          close
        </span>
        <div className="content-drawer">{isOpen && children}</div>
      </div>
    </div>
  );
};
