import { useState } from "react";
import Accordion from "../Accordion";
import { Drawer } from "./Drawer";
import { DadosCadastro } from "./DadosCadastro";
import { EnderecoResidencial } from "./EnderecoResidencial";
import { EnderecoCorrespondencia } from "./EnderecoCorrespondencia";
import { EnderecoCobranca } from "./EnderecoCobranca";
import { DadosComplementares } from "./DadosComplementares";

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
          <DadosCadastro />
        </Accordion>
        <Accordion onEdit={handleSelectEdit} title="Endereço residencial">
          <EnderecoResidencial />
        </Accordion>
        <Accordion
          onEdit={handleSelectEdit}
          title="Endereço de correspondência">
          <EnderecoCorrespondencia />
        </Accordion>
        <Accordion onEdit={handleSelectEdit} title="Endereço de cobrança">
          <EnderecoCobranca />
        </Accordion>
        <Accordion onEdit={handleSelectEdit} title="Dados complementares">
          <DadosComplementares />
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
