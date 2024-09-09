import { FormControl } from '../components/form/formControl';
import { AutoCompleteField } from '../components/form/autoComplete/autoCompleteField';
import { especialidades, qualificacoes } from './mocks';
import './style.scss';
import { useState } from 'react';

export const App = () => {
  const [value, setValue] = useState();
  const [multiple, setMultiple] = useState([]);
  const [error, setError] = useState('');
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleChangeMultiple = ({ target: { value } }) => {
    setMultiple(value);
  };

  return (
    <div className="container w-100">
      <FormControl className="d-flex gap-5 flex-column">
        <AutoCompleteField
          label={'Especialidades'}
          name={'especialidades'}
          value={value}
          options={especialidades.map(({ codigo, especialidade }) => {
            return { label: especialidade, value: codigo };
          })}
          onChange={handleChange}
          placeholder="Selecione uma especialidade"
          inputPlaceholder="Digite para buscar uma especialidade"
          error={error}
          onClearError={() => setError('')}
        />
        <AutoCompleteField
          label={'Qualificações'}
          name={'qualificacoes'}
          value={multiple}
          options={qualificacoes.map(({ codigo, descricao }) => {
            return { label: descricao, value: codigo };
          })}
          onChange={handleChangeMultiple}
          placeholder="Selecione uma qualificação"
          inputPlaceholder="Digite para buscar uma qualificação"
          multiple
          error={error}
          onClearError={() => setError('')}
        />
      </FormControl>
    </div>
  );
};
