import { useState } from "react";
import { Beneficiarios } from "./bene";
import { Historico } from "./historico";
import { Info } from "./info";
import "./dados.scss";

export const DadosBeneficiario = () => {
  const [tabActive, setTabActive] = useState(0);
  const tabs = [
    {
      label: "Info",
      Component: () => <Info />,
    },
    {
      label: "Historico",
      Component: () => <Historico />,
    },
    {
      label: "Beneficiarios",
      Component: () => <Beneficiarios title={"eita"} />,
    },
  ];

  const switchTab = (ind) => {
    setTabActive(ind);
  };

  const { Component } = tabs[tabActive];
  return (
    <div>
      <div className="container container-tab">
        {tabs.map(({ label }, index) => (
          <div
            className={`btn-tab ${index == tabActive && "active"}`}
            key={label}
            onClick={() => switchTab(index)}>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <Component />
    </div>
  );
};
