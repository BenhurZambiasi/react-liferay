import React, { useState } from 'react';
import { useOnClickOutside } from '../../../hooks/useOnClickoutSide';
import { LISTA_PERIODOS } from '../../../constants/constants';

export const DropDownPeriodo = ({ name, label, icon, value, onChange }) => {
  const [open, setOpen] = useState(false);

  const ref = useOnClickOutside(() => {
    setOpen(false);
  });

  const handleChange = value => {
    onChange(value);
    setOpen(false);
  };

  return (
    <div className="dropdown-historico-reembolso" ref={ref} data-open={open}>
      <div className="dropdown-historico-reembolso-container">
        <label htmlFor={name} className="m-0 btn-dropdown">
          <span class="material-symbols-outlined dropdown-icon">{icon}</span>
          <span>{label}</span>
          <input
            type="checkbox"
            className="input-checkbox"
            hidden
            name={name}
            id={name}
            checked={open}
            onClick={() => setOpen(true)}
          />
        </label>
        <div className={`dropdown-historico-reembolso-content ${name}-dropdown-content`}>
          <div className="dropdown-historico-reembolso-content-list">
            {LISTA_PERIODOS.map(periodo => (
              <div
                className="dropdown-historico-reembolso-item"
                key={periodo}
                data-checked={value === periodo}
                onClick={() => handleChange(periodo)}
              >
                <span className="item-label">{periodo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
