import React, { useState } from 'react';
import { LineSteps } from '../components/lineSteps/lineSteps';
import { Resultado } from './resultado/Resultado';
import { Form } from './steps/formStep/Form';
import { Revisao } from './steps/revisaoStep/Revisao';
import './previa.scss';

export const Previa = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="previa-reembolso-container d-flex flex-column gap-8 mb-5">
      <LineSteps step={step} totalSteps={2} />
      {step === 1 ? <Form /> : step === 2 ? <Revisao /> : <Resultado />}
    </div>
  );
};
