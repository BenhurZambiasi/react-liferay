import React from 'react';
import { AppConfig } from './AppConfig';
import './css/main.scss';
const configuration = {
  portletInstance: {
    title: 'Histórico de reembolso',
    descrciption: 'Acompanhe seus reembolsos solicitados de forma rápida e fácil.',
    urlTabela: '',
    urlSolicitacao: '',
    urlFaq: '',
  },
};
export const App = () => {
  return (
    <div className=" un-modulo-historico-reembolso">
      <AppConfig configuration={configuration.portletInstance} />
    </div>
  );
};
