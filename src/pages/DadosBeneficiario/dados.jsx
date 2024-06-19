import { useState } from "react";
import { Beneficiarios } from "./bene";
import { Historico } from "./historico";
import { Info } from "./info";
import "./dados.scss";

export const DadosBeneficiario = () => {
  const [tabActive, setTabActive] = useState(0);
  const tabs = [
    {
      label: "Informações cadastrais",
      Component: () => <Info />,
    },
    {
      label: "Histórico do cadastro",
      Component: () => <Historico />,
    },
    {
      label: "Beneficiários",
      Component: () => <Beneficiarios />,
    },
  ];

  const switchTab = (ind) => {
    setTabActive(ind);

    const tab = document.querySelector(`#btn-tab-${ind}`);
    tab.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "smooth",
    });
  };

  const { Component } = tabs[tabActive];

  return (
    <div>
      <div className="container">
        <div className="container-tab-dados">
          {tabs.map(({ label }, index) => (
            <div
              className={`btn-tab ${index == tabActive && "active"}`}
              id={`btn-tab-${index}`}
              key={label}
              onClick={() => switchTab(index)}>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <Component />
    </div>
  );
};
