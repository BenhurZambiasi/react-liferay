import React from 'react';

export const TextAreaField = ({
  name,
  label,
  maxCaraterMessage,
  error,
  required,
  onClearError,
  placeholder = '',
  ...rest
}) => {
  return (
    <div className="un-conntainer-textarea-field gap-2" data-error={!!error}>
      <label className="label-textarea m-0" htmlFor={name}>
        {label}
        {required && <span>*</span>}
      </label>
      <textarea
        className="input-textarea"
        id={name}
        name={name}
        onFocus={onClearError}
        placeholder={placeholder}
        {...rest}
      />

      {error ? (
        <span className="error-container filled">{error}</span>
      ) : (
        maxCaraterMessage && <span className="max-caracteres">{maxCaraterMessage}</span>
      )}
    </div>
  );
};
