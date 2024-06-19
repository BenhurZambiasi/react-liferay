/* eslint-disable react/prop-types */
import "./notification.scss";

export const Notification = ({ title, nprotocolo, dtSolicitacao, status, observacao }) => {
    return (
        <div className={`dados-beneficiario-cadastro-notification-${title.replace(/\s/g, "-")}`}>
            <span className="dados-beneficiario-cadastro-notification-title" >Solicitação de alteração cadastral {title}</span>
            {title === "em andamento" && (<span className="dados-beneficiario-cadastro-notification-text">Uma solicitação de alteração foi realizada em 03/06/2024 e está pendente para aprovação. Os dados corrigidos serão analisados e validados em até 2 dias úteis.</span>)}
            {title === "aprovada" && (<span className="dados-beneficiario-cadastro-notification-text">Sua solicitação de alteração cadastral foi atendida e seus dados já estão atualizados em nosso sistema.</span>)}
            {title === "rejeitada" && (<span className="dados-beneficiario-cadastro-notification-text">Sua solicitação de alteração cadastral doi rejeitada, portanto os dados informados não puderam ser atualizados.</span>)}
            <div className="d-flex gap-2 flex-column flex-md-row">
                <span>Nº do protocolo:<strong> {nprotocolo}</strong> </span>
                <span>Data da solicitação: <strong> {dtSolicitacao}</strong></span>
                <span>Situação: <strong> {status}</strong></span>
                <span>Observação: <strong> {observacao}</strong></span>
            </div>
        </div>
    );
};
