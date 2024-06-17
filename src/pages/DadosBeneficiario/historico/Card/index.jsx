/* eslint-disable react/prop-types */
import { Fragment } from "react";

const Card = ({ columns, data, expanded, onExpand }) => {
  return (
    <div className="historico-do-cadastro-container__card">
      {data.map((row, index) => {
        return (
          <div
            key={index}
            className="historico-do-cadastro-container__card__body">
            {columns.map(({ id, label }) => {
              return (
                <div key={id}>
                  <div className="historico-do-cadastro-container__card__body__container">
                    <span className="historico-do-cadastro-container__card__body__container__categoria">
                      {label}
                    </span>
                    <span className="historico-do-cadastro-container__card__body__container__data">
                      {row[id]}
                    </span>
                  </div>
                </div>
              );
            })}

            {row.detalhes && (
              <Fragment>
                <div
                  className="historico-do-cadastro-container__tabela__btn-detalhes mt-3 mb-3 ml-3 mr-3"
                  onClick={() => onExpand(index)}>
                  Outros detalhes
                  <span
                    className={`material-symbols-outlined arrow-ac ${
                      expanded.includes(index) ? "rotated" : ""
                    }`}>
                    expand_more
                  </span>
                </div>
                {expanded.includes(index) && (
                  <div
                    className={`historico-do-cadastro-container__card__body__container__subdata`}>
                    <Fragment>
                      <span className="historico-do-cadastro-container__card__body__container__categoria">
                        Motivo do bloqueio
                      </span>
                      <span className="historico-do-cadastro-container__card__body__container__data mb-3">
                        {row.detalhes.motivoBloqueio}
                      </span>
                      <span className="historico-do-cadastro-container__card__body__container__categoria">
                        Data de bloqueio
                      </span>
                      <span className="historico-do-cadastro-container__card__body__container__data mb-3">
                        {row.detalhes.dtBloqueio}
                      </span>
                      <span className="historico-do-cadastro-container__card__body__container__categoria">
                        Usuario
                      </span>
                      <span className="historico-do-cadastro-container__card__body__container__data mb-3">
                        {row.detalhes.usuario}
                      </span>
                      <span className="historico-do-cadastro-container__card__body__container__categoria">
                        Descrição
                      </span>
                      <span className="historico-do-cadastro-container__card__body__container__data mb-3">
                        {row.detalhes.descricao}
                      </span>
                    </Fragment>
                  </div>
                )}
              </Fragment>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
