import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const token = await localStorage.getItem("token");

const api = axios.create({
  baseURL: apiUrl,
});

api.defaults.headers.common['Authorization'] = 'Bearer ' + token;

export default api;
