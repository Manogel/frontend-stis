import axios from 'axios';

let token = '';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.postOrPut = (url, id, data, config = {}) => {
  const method = id ? 'put' : 'post';
  // Os metodos de envio e atualização
  const apiUrl = id ? `${url}/${id}` : url;
  // se tiver um id, a url vai ter um id, senão, apenas a url

  return api[method](apiUrl, data, config);
};

api.interceptors.request.use(
  async (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function setToken(data) {
  token = data;
}

export default api;
