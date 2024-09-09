import React from "react";

export const TextField = ({
  label,
  value,
  name,
  required,
  disabled,
  type = "text",
  onChange,
  onClearError,
  error,
  placeholder = "",
  ...props
}) => {
  const valueFormated = type === "number" ? value.replaceAll(/\D/g, "") : value;

  return (
    <div
      className="un-container-text-field d-flex flex-column gap-2"
      data-error={!!error}>
      <label htmlFor={name} className="m-0">
        {label} {required && <span>*</span>}
      </label>
      <input
        disabled={disabled}
        className="input-text bg-white align-items-center d-flex gap-4 py-2 px-3 "
        type={"text"}
        id={name}
        name={name}
        value={valueFormated}
        onChange={onChange}
        onFocus={onClearError}
        placeholder={placeholder}
        {...props}
      />
      {error && <span className="error-container filled">{error}</span>}
    </div>
  );
};
