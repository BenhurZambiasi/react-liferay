import React, { useState, useRef, useEffect } from 'react';

export const SelectField = ({
  value = '',
  options = [],
  onChange,
  label,
  name,
  error,
  required,
  onClearError,
  placeholder = '',
  ...rest
}) => {
  const [openOptions, setOpenOptions] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpenOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (openOptions) {
      const opc = document.getElementById(`${name}-options`);
      const op = document.getElementById(`${name}-${value}-option`);

      if (op) {
        op.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
      if (opc && !value) {
        opc.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }
  }, [openOptions, value, name]);

  const labelPorValue = Object.fromEntries(options.map(option => [option.value, option.label]));

  return (
    <div className="un-container-select-field d-flex flex-column gap-2 w-100" data-error={!!error}>
      <label className="label-select m-0" htmlFor={name} onClick={() => setOpenOptions(!openOptions)}>
        {label} {required && <span>*</span>}
      </label>
      <div className="container-select position-relative w-100" data-open={openOptions} ref={ref}>
        <div className="input-container" onClick={() => setOpenOptions(!openOptions)}>
          <input
            className="select-input w-100"
            type="text"
            id={name}
            name={name}
            value={labelPorValue[value] || ''}
            onFocus={onClearError}
            readOnly
            placeholder={placeholder}
            {...rest}
          />
          <span className="material-symbols-outlined icon-arrow-field">keyboard_arrow_down</span>
        </div>
        <ul
          id={`${name}-options`}
          className={`options position-absolute bg-white w-100 ${openOptions ? '' : 'd-none'}`}
        >
          {options.map(({ label: labelOption, value: valueOption }) => {
            return (
              <li
                className="option"
                data-active={valueOption == value}
                id={`${name}-${valueOption}-option`}
                onClick={() => {
                  onChange({ target: { value: valueOption, name: name } });
                  setOpenOptions(false);
                }}
                key={valueOption}
              >
                {labelOption}
              </li>
            );
          })}
        </ul>
      </div>
      {error && <span className="error-container filled">{error}</span>}
    </div>
  );
};
