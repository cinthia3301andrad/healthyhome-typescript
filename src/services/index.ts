import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.healthyhome.com.br/',
});

export default api;
