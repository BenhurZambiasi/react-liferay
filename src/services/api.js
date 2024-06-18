import axios from "axios";

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
    const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);
    const { street, neighborhood, city, state } = response.data;
    return { street, neighborhood, city, state };
  } catch (error) {
    console.error("Error fetching address:", error);
  }
};