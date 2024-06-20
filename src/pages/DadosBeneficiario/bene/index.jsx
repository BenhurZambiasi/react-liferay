import { useState, useEffect } from "react";
import "./bene.scss";

const bene = [
  {
    nome: "Luciano Dias Scheffer",
    tipo: "Dependente",
    situacao: "ATIVO",
    cartao: "0 056 869700123425 8",
    nascimento: "06/10/1980",
    dt_inicio: "16/05/2022",
    carencia: "Isento carência",
  },
  {
    nome: "Rafaela Dias Scheffer",
    tipo: "Dependente",
    situacao: "INATIVO",
    cartao: "0 056 935145000247 5",
    nascimento: "06/10/1980",
    dt_inicio: "16/05/2022",
    carencia: "Isento carência",
  },
  {
    nome: "Lídia Maria Dias Scheffer",
    tipo: "Titular",
    situacao: "ATIVO",
    cartao: "0 056 844600065478 9",
    nascimento: "06/10/1980",
    dt_inicio: "16/05/2022",
    carencia: "Isento carência",
  },
  {
    nome: "Bernardo Silveira Dias",
    tipo: "Dependente",
    situacao: "ATIVO",
    cartao: "0 056 785600145002 3",
    nascimento: "06/10/1980",
    dt_inicio: "16/05/2022",
    carencia: "Isento carência",
  },
];

export const Beneficiarios = ({ title }) => {
  const [beneficiarios, setBeneficiarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSort = (a, b) => {
    if (a.tipo === "Titular" && b.tipo !== "Titular") {
      return -1;
    } else if (a.tipo !== "Titular" && b.tipo === "Titular") {
      return 1;
    } else {
      if (a.situacao === "ATIVO" && b.situacao !== "ATIVO") {
        return -1;
      } else if (a.situacao !== "ATIVO" && b.situacao === "ATIVO") {
        return 1;
      } else {
        return 0;
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setBeneficiarios(bene);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container container-benef">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="loading-spinner" />
        </div>
      ) : (
        beneficiarios.sort(handleSort).map((benef) => {
          return (
            <div
              className="container-card-bene"
              data-active={benef.situacao === "ATIVO"}
              key={benef.cartao}
            >
              <div className="content-info-bene">
                <div className="info-bene">
                  <span className="first">
                    {benef.tipo}: <b>{benef.nome}</b>
                  </span>
                  <span>{benef.cartao}</span>
                </div>
                <div className="info-bene">
                  <span>Nascimento</span>
                  <span>{benef.nascimento}</span>
                </div>
                <div className="info-bene">
                  <span>Início Plano</span>
                  <span>{benef.dt_inicio}</span>
                </div>
                <div className="info-bene">
                  <span>Carência</span>
                  <span>{benef.carencia}</span>
                </div>
              </div>
              <div className="info-status">
                <span>{benef.situacao}</span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};