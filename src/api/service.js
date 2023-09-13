import axios from 'axios';

export default axios.create({
  baseURL: 'https://64f8bebf824680fd218002cd.mockapi.io/api/v1/',
  headers: {'Content-Type': 'application/json'}
});