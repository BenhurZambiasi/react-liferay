import React from 'react';

import { usePrevisaoContext } from '../../context/usePrevisaoContext';

export const InfoBeneficiario = () => {
  const { dadosBeneficiario } = usePrevisaoContext();
  return (
    <div className="row w-100 card-info-beneficiario no-gutters">
      <div className="col-md-6 col-12">
        <div>
          <span>
            Beneficiário(a):<b> {dadosBeneficiario.nome}</b>
          </span>
          <div className="d-flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.8 5.7511C20.7289 5.34221 20.5067 4.98665 20.1689 4.74665C19.8311 4.50665 19.4222 4.40888 19.0133 4.47999L2.47112 7.26221C1.62668 7.40443 1.05779 8.20443 1.20001 9.04888L2.71112 18.0533C2.83557 18.8089 3.49335 19.3511 4.24001 19.3511C4.3289 19.3511 4.4089 19.3422 4.49779 19.3333L18.2489 17.0222C18.4178 16.9955 18.5333 16.8355 18.5067 16.6667C18.48 16.4978 18.32 16.3822 18.1511 16.4089L4.40001 18.72C3.89335 18.8089 3.41335 18.4622 3.32446 17.9555L1.81335 8.9511C1.72446 8.44443 2.07112 7.96443 2.57779 7.87554L19.1111 5.09332C19.3511 5.04888 19.6 5.1111 19.8045 5.25332C20.0089 5.39554 20.1422 5.60888 20.1867 5.85776L21.6978 14.8622C21.7422 15.1022 21.68 15.3511 21.5378 15.5555C21.3956 15.76 21.1822 15.8933 20.9333 15.9378C20.7645 15.9644 20.6489 16.1244 20.6756 16.2933C20.7022 16.4622 20.8622 16.5778 21.0311 16.5511C21.44 16.48 21.7956 16.2578 22.0356 15.92C22.2756 15.5822 22.3733 15.1733 22.3022 14.7644L20.8 5.7511Z"
                fill="#00995D"
              />
              <path
                d="M19.9999 8.2311L2.64881 11.1467C2.47992 11.1733 2.36437 11.3333 2.39103 11.5022C2.4177 11.6533 2.55103 11.76 2.69326 11.76C2.71103 11.76 2.72881 11.76 2.74659 11.76L20.0977 8.84443C20.2666 8.81776 20.3821 8.65776 20.3555 8.48888C20.3288 8.3111 20.1688 8.19554 19.9999 8.2311Z"
                fill="#00995D"
              />
              <path
                d="M3.28004 14.56L7.99115 13.7689C8.16004 13.7422 8.27559 13.5822 8.24893 13.4133C8.22226 13.2444 8.06226 13.1289 7.89337 13.1556L3.18226 13.9467C3.01337 13.9733 2.89781 14.1333 2.92448 14.3022C2.95115 14.4533 3.08448 14.56 3.2267 14.56C3.24448 14.56 3.26226 14.56 3.28004 14.56Z"
                fill="#00995D"
              />
              <path
                d="M3.41323 15.6711C3.431 15.6711 3.44878 15.6711 3.46656 15.6711L8.17767 14.88C8.34656 14.8533 8.46212 14.6933 8.43545 14.5244C8.40878 14.3555 8.24878 14.24 8.07989 14.2666L3.36878 15.0578C3.19989 15.0844 3.08434 15.2444 3.111 15.4133C3.12878 15.5644 3.26212 15.6711 3.41323 15.6711Z"
                fill="#00995D"
              />
              <path
                d="M13.5023 8.74666C13.5556 8.78221 13.6179 8.79999 13.6801 8.79999C13.6979 8.79999 13.7156 8.79999 13.7334 8.79999L18.4712 7.99999C18.6401 7.97333 18.7556 7.81333 18.729 7.64444L18.489 6.24888C18.4712 6.16888 18.4267 6.09777 18.3645 6.04444C18.2934 5.99999 18.2134 5.97333 18.1334 5.9911L13.3956 6.7911C13.2267 6.81777 13.1112 6.97777 13.1379 7.14666L13.3779 8.5511C13.3867 8.6311 13.4312 8.70221 13.5023 8.74666ZM17.9201 6.65777L18.0534 7.44888L13.9379 8.14221L13.8045 7.3511L17.9201 6.65777Z"
                fill="#00995D"
              />
            </svg>
            <span>{dadosBeneficiario.cartao}</span>
          </div>
        </div>
      </div>
      <div className=" col-md-6 col-12">
        <div className="d-flex flex-column">
          <span>Plano</span>
          <span>
            <b>{dadosBeneficiario.plano}</b>
          </span>
        </div>
      </div>
    </div>
  );
};
