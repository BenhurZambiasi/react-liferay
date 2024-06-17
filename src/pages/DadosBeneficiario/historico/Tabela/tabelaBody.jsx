/* eslint-disable react/prop-types */
import { Fragment } from "react";
const toggleDetails = (event) => {
  const bodyCinza =
    event.currentTarget.parentElement.parentElement.nextElementSibling;
  const isHidden = bodyCinza.classList.contains("d-none");

  if (isHidden) {
    bodyCinza.classList.remove("d-none");
    event.currentTarget.querySelector(".arrow-ac").classList.add("rotated");
  } else {
    bodyCinza.classList.add("d-none");
    event.currentTarget.querySelector(".arrow-ac").classList.remove("rotated");
  }
};

const TabelaBody = ({ columns, data }) => {
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
                onClick={toggleDetails}>
                Outros detalhes
                <span className="material-symbols-outlined arrow-ac">
                  expand_more
                </span>
              </div>
            </td>
          )}
        </tr>
        {row.detalhes && (
          <tr className="historico-do-cadastro-container__tabela__body-cinza d-none">
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
