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

const axiosUpload = axios.create({
  baseURL,
  withCredentials: true,
  headers: { 'Content-Type': 'multipart/form-data' },
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

// СОТРУДНИКИ
// функция получения списка сотрудников
export function getEmployees(limit, query, page) {
  return axiosBase
    .get(`/users?limit=${limit}&query=${query}&page=${page}&sort_by=alphabet`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}

// функция добавления нового сотрудника
export function addEmployee(data) {
  return axiosBase
    .post(`/users`, data)
    .then((res) => res.data)
    .catch((error) => processError(error));
}

// ФУНКЦИИ РАБОТЫ С ДАННЫМИ СОТРУДНИКА

// ФОТО
// функция загрузки фото сотрудника
export function updloadEmployeePhoto(userId, formData) {
  return axiosUpload
    .post(`/users/${userId}/photo`, formData)
    .then((res) => res.data)
    .catch((error) => processError(error));
}

// КОНТРАКТЫ
// функция получения списка контрактов сотрудника
export function getEmployeeContracts(userId) {
  return axiosBase
    .get(`/users/${userId}/contracts`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция добавления нового контракта
export function addEmployeeContract(userId, data) {
  return axiosBase
    .post(`/users/${userId}/contracts`, data)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция получения контракта по id
export function getEmployeeContractById(userId, contractId) {
  return axiosBase
    .get(`/users/${userId}/contracts/${contractId}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция удаления контракта по id
export function deleteEmployeeContractById(userId, contractId) {
  return axiosBase
    .delete(`/users/${userId}/contracts/${contractId}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция редактирования данных контракта
export function editEmployeeContract(userId, contractId, data) {
  return axiosBase
    .patch(`/users/${userId}/contracts/${contractId}`, data)
    .then((res) => res.data)
    .catch((error) => processError(error));
}

// ПАСПОРТА
// функция получения списка паспортов сотрудника
export function getEmployeePasports(userId) {
  return axiosBase
    .get(`/users/${userId}/passports`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция добавления нового паспорта
export function addEmployeePasport(userId, data) {
  return axiosBase
    .post(`/users/${userId}/passports`, data)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция получения паспорта по id
export function getEmployeePassportById(userId, passportId) {
  return axiosBase
    .get(`/users/${userId}/passports/${passportId}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция удаления паспорта по id
export function deleteEmployeePassportById(userId, passportId) {
  return axiosBase
    .delete(`/users/${userId}/passports/${passportId}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция редактирования данных паспорта
export function editEmployeePassport(userId, passportId, data) {
  return axiosBase
    .patch(`/users/${userId}/passports/${passportId}`, data)
    .then((res) => res.data)
    .catch((error) => processError(error));
}

// ВИЗЫ
// функция получения списка виз паспорта сотрудника
export function getEmployeeVisas(userId, passportId) {
  return axiosBase
    .get(`/users/${userId}/passports/${passportId}/visas`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция добавления новой визы в данные паспорта
export function addEmployeeVisa(userId, passportId, data) {
  return axiosBase
    .post(`/users/${userId}/passports/${passportId}/visas`, data)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция получения визы по id
export function getEmployeeVisaById(userId, passportId, visaId) {
  return axiosBase
    .get(`/users/${userId}/passports/${passportId}/visas/${visaId}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция удаления визы по id
export function deleteEmployeeVisaById(userId, passportId, visaId) {
  return axiosBase
    .delete(`/users/${userId}/passports/${passportId}/visas/${visaId}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция редактирования данных визы
export function editEmployeeVisa(userId, passportId, visaId, data) {
  return axiosBase
    .patch(`/users/${userId}/passports/${passportId}/visas/${visaId}`, data)
    .then((res) => res.data)
    .catch((error) => processError(error));
}

// ОТПУСКА
// функция получения списка отпусков сотрудника
export function getEmployeeVacations(userId) {
  return axiosBase
    .get(`/users/${userId}/vacations`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция добавления нового отпуска
export function addEmployeeVacation(userId, data) {
  return axiosBase
    .post(`/users/${userId}/vacations`, data)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция получения отпуска по id
export function getEmployeeVacationById(userId, vacationId) {
  return axiosBase
    .get(`/users/${userId}/vacations/${vacationId}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция удаления отпуска по id
export function deleteEmployeeVacationById(userId, vacationId) {
  return axiosBase
    .delete(`/users/${userId}/vacations/${vacationId}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция редактирования данных отпуска
export function editEmployeeVacation(userId, vacationId, data) {
  return axiosBase
    .patch(`/users/${userId}/vacations/${vacationId}`, data)
    .then((res) => res.data)
    .catch((error) => processError(error));
}

// СКАНЫ
// функция получения списка сканов документов сотрудника
export function getEmployeeScans(userId) {
  return axiosBase
    .get(`/users/${userId}/scans`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция добавления нового скана
export function addEmployeeScan(userId, formData) {
  return axiosUpload
    .post(`/users/${userId}/scans`, formData)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция получения скана по id
export function getEmployeeScanById(userId, scanId) {
  return axiosBase
    .get(`/users/${userId}/scans/${scanId}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция удаления скана по id
export function deleteEmployeeScanById(userId, scanId) {
  return axiosBase
    .delete(`/users/${userId}/scans/${scanId}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}

// ОБРАЗОВАНИЕ
// функция получения списка образований сотрудника
export function getEmployeeEducations(userId) {
  return axiosBase
    .get(`/users/${userId}/educations`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция добавления нового образования
export function addEmployeeEducation(userId, data) {
  return axiosBase
    .post(`/users/${userId}/educations`, data)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция получения образования по id
export function getEmployeeEducationById(userId, educationId) {
  return axiosBase
    .get(`/users/${userId}/educations/${educationId}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция удаления образования по id
export function deleteEmployeeEducationById(userId, educationId) {
  return axiosBase
    .delete(`/users/${userId}/educations/${educationId}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция редактирования данных образования
export function editEmployeeEducation(userId, educationId, data) {
  return axiosBase
    .patch(`/users/${userId}/educations/${educationId}`, data)
    .then((res) => res.data)
    .catch((error) => processError(error));
}

// ОБУЧЕНИЕ
// функция получения списка обучений сотрудника
export function getEmployeeTrainings(userId) {
  return axiosBase
    .get(`/users/${userId}/trainings`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция добавления нового обучения
export function addEmployeeTraining(userId, data) {
  return axiosBase
    .post(`/users/${userId}/trainings`, data)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция получения обучения по id
export function getEmployeeTrainingById(userId, trainingId) {
  return axiosBase
    .get(`/users/${userId}/trainings/${trainingId}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция удаления обучения по id
export function deleteEmployeeTrainingById(userId, trainingId) {
  return axiosBase
    .delete(`/users/${userId}/trainings/${trainingId}`)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
// функция редактирования данных обучения
export function editEmployeeTraining(userId, trainingId, data) {
  return axiosBase
    .patch(`/users/${userId}/trainings/${trainingId}`, data)
    .then((res) => res.data)
    .catch((error) => processError(error));
}
