import React from 'react';
import { TextField } from '../../../components/form/textField/TextField';
import { FormControl } from '../../../components/form/formControl';

import { DropDownSituacoes } from '../../../components/form/dropdown/DropDownSituacoes';
import { DropDownPeriodo } from '../../../components/form/dropdown/DropDownPerido';

export const Filtros = ({ valueSearch, situacoes = [], periodo, onSearch, onFilter, onPeriod }) => {
  return (
    <div className="filtro-historico-reembolso">
      <FormControl className="d-flex align-items-center gap-3">
        <TextField
          type="search"
          value={valueSearch}
          onChange={onSearch}
          placeholder="Nº da solicitação ou Tipo de procedimento"
        />
        <DropDownSituacoes icon="filter_alt" name="filtro" label="Filtrar" value={situacoes} onChange={onFilter} />

        <DropDownPeriodo
          icon="calendar_month"
          name="perido"
          label="Definir período"
          value={periodo}
          onChange={onPeriod}
        />
      </FormControl>
    </div>
  );
};
