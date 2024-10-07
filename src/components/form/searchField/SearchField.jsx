import React, { useRef, useState } from 'react';

export const SearchField = ({
  label,
  value,
  name,
  required,
  disabled,
  type = 'text',
  onChange,
  onClearError,
  error,
  placeholder = '',
  ...props
}) => {
  const refInput = useRef(null);

  const handleFocusInput = () => {
    if (refInput.current) {
      refInput.current.focus();
    }
  };
  return (
    <div className="un-container-search-field d-flex flex-column gap-2 w-100" data-error={!!error}>
      {label && (
        <label htmlFor={name} className="label-text m-0">
          {label} {required && <span>*</span>}
        </label>
      )}
      <div className="d-flex align-items-center gap-2 input-text-container">
        <span className="material-symbols-outlined ml-2" onClick={handleFocusInput}>
          search
        </span>
        <input
          ref={refInput}
          disabled={disabled}
          className="input-text bg-white d-flex  py-2  "
          type={'text'}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onClearError}
          placeholder={placeholder}
          {...props}
        />
      </div>

      {error && <span className="error-container filled">{error}</span>}
    </div>
  );
};
