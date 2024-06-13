import React from "react";
import "./historico.scss";
import Accordion from "../Accordion";
import Tabela from "./Tabela";

const renderAccordion = (title) => (
  <div key={title} className="mb-3 mt-3">
    <Accordion title={title}>
      <div className="overflow-auto">
        <Tabela title={title} />
      </div>
    </Accordion>
  </div>
);

export const Historico = () => {
  const titulosDoAccordion = ["Carteiras emitidas", "Carteiras a emitir", "Trocas de plano"];

  return (
    <div className="container historico-do-cadastro-container">
      {titulosDoAccordion.map((title) => renderAccordion(title))}
    </div>
  );
};
