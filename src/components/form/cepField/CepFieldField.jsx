import React, { useEffect } from "react";

const fetchCep = async (cep) => {
  try {
    const route = `https://brasilapi.com.br/api/cep/v1/${cep}`;
    const response = await fetch(route);
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const CepField = ({
  required,
  label,
  disabled,
  name,
  type = "text",
  value,
  onChange,
  onClearError,
  error,
  placeholder = "",
  register,
  ...props
}) => {
  const handleChange = async ({ target }) => {
    const { name, value } = target;
    const valueFormated = value.replaceAll(/\D/g, "");

    onChange({ name, value: valueFormated, ok: true });
    if (valueFormated.length >= 8) {
      const data = await fetchCep(valueFormated);

      onChange({ name, value, ...data, ok: !data.errors });
    }
  };
  return (
    <div
      className="un-container-text-field d-flex flex-column gap-2"
      data-error={!!error}>
      <label htmlFor={name} className="m-0">
        {label} {required && <span>*</span>}
      </label>
      {register ? (
        <input
          className="input-text bg-white align-items-center d-flex gap-4 py-2 px-3 "
          placeholder={placeholder}
          onFocus={() => onClearError(name)}
          {...register(name)}
        />
      ) : (
        <input
          disabled={disabled}
          className="input-text bg-white align-items-center d-flex gap-4 py-2 px-3 "
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={onClearError}
          placeholder={placeholder}
          {...props}
        />
      )}

      {error && <span className="error-container filled">{error}</span>}
    </div>
  );
};
