import axios from 'axios';
import { baseURL } from '../constants';

const axiosBase = axios.create({
  baseURL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

// функция обработки ошибок
// eslint-disable-next-line class-methods-use-this
function processError(error) {
  if (error.response) {
    return Promise.reject(
      new Error(
        `Статус: ${error.response.status}. Данные ${error.response.data}`
      )
    );
  }
  if (error.request) {
    return Promise.reject(new Error(error.request));
  }
  return Promise.reject(new Error(error.message));
}
// функция получения списка департаментов
export function departments() {
  return axiosBase
    .get(`/departments`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
