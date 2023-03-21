import axios from 'axios';

export const api = axios.create({
  baseURL: "https://myrocketnotes-api.onrender.com",
})