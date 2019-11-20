import axios from 'axios';

const publicKey = '2ba4a00e95702a0d31572c9946e42f36';

//! A versão 0.19 do axios tem um bug que impede o uso de parâmetros fixos.
//! Ver https://github.com/axios/axios/issues/2190

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: publicKey,
    language: 'pt-BR',
  },
});

export default api;
