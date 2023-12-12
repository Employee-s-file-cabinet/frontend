const { REACT_APP_NODE_ENV, REACT_APP_PUBLIC_URL } = process.env;

const BASE_URL =
  REACT_APP_NODE_ENV === 'production' ? REACT_APP_PUBLIC_URL : 'localhost:4000';

function getRes(res) {
  return res.ok ? res.json() : Promise.reject(new Error(res.status));
}

function request(url, options) {
  return fetch(BASE_URL + url, options).then(getRes);
}

export function departments() {
  return request(`/departments`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
