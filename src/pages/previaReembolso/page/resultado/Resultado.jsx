import React from 'react';
import './resultado.scss';
import { Button } from '../../../../components/form/button/Button';

export const Resultado = () => {
  return (
    <div className="resultado-container d-flex flex-column text-center gap-4">
      <div className="d-flex flex-column align-items-center gap-4">
        <span className="material-symbols-outlined">check_circle</span>
        <span>Prévia solicitada com sucesso</span>
      </div>
      <span className="resultado-container-subtitle">
        Agora é só acompanhar o seu pedido pelo histórico de solicitações. Anote o número da sua solicitação abaixo:
      </span>
      <span className="resultado-container-number">
        <b>2278609507</b>
      </span>
      <div className="d-flex flex-column gap-4 container-buttons">
        <Button>Ver resultado da prévia</Button>
        <Button variant="secondary">Solicitar nova prévia</Button>
      </div>
    </div>
  );
};
