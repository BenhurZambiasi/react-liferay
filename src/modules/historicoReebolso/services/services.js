import axios from 'axios';
const apiLifferay = axios.create({
  baseURL: 'http://localhost:8080/site/o',
  headers: {
    'Content-Type': 'application/json',
  },
  auth: {
    username: '97203286819',
    password: '123456',
  },
});

const token = 'z5JeuWqSLdpbjfyv8Z8oQLZGzx4whwZaEVqL0teczsHktVduMGWyBh';

const unimedApi = axios.create({
  baseURL: 'https://api-dev.unimednacional.coop.br',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  },
});

export const getReembolsos = async ({ cartao }) => {
  try {
    const response = await unimedApi.get(`/reembolsos/v2/por-cartao/08650003676091009`);
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const getDetalheReembolso = async ({ reembolso }) => {
  try {
    const response = await unimedApi.get(`/reembolsos/v2/detalhes/${reembolso}`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCustonFields = async () => {
  try {
    const response = await apiLifferay.get('/userLiferay/get-user-custom-fields');
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
