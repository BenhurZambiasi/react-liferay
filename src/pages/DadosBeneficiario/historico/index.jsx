import { useState, useEffect } from "react";
import { Accordion } from "../Accordion";
import { formatDate } from "../../../utils/date";
import { Result } from "./Result";
import "./historico.scss";

export const Historico = () => {
  const [loading, setLoading] = useState(true);
  const [carteirasEmitidas, setCarteirasEmitidas] = useState([]);

  const [carteirasEmitir, setCarteirasEmitir] = useState([]);

  const [trocaPlano, setTrocaPlano] = useState([]);

  const data = [
    {
      title: "Carteiras emitidas",
      dataColumns: carteirasEmitidas,
      columns: [
        {
          id: "numVia",
          label: "Nº da via",
        },
        {
          id: "cobranca",
          label: "Houve cobrança?",
        },
        {
          id: "dtEmissao",
          label: "Data de emissão",
        },
        {
          id: "validade",
          label: "Validade",
        },
        {
          id: "motivo",
          label: "Motivo",
        },
      ],
    },
    {
      title: "Carteiras a emitir",
      dataColumns: carteirasEmitir,
      columns: [
        {
          id: "dtSolicitacao",
          label: "Data da solicitação",
        },
        {
          id: "validade",
          label: "Validade",
        },
        {
          id: "usuario",
          label: "Usuário",
        },
        {
          id: "motivo",
          label: "Motivo",
        },
      ],
    },
    {
      title: "Trocas de plano",
      dataColumns: trocaPlano,
      columns: [
        {
          id: "plano",
          label: "Plano",
        },
        {
          id: "dtHistorico",
          label: "Data histórico",
        },
        {
          id: "dtInicio",
          label: "Início",
        },
        {
          id: "dtFim",
          label: "Fim",
        },
        {
          id: "usuario",
          label: "Usuário",
        },
      ],
    },
  ];

  const fetchDados = () => {
    setTimeout(() => {
      setCarteirasEmitidas([
        {
          numVia: 4,
          cobranca: "Sim",
          dtEmissao: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          validade: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          motivo: "Perda do cartão",
          detalhes: {
            motivoBloqueio: "-",
            dtBloqueio: "-",
            usuario: "A14992",
            descricao: "Emissão geral",
          },
        },
        {
          numVia: 3,
          cobranca: "Não",
          dtEmissao: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          validade: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          motivo: "Troca de plano",
          detalhes: {
            motivoBloqueio: "-",
            dtBloqueio: "-",
            usuario: "A14992",
            descricao: "Emissão geral",
          },
        },
        {
          numVia: 2,
          cobranca: "Não",
          dtEmissao: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          validade: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          motivo: "Renovação do cartão",
          detalhes: {
            motivoBloqueio: "-",
            dtBloqueio: "-",
            usuario: "A14992",
            descricao: "Emissão geral",
          },
        },
        {
          numVia: 1,
          cobranca: "Não",
          dtEmissao: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          validade: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          motivo: "Inclusão beneficiário",
          detalhes: {
            motivoBloqueio: "-",
            dtBloqueio: "-",
            usuario: "A14992",
            descricao: "Emissão geral",
          },
        },
      ]);

      setCarteirasEmitir([
        {
          dtSolicitacao: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          validade: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          usuario: "A14992",
          motivo: "Renovação do cartão",
        },
        {
          dtSolicitacao: "2023-07-25T14:33:36.008Z",
          validade: "2021-01-20T14:33:36.008Z",
          usuario: "A01890",
          motivo: "Inclusão beneficiário",
        },
      ]);
      setTrocaPlano([
        {
          plano: "Unimed Básico Corp Coletivo Empresarial II",
          dtHistorico: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          dtInicio: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          dtFim: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          usuario: "A14992",
        },
        {
          plano: "Unimed Básico Corp Coletivo Empresarial I",
          dtHistorico: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          dtInicio: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          dtFim: formatDate({
            date: "2022-01-20T14:33:36.008Z",
            format: "DD/MM/YYYY",
          }),
          usuario: "A01890",
        },
      ]);

      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchDados();
  }, []);

  return (
    <div className="container historico-do-cadastro-container">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className=" loading-spinner" />
        </div>
      ) : (
        data.map(({ title, columns, dataColumns }) => (
          <div key={title} className="mb-3 mt-3">
            <Accordion title={title}>
              <div className="overflow-auto">
                <Result columns={columns} data={dataColumns} />
              </div>
            </Accordion>
          </div>
        ))
      )}
    </div>
  );
};
