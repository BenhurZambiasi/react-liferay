import React, { Fragment } from 'react';
import './pdfCoparticipacao.scss';
import { coopartIso } from './mock';
import { formatDate } from '../date';
import { mask } from '../../utils/mask';

const IconCartao = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M17.3334 4.79259C17.2742 4.45185 17.089 4.15556 16.8075 3.95556C16.526 3.75556 16.1853 3.67407 15.8445 3.73333L2.05935 6.05185C1.35565 6.17037 0.881574 6.83704 1.00009 7.54074L2.25935 15.0444C2.36306 15.6741 2.9112 16.1259 3.53343 16.1259C3.6075 16.1259 3.67417 16.1185 3.74824 16.1111L15.2075 14.1852C15.3482 14.163 15.4445 14.0296 15.4223 13.8889C15.4001 13.7481 15.2668 13.6519 15.126 13.6741L3.66676 15.6C3.24454 15.6741 2.84454 15.3852 2.77046 14.963L1.5112 7.45926C1.43713 7.03704 1.72602 6.63704 2.14824 6.56296L15.926 4.24444C16.126 4.20741 16.3334 4.25926 16.5038 4.37778C16.6742 4.4963 16.7853 4.67407 16.8223 4.88148L18.0816 12.3852C18.1186 12.5852 18.0668 12.7926 17.9482 12.963C17.8297 13.1333 17.6519 13.2444 17.4445 13.2815C17.3038 13.3037 17.2075 13.437 17.2297 13.5778C17.2519 13.7185 17.3853 13.8148 17.526 13.7926C17.8668 13.7333 18.1631 13.5481 18.3631 13.2667C18.5631 12.9852 18.6445 12.6444 18.5853 12.3037L17.3334 4.79259Z"
        fill="#00995C"
      />
      <path
        d="M16.6665 6.85926L2.20726 9.28889C2.06652 9.31111 1.97022 9.44444 1.99245 9.58518C2.01467 9.71111 2.12578 9.8 2.2443 9.8C2.25911 9.8 2.27393 9.8 2.28874 9.8L16.748 7.37037C16.8887 7.34815 16.985 7.21481 16.9628 7.07407C16.9406 6.92593 16.8073 6.82963 16.6665 6.85926Z"
        fill="#00995C"
      />
      <path
        d="M2.73357 12.1333L6.65949 11.4741C6.80023 11.4519 6.89653 11.3185 6.87431 11.1778C6.85209 11.037 6.71875 10.9407 6.57801 10.963L2.65209 11.6222C2.51134 11.6444 2.41505 11.7778 2.43727 11.9185C2.45949 12.0444 2.5706 12.1333 2.68912 12.1333C2.70394 12.1333 2.71875 12.1333 2.73357 12.1333Z"
        fill="#00995C"
      />
      <path
        d="M2.8444 13.0593C2.85921 13.0593 2.87403 13.0593 2.88884 13.0593L6.81477 12.4C6.95551 12.3778 7.0518 12.2444 7.02958 12.1037C7.00736 11.963 6.87403 11.8667 6.73328 11.8889L2.80736 12.5481C2.66662 12.5704 2.57032 12.7037 2.59254 12.8444C2.60736 12.9704 2.71847 13.0593 2.8444 13.0593Z"
        fill="#00995C"
      />
      <path
        d="M11.2517 7.28889C11.2962 7.31852 11.348 7.33333 11.3999 7.33333C11.4147 7.33333 11.4295 7.33333 11.4443 7.33333L15.3925 6.66667C15.5332 6.64445 15.6295 6.51111 15.6073 6.37037L15.4073 5.20741C15.3925 5.14074 15.3554 5.08148 15.3036 5.03704C15.2443 5 15.1776 4.97778 15.111 4.99259L11.1628 5.65926C11.0221 5.68148 10.9258 5.81482 10.948 5.95556L11.148 7.12593C11.1554 7.19259 11.1925 7.25185 11.2517 7.28889ZM14.9332 5.54815L15.0443 6.20741L11.6147 6.78519L11.5036 6.12593L14.9332 5.54815Z"
        fill="#00995C"
      />
    </svg>
  );
};

export const PdfCoparticipacao = () => {
  return (
    <div className="pdf-container-coopart d-flex flex-column gap-6">
      <div className="header d-flex flex-column gap-6">
        <div className="info-page d-flex  flex-column gap-3">
          <span className="title">Extrato de coparticipação</span>
          <span className="description">Verifique os valores de coparticipação dos procedimentos realizados.</span>
        </div>

        <div className="d-flex flex-column gap-3">
          <div className="box-beneficiario d-flex flex-column">
            <span className="d-flex gap-1 align-items-center">
              Beneficiário(a):
              <b>Lídia Maria Dias Scheffer</b>
            </span>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-1 align-items-center">
                <IconCartao />
                <span className="card-text">0 056 844600065478 9</span>
              </div>
              <span className="d-flex gap-1 align-items-center">
                Valor total:
                <b> R$ 645,60</b>
              </span>
            </div>
          </div>

          <div className="d-flex align-items-center gap-1">
            <span className="material-symbols-outlined info-icon">info</span>
            <span className="info-text">
              A coparticipação corresponde a um percentual do custo do serviço médico utilizado pelo titular ou por seus
              dependentes.
            </span>
          </div>
        </div>
      </div>

      <div className="filtro d-flex flex-column gap-2">
        <span className="periodo d-flex align-items-center gap-1">
          Procedimentos correspondentes ao período de cobrança:<b>Fevereiro/2024</b>
        </span>
        <span className="importante">
          Importante saber:
          <b>
            A data de vencimento do boleto (ou desconto em folha) será sempre posterior ao período de cobrança
            selecionado.
          </b>
        </span>
      </div>

      <div className="coopart-table">
        <div className="t-header row no-gutters  gap-4">
          <div className=" align-items-center d-flex">
            <span>Nº da Guia</span>
          </div>
          <div className=" align-items-center d-flex">
            <span>Data de atendimento</span>
          </div>
          <div className="h-prestador align-items-center d-flex">
            <span>Prestador</span>
          </div>
          <div className="h-value align-items-center d-flex">
            <span>Valor</span>
          </div>
        </div>
        <div className="t-body">
          {coopartIso.map(({ Valor, dataAtendimento, numeroGuia, prestador }, index) => {
            return (
              <Fragment key={numeroGuia}>
                {index === 0 && <div className="divider" />}
                <div className="row-teste no-break d-flex w-100 gap-4">
                  <div className="field">
                    <span>{numeroGuia}</span>
                  </div>
                  <div className="field data">
                    <span>{formatDate({ date: dataAtendimento, format: 'DD/MM/YYYY' })}</span>
                  </div>
                  <div className="field prestador flex-1">
                    <span>{prestador}</span>
                  </div>
                  <div className="field value ">
                    <span>{mask({ mask: 'currency', value: Valor })}</span>
                  </div>
                </div>
                <div className="divider" />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
