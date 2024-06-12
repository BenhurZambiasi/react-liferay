/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import "./select.scss";

export const Select = ({
  label,
  iconName,
  id,
  children,
  onClickOut = () => {},
  disabled,
  minWidth,
}) => {
  const ref = useRef();
  const refOptions = useRef();
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    function handleClick(e) {
      if (!ref.current?.contains(e.target)) {
        setFocused(false);
      }
      if (refOptions.current?.contains(e.target)) {
        setFocused(false);
      }
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const toogle = () => {
    onClickOut();
    setFocused(!focused);
  };
  return (
    <div
      ref={ref}
      style={{ minWidth: minWidth || 180 }}
      className="position-relative un-container-select">
      <label
        style={{
          pointerEvents: disabled ? "none" : "auto",
        }}
        htmlFor={id}
        className="un-select-filtro-header d-flex align-items-center"
        data-testid="unCoparticipacaoLabelSelect">
        {iconName && (
          <span
            style={{
              color: disabled ? "#bbb" : focused ? "#00995c" : "#404040",
            }}
            className="material-symbols-outlined ">
            {iconName}
          </span>
        )}

        <span
          data-testid="unCoparticipacaoLabelText"
          style={{
            color: disabled ? "#bbb" : focused ? "#00995c" : "#404040",
          }}>
          {label}
        </span>
        <input
          checked={focused === true}
          type="checkbox"
          className="d-none un-controle-select-filtro"
          onChange={toogle}
          name={id}
          id={id}
        />
        <span
          style={{ color: disabled ? "#bbb" : focused ? "#00995c" : "#404040" }}
          className="material-symbols-outlined un-select-arrow">
          {!focused ? "expand_more" : "expand_less"}
        </span>
      </label>
      <div
        id={id}
        ref={refOptions}
        className={`un-select-filtro-options w-100 position-absolute`}>
        {children}
      </div>
    </div>
  );
};
