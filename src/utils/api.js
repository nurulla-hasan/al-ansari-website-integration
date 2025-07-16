
import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.0.60.118:5006"
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
