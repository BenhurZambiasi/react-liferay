import React from 'react';
import { usePrevisaoContext } from '../../../context/usePrevisaoContext';
import { InfoBeneficiario } from '../../../components/infoBeneficiario/InfoBeneficiario';
import { FORM_TYPE, STEPS } from '../../../constants/constants';
import { RevisaoConsultaMedica } from './RevisaoConsultaMedica';
import { RevisaoOutrosProcedimentos } from './RevisaoOutrosProcedimentos';
import { Actions } from '../../../components/actions/Actions';

export const Revisao = () => {
  const { formType, handleChangeStep } = usePrevisaoContext();
  return (
    <div className="d-flex flex-column gap-7">
      <div className="d-flex flex-column gap-3">
        <span>Revise os dados da sua solicitação de prévia</span>
        <span>Após o envio da solicitação não será possível editá-la.</span>
      </div>
      <InfoBeneficiario />

      {formType === FORM_TYPE.CONSULTA_MEDICA && <RevisaoConsultaMedica />}
      {formType === FORM_TYPE.OUTROS_PROCEDIMENTOS && <RevisaoOutrosProcedimentos />}

      <Actions
        titleBtnPrimary="Solicitar prévia"
        titleBtnSecondary="Voltar"
        onClickBtnPrimary={() => handleChangeStep(STEPS.RESULTADO)}
        onClickBtnSecondary={() => handleChangeStep(STEPS.FROMULARIO)}
      />
    </div>
  );
};
