import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickoutSide';

/**
 * @param {Object} props
 * @param {string,array} props.value - Valor do campo
 * @param {Array<{label: string, value: string}>} props.options - Opções do campo
 * @param {function} props.onChange - Função de callback para onChange
 * @param {boolean} props.multiple - Se é multiplo
 * @param {string} props.name - Nome do campo
 * @param {string} props.label - Label do campo
 * @param {string} props.placeholder - Placeholder do campo
 * @param {string} props.inputPlaceholder - Placeholder do campo de texto
 * @param {string} props.error - Mensagem de erro
 * @param {number} props.limit - Placeholder do campo de texto
 * @param {boolean} props.required - Placeholder do campo de texto
 * @param {function} props.customRenderOption - Função de callback para renderizar a opção
 * @param {function} props.onClearError - Função para limpar o erro
 */
export const AutoCompleteField = ({
  value = '',
  options = [],
  onChange,
  multiple = false,
  name,
  label,
  placeholder = '',
  inputPlaceholder = '',
  customRenderOption,
  limit = 0,
  error = '',
  onClearError,
  required,
}) => {
  const hasLimit = Boolean(limit);

  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [limitExceeded, setLimitExceeded] = useState('');

  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);

  const optionsRef = useRef([]);

  const ref = useOnClickOutside(event => {
    if (!event.target.classList.contains(`${name}-field`)) {
      setIsOpen(false);
      setLimitExceeded('');
    }
  });

  const optionsFiltered = options.filter(option => {
    const normalizedLabel = option.label
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const normalizedSearch = search
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    return normalizedLabel.includes(normalizedSearch);
  });

  const labelPorValue = Object.fromEntries(options.map(option => [option.value, option.label]));

  const handleClearSelection = () => {
    setSelected([]);
    onChange({ target: { value: [], name } });
    setLimitExceeded('');
  };

  const handleSelectOption = option => {
    if (multiple) {
      const aux = [...selected];
      if (aux.find(el => el.value === option.value)) {
        aux.splice(aux.indexOf(option), 1);
        setSelected(aux);
        setLimitExceeded('');
      } else {
        if (hasLimit && limit === aux.length) {
          setLimitExceeded(`Limite de ${limit} execedido`);
          return;
        }
        setSelected([...aux, option]);
        setLimitExceeded('');
      }

      onChange({ target: { value: [...aux, option], name } });
    } else {
      setSearch(labelPorValue[option.value]);
      onChange({ target: { value: option.value, name } });
      setIsOpen(false);
    }
  };

  const handleRemoveOption = option => {
    setSelected(selected.filter(item => item.value !== option.value));
    onChange({ target: { value: selected.filter(item => item.value !== option.value), name } });
  };

  const handleOpenOptions = state => {
    onClearError && onClearError({ target: { name } });

    setIsOpen(state);
  };

  const handleSearch = value => {
    setSearch(value);
    onChange({ target: { value: '', name } });
  };

  const handleClearSearch = () => {
    setSearch('');
    onChange({ target: { value: '', name } });
  };

  useEffect(() => {
    if (!isOpen) {
      setSearch('');
    }
  }, [isOpen]);

  const handleKeyDown = e => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedOptionIndex(prevIndex => (prevIndex < optionsFiltered.length - 1 ? prevIndex + 1 : prevIndex));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedOptionIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedOptionIndex >= 0 && focusedOptionIndex < optionsFiltered.length) {
          handleSelectOption(optionsFiltered[focusedOptionIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  useEffect(() => {
    if (isOpen) {
      if (value) {
        const indexValue = options.sort((a, b) => a.label.localeCompare(b.label)).findIndex(el => el.value === value);

        optionsRef.current[indexValue].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && focusedOptionIndex >= 0 && focusedOptionIndex < optionsRef.current.length) {
      {
        optionsRef.current[focusedOptionIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }
  }, [focusedOptionIndex, isOpen]);

  useEffect(() => {
    setFocusedOptionIndex(-1);
  }, [search]);

  return (
    <div className="un-container-auto-complete-field" data-open={isOpen} data-error={error ? true : false}>
      {label && (
        <label
          htmlFor={name}
          className={`label-auto-complete-field ${name}-field`}
          onClick={() => handleOpenOptions(!isOpen)}
        >
          {label}
          {required && <span className="required-field">*</span>}
        </label>
      )}
      <div className="container-input-result" ref={ref}>
        <div className="input-auto-complete-field" onClick={() => handleOpenOptions(true)}>
          {!multiple || isOpen ? (
            <Fragment>
              <span className="material-symbols-outlined">search</span>

              <input
                autoFocus
                value={search}
                type="text"
                name={name}
                id={name}
                onChange={e => handleSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={value ? labelPorValue[value] : isOpen ? inputPlaceholder : placeholder}
              />
            </Fragment>
          ) : (
            <div className={`placeholder-auto-complete-field  ${name}-field`} onClick={handleOpenOptions}>
              {selected.map(op => {
                return (
                  <div key={op.value} className={`plaholder-item-auto-complete ${name}-field`}>
                    {op.label}
                  </div>
                );
              })}
              {selected.length === 0 && (
                <span className={`placeholder-auto-complete-field-text ${name}-field`}>{placeholder}</span>
              )}
            </div>
          )}
          {(isOpen && search.length) || labelPorValue[value] ? (
            <span className="material-symbols-outlined clear-search-auto-complete" onClick={handleClearSearch}>
              close
            </span>
          ) : (
            <span className="material-symbols-outlined un-icon-arrow-auto-complete-field">keyboard_arrow_down</span>
          )}
        </div>

        <div className="options-auto-complete">
          {multiple && (
            <div className="selected-options-auto-complete">
              {selected
                .sort((a, b) => a.label.localeCompare(b.label))
                .map(option => {
                  return (
                    <div key={option.value} className="option-selected-auto-complete">
                      <span className="option-selected-auto-complete-label">{option.label}</span>
                      <span
                        onClick={() => handleRemoveOption(option)}
                        className={`material-symbols-outlined icon-close-auto-complete-field ${name}-field`}
                      >
                        close
                      </span>
                    </div>
                  );
                })}

              {selected.length > 3 && (
                <span
                  onClick={handleClearSelection}
                  role="button"
                  className={`clear-selection-auto-complete ${name}-field`}
                >
                  Limpar seleção
                </span>
              )}
            </div>
          )}
          <div>
            {limitExceeded && (
              <span className="error-container filled limit-exceeded-auto-complete">{limitExceeded}</span>
            )}
          </div>
          <ul className="options-auto-complete-field" role="listbox">
            {optionsFiltered
              .sort((a, b) => a.label.localeCompare(b.label))
              .map((option, index) => {
                const isSelected = multiple
                  ? selected.some(item => item.value === option.value)
                  : value === option.value;
                return (
                  <li
                    key={option.value}
                    ref={el => (optionsRef.current[index] = el)}
                    onMouseEnter={() => setFocusedOptionIndex(index)}
                    onClick={() => handleSelectOption(option)}
                    className={`option-auto-complete-field ${focusedOptionIndex === index ? 'focused' : ''}`}
                    data-selected={isSelected}
                  >
                    {customRenderOption ? (
                      customRenderOption(option)
                    ) : (
                      <span className="option-label">{option.label}</span>
                    )}
                  </li>
                );
              })}
            {optionsFiltered.length === 0 && (
              <li className="option-auto-complete-field">Nenhum resultado encontrado</li>
            )}
          </ul>
        </div>
      </div>
      {error && <span className="error-container filled">{error}</span>}
    </div>
  );
};
