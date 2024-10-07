import React, { useState } from 'react';
import { Card } from '../../../components/card/Card';
import { dayjs, formatDate } from '../../../utils/date';
import { capitalize } from './../../../utils/captalize';
import { getMessageDefault } from '../../../shared/messages';
import { Drawer } from '../../../components/drawer/Drawer';
import { Detalhes } from './Detalhes';
import { Situacoes } from '../../../components/Situacoes';

const removeAccents = str => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const Listagem = ({ reembolsos = [], filtros = { search: '', situacoes: [], period: '' } }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [reembolsoSelecionado, setReembolsoSelecionado] = useState(null);

  const filteredReembolsos = reembolsos
    .sort((a, b) => dayjs(b.dataInclusao).diff(dayjs(a.dataInclusao), 'day'))
    .filter(reembolso => {
      const situacaoMatch = filtros.situacoes.length === 0 || filtros.situacoes.includes(reembolso.situacao);
      const periodMatch = reembolso.dataInclusao.includes(filtros.period);

      const searchMatchNoAccents = removeAccents(reembolso.tratamento.toLowerCase()).includes(
        removeAccents(filtros.search.toLowerCase())
      );

      return situacaoMatch && periodMatch && searchMatchNoAccents;
    });

  const handleOpenDrawer = reembolso => {
    setReembolsoSelecionado(reembolso);
    setOpenDrawer(true);
  };

  return (
    <div className="listagem-reembolsos w-100 d-flex flex-column gap-4">
      {filteredReembolsos.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center w-100">
          <div
            dangerouslySetInnerHTML={{
              __html: getMessageDefault({
                messageType: 'empty_search',
                title: 'Nenhum reembolso encontrado',
                subtitle: 'Não encontramos nenhum reembolso com os filtros aplicados.',
              }),
            }}
          />
        </div>
      ) : (
        filteredReembolsos.map(reembolso => (
          <Card key={reembolso.numeroReembolso}>
            <div className="d-flex align-items-center justify-content-between">
              <span className="text-tratamento">{capitalize(reembolso.tratamento)}</span>

              <Situacoes situacao={reembolso.situacao} />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="">
                <span className="text-label">Nº da solicitação: </span>
                <span className="text-value">{reembolso.numeroReembolso}</span>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="">
                <span className="text-label">Data: </span>
                <span className="text-value">{formatDate({ date: reembolso.dataInclusao, format: 'DD/MM/YYYY' })}</span>
              </div>
              <div
                role="button"
                className="d-flex align-items-center gap-1 btn-ver-detalhes"
                onClick={() => {
                  handleOpenDrawer(reembolso);
                }}
              >
                <span>Ver detalhes</span>
                <span class="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          </Card>
        ))
      )}

      <Drawer isOpen={openDrawer} onClose={() => setOpenDrawer(false)} width="720px">
        <Detalhes reembolso={reembolsoSelecionado} onClose={() => setOpenDrawer(false)} />
      </Drawer>
    </div>
  );
};
