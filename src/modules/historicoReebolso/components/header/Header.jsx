import React from 'react';
import { useHistoricoReembolsoContext } from '../../context/useHistoricoContext';

export const Header = () => {
  const { configuration } = useHistoricoReembolsoContext();
  return (
    <div className="historico-reembolso-header-container d-flex flex-column gap-8">
      <div className="row no-gutters gap-4">
        <div className="col-auto flex-grow-1">
          <div className="d-flex align-items-center gap-1 historico-reembolso-header-voltar-container">
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="historico-reembolso-header-voltar">Voltar</span>
          </div>
        </div>
        <a
          className="col-auto btn-header text-decoration-none d-flex align-items-center gap-2 w-sm-100"
          href={configuration.urlFaq}
        >
          <span className="material-symbols-outlined faq-icon">help</span>
          <span className="text">FAQ</span>
        </a>
        <a
          className="col-auto btn-header text-decoration-none d-flex align-items-center gap-2  w-sm-100"
          href={configuration.urlTabela}
        >
          <span className="material-symbols-outlined">description</span>
          <span className="text">Tabela de reembolso</span>
        </a>
        <a
          className="col-auto btn-header green text-decoration-none d-flex align-items-center gap-2  w-sm-100"
          href={configuration.urlSolicitacao}
        >
          <span class="material-symbols-outlined">history</span>
          <span className="text">Solicitar reembolso</span>
        </a>
      </div>

      <div className="d-flex flex-column text-center gap-4">
        <span className="historico-reembolso-header-title">{configuration.title}</span>
        <span className="historico-reembolso-header-subtitle">{configuration.descrciption}</span>
      </div>
    </div>
  );
};
