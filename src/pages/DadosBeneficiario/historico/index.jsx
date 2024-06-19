import { useState, useEffect } from "react";
import { Accordion } from "../Accordion";
import { Result } from "./Result";
import "./historico.scss";
import {
  getTrocaPlano,
  getCarteirasEmitidas,
  getCarteirasEmitir,
} from "../../../services/api";

export const Historico = () => {
  const [loading, setLoading] = useState(true);
  const [carteirasEmitidas, setCarteirasEmitidas] = useState([]);
  const [carteirasEmitir, setCarteirasEmitir] = useState([]);
  const [trocaPlano, setTrocaPlano] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultPlano = await getTrocaPlano();
      const resultEmitidas = await getCarteirasEmitidas();
      const resultEmitir = await getCarteirasEmitir();
      setTrocaPlano(resultPlano.data);
      setCarteirasEmitidas(resultEmitidas.data);
      setCarteirasEmitir(resultEmitir.data);
      setLoading(false);
    };

    fetchData();
  }, []);

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
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="loading-spinner" />
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
