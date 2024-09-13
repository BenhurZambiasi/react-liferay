import React from 'react';
import { usePrevisaoContext } from '../../../context/usePrevisaoContext';
import { STEPS } from '../../../constants/constants';

export const RevisaoConsultaMedica = () => {
  const { formConsultaMedica, handleChangeStep } = usePrevisaoContext();
  return (
    <div className="d-flex flex-column gap-6 card">
      <div className="d-flex justify-content-between align-items-center">
        <span className="label-title-card">Dados da consulta médica</span>
        <button className="btn-edit-card d-sm-flex d-none" onClick={() => handleChangeStep(STEPS.FROMULARIO)}>
          <span className="material-symbols-outlined">edit</span>
          <span className="text-edit-card">Editar</span>
        </button>
      </div>
      <div className="row no-gutters container-field-card">
        <div className="d-flex flex-column gap-2 col-12 col-md-6">
          <span className="label-field-card">Especialidade</span>
          <span className="text-field-card">{formConsultaMedica.especialidade}</span>
        </div>
        <div className="d-flex flex-column gap-2 col-12 col-md-6">
          <span className="label-field-card">Data prevista da consulta</span>
          <span className="text-field-card">{formConsultaMedica.dataPrevista}</span>
        </div>
      </div>
      <button className="btn-edit-card d-sm-none d-flex" onClick={() => handleChangeStep(STEPS.FROMULARIO)}>
        <span className="material-symbols-outlined">edit</span>
        <span className="text-edit-card">Editar</span>
      </button>
    </div>
  );
};
