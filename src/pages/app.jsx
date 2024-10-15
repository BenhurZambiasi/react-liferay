import './style.scss';

import { AutoCompleteField } from '../components/form/autoComplete/autoCompleteField';
import { FormControl } from '../components/form/formControl';
import { useState } from 'react';

const teste = [
  {
    codigo: 13,
    descricao: 'I - Certificação ISO 9001',
  },
  {
    codigo: 14,
    descricao: 'G - Certificações de Entidades Gestoras de Outros Programas de Qualidade',
  },
  {
    codigo: 6,
    descricao: 'N  -  Comunicação de Eventos Adversos',
  },
  {
    codigo: 15,
    descricao: 'M - Mestrado',
  },
  {
    codigo: 12,
    descricao: 'D - Doutorado / Pós-Doutorado',
  },
  {
    codigo: 7,
    descricao: 'P - Pós graduação latu senso',
  },
  {
    codigo: 8,
    descricao: 'R - Residência',
  },
  {
    codigo: 11,
    descricao: 'A - Programa de Acreditação',
  },
  {
    codigo: 10,
    descricao: 'Q  -  Qualidade Monitorada',
  },
  {
    codigo: 16,
    descricao: 'Recurso Próprio',
  },
  {
    codigo: 9,
    descricao: 'E  -  Título de Especialista',
  },
];

export const App = () => {
  const [valor, setValor] = useState('');
  return (
    <div className=" w-100 mt-3 d-flex flex-column">
      <FormControl>
        <AutoCompleteField
          label="Teste"
          value={valor}
          placeholder="Selecione"
          inputPlaceholder="Busque"
          onChange={({ target: { value } }) => setValor(value)}
          options={teste.map(({ codigo, descricao }) => {
            return { label: descricao, value: codigo };
          })}
        />
      </FormControl>
    </div>
  );
};
