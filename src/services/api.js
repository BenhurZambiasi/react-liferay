import axios from "axios";
import { formatDate } from "../utils/date";

const api = axios.create({
  auth: {
    username: "test@liferay.com",
    password: "test",
  },
});

export const getIrpfpdf = async ({ cpf, ano }) => {
  try {
    const response = await api.get(
      `https://desenv-novosite-un.unimed.coop.br/site/o/extratoirpf/extartoIRPF?cpf=${cpf}&ano=${ano}`
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const searchServico = async (search) => {
  if (!search.trim()) return;

  try {
    let URL = `http://localhost:8080/site/o/buscarservicos/servicosunimed?keywords=${search}&groupID=${37347}`;
    const response = await api.post(URL);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const fetchAddress = async (cep) => {
  try {
    const response = await axios.get(
      `https://brasilapi.com.br/api/cep/v1/${cep}`
    );
    const { street, neighborhood, city, state } = response.data;
    return { street, neighborhood, city, state };
  } catch (error) {
    console.error("Error fetching address:", error);
  }
};

const generateProtocolo = (status) => {
  const protocolo = new Date().toISOString();
  return {
    status: status,
    protocolo: protocolo.replace(/[^\d]+/g, ""),
    dtSolicitacao: new Date().toISOString(),
    observacao: "OK",
  };
};

export const generateProtocoloNumber = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateProtocolo("Pendente"));
    }, 1000);
  });
};

export const getCarteirasEmitidas = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            numVia: 4,
            cobranca: "Sim",
            dtEmissao: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            validade: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            motivo: "Perda do cartão",
            detalhes: {
              motivoBloqueio: "-",
              dtBloqueio: "-",
              usuario: "A14992",
              descricao: "Emissão geral",
            },
          },
          {
            numVia: 3,
            cobranca: "Não",
            dtEmissao: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            validade: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            motivo: "Troca de plano",
            detalhes: {
              motivoBloqueio: "-",
              dtBloqueio: "-",
              usuario: "A14992",
              descricao: "Emissão geral",
            },
          },
          {
            numVia: 2,
            cobranca: "Não",
            dtEmissao: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            validade: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            motivo: "Renovação do cartão",
            detalhes: {
              motivoBloqueio: "-",
              dtBloqueio: "-",
              usuario: "A14992",
              descricao: "Emissão geral",
            },
          },
          {
            numVia: 1,
            cobranca: "Não",
            dtEmissao: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            validade: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            motivo: "Inclusão beneficiário",
            detalhes: {
              motivoBloqueio: "-",
              dtBloqueio: "-",
              usuario: "A14992",
              descricao: "Emissão geral",
            },
          },
        ],
      });
    }, 1000);
  });
};
export const getCarteirasEmitir = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            dtSolicitacao: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            validade: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            usuario: "A14992",
            motivo: "Renovação do cartão",
          },
          {
            dtSolicitacao: "2023-07-25T14:33:36.008Z",
            validade: "2021-01-20T14:33:36.008Z",
            usuario: "A01890",
            motivo: "Inclusão beneficiário",
          },
        ],
      });
    }, 1000);
  });
};
export const getTrocaPlano = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            plano: "Unimed Básico Corp Coletivo Empresarial II",
            dtHistorico: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            dtInicio: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            dtFim: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            usuario: "A14992",
          },
          {
            plano: "Unimed Básico Corp Coletivo Empresarial I",
            dtHistorico: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            dtInicio: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            dtFim: formatDate({
              date: "2022-01-20T14:33:36.008Z",
              format: "DD/MM/YYYY",
            }),
            usuario: "A01890",
          },
        ],
      });
    }, 1000);
  });
};

