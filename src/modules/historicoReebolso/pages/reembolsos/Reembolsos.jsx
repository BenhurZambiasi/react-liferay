import React, { Fragment, useEffect, useState } from 'react';
import { Filtros } from './filtros/Filtros';
import { getReembolsos } from '../../services/services';
import { useHistoricoReembolsoContext } from '../../context/useHistoricoContext';

import { Listagem } from './lista/Listagem';
import { getMessageDefault } from './../../shared/messages';
import { CURRENT_YEAR } from '../../constants/constants';
import { InfoBeneficiario } from '../../components/infoBeneficiario/InfoBeneficiario';
import { Drawer } from '../../components/drawer/Drawer';

export const Reembolsos = () => {
  const { beneficiario } = useHistoricoReembolsoContext();

  const [reembolsos, setReembolsos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [filters, setFilters] = useState({
    search: '',
    situacoes: [],
    period: CURRENT_YEAR,
  });

  useEffect(() => {
    setLoading(true);
    getReembolsos({ cartao: beneficiario.NUMERO_CARTAO_BENEFICIARIO })
      .then(response => {
        setReembolsos(response.data);
      })
      .catch(e => {
        console.log('ERRO Listagem de reembolsos', { e });
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = ({ target }) => {
    setFilters({ ...filters, search: target.value });
  };

  const handleFilter = value => {
    setFilters({ ...filters, situacoes: value });
  };

  const handlePeriod = value => {
    setFilters({ ...filters, period: value });
  };

  return (
    <div className="w-100 d-flex flex-column gap-5">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center w-100">
          <div className="loading-spinner" />
        </div>
      ) : error ? (
        <div className="d-flex justify-content-center align-items-center w-100">
          <div dangerouslySetInnerHTML={{ __html: getMessageDefault({ messageType: 'error' }) }} />
        </div>
      ) : reembolsos.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center w-100">
          <div
            dangerouslySetInnerHTML={{
              __html: getMessageDefault({
                messageType: 'empty',
                title: 'Sem solicitações de reembolso disponíveis',
                subtitle: 'Você ainda não possui reembolsos solicitados.',
              }),
            }}
          />
        </div>
      ) : (
        <Fragment>
          <InfoBeneficiario />
          <Filtros
            valueSearch={filters.search}
            situacoes={filters.situacoes}
            periodo={filters.period}
            onSearch={handleSearch}
            onFilter={handleFilter}
            onPeriod={handlePeriod}
          />
          <Listagem reembolsos={reembolsos} filtros={filters} />
        </Fragment>
      )}
    </div>
  );
};
