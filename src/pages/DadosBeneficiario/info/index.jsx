import { useState } from "react";
import Accordion from "../Accordion";
import { Drawer } from "./Drawer";
import { DadosCadastro } from "./DadosCadastro";
import { EnderecoResidencial } from "./EnderecoResidencial";
import { EnderecoCorrespondencia } from "./EnderecoCorrespondencia";
import { EnderecoCobranca } from "./EnderecoCobranca";
import { DadosComplementares } from "./DadosComplementares";
import { EditDadosCadastro } from "./EditDadosCadastro";
import { EditEnderecoResidencial } from "./EditEnderecoResidencial";
import { EditEnderecoCorrespondencia } from "./EditEnderecoCorrespondencia";
import { EditEnderecoCobranca } from "./EditEnderecoCobranca";

export const Info = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(0);

  const handleSelectEdit = (ind) => {
    setIsOpen(true);
    setContent(ind);
  };

  const handleCloseEdit = () => {
    setIsOpen(false);
  };

  const infos = [
    {
      title: "Dados do cadastro",
      Component: () => <DadosCadastro />,
      EditComponent: <EditDadosCadastro />,
    },
    {
      title: "Endereço residencial",
      Component: () => <EnderecoResidencial />,
      EditComponent: () => <EditEnderecoResidencial />,
    },
    {
      title: "Endereço de correspondência",
      Component: () => <EnderecoCorrespondencia />,
      EditComponent: () => <EditEnderecoCorrespondencia />,
    },
    {
      title: "Endereço de cobrança",
      Component: () => <EnderecoCobranca />,
      EditComponent: () => <EditEnderecoCobranca />,
    },
    {
      title: "Dados complementares",
      Component: () => <DadosComplementares />,
    },
  ];

  const renderContentDrawer = () => {
    switch (content) {
      case 0:
        return <EditDadosCadastro />;
      case 1:
        return <EditEnderecoResidencial />;
      case 2:
        return <EditEnderecoCorrespondencia />;
      case 3:
        return <EditEnderecoCobranca />;

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="container d-flex flex-column gap-3">
        {infos.map(({ Component, title, EditComponent }, index) => {
          return (
            <Accordion
              key={index}
              onEdit={EditComponent && (() => handleSelectEdit(index))}
              title={title}>
              <Component />
            </Accordion>
          );
        })}
      </div>

      <div>
        <Drawer isOpen={isOpen} onClose={handleCloseEdit}>
          {renderContentDrawer()}
        </Drawer>
      </div>
    </div>
  );
};
