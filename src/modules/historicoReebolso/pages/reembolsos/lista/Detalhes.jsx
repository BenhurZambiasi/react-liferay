import React from 'react';
import { Situacoes } from '../../../components/Situacoes';

export const Detalhes = ({ reembolso, onClose }) => {
  return (
    <div className="p-5 un-detalhes-reembolso">
      <span className="material-symbols-outlined close-detalhes" onClick={onClose}>
        close
      </span>
      <span className="text-title">Detalhes do reembolso</span>

      <div className="d-flex flex-column gap-6 contet-detalhes">
        <div className="info-detalhes d-flex flex-column gap-8">
          <div className="d-flex flex-column gap-4">
            <Situacoes situacao={reembolso.situacao} />
            <div className="d-flex gap-1">
              <span className="text-observacao">
                Observação: <b>Campo para observação que é adicionada no retorno da solicitação de reembolso.</b>
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column gap-2 card-detalhes">
          <span>
            Protocolo: <b>339658222258741225</b>
          </span>
          <span>
            Data da solicitação: <b>20/05/2024</b>
          </span>
        </div>

        <div className="dados-beneficiario d-flex flex-column gap-4">
          <span>
            Beneficiário(a): <b>Lídia Maria Dias Scheffer</b>
          </span>
          <span>
            Número da solicitação: <b>2230319175SEQ1</b>
          </span>
        </div>
        <div className="divider" />

        <div className="dados-procedimento d-flex flex-column gap-5">
          <span className="text-title-section">Dados do procedimento</span>

          <div className="d-flex  row no-gutters">
            <div className="d-flex flex-column gap-2 col-sm-6 col-12">
              <span className="text-label">Tipo de procedimento</span>
              <span className="text-value">Consulta Médica</span>
            </div>
            <div className="d-flex flex-column gap-2 col-sm-6 col-12">
              <span className="text-label">Especialidade</span>
              <span className="text-value">Alergista e Imunologista</span>
            </div>
          </div>

          <div className="d-flex  row no-gutters">
            <div className="d-flex flex-column gap-2 col-sm-6 col-12">
              <span className="text-label">Data do procedimento</span>
              <span className="text-value">24/04/2024</span>
            </div>
            <div className="d-flex flex-column gap-2 col-sm-6 col-12">
              <span className="text-label">Valor total do procedimento</span>
              <span className="text-value">R$ 500,00</span>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="envio-documentos d-flex flex-column gap-5">
          <span className="text-title-section">Envio de documentos</span>

          <div className="d-flex  row no-gutters">
            <div className="d-flex flex-column gap-2 col-sm-6 col-12">
              <span className="text-label">Tipo de procedimento</span>
              <span className="text-value">Consulta Médica</span>
            </div>
            <div className="d-flex flex-column gap-2 col-sm-6 col-12">
              <span className="text-label">Especialidade</span>
              <span className="text-value">Alergista e Imunologista</span>
            </div>
          </div>

          <div className="d-flex  row no-gutters">
            <div className="d-flex flex-column gap-2 col-sm-6 col-12">
              <span className="text-label">Data do procedimento</span>
              <span className="text-value">24/04/2024</span>
            </div>
            <div className="d-flex flex-column gap-2 col-sm-6 col-12">
              <span className="text-label">Valor total do procedimento</span>
              <span className="text-value">R$ 500,00</span>
            </div>
          </div>
        </div>

        <div className="divider" />
      </div>
    </div>
  );
};
