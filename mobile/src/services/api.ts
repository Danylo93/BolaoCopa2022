import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://git.heroku.com/api-nlw.git'
});