import axios from 'axios';

export const api = axios.create({
  baseURL: "https://my-rocketnotes-api.herokuapp.com",
})