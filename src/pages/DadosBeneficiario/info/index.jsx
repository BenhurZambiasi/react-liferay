import { useState, useEffect } from "react";
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
import { generateProtocoloNumber, getDadosComplementares, getDadosDoCadastro, getEnderecoDeCobranca, getEnderecoDeCorrespondencia, getEnderecoResidencial } from "../../../services/api";

export const Info = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);
  const [content, setContent] = useState(0);

  const [protocoloDados, setProtocoloDados] = useState({
    status: "",
    protocolo: "",
    dtSolicitacao: "",
    observacao: "",
  });
  
  const [dadosDoCadastroInfo, setDadosDoCadastroInfo] = useState({
    codigo: "",
    codigoAntigo: "",
    situacao: "",
    origem: "",
    nomeCartao: "",
    codigoCartao: "",
    lcat: "",
    nomeLcat: "",
    nome: "",
    sexo: "",
    cpf: "",
    nascimento: "",
    pis: "",
    cbo: "",
    estadoCivil: "",
    dataCasamento: "",
    rg: "",
    pais: "",
    nacionalidade: "",
    orgaoEmissor: "",
    nomeMae: "",
    dataInclusao: "",
    dataAdesao: "",
    dataExclusao: "",
    motivoExclusao: "",
    dataDevolucaoCartao: "",
    tipo: "",
    grauDependencia: "",
    matricula: "",
    rede: "",
    limitePlano: "",
    contratoAdministradora: "",
    codigoCcoAns: "",
    diasAtraso: "",
    situacaoInadimplencia: "",
    dataInadimplencia: "",
    numeroCartaoNacionalSaude: "",
    numeroMatriculaBeneficiario: "",
    registroOperadoraAns1: "",
    registroOperadoraAns2: "",
    operadora: "",
    administradoraBeneficios: "",
    nomePessoaJuridica: ""
  });
  const [enderecoResidencialInfo, setEnderecoResidencialInfo] = useState({
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    municipio: "",
    uf: "",
    cep: "",
    pais: "",
    telefone: "",
    celular: "",
    email: ""
  });
  const [enderecodecorrespondenciaInfo, setEnderecodecorrespondenciaInfo] = useState({
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    municipio: "",
    uf: "",
    cep: "",
    pais: "",
    telefone: "",
    celular: "",
    email: ""
  });
  const [enderecoDeCobrancaInfo, setEnderecoDeCobrancaInfo] = useState({
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    municipio: "",
    uf: "",
    cep: "",
    pais: "",
    telefone: "",
    celular: "",
    email: ""
  });
  const [dadosComplementaresInfo, setDadosComplementaresInfo] = useState({
    empresa: "",
    ini_contribuicao: "",
    lotacao: "",
    ini_lotacao: "",
    centro_de_custo: "",
    funcao: "",
    unidade: "",
    local: "",
    situacao_especial: "",
    a_partir_de: "",
    matricula_titular: "",
    situacao_empresa: "",
    matricula: "",
    seq: "",
    admissao: "",
    cargo: "",
    banco_reembolso: "",
    ag_reembolso: "",
    cc_reembolso: "",
    banco_faturamento: "",
    ag_faturamento: "",
    cc_faturamento: "",
    forma_cobranca: "",
    vl_limite_consignacao: "",
    percentual_desconto: "",
    forma_valoracao: ""
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
      Component: () => <DadosCadastro protocoloDados={protocoloDados} dadosDoCadastro={dadosDoCadastroInfo} />,
      hasEdit: true,
    },
    {
      title: "Endereço residencial",
      Component: () => <EnderecoResidencial enderecoResidencial={enderecoResidencialInfo} />,
      hasEdit: true,
    },
    {
      title: "Endereço de correspondência",
      Component: () => <EnderecoCorrespondencia enderecodecorrespondencia={enderecodecorrespondenciaInfo} />,
      hasEdit: true,
    },
    {
      title: "Endereço de cobrança",
      Component: () => <EnderecoCobranca enderecoDeCobranca={enderecoDeCobrancaInfo} />,
      hasEdit: true,
    },
    {
      title: "Dados complementares",
      Component: () => <DadosComplementares dadosComplementares={dadosComplementaresInfo} />,
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
            dadosDoCadastro={dadosDoCadastroInfo}
          />
        );
      case 1:
        return <EditEnderecoResidencial 
        handleCloseEdit={handleCloseEdit}
        enderecoResidencial={enderecoResidencialInfo} />;
      case 2:
        return <EditEnderecoCorrespondencia />;
      case 3:
        return <EditEnderecoCobranca />;

      default:
        return null;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const respostaDadosDoCadastro = await getDadosDoCadastro();
      const respostaEnderecoResidencial = await getEnderecoResidencial();
      const respostaEnderecoCorrespondencia = await getEnderecoDeCorrespondencia();
      const respostaEnderecoDeCobranca = await getEnderecoDeCobranca();
      const respostaDadosComplementares = await getDadosComplementares();
      setDadosDoCadastroInfo(respostaDadosDoCadastro.data);
      setEnderecoResidencialInfo(respostaEnderecoResidencial.data);
      setEnderecodecorrespondenciaInfo(respostaEnderecoCorrespondencia.data);
      setEnderecoDeCobrancaInfo(respostaEnderecoDeCobranca.data);
      setDadosComplementaresInfo(respostaDadosComplementares.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="container d-flex flex-column gap-3">
        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="loading-spinner" />
          </div>
        ) : (
          infos.map(({ Component, title, hasEdit }, index) => {
            return (
              <Accordion
                isOpen={content == index && isOpenAccordion}
                key={index}
                onEdit={hasEdit && (() => handleSelectEdit(index))}
                title={title}>
                <Component />
              </Accordion>
            );
          })
        )}
      </div>

      <div>
        <Drawer isOpen={isOpen} onClose={handleCloseEdit} maxWidth="720px">
          {renderContentDrawer()}
        </Drawer>
      </div>
    </div>
  );
};
