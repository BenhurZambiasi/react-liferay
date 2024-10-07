import React from 'react';
import './content.scss';
import { Button } from './form/button/Button';
export const Content = () => {
  return (
    <div className="d-flex flex-column gap-5 un-conteudo-drawer custom-scroll">
      <div>
        <span>Previa</span>
      </div>
      <div className="d-flex flex-column">
        <span>Protocolo: 339658222258741225</span>
        <span>Data da solicitação: 31/07/2024</span>
      </div>

      <div className="d-flex flex-column">
        <span>Beneficiário(a):Lídia Maria Dias Scheffer</span>
        <span>Número da solicitação:2230319175SEQ1</span>
      </div>

      <div className="divider" />

      <div className="d-flex flex-column gap-4">
        <span>Dados do procedimento</span>

        <div className="row no-gutters">
          <div className="d-flex flex-column col-md-6">
            <span>Tipo de procedimento</span>
            <span>Exame ambulatorial</span>
          </div>
          <div className="d-flex flex-column col-md-6">
            <span>Valor total informado</span>
            <span>R$ 500,00</span>
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="d-flex flex-column gap-4">
        <span>Documentos enviados</span>
      </div>

      <div className="d-flex gap-5 flex-column flex-sm-row justify-content-end align-items-end flex-grow-1">
        <Button variant="secondary" className="p-2 text-uppercase">
          Voltar
        </Button>
        <Button className="p-2 text-uppercase">Solicitar reembolso</Button>
      </div>
    </div>
  );
};
