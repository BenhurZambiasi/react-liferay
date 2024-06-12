/* eslint-disable react/prop-types */
import { useState} from 'react';
import {
  currentMonth,
  currentYear,
  meses,
  anos,
} from "../../../constants/constans";
import { Select } from '../../../components/Select';
import { MenuSelect } from './MenuSelect';
import "./header.scss";

export const Header = () => {
  const [periodo, setPeriodo] = useState({
    mes: currentMonth,
    ano: currentYear,
  });

  const handlePeriodo = (field, value) => {
    if (value == currentYear && periodo.mes > currentMonth) {
      setPeriodo({ ano: value, mes: currentMonth });
    } else setPeriodo({ ...periodo, [field]: value });
  };

  const mesesNomePorValor = Object.fromEntries(
    meses.map(({ value, label }) => [value, label])
  );

  const months = meses.filter(({ value }) => {
    return periodo.ano !== currentYear || value <= currentMonth;
  });

  return (
    <div className={"container-header"}>
      <div className={"container-info"}>
        <span className="title-info">Beneficiário(a):</span>
        <div className="info-nome">
          <span className="nome">Lídia Maria Dias Scheffer</span>
          <div className="cartao">
            <Cartao />
            <span>
              {/* {mask({
                value: beneficiario.NUMERO_CARTAO_BENEFICIARIO,
                mask: "card",
              })} */}
              0 056 844600065478 9
            </span>
          </div>
        </div>
      </div>
      <div className={"container-filtro"}>
        <span className="title">Período de atendimento:</span>
        <div className="actions d-flex gap-2">
          <Select
            label={mesesNomePorValor[periodo.mes]}
            id="un-select-periodo-mes">
            <MenuSelect
              name="mes"
              onChange={handlePeriodo}
              options={months}
              value={periodo.mes}
            />
          </Select>

          <Select label={periodo.ano} minWidth={103} id="un-select-periodo-ano">
            <MenuSelect
              name="ano"
              onChange={handlePeriodo}
              options={anos}
              value={periodo.ano}
            />
          </Select>
        </div>
        <button className={"btn-pdf"} >
          <span className="material-symbols-outlined">download</span>
          Baixar PDF
        </button>
      </div>
    </div>
  );
};


const Cartao = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none">
      <path
        d="M21.3 5.7511C21.2289 5.34221 21.0067 4.98665 20.6689 4.74665C20.3311 4.50665 19.9222 4.40888 19.5133 4.47999L2.97112 7.26221C2.12668 7.40443 1.55779 8.20443 1.70001 9.04888L3.21112 18.0533C3.33557 18.8089 3.99335 19.3511 4.74001 19.3511C4.8289 19.3511 4.9089 19.3422 4.99779 19.3333L18.7489 17.0222C18.9178 16.9955 19.0333 16.8355 19.0067 16.6667C18.98 16.4978 18.82 16.3822 18.6511 16.4089L4.90001 18.72C4.39335 18.8089 3.91335 18.4622 3.82446 17.9555L2.31335 8.9511C2.22446 8.44443 2.57112 7.96443 3.07779 7.87554L19.6111 5.09332C19.8511 5.04888 20.1 5.1111 20.3045 5.25332C20.5089 5.39554 20.6422 5.60888 20.6867 5.85776L22.1978 14.8622C22.2422 15.1022 22.18 15.3511 22.0378 15.5555C21.8956 15.76 21.6822 15.8933 21.4333 15.9378C21.2645 15.9644 21.1489 16.1244 21.1756 16.2933C21.2022 16.4622 21.3622 16.5778 21.5311 16.5511C21.94 16.48 22.2956 16.2578 22.5356 15.92C22.7756 15.5822 22.8733 15.1733 22.8022 14.7644L21.3 5.7511Z"
        fill="#00995D"
      />
      <path
        d="M20.4999 8.23116L3.14881 11.1467C2.97992 11.1734 2.86437 11.3334 2.89103 11.5023C2.9177 11.6534 3.05103 11.76 3.19326 11.76C3.21103 11.76 3.22881 11.76 3.24659 11.76L20.5977 8.84449C20.7666 8.81783 20.8821 8.65783 20.8555 8.48894C20.8288 8.31116 20.6688 8.1956 20.4999 8.23116Z"
        fill="#00995D"
      />
      <path
        d="M3.78004 14.56L8.49115 13.7689C8.66004 13.7422 8.77559 13.5822 8.74893 13.4133C8.72226 13.2444 8.56226 13.1289 8.39337 13.1556L3.68226 13.9467C3.51337 13.9733 3.39781 14.1333 3.42448 14.3022C3.45115 14.4533 3.58448 14.56 3.7267 14.56C3.74448 14.56 3.76226 14.56 3.78004 14.56Z"
        fill="#00995D"
      />
      <path
        d="M3.91323 15.6711C3.931 15.6711 3.94878 15.6711 3.96656 15.6711L8.67767 14.88C8.84656 14.8533 8.96212 14.6933 8.93545 14.5244C8.90878 14.3555 8.74878 14.24 8.57989 14.2666L3.86878 15.0578C3.69989 15.0844 3.58434 15.2444 3.611 15.4133C3.62878 15.5644 3.76212 15.6711 3.91323 15.6711Z"
        fill="#00995D"
      />
      <path
        d="M14.0023 8.74672C14.0556 8.78228 14.1179 8.80005 14.1801 8.80005C14.1979 8.80005 14.2156 8.80005 14.2334 8.80005L18.9712 8.00005C19.1401 7.97339 19.2556 7.81339 19.229 7.6445L18.989 6.24894C18.9712 6.16894 18.9267 6.09783 18.8645 6.0445C18.7934 6.00005 18.7134 5.97339 18.6334 5.99116L13.8956 6.79116C13.7267 6.81783 13.6112 6.97783 13.6379 7.14672L13.8779 8.55116C13.8867 8.63116 13.9312 8.70228 14.0023 8.74672ZM18.4201 6.65783L18.5534 7.44894L14.4379 8.14228L14.3045 7.35116L18.4201 6.65783Z"
        fill="#00995D"
      />
    </svg>
  );
}