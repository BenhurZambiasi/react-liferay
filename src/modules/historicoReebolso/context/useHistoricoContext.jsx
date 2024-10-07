import React, { createContext, useContext } from 'react';
import { Drawer } from '../components/drawer/Drawer';
const HistoricoReembolsoContext = createContext({
  beneficiario: {
    TEM_DEPENDENTES: false,
    CONTRATO_PLANO: '',
    NOME_TITULAR: '',
    NUMERO_CARTAO_TITULAR: '',
    CPF_BENEFICIARIO_NACIONAL: '',
    USUARIO_TITULAR: false,
    NUMERO_CARTAO_BENEFICIARIO: '',
    NOME_PLANO: '',
    NOME_BENEFICIARIO: '',
    PLANO_UNICO: true,
  },
  configuration: { title: '', descrciption: '', urlTabela: '', urlSolicitacao: '', urlFaq: '' },
});

/**
 * @param {Object} params
 * @param {Object} params.beneficiario
 * @param {boolean} params.beneficiario.TEM_DEPENDENTES
 * @param {string} params.beneficiario.CONTRATO_PLANO
 * @param {string} params.beneficiario.NOME_TITULAR
 * @param {string} params.beneficiario.NUMERO_CARTAO_TITULAR
 * @param {string} params.beneficiario.CPF_BENEFICIARIO_NACIONAL
 * @param {boolean} params.beneficiario.USUARIO_TITULAR
 * @param {string} params.beneficiario.NUMERO_CARTAO_BENEFICIARIO
 * @param {string} params.beneficiario.NOME_PLANO
 * @param {string} params.beneficiario.NOME_BENEFICIARIO
 * @param {boolean} params.beneficiario.PLANO_UNICO
 * @param {Object} params.configuration
 * @param {string} params.configuration.title
 * @param {string} params.configuration.description
 * @param {string} params.configuration.urlTabela
 * @param {string} params.configuration.urlSolicitacao
 * @param {string} params.configuration.urlFaq
 * @param {React.ReactNode} children
 */
export const HistoricoReembolsoProvider = ({ beneficiario, configuration, children }) => {
  return (
    <HistoricoReembolsoContext.Provider value={{ beneficiario, configuration }}>
      {children}
    </HistoricoReembolsoContext.Provider>
  );
};

export const useHistoricoReembolsoContext = () => {
  return useContext(HistoricoReembolsoContext);
};
