import React, { useState } from "react";
import Accordion from "../Accordion";
import { Drawer } from "./Drawer";

export const Info = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectEdit = () => {
    setIsOpen(true);
  };

  const handleCloseEdit = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="container d-flex flex-column gap-3">
        <Accordion onEdit={handleSelectEdit} title="Dados do cadastro">
          <div className="container-hitorico">asdsad</div>
        </Accordion>
        <Accordion onEdit={handleSelectEdit} title="Endereço residencial">
          <div className="container-hitorico"></div>
        </Accordion>
        <Accordion
          onEdit={handleSelectEdit}
          title="Endereço de correspondência">
          <div className="container-hitorico"></div>
        </Accordion>
        <Accordion onEdit={handleSelectEdit} title="Endereço de cobrança">
          <div className="container-hitorico"></div>
        </Accordion>
        <Accordion onEdit={handleSelectEdit} title="Dados complementares">
          <div className="container-hitorico"></div>
        </Accordion>
      </div>

      <div>
        <Drawer isOpen={isOpen} onClose={handleCloseEdit}>
          eita
        </Drawer>
      </div>
    </div>
  );
};
