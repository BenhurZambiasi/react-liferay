import React, { Fragment } from 'react';
import './pdfGuia.scss';

export const PdfGuia = ({ prestadores = [] }) => {
  return (
    <div className="content-pdf w-100 d-flex flex-column gap-5">
      <div className="header d-flex flex-column gap-5">
        <div className="title-container d-flex justify-content-between">
          <span className="title">Resultado da pesquisa</span>

          <span className="info-date d-flex align-items-center gap-1">Esta pesquisa é válida para 05/09/2024.</span>
        </div>
        <div className="infos-filtro row no-gutters">
          <div className="col-6">
            <div className="row no-gutters">
              <div className="field">
                <span className="title">Tipo de Prestador:</span>
                <span className="text">Médico/Clínica</span>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="field">
                <span className="title">Especialidade:</span>
                <span className="text">Cardiologia</span>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="field">
                <span className="title">Rede:</span>
                <span className="text">Rede RB Básica FS 147</span>
              </div>
            </div>
          </div>
          <div className="col-6 gap-4">
            <div className="row no-gutters">
              <div className="field">
                <span className="title">Nome Prestador:</span>
                <span className="text">Antonio de Alvarenga</span>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="field">
                <span className="title">UF:</span>
                <span className="text">São Paulo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lista d-flex flex-column">
        {prestadores.map(({ nome, codigo, endereco }, index) => {
          return (
            <Fragment key={index}>
              <div className="item no-break">
                <span className="nome">{nome}</span>
                <div className="d-flex gap-2">
                  <span className="endereco d-flex align-items-center gap-1">
                    {endereco.logradouro}, {endereco.numero}, {endereco.bairro}, {endereco.cidade}-{endereco.uf}
                  </span>

                  {endereco.contatos.map(({ ddd, numero }) => {
                    return (
                      <span className="telefone d-flex align-items-center gap-1" key={`${ddd}${numero}`}>
                        ({ddd}) {numero}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
