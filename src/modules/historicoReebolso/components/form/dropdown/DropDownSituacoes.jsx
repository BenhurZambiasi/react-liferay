import React, { useEffect, useState } from 'react';
import { useOnClickOutside } from '../../../hooks/useOnClickoutSide';
import { STATUS_REEMBOLSO } from '../../../constants/constants';
import { Button } from '../button/Button';

export const DropDownSituacoes = ({ name, label, icon, value = [], onChange }) => {
  const [filtros, setFiltros] = useState(value);
  const [open, setOpen] = useState(false);

  const ref = useOnClickOutside(event => {
    setOpen(false);
    setFiltros(value);
  });

  const handleAddFiltro = filtro => {
    const aux = [...filtros];

    if (aux.find(el => el === filtro)) {
      setFiltros(aux.filter(el => el !== filtro));
    } else {
      setFiltros([...filtros, filtro]);
    }
  };

  const applyFiltros = () => {
    onChange && onChange(filtros);
    setOpen(false);

    setFiltros(value);
  };

  useEffect(() => {
    setFiltros(value);
  }, [open]);

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
          <div className="d-flex flex-column gap-2 menu-items-filtro">
            <span>Filtrar por situação</span>
            {Object.keys(STATUS_REEMBOLSO).map(key => (
              <div className="d-flex align-items-center gap-2 p-2 menu-item-filtro" key={key}>
                <label
                  htmlFor={key}
                  className="d-flex align-items-center gap-4 m-0"
                  onClick={() => handleAddFiltro(STATUS_REEMBOLSO[key].name)}
                >
                  <span
                    className="checkbox-filtro-box"
                    data-checked={filtros.includes(STATUS_REEMBOLSO[key].name)}
                  ></span>
                  <div style={STATUS_REEMBOLSO[key].style} className="d-flex align-items-center gap-1 text-nowrap">
                    <span class="material-symbols-outlined dropdown-icon">{STATUS_REEMBOLSO[key].icon}</span>
                    <span>{STATUS_REEMBOLSO[key].name}</span>
                  </div>
                </label>
              </div>
            ))}
            <Button className="p-1" onClick={applyFiltros}>
              Aplicar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
