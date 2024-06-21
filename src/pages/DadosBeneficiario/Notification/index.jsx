/* eslint-disable react/prop-types */
import { formatDate } from "../../../utils/date";
import "./notification.scss";

export const Notification = ({
  title,
  nprotocolo,
  dtSolicitacao,
  status,
  observacao,
}) => {
  const notificatioType =
    title == "Aprovado"
      ? "aprovada"
      : title == "Pendente"
        ? "em-andamento"
        : "rejeitada";

  return (
    <div
      className={`dados-beneficiario-cadastro-notification-${notificatioType}`}>
      <div>
        <span class="material-symbols-outlined">
          {notificatioType === "em-andamento" && "pending"}
          {notificatioType === "aprovada" && "check_circle"}
          {notificatioType === "rejeitada" && "cancel"}
        </span>
        <span className="dados-beneficiario-cadastro-notification-title">
          Solicitação de alteração cadastral {notificatioType.replace("-", " ")}
        </span>
      </div>
      {notificatioType === "em-andamento" && (
        <span className="dados-beneficiario-cadastro-notification-text">
          Uma solicitação de alteração foi realizada em{" "}
          {formatDate({ date: dtSolicitacao, format: "DD/MM/YYYY" })} e está
          pendente para aprovação. Os dados corrigidos serão analisados e
          validados em até 2 dias úteis.
        </span>
      )}
      {notificatioType === "aprovada" && (
        <span className="dados-beneficiario-cadastro-notification-text">
          Sua solicitação de alteração cadastral foi atendida e seus dados já
          estão atualizados em nosso sistema.
        </span>
      )}
      {notificatioType === "rejeitada" && (
        <span className="dados-beneficiario-cadastro-notification-text">
          Sua solicitação de alteração cadastral doi rejeitada, portanto os
          dados informados não puderam ser atualizados.
        </span>
      )}
      <div className="d-flex gap-2 flex-column flex-md-row">
        <span>
          Nº do protocolo:<strong> {nprotocolo}</strong>{" "}
        </span>
        <span>
          Data da solicitação:{" "}
          <strong>
            {formatDate({ date: dtSolicitacao, format: "DD/MM/YYYY" })}
          </strong>
        </span>
        <span>
          Situação: <strong> {status}</strong>
        </span>
        <span>
          Observação: <strong> {observacao}</strong>
        </span>
      </div>
    </div>
  );
};
