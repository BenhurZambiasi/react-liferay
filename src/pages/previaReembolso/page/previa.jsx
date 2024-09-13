import React from 'react';
import { LineSteps } from '../components/lineSteps/lineSteps';
import { Resultado } from './resultado/Resultado';
import { Form } from './steps/formStep/Form';
import { Revisao } from './steps/revisaoStep/Revisao';
import { usePrevisaoContext } from '../context/usePrevisaoContext';
import { STEPS } from '../constants/constants';

export const Previa = () => {
  const { step } = usePrevisaoContext();
  return (
    <div className="previa-reembolso-container d-flex flex-column gap-8 mb-5">
      <LineSteps step={step} totalSteps={2} />
      {step === STEPS.FROMULARIO ? <Form /> : step === STEPS.REVISAO ? <Revisao /> : <Resultado />}
    </div>
  );
};
