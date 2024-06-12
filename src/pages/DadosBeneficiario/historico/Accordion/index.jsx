/* eslint-disable react/prop-types */
import { formatDate } from "../../../../utils/date";
import "./accordion.scss";

const Accordion = ({ data = [],toPrint }) => {

  return (
    <div className="d-flex flex-column gap-3">
      {data.map((item, index) => (
        <details key={index} open={toPrint ? true : false}>
          <summary>
            <span>{item.tipoGuia}</span>
            <span className="material-symbols-outlined arrow-ac">
              expand_more
            </span>
          </summary>
          <div className="container-itens">
            {item.guias.map((guia, idx) => (
              <div className="content-itens" key={idx}>
                <span className="guia">
                  Nº da Guia: <b>{guia.guia}</b>
                </span>
                <span className="especialidade">
                  <b>{guia.nomeEspecialidade}</b> <Dot /> {guia.nomePrestador}
                </span>
                <div className="ver-mais">
                  <span className="data-atendimento">
                    Data de atendimento:{" "}
                    <b>
                      {formatDate({
                        date: guia.dataDigitacao,
                        format: "DD/MM/YYYY",
                      })}
                    </b>
                  </span>
                  <button>
                    Ver detalhes
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
};


const Dot = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none">
      <circle cx="2" cy="2" r="2" fill="#808080" />
    </svg>
  );
}

export default Accordion;
