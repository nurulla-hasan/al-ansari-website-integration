
import config from "@/config/config";
import axios from "axios";

export const api = axios.create({
  baseURL: config.BASE_URL
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
