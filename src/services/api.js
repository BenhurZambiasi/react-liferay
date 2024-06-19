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
