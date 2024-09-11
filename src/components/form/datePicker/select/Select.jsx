import React, { useEffect, useRef, useState } from 'react';

export const Select = ({
  value,
  options = [],
  onChange,
  name,
  error,
  required,
  onClearError,
  placeholder = '',
  ...rest
}) => {
  const ref = useRef(null);
  const [openOptions, setOpenOptions] = useState(false);
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

  const labelperValue = Object.fromEntries(options.map(({ label, value }) => [value, label]));
  return (
    <div className="select-field-calendar d-flex flex-column gap-2">
      <div className="container-select position-relative w-100" data-open={openOptions} ref={ref}>
        <div className="input-container" onClick={() => setOpenOptions(!openOptions)}>
          <input
            className="select-input w-100"
            type="text"
            id={name}
            name={name}
            value={labelperValue[value]}
            onFocus={onClearError}
            readOnly
            placeholder={placeholder}
            {...rest}
          />
          <span className="material-symbols-outlined icon-arrow-field">unfold_more</span>
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
    </div>
  );
};
