/* eslint-disable react/prop-types */
import { useRef } from "react";
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
