import { useState } from "react";
import { Accordion } from "../Accordion";
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
import { generateProtocoloNumber } from "../../../services/api";

export const Info = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);
  const [content, setContent] = useState(0);

  const [protocoloDados, setProtocoloDados] = useState({
    status: "",
    protocolo: "",
    dtSolicitacao: "",
    observacao: "",
  });

  const handleSelectEdit = (ind) => {
    setIsOpen(true);
    setContent(ind);
  };

  const handleCloseEdit = (openAccordion) => {
    setIsOpen(false);
    if (openAccordion) {
      setIsOpenAccordion(true);
    }
  };

  const generateProtocolo = async () => {
    return await generateProtocoloNumber().then((resp) => {
      setProtocoloDados(resp);
    });
  };

  const infos = [
    {
      title: "Dados do cadastro",
      Component: () => <DadosCadastro protocoloDados={protocoloDados} />,
      hasEdit: true,
    },
    {
      title: "Endereço residencial",
      Component: () => <EnderecoResidencial />,
      hasEdit: true,
    },
    {
      title: "Endereço de correspondência",
      Component: () => <EnderecoCorrespondencia />,
      hasEdit: true,
    },
    {
      title: "Endereço de cobrança",
      Component: () => <EnderecoCobranca />,
      hasEdit: true,
    },
    {
      title: "Dados complementares",
      Component: () => <DadosComplementares />,
      hasEdit: false,
    },
  ];

  const renderContentDrawer = () => {
    switch (content) {
      case 0:
        return (
          <EditDadosCadastro
            handleCloseEdit={handleCloseEdit}
            generateProtocolo={generateProtocolo}
            protocoloDados={protocoloDados.protocolo}
          />
        );
      case 1:
        return <EditEnderecoResidencial handleCloseEdit={handleCloseEdit} />;
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
        {infos.map(({ Component, title, hasEdit }, index) => {
          return (
            <Accordion
              isOpen={content == index && isOpenAccordion}
              key={index}
              onEdit={hasEdit && (() => handleSelectEdit(index))}
              title={title}>
              <Component />
            </Accordion>
          );
        })}
      </div>

      <div>
        <Drawer isOpen={isOpen} onClose={handleCloseEdit} maxWidth="720px">
          {renderContentDrawer()}
        </Drawer>
      </div>
    </div>
  );
};
