import React, { useEffect, useState } from 'react';
import { AppRouter } from './routes/route';
import { HistoricoReembolsoProvider } from './context/useHistoricoContext';
import { getCustonFields } from './services/services';

export const AppConfig = ({ configuration }) => {
  const [customFields, setCustomFields] = useState({
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
  });

  const [loading, setLoading] = useState(false);

  const initModule = async () => {
    setLoading(true);
    const { data } = await getCustonFields();
    setCustomFields(data);
    setLoading(false);
  };

  useEffect(() => {
    initModule();
  }, []);

  if (loading && !customFields) {
    return <div>Carregando...</div>;
  }
  return (
    <HistoricoReembolsoProvider beneficiario={customFields} configuration={configuration}>
      <div className="container un-modulo-historico-reembolso">
        <AppRouter />
      </div>
    </HistoricoReembolsoProvider>
  );
};
