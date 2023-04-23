import axios from 'axios';

const API = axios.create({
  baseURL: 'http://34.131.203.251:8000/',
});

export default API;