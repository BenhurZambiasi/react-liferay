import React from 'react';
import { Button } from '../../../../components/form/button/Button';

export const ModalSair = ({ onClose }) => {
  return (
    <div className="modal-sair d-flex flex-column gap-8">
      <div className="d-flex flex-column gap-4">
        <div className="d-flex justify-content-between">
          <span className="title">Tem certeza que deseja sair?</span>
          <span className="material-symbols-outlined" onClick={onClose}>
            close
          </span>
        </div>

        <span className="description">Ao sair desta página os dados preenchidos no formulário serão desfeitos.</span>
      </div>
      <div className="d-flex justify-content-end ">
        <div className="d-flex gap-2 flex-sm-grow-0 flex-grow-1 flex-sm-row flex-column">
          <Button className="px-2 py-2">Sair da página</Button>
          <Button className="px-2 py-2" variant="secondary" onClick={onClose}>
            Não sair
          </Button>
        </div>
      </div>
    </div>
  );
};
