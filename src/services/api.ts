import axios, { AxiosError, type AxiosResponse } from "axios";

import { removeTokenLocalStorage } from "../lib/localStorage/token";
import { removeUserLocalStorage } from "../lib/localStorage/user";
import { AppError } from "../utils/AppError";

export const api = axios.create({
  baseURL: "https://backend-geracao-tech.onrender.com/v1/"
})

interface ResponseDataProps {
  message?: string
}

api.interceptors.response.use((response: AxiosResponse) => response, (error: AxiosError) => {
  if (error.response?.status === 401) {
    removeTokenLocalStorage();
    removeUserLocalStorage();
    api.defaults.headers.token = null;
  }
  if(error.response && error.response.data) {
    const object: ResponseDataProps = error.response.data;

    return Promise.reject(new AppError(object.message ?? 'Erro!'));
  } else {
    return Promise.reject(error);
  }
});
