const { REACT_APP_NODE_ENV, REACT_APP_PUBLIC_URL } = process.env;

const BASE_URL =
  REACT_APP_NODE_ENV === 'production' ? REACT_APP_PUBLIC_URL : 'localhost:4000';

// функция получения ответа и преобразования его в объект
function getRes(res) {
  return res.ok ? res.json() : Promise.reject(new Error(res.status));
}
// функция отправки fetch запроса
function request(url, options) {
  return fetch(BASE_URL + url, options).then(getRes);
}

// СОТРУДНИКИ
// функция получения списка сотрудников
export function getEmployees({ limit, query, page }) {
  return request(
    `/users?limit=${limit}&query=${query}&page=${page}&sort_by=alphabet`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }
  );
}
// функция добавления нового сотрудника
export function addEmployee(data) {
  return request(`/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      date_of_birth: data.date_of_birth,
      first_name: data.first_name,
      last_name: data.last_name,
      grade: data.grade,
      place_of_birth: data.place_of_birth,
      registration_address: data.registration_address,
      residential_address: data.residential_address,
      nationality: data.nationality,
      foreign_languages: data.foreign_languages,
      military: data.military,
      taxpayer: data.taxpayer,
      insurance: data.insurance,
      work_permit: data.work_permit,
      middle_name: data.middle_name,
      position: data.position,
      department: data.department,
      email: data.email,
      phone_numbers: data.phone_numbers,
    }),
  });
}

// ФУНКЦИИ РАБОТЫ С ДАННЫМИ СОТРУДНИКА

// ФОТО
// функция загрузки фото сотрудника
export function updloadEmployeePhoto(userId, data) {
  return request(`/users/${userId}/photo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'image/*',
    },
    body: data,
    credentials: 'include',
  });
}

// КОНТРАКТЫ
// функция получения списка контрактов сотрудника
export function getEmployeeContracts(userId) {
  return request(`/users/${userId}/contracts`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
// функция добавления нового контракта
export function addEmployeeContract(userId, data) {
  return request(`/users/${userId}/contracts`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      date_from: data.date_from,
      date_to: data.email,
      type: data.type,
      number: data.number,
      has_scan: data.has_scan,
    }),
  });
}
// функция получения контракта по id
export function getEmployeeContractById(userId, contractId) {
  return request(`/users/${userId}/contracts/${contractId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
// функция удаления контракта по id
export function deleteEmployeeContractById(userId, contractId) {
  return request(`/users/${userId}/contracts/${contractId}`, {
    method: 'DELETE',
    credentials: 'include',
  });
}
// функция редактирования данных контракта
export function editEmployeeContract(userId, contractId, data) {
  return request(`/users/${userId}/contracts/${contractId}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      date_from: data.date_from,
      date_to: data.email,
      type: data.type,
      number: data.number,
      has_scan: data.has_scan,
    }),
  });
}

// ПАСПОРТА
// функция получения списка паспортов сотрудника
export function getEmployeePasports(userId) {
  return request(`/users/${userId}/passports`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
// функция добавления нового паспорта
export function addEmployeePasport(userId, data) {
  return request(`/users/${userId}/passports`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      issued_by: data.issued_by,
      issued_date: data.issued_date,
      number: data.number,
      type: data.type,
      has_scan: data.has_scan,
    }),
  });
}
// функция получения паспорта по id
export function getEmployeePassportById(userId, passportId) {
  return request(`/users/${userId}/passports/${passportId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
// функция удаления паспорта по id
export function deleteEmployeePassportById(userId, passportId) {
  return request(`/users/${userId}/passports/${passportId}`, {
    method: 'DELETE',
    credentials: 'include',
  });
}
// функция редактирования данных паспорта
export function editEmployeePassport(userId, passportId, data) {
  return request(`/users/${userId}/passports/${passportId}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      issued_by: data.issued_by,
      issued_date: data.issued_date,
      number: data.number,
      type: data.type,
      has_scan: data.has_scan,
    }),
  });
}

// ВИЗЫ
// функция получения списка виз паспорта сотрудника
export function getEmployeeVisas(userId, passportId) {
  return request(`/users/${userId}/passports/${passportId}/visas`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
// функция добавления новой визы в данные паспорта
export function addEmployeeVisa(userId, passportId, data) {
  return request(`/users/${userId}/passports/${passportId}/visas`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      issued_state: data.issued_state,
      number: data.number,
      number_entries: data.number_entries,
      valid_from: data.valid_from,
      valid_to: data.valid_to,
      has_scan: data.has_scan,
    }),
  });
}
// функция получения визы по id
export function getEmployeeVisaById(userId, passportId, visaId) {
  return request(`/users/${userId}/passports/${passportId}/visas/${visaId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
// функция удаления визы по id
export function deleteEmployeeVisaById(userId, passportId, visaId) {
  return request(`/users/${userId}/passports/${passportId}/visas/${visaId}`, {
    method: 'DELETE',
    credentials: 'include',
  });
}
// функция редактирования данных визы
export function editEmployeeVisa(userId, passportId, visaId, data) {
  return request(`/users/${userId}/passports/${passportId}/visas/${visaId}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      issued_state: data.issued_state,
      number: data.number,
      number_entries: data.number_entries,
      valid_from: data.valid_from,
      valid_to: data.valid_to,
      has_scan: data.has_scan,
    }),
  });
}

// ОТПУСКА
// функция получения списка отпусков сотрудника
export function getEmployeeVacations(userId) {
  return request(`/users/${userId}/vacations`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
// функция добавления нового отпуска
export function addEmployeeVacation(userId, data) {
  return request(`/users/${userId}/vacations`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      date_from: data.date_from,
      date_to: data.date_to,
    }),
  });
}
// функция получения отпуска по id
export function getEmployeeVacationById(userId, vacationId) {
  return request(`/users/${userId}/vacations/${vacationId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
// функция удаления отпуска по id
export function deleteEmployeeVacationById(userId, vacationId) {
  return request(`/users/${userId}/vacations/${vacationId}`, {
    method: 'DELETE',
    credentials: 'include',
  });
}
// функция редактирования данных отпуска
export function editEmployeeVacation(userId, vacationId, data) {
  return request(`/users/${userId}/vacations/${vacationId}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      date_from: data.date_from,
      date_to: data.date_to,
    }),
  });
}

// СКАНЫ
// функция получения списка сканов документов сотрудника
export function getEmployeeScans(userId) {
  return request(`/users/${userId}/scans`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
// функция добавления нового скана
export function addEmployeeScan(userId, data) {
  return request(`/users/${userId}/scans`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: data,
    credentials: 'include',
  });
}
// функция получения скана по id
export function getEmployeeScanById(userId, scanId) {
  return request(`/users/${userId}/scans/${scanId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}
// функция удаления скана по id
export function deleteEmployeeScanById(userId, scanId) {
  return request(`/users/${userId}/scans/${scanId}`, {
    method: 'DELETE',
    credentials: 'include',
  });
}
