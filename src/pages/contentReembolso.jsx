import React, { useState } from 'react';
import './content.scss';
import { useHeightByIdTag } from '../hooks/useHeigthByIdTag';
import { Button } from '../components/form/button/Button';

const test = [
  {
    codigoAnexo: '2',
    codigoTipo: '0',
    descricaoTipo: 'Recibo ou nota fiscal',
    nomeAnexo: '2073541408_unnamed3.png',
    pendenteAnexo: 'False',
  },
  {
    codigoAnexo: '2',
    codigoTipo: '0',
    descricaoTipo: 'Pedido ou relatório',
    nomeAnexo: '2073541408_unnamede.png',
    pendenteAnexo: 'False',
  },
  {
    codigoAnexo: '2',
    codigoTipo: '0',
    descricaoTipo: 'Pedido ou relatório',
    nomeAnexo: '2073541408_unnamedw.png',
    pendenteAnexo: 'False',
  },
  {
    codigoAnexo: '1',
    codigoTipo: '10',
    descricaoTipo: 'Orçamento',
    nomeAnexo: '2073541408_040243288q.jpg',
    pendenteAnexo: 'False',
  },
  {
    codigoAnexo: '1',
    codigoTipo: '10',
    descricaoTipo: 'Orçamento',
    nomeAnexo: '2073541408_040243288d.jpg',
    pendenteAnexo: 'False',
  },
  {
    codigoAnexo: '1',
    codigoTipo: '10',
    descricaoTipo: 'Prévia',
    nomeAnexo: '2073541408_040243288a.jpg',
    pendenteAnexo: 'False',
  },
];

const procedimentos = [
  {
    codigoProcedimento: null,
    dataAtendimento: null,
    codigoEspecialidade: null,
    tipoTecnicaUtilizada: null,
    quantidadeInformado: null,
    valorInformado: 150,
    percentualCururgiaMultipla: null,
    nomeProfissional: null,
    siglaConselho: null,
    numeroCrm: null,
    siglaUfConselho: null,
    numeroCpf: null,
    indicadorFuncao: null,
    valorReembolsado: null,
    codigoProcedimentoCm: '50000470',
    atendimento: '2024-08-04T00:00:00',
    nomeFuncao: null,
  },
  {
    codigoProcedimento: null,
    dataAtendimento: null,
    codigoEspecialidade: null,
    tipoTecnicaUtilizada: null,
    quantidadeInformado: null,
    valorInformado: 150,
    percentualCururgiaMultipla: null,
    nomeProfissional: null,
    siglaConselho: null,
    numeroCrm: null,
    siglaUfConselho: null,
    numeroCpf: null,
    indicadorFuncao: null,
    valorReembolsado: null,
    codigoProcedimentoCm: '50000470',
    atendimento: '2024-07-28T00:00:00',
    nomeFuncao: null,
  },
  {
    codigoProcedimento: null,
    dataAtendimento: null,
    codigoEspecialidade: null,
    tipoTecnicaUtilizada: null,
    quantidadeInformado: null,
    valorInformado: 150,
    percentualCururgiaMultipla: null,
    nomeProfissional: null,
    siglaConselho: null,
    numeroCrm: null,
    siglaUfConselho: null,
    numeroCpf: null,
    indicadorFuncao: null,
    valorReembolsado: null,
    codigoProcedimentoCm: '50000470',
    atendimento: '2024-08-18T00:00:00',
    nomeFuncao: null,
  },
  {
    codigoProcedimento: null,
    dataAtendimento: null,
    codigoEspecialidade: null,
    tipoTecnicaUtilizada: null,
    quantidadeInformado: null,
    valorInformado: 150,
    percentualCururgiaMultipla: null,
    nomeProfissional: null,
    siglaConselho: null,
    numeroCrm: null,
    siglaUfConselho: null,
    numeroCpf: null,
    indicadorFuncao: null,
    valorReembolsado: null,
    codigoProcedimentoCm: '50000470',
    atendimento: '2024-08-11T00:00:00',
    nomeFuncao: null,
  },
];

const formatListAnexos = (anexos = []) => {
  const groupedByDescricaoTipo = anexos.reduce((acc, item) => {
    const { descricaoTipo } = item;
    const descricaoNome = descricaoTipo || '-';
    if (!acc[descricaoNome]) {
      acc[descricaoNome] = [];
    }
    acc[descricaoNome].push(item);
    return acc;
  }, {});

  const newArrayGroupedByDescricaoTipo = Object.entries(groupedByDescricaoTipo).map(([descricaoTipo, items]) => ({
    descricaoTipo,
    items,
  }));

  return newArrayGroupedByDescricaoTipo;
};

