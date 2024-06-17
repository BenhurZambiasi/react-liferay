import { useState } from "react";
import "./historico.scss";
import Accordion from "../Accordion";
import Tabela from "./Tabela";
import Card from "./Card";

export const Historico = () => {
  const [carteirasEmitidas, setCarteirasEmitidas] = useState([
    {
      numVia: 4,
      cobranca: "Sim",
      dtEmissao: "02/04/2024",
      validade: "02/04/2025",
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
      dtEmissao: "25/07/2023",
      Validade: "25/07/2024",
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
      dtEmissao: "20/01/2022",
      Validade: "20/01/2023",
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
      dtEmissao: "20/01/2021",
      Validade: "20/01/2022",
      motivo: "Inclusão beneficiário",
      detalhes: {
        motivoBloqueio: "-",
        dtBloqueio: "-",
        usuario: "A14992",
        descricao: "Emissão geral",
      },
    },
  ]);

  const [carteirasEmitir, setCarteirasEmitir] = useState([
    {
      dtSolicitacao: "02/04/2024",
      validade: "20/01/2022",
      usuario: "A14992",
      motivo: "Renovação do cartão",
    },
    {
      dtSolicitacao: "25/07/2023",
      validade: "20/01/2021",
      usuario: "A01890",
      motivo: "Inclusão beneficiário",
    },
  ]);

  const [trocaPlano, setTrocaPlano] = useState([
    {
      plano: "Unimed Básico Corp Coletivo Empresarial II",
      dtHistorico: "20/01/2022",
      dtInicio: "20/01/2022",
      dtFim: "20/01/2023",
      usuario: "A14992",
    },
    {
      plano: "Unimed Básico Corp Coletivo Empresarial I",
      dtHistorico: "20/01/2021",
      dtInicio: "20/01/2021",
      dtFim: "20/01/2022",
      usuario: "A01890",
    },
  ]);

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

  return (
    <div className="container historico-do-cadastro-container">
      {data.map(({ title, columns, dataColumns }) => (
        <div key={title} className="mb-3 mt-3">
          <Accordion title={title}>
            <div className="overflow-auto">
              <Tabela title={title} columns={columns} data={dataColumns} />
              {/* <Card title={title} /> */}
            </div>
          </Accordion>
        </div>
      ))}
    </div>
  );
};
