import React, { Fragment, useState } from 'react';
import { FormControl } from '../../../../../../components/form/formControl';
import { Actions } from '../../../../components/actions/Actions';
import { TextField } from '../../../../../../components/form/textField/TextField';
import { SelectField } from '../../../../../../components/form/selectField/SelectField';
import { FileField } from '../../../../../../components/form/fileField/FileField';
import { usePrevisaoContext } from '../../../../context/usePrevisaoContext';
import { STEPS } from '../../../../constants/constants';
import { especialidadesConsultas } from '../../../../mock/mocks';

export const FormOutrosProcedimentos = () => {
  const { formOutrosProcedimentos, handleChangeFormOutrosProcedimentos, handleChangeStep, handleOpenModalSair } =
    usePrevisaoContext();

  const [formDataError, setFormDataError] = useState({
    especialidade: '',
    total: '',
    tipoDeProcedimento: '',
    orcamento: '',
  });

  const handleClearError = e => {
    const { name } = e.target;
    setFormDataError({ ...formDataError, [name]: '' });
  };

  const handleValidate = () => {
    let flagError = 0;
    const errors = {
      especialidade: '',
      total: '',
      tipoDeProcedimento: '',
    };
    if (!formOutrosProcedimentos.especialidade) {
      errors.especialidade = 'Campo obrigatório';
      flagError++;
    }
    if (!formOutrosProcedimentos.tipoDeProcedimento) {
      errors.tipoDeProcedimento = 'Campo obrigatório';
      flagError++;
    }
    if (!formOutrosProcedimentos.valorTotal) {
      errors.total = 'Campo obrigatório';
      flagError++;
    }
    if (!formOutrosProcedimentos.orcamento.length) {
      errors.orcamento = 'Campo obrigatório';
      flagError++;
    }

    if (flagError) {
      setFormDataError(errors);
      return;
    }

    handleChangeStep(STEPS.REVISAO);
  };

  return (
    <Fragment>
      <div className="d-flex flex-column gap-6 card-form">
        <span className="label-title-form">Dados da consulta médica</span>
        <FormControl className="d-flex w-100 gap-4 flex-column flex-md-row">
          <SelectField
            label="Tipo de procedimento"
            name="tipoDeProcedimento"
            value={formOutrosProcedimentos.tipoDeProcedimento}
            onChange={handleChangeFormOutrosProcedimentos}
            required
            onClearError={handleClearError}
            placeholder="Selecione o tipo de procedimento"
            error={formDataError.tipoDeProcedimento}
            options={especialidadesConsultas.map(especialidade => ({
              label: especialidade.especialidade,
              value: especialidade.codigoEspecialidade,
            }))}
          />
          <SelectField
            label="Especialidade"
            name="especialidade"
            value={formOutrosProcedimentos.especialidade}
            onChange={handleChangeFormOutrosProcedimentos}
            required
            onClearError={handleClearError}
            placeholder="Selecione uma especialidade"
            error={formDataError.especialidade}
            options={especialidadesConsultas.map(especialidade => ({
              label: especialidade.especialidade,
              value: especialidade.codigoEspecialidade,
            }))}
          />
          <TextField
            label="Valor total do procedimento"
            required
            type="money"
            name={'valorTotal'}
            onChange={handleChangeFormOutrosProcedimentos}
            value={formOutrosProcedimentos.valorTotal}
            onClearError={handleClearError}
            error={formDataError.total}
          />
        </FormControl>
      </div>

      <div className="d-flex flex-column gap-6 card-form">
        <span className="label-title-form">Envio de documentos</span>
        <span className="label-info-card">Cada arquivo deve ter tamanho máximo de 25MB.</span>
        <FormControl className="d-flex w-100 gap-4">
          <FileField
            label="Orçamento"
            required
            name="orcamento"
            multiple
            value={formOutrosProcedimentos.orcamento}
            onChange={handleChangeFormOutrosProcedimentos}
            placeholder="Selecione um arquivo"
            error={formDataError.orcamento}
            onClearError={handleClearError}
          />
        </FormControl>
      </div>

      <div className="important-know-container d-flex flex-column gap-4">
        <div className="d-flex gap-1">
          <span className="material-symbols-outlined info-icon">info</span>
          <span className="label-important-know">Importante saber: </span>
        </div>
        <ul className="list-important-know">
          <li>
            Essa prévia <b>não inclui vacinas, materiais e medicamentos.</b>
          </li>
          <li>
            A prévia é um cálculo estimado do valor a ser reembolsado, que não leva em consideração possíveis descontos
            de coparticipação acordado em contrato.
          </li>
          <li className="exception-list">
            Ressaltamos que esse serviço não garante a provação do pedido de reembolso.
          </li>
          <li>
            Procedimentos realizados por fisioterapeuta, psicólogo, nutricionista, fonoaudiólogo, acupunturista ou
            terapeuta ocupacional se enquadram na opção ”Avaliação/Terapias”.
          </li>
        </ul>
      </div>

      <Actions
        className="mt-4 flex-column flex-md-row"
        titleBtnPrimary="Prosseguir"
        titleBtnSecondary="Cancelar"
        onClickBtnPrimary={handleValidate}
        onClickBtnSecondary={handleOpenModalSair}
      />
    </Fragment>
  );
};
