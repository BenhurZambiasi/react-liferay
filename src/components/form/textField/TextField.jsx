import React from 'react';

export const TextField = ({
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
  const formatCurrency = value => {
    // Remove tudo que não é dígito
    let cleanedValue = value.replace(/\D/g, '');

    // Converte para número e formata com separador de milhar e decimais
    let formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(cleanedValue / 100); // Divide por 100 para ajustar centavos

    return formattedValue;
  };
  const valueFormated =
    type === 'money' ? formatCurrency(value) : type === 'number' ? value.replaceAll(/\D/g, '') : value;

  return (
    <div className="un-container-text-field d-flex flex-column gap-2 w-100" data-error={!!error}>
      <label htmlFor={name} className="label-text m-0">
        {label} {required && <span>*</span>}
      </label>
      <input
        disabled={disabled}
        className="input-text bg-white align-items-center d-flex gap-4 py-2 px-3 "
        type={'text'}
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
