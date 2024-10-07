import React, { useState } from 'react';

export const Numberield = ({
  label,
  value = '',
  name,
  required,
  disabled,
  onChange,
  onClearError,
  error,
  placeholder = '',
  ...props
}) => {
  const valueFormated = value ? `${value}`.replaceAll(/\D/g, '') : '';

  const add = () => {
    const value = +valueFormated + 1;

    onChange({ target: { name, value: `${value}` } });
  };

  const remove = () => {
    if (!+valueFormated) return;
    const value = +valueFormated - 1;

    onChange({ target: { name, value: `${value}` } });
  };

  return (
    <div className="un-container-number-field d-flex flex-column gap-2 w-100" data-error={!!error}>
      <label htmlFor={name} className="label-text m-0">
        {label} {required && <span>*</span>}
      </label>
      <div className="container-input-text bg-white align-items-center d-flex gap-4 py-2 px-3 ">
        <input
          disabled={disabled}
          className="w-100 input-text"
          type={'text'}
          id={name}
          name={name}
          value={valueFormated}
          onChange={onChange}
          onFocus={onClearError}
          placeholder={placeholder}
          {...props}
          
        />

        <div className="d-flex gap-2">
          <span className="material-symbols-outlined actions" onClick={add}>
            add
          </span>
          <span className="material-symbols-outlined actions" onClick={remove}>
            remove
          </span>
        </div>
      </div>
      {error && <span className="error-container filled">{error}</span>}
    </div>
  );
};
