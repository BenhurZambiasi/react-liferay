import React, { useState } from 'react';
import { FormConsultaMedica } from './formConsultaMedica/FormConsultaMedica';
import { FormOutrosProcedimentos } from './formOutrosProcedimentos/FormOutrosProcedimentos';
import { InfoBeneficiario } from '../../../components/infoBeneficiario/InfoBeneficiario';
import { DoctorIcon } from '../../../assets/doctorIcon';
import { ProcedimentoIcon } from '../../../assets/procedimentoIcon';
import './form.scss';
export const Form = () => {
  const [typeForm, setTypeForm] = useState(1);
  return (
    <div className="previa-reembolso-form-container d-flex flex-column gap-8">
      <InfoBeneficiario />
      <div className="container-type-form w-100 d-flex flex-column gap-5">
        <span className="label-type-form">Escolha o tipo de prévia desejado:</span>
        <div className="d-flex flex-row gap-5 w-100 justify-content-between">
          <div
            className="card-type-form d-flex align-items-center justify-content-between"
            data-selected={typeForm === 1}
            onClick={() => setTypeForm(1)}
          >
            <span>Prévia de consulta médica</span>
            <DoctorIcon />
          </div>
          <div
            className="card-type-form d-flex align-items-center justify-content-between"
            data-selected={typeForm === 2}
            onClick={() => setTypeForm(2)}
          >
            <span>Prévia de outros procedimentos</span>
            <ProcedimentoIcon />
          </div>
        </div>
      </div>
      {typeForm === 1 && <FormConsultaMedica />}
      {typeForm === 2 && <FormOutrosProcedimentos />}
    </div>
  );
};