export const ContentReembolso = () => {
  const anexos = formatListAnexos(test);
  const [loadingAnexo, setLoadingAnexo] = useState('2073541408_unnamed3.png');
  const { total } = useHeightByIdTag('previsao');

  const maskSecurity = (str, interval) => {
    if (!str && NaN(interval)) return str;

    const parseInterval = `${interval}`;

    if (parseInterval) {
      const [start, end] = parseInterval.split('-');

      if (start && end) {
        const stt = str.substring(start, end);
        return str.replace(stt, `${'*'.repeat(stt.length)}`);
      }
      if (start) {
        const stt = str.substring(0, start);
        return str.replace(stt, `${'*'.repeat(stt.length)}`);
      }

      return str;
    }
  };

  const download = anx => {
    setLoadingAnexo(anx);
    setTimeout(() => {
      setLoadingAnexo('');
    }, 1500);
  };

  return (
    <div className="un-detalhe-reembolso h-100 d-flex flex-column gap-6">
      <span id="previsao">Previsão de pagamento:30/08/2024</span>
      <div className="content-detalhe gap-4 d-flex flex-column" style={{ '--heigth-header': `${total}px` }}>
        <div className="box-info d-flex flex-column gap-2">
          <span>
            Protocolo: <b>339658222258741225</b>
          </span>
          <span>
            Data da solicitação: <b>31/07/2024</b>
          </span>
        </div>

        <div className="d-flex flex-column gap-4">
          <span>
            Beneficiário(a): <b>Lídia Maria Dias Scheffer</b>
          </span>
          <span>
            Número da solicitação: <b>2230319175SEQ1</b>
          </span>
        </div>
        <div className="divider" />

        <div className="dados-procedimento d-flex flex-column gap-4">
          <span className="title">Dados do procedimento</span>
          <div className="container-fields d-flex flex-column gap-6">
            <div className="row no-gutters gap-sm-4">
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Tipo de procedimento</span>
                <span className="texto">Consulta Médica</span>
              </div>
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Especialidade</span>
                <span className="texto">Alergista e Imunologista</span>
              </div>
            </div>
            <div className="row no-gutters gap-sm-4">
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Data do procedimento</span>
                <span className="texto">24/04/2024</span>
              </div>
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Valor total do procedimento</span>
                <span className="texto">R$ 500,00</span>
              </div>
            </div>
          </div>
          <div className="container-fields d-flex flex-column gap-6">
            <div className="row no-gutters gap-sm-4">
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Tipo de procedimento</span>
                <span className="texto">Consulta Médica</span>
              </div>
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Especialidade</span>
                <span className="texto">Alergista e Imunologista</span>
              </div>
            </div>
            <div className="row no-gutters gap-sm-4">
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Data do procedimento</span>
                {procedimentos
                  .sort((a, b) => new Date(a.atendimento) - new Date(b.atendimento))
                  .map(el => {
                    return (
                      <span key={el.codigoProcedimento} className="texto">
                        {new Date(el.atendimento).toLocaleDateString('pt-BR')}
                      </span>
                    );
                  })}
              </div>
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Valor total do procedimento</span>
                {procedimentos.map(el => {
                  return (
                    <span key={el.codigoProcedimento} className="texto">
                      {el.valorInformado},00
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />

        <div className="envio-documentos d-flex flex-column gap-6">
          <span className="title">Envio de documentos</span>
          <div className="row no-gutters container-anexos-reembolso">
            {anexos.map(anexo => {
              return (
                <div key={anexo.descricaoTipo} className="col-sm-6 anexo-item  gap-2 d-flex flex-column">
                  <span className="anexo-descricao">{anexo.descricaoTipo}</span>
                  <div className="d-flex flex-column gap-2 gap-md-4">
                    {anexo.items.map((item, index) => {
                      const isLoading = loadingAnexo === item.nomeAnexo;
                      return (
                        <div
                          className="d-flex align-items-center gap-2 tag-anexo"
                          key={index}
                          // onClick={() => !isLoading && download(item.nomeAnexo)}
                        >
                          <span className="material-symbols-outlined">picture_as_pdf</span>
                          <div title={item.nomeAnexo} className="row-nome">
                            <span className={'text-truncate'}>{item.nomeAnexo}</span>
                          </div>
                          <div className={`${isLoading ? 'd-flex' : 'hide'} justify-content-end flex-grow-1`}>
                            <span className="material-symbols-outlined tag-loading">progress_activity</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="divider" />

        <div className="dados-procedimento d-flex flex-column gap-4">
          <span className="title">Dados do prestador de serviço</span>
          <div className="container-fields d-flex flex-column gap-6">
            <div className="row no-gutters gap-sm-4">
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">CPF ou CNPJ do prestador de serviço</span>
                <span className="texto">123.587.258-48</span>
              </div>
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Nome do prestador de Serviço</span>
                <span className="texto">Roberta dos Santos</span>
              </div>
            </div>
            <div className="row no-gutters gap-sm-4">
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Conselho</span>
                <span className="texto">CFFA - Conselho Federal de Fonoaudiologia</span>
              </div>
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Número do Conselho</span>
                <span className="texto">1234</span>
              </div>
            </div>
            <div className="row no-gutters gap-sm-4">
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">CEP</span>
                <span className="texto">01303-010 Rua Nestor Pestana Consolação, São Paulo - SP, 01303-010</span>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="dados-procedimento d-flex flex-column gap-4">
          <span className="title">Dados bancários</span>
          <div className="container-fields d-flex flex-column gap-6">
            <div className="row no-gutters gap-sm-4">
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Tipo de pagamento</span>
                <span className="texto">Transferência em conta corrente</span>
              </div>
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Banco</span>
                <span className="texto">Banco Santander</span>
              </div>
            </div>
            <div className="row no-gutters gap-sm-4">
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Agência</span>
                <span className="texto">{maskSecurity('123489', 3)}</span>
              </div>
              <div className="field d-flex flex-column gap-1 col-sm-6">
                <span className="title">Conta</span>
                <span className="texto">{maskSecurity('321512930-6', 3)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />

        <div className="d-flex justify-content-end w-100">
          <div>
            <Button variant="secondary" className="py-2 text-uppercase">
              Voltar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
