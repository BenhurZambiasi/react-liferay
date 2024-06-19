import { useState } from "react";
import "./ShowModal.scss";

export const ShowModal = ({
  title,
  text,
  className,
  text_sucess,
  text_failure = "Voltar",
  onClose,
  onSave,
  loading,
}) => {
  return (
    <div className="consulta-beneficiario-show-modal-container-backgorund position-fixed w-100 h-100 d-flex align-items-center justify-content-center">
      <div
        className={`consulta-beneficiario-show-modal-container position-absolute ${className}`}>
        <div className="position-relative w-100 d-flex flex-column">
          <span
            onClick={onClose}
            className="material-symbols-outlined position-absolute">
            close
          </span>
          <span className="consulta-beneficiario-show-modal-container-title mb-2">
            {title}
          </span>
          <span
            className="consulta-beneficiario-show-modal-container-texto mb-3"
            dangerouslySetInnerHTML={{ __html: text }}></span>
          <div className="w-100 gap-2 d-flex flex-column flex-sm-row align-items-center justify-content-end">
            {text_sucess && (
              <button
                className="consulta-beneficiario-show-modal-container-prosseguir d-flex align-items-center justify-content-center"
                disabled={loading}
                onClick={onSave}>
                {loading ? (
                  <div className="loading-spinner" />
                ) : (
                  <span>{text_sucess}</span>
                )}
              </button>
            )}
            {text_failure && (
              <button
                className="consulta-beneficiario-show-modal-container-voltar d-flex align-items-center justify-content-center"
                onClick={onClose}>
                <span>{text_failure}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
