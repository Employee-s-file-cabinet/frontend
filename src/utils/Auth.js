import axios from 'axios';

const { REACT_APP_NODE_ENV, REACT_APP_PUBLIC_URL } = process.env;

const baseURL =
  REACT_APP_NODE_ENV === 'production'
    ? REACT_APP_PUBLIC_URL
    : 'http://localhost:4000';

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

// функция отправки данных для авторизации пользователя
export function authorize(login, password) {
  return axiosBase
    .post(`/login`, { login, password })
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция проверки наличия e-mail в базе
export function checkEmail(login) {
  return axiosBase
    .post(`/login/init-change-password`, { login })
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция проверки ключа
export function checkKey(key) {
  return axiosBase
    .get(`/login/change-password?key=${key}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция изменения пароля
export function changePassword(key, password) {
  return axiosBase
    .post(`/login/change-password`, { key, password })
    .then((res) => res.data)
    .catch((error) => processError(error));
}
