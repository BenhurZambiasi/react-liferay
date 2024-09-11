import React, { Fragment, useState } from 'react';
import { FormControl } from '../../../../../../components/form/formControl';
import { Actions } from '../../../../components/actions/Actions';
import { DatePicker } from './datePicker/DatePicker';
import { dayjs, isFormatValidDate } from '../../../../../../utils/date';
import { usePrevisaoContext } from '../../../../context/usePrevisaoContext';
import { SelectField } from '../../../../../../components/form/selectField/SelectField';
import { especialidadesConsultas } from '../../../../mock/mocks';

export const FormConsultaMedica = () => {
  const { formConsultaMedica, handleChangeFormConsultaMedica } = usePrevisaoContext();

  const [formDataError, setFormDataError] = useState({
    especialidade: '',
    dataPrevista: '',
  });

  const handleClearError = e => {
    const { name } = e.target;
    setFormDataError({ ...formDataError, [name]: '' });
  };

  const handleValidate = () => {
    let flagError = 0;
    const errors = {
      especialidade: '',
      dataPrevista: '',
    };
    if (!formConsultaMedica.especialidade) {
      errors.especialidade = 'Campo obrigatório';
      flagError++;
    }
    if (!formConsultaMedica.dataPrevista) {
      errors.dataPrevista = 'Campo obrigatório';
      flagError++;
    } else {
      if (!isFormatValidDate(formConsultaMedica.dataPrevista)) {
        errors.dataPrevista = 'Data inválida';
        flagError++;
      }
    }
    if (flagError) {
      setFormDataError(errors);
      return;
    }
  };

  return (
    <Fragment>
      <div className="d-flex flex-column gap-6 card-form">
        <span className="label-title-form">Dados da consulta médica</span>
        <FormControl className="d-flex w-100 gap-4">
          <SelectField
            label="Especialidade"
            name="especialidade"
            value={formConsultaMedica.especialidade}
            onChange={handleChangeFormConsultaMedica}
            required
            onClearError={handleClearError}
            placeholder="Selecione uma especialidade"
            error={formDataError.especialidade}
            options={especialidadesConsultas
              .sort((a, b) => a.especialidade.localeCompare(b.especialidade))
              .map(especialidade => ({
                label: especialidade.especialidade,
                value: especialidade.codigoEspecialidade,
              }))}
          />

          <DatePicker
            label="Data prevista"
            required
            id={'data-prevista'}
            inputName={'dataPrevista'}
            placeholder="DD/MM/AAAA"
            minDate={dayjs()}
            maxDate={dayjs().add(60, 'day')}
            value={formConsultaMedica.dataPrevista}
            onChange={handleChangeFormConsultaMedica}
            error={formDataError.dataPrevista}
            onClearError={handleClearError}
          />
        </FormControl>
      </div>

      <div className="important-know-container d-flex flex-column gap-4">
        <div className="d-flex gap-1">
          <span className="material-symbols-outlined info-icon">info</span>
          <span className="label-important-know">Importante saber: </span>
        </div>
        <span className="description-important-know">
          Procedimentos feitos por fisioterapeuta, psicólogo, nutricionista, fonoaudiólogo, acupunturista ou terapeuta
          ocupacional <b>se enquadram como outros procedimentos.</b>
        </span>
      </div>

      <Actions
        className="mt-4"
        titleBtnPrimary="Prosseguir"
        titleBtnSecondary="Cancelar"
        onClickBtnPrimary={handleValidate}
      />
    </Fragment>
  );
};