export const getDadosDoCadastro = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data:
        {
          codigo: "08650003676091009",
          codigoAntigo: "08650002619878005",
          situacao: "Ativo",
          origem: "865",
          nomeCartao: "Lídia Maria Dias Scheffer",
          codigoCartao: "8650003676091009",
          lcat: "333",
          nomeLcat: "Unimed Paulistana",
          nome: "Lídia Maria Dias Scheffer",
          sexo: "Feminino",
          cpf: "581.505.000-81",
          nascimento: "581.505.000-81",
          pis: "23940200590",
          cbo: "-",
          estadoCivil: "Casado(a)",
          dataCasamento: "04/11/2003",
          rg: "717749245",
          pais: "Brasil",
          nacionalidade: "Brasileiro(a)",
          orgaoEmissor: "SSP - Secretaria de Segurança Pública",
          nomeMae: "Rosangela Dias Cheffer",
          dataInclusao: "01/08/2022",
          dataAdesao: "01/08/2022",
          dataExclusao: "-",
          motivoExclusao: "-",
          dataDevolucaoCartao: "-",
          tipo: "Titular",
          grauDependencia: "-",
          matricula: "50170",
          rede: "Rede Absoluto Apartamento",
          limitePlano: "-",
          contratoAdministradora: "-",
          codigoCcoAns: "5637720070",
          diasAtraso: "-",
          situacaoInadimplencia: "-",
          dataInadimplencia: "-",
          numeroCartaoNacionalSaude: "701305610232430",
          numeroMatriculaBeneficiario: "6453606",
          registroOperadoraAns1: "Central Nacional Unimed - Cooperativa Central",
          registroOperadoraAns2: "Central Nacional Unimed - Cooperativa Central",
          operadora: "Central Nacional Unimed - Cooperativa Central",
          administradoraBeneficios: "Central Nacional Unimed",
          nomePessoaJuridica: "Absoluto Nacional I A CO"
        },
      });
    }, 1000);
  });
};
export const getEnderecoResidencial = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          endereco: "Rua Victor Brecheret",
          numero: "344",
          complemento: "-",
          bairro: "Vila Yara",
          municipio: "Osasco",
          uf: "SP",
          cep: "06026-000",
          pais: "Brasil",
          telefone: "(11) 3214-5678  (Ramal: 1234)",
          celular: "(11) 98765-4321",
          email: "lidia.maria@email.com"
        },
      });
    }, 1000);
  });
};
export const getEnderecoDeCorrespondencia = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          endereco: "Rua Victor Brecheret",
          numero: "344",
          complemento: "-",
          bairro: "Vila Yara",
          municipio: "Osasco",
          uf: "SP",
          cep: "06026-000",
          pais: "Brasil",
          telefone: "(11) 3214-5678  (Ramal: 1234)",
          celular: "(11) 98765-4321",
          email: "lidia.maria@email.com"
        },
      });
    }, 1000);
  });
};
export const getEnderecoDeCobranca = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          endereco: "Rua Victor Brecheret",
          numero: "344",
          complemento: "-",
          bairro: "Vila Yara",
          municipio: "Osasco",
          uf: "SP",
          cep: "06026-000",
          pais: "Brasil",
          telefone: "(11) 3214-5678  (Ramal: 1234)",
          celular: "(11) 98765-4321",
          email: "lidia.maria@email.com"
        },
      });
    }, 1000);
  });
};
export const getDadosComplementares = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          empresa: "XYZ Serviços e Negócios LTDA",
          ini_contribuicao: "-",
          lotacao: "1011040204 - EQ Projetos e Sistemas III",
          ini_lotacao: "01/01/2024",
          centro_de_custo: "-",
          funcao: "-",
          unidade: "-",
          local: "-",
          situacao_especial: "-",
          a_partir_de: "-",
          matricula_titular: "50170",
          situacao_empresa: "-",
          matricula: "50170",
          seq: "-",
          admissao: "17/02/2020",
          cargo: "-",
          banco_reembolso: "-",
          ag_reembolso: "-",
          cc_reembolso: "-",
          banco_faturamento: "-",
          ag_faturamento: "-",
          cc_faturamento: "-",
          forma_cobranca: "-",
          vl_limite_consignacao: "-",
          percentual_desconto: "-",
          forma_valoracao: "-"
        },
      });
    }, 1000);
  });
};