import React from 'react';
import './line.scss';
export const LineSteps = ({ step, totalSteps }) => {
  if (step > totalSteps) return null;
  return (
    <div className="line-steps-container">
      <div className="line-steps-progress-bar" data-final={step === totalSteps}>
        <div className="line-steps-progress" />
      </div>

      <span className="line-steps-label">
        Etapa {step} de {totalSteps}
      </span>
    </div>
  );
};
