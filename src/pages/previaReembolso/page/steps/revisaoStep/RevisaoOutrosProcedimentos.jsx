import React from 'react';
import { usePrevisaoContext } from '../../../context/usePrevisaoContext';
import { STEPS } from '../../../constants/constants';

export const RevisaoOutrosProcedimentos = () => {
  const { formOutrosProcedimentos, handleChangeStep } = usePrevisaoContext();
  return (
    <div>
      <div className="d-flex flex-column gap-6 card">
        <div className="d-flex justify-content-between align-items-center">
          <span className="label-title-card">Dados do procedimento</span>
          <button className="btn-edit-card d-sm-flex d-none" onClick={() => handleChangeStep(STEPS.FROMULARIO)}>
            <span className="material-symbols-outlined">edit</span>
            <span className="text-edit-card">Editar</span>
          </button>
        </div>
        <div className="row no-gutters container-field-card gap-md-5">
          <div className="d-flex flex-column gap-2 col-12 col-md-4">
            <span className="label-field-card">Tipo de procedimento</span>
            <span className="text-field-card">{formOutrosProcedimentos.tipoDeProcedimento}</span>
          </div>
          <div className="d-flex flex-column gap-2 col-12 col-md-4">
            <span className="label-field-card">Especialidade</span>
            <span className="text-field-card">{formOutrosProcedimentos.especialidade}</span>
          </div>
          <div className="d-flex flex-column gap-2 col-12 col-md-4">
            <span className="label-field-card">Valor total do procedimento</span>
            <span className="text-field-card">{formOutrosProcedimentos.valorTotal}</span>
          </div>
        </div>
        <button className="btn-edit-card d-sm-none d-flex" onClick={() => handleChangeStep(STEPS.FROMULARIO)}>
          <span className="material-symbols-outlined">edit</span>
          <span className="text-edit-card">Editar</span>
        </button>
      </div>

      <div className="d-flex flex-column gap-6 card">
        <div className="d-flex justify-content-between align-items-center">
          <span className="label-title-card">Documentos</span>
          <button className="btn-edit-card d-sm-flex d-none" onClick={() => handleChangeStep(STEPS.FROMULARIO)}>
            <span className="material-symbols-outlined">edit</span>
            <span className="text-edit-card">Editar</span>
          </button>
        </div>
        <div className="row no-gutters container-field-card w-100">
          <div className="d-flex flex-column gap-2  w-100">
            <span className="label-field-card">Documento</span>
            <div className="w-100 d-flex gap-3 flex-wrap">
              {formOutrosProcedimentos.orcamento.map(documento => {
                return (
                  <span key={documento.name} className="file-field-card">
                    <span className="material-symbols-outlined file-field-card-icon">picture_as_pdf</span>
                    {documento.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <button className="btn-edit-card d-sm-none d-flex" onClick={() => handleChangeStep(STEPS.FROMULARIO)}>
          <span className="material-symbols-outlined">edit</span>
          <span className="text-edit-card">Editar</span>
        </button>
      </div>
    </div>
  );
};
