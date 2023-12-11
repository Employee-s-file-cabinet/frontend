const { REACT_APP_NODE_ENV, REACT_APP_PUBLIC_URL } = process.env;

const BASE_URL =
  REACT_APP_NODE_ENV === 'production' ? REACT_APP_PUBLIC_URL : 'localhost:4000';

function getRes(res) {
  return res.ok ? res.json() : Promise.reject(new Error(res.status));
}

function request(url, options) {
  return fetch(BASE_URL + url, options).then(getRes);
}

export function authorize({ login, password }) {
  return request(`/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ login, password }),
  });
}

export function checkKey({ key }) {
  return request(`/login/change-password?key=${key}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}

export function changePassword({ key, password }) {
  return request(`/login/change-password`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ key, password }),
  });
}
