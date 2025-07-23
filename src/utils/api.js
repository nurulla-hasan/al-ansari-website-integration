
import axios from "axios";
export const baseURL = "http://13.62.48.83:5001"
export const api = axios.create({
  baseURL: baseURL
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export const fetchSearchResults = async (query) => {
  if (!query) {
    return [];
  }
  const response = await api.get(`/dashboard/search?searchTerm=${query}`);
  return response.data.data;
};
