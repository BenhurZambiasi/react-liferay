import React from 'react';

/**
 * @param {Object} TextFieldProps
 * @param {string} TextFieldProps.label - Label do campo
 * @param {string} TextFieldProps.value - Valor do campo
 * @param {string} TextFieldProps.name - Nome do campo
 * @param {boolean} TextFieldProps.required - Se o campo é obrigatório
 * @param {boolean} TextFieldProps.disabled - Se o campo é desabilitado
 * @param {"text" | "money" | "search"| "number"} TextFieldProps.type - Tipo do campo
 * @param {function} TextFieldProps.onChange - Função de callback para onChange
 * @param {function} TextFieldProps.onClearError - Função de callback para onClearError
 * @param {string} TextFieldProps.error - Erro do campo
 * @param {string} TextFieldProps.placeholder - Placeholder do campo
 */
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
      {label && (
        <label htmlFor={name} className="label-text m-0">
          {label} {required && <span>*</span>}
        </label>
      )}
      <div className="d-flex align-items-center input-container">
        {type === 'search' && <span className="material-symbols-outlined">search</span>}
        <input
          disabled={disabled}
          className="input-text bg-white align-items-center d-flex"
          type={'text'}
          id={name}
          name={name}
          value={valueFormated}
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
