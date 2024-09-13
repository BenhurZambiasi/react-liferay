import React from 'react';
import { FormConsultaMedica } from './formConsultaMedica/FormConsultaMedica';
import { FormOutrosProcedimentos } from './formOutrosProcedimentos/FormOutrosProcedimentos';
import { InfoBeneficiario } from '../../../components/infoBeneficiario/InfoBeneficiario';
import { DoctorIcon } from '../../../assets/doctorIcon';
import { ProcedimentoIcon } from '../../../assets/procedimentoIcon';
import { FORM_TYPE } from '../../../constants/constants';
import { usePrevisaoContext } from '../../../context/usePrevisaoContext';
import './form.scss';

export const Form = () => {
  const { formType, handleChangeFormType } = usePrevisaoContext();
  return (
    <div className="previa-reembolso-form-container d-flex flex-column gap-8">
      <InfoBeneficiario />
      <div className="container-type-form w-100 d-flex flex-column gap-5">
        <span className="label-type-form">Escolha o tipo de prévia desejado:</span>
        <div className="d-flex flex-column flex-md-row gap-5 w-100 justify-content-between">
          <div
            className="card-type-form d-flex align-items-center justify-content-between"
            data-selected={formType === FORM_TYPE.CONSULTA_MEDICA}
            onClick={() => handleChangeFormType(FORM_TYPE.CONSULTA_MEDICA)}
          >
            <span>Prévia de consulta médica</span>
            <DoctorIcon />
          </div>
          <div
            className="card-type-form d-flex align-items-center justify-content-between"
            data-selected={formType === FORM_TYPE.OUTROS_PROCEDIMENTOS}
            onClick={() => handleChangeFormType(FORM_TYPE.OUTROS_PROCEDIMENTOS)}
          >
            <span>Prévia de outros procedimentos</span>
            <ProcedimentoIcon />
          </div>
        </div>
      </div>
      {formType === FORM_TYPE.CONSULTA_MEDICA && <FormConsultaMedica />}
      {formType === FORM_TYPE.OUTROS_PROCEDIMENTOS && <FormOutrosProcedimentos />}
    </div>
  );
};
