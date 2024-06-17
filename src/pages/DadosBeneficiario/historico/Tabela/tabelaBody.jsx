/* eslint-disable react/prop-types */
import { Fragment } from "react";

const TabelaBody = ({ columns, data, expanded, onExpand }) => {
  return data.map((row, ind) => {
    return (
      <Fragment key={ind}>
        <tr>
          {columns.map(({ id }) => {
            return (
              <Fragment key={id}>
                <td>{row[id]}</td>
              </Fragment>
            );
          })}

          {row.detalhes && (
            <td>
              <div
                className="historico-do-cadastro-container__tabela__btn-detalhes mr-3"
                onClick={() => onExpand(ind)}>
                Outros detalhes
                <span
                  className={`material-symbols-outlined arrow-ac ${
                    expanded.includes(ind) && "rotated"
                  }`}>
                  expand_more
                </span>
              </div>
            </td>
          )}
        </tr>
        {row.detalhes && expanded.includes(ind) && (
          <tr className="historico-do-cadastro-container__tabela__body-cinza">
            <td>
              Motivo do bloqueio <br />
              {row.detalhes.motivoBloqueio}
            </td>
            <td></td>
            <td>
              Data de bloqueio <br /> {row.detalhes.dtBloqueio}
            </td>
            <td>
              Usuario <br /> {row.detalhes.usuario}
            </td>
            <td>
              Descrição <br /> {row.detalhes.descricao}
            </td>
            <td></td>
          </tr>
        )}
      </Fragment>
    );
  });
};

export default TabelaBody;
