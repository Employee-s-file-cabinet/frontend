export const baseURL = 'https://ecabinet.acceleratorpracticum.ru/api/v1';

export const pagesPath = {
  home: { path: '', label: 'Главная', id: 1 },
  employees: { path: 'employees', label: 'Картотека сотрудников', id: 2 },
  employee: { path: 'employee', label: 'Сотрудник', id: 3 },
  companyStructure: {
    path: 'company-srtucture',
    label: 'Cтруктура компании',
    id: 4,
  },
  departments: { path: 'departments', label: 'Департаменты', id: 5 },
  newEmployee: { path: 'new-employee', label: 'Новый сотрудник', id: 6 },
};

export const sideMenuOptions = [
  {
    icon: 'fa-folder',
    link: '/employees',
    text: 'Картотека сотрудников',
    id: 1,
  },
  { icon: 'fa-user', link: '/', text: 'Подбор персонала', id: 2 },
  { icon: 'fa-graduation-cap', link: '/', text: 'Обучение сотрудников', id: 3 },
  {
    icon: 'fa-hand-holding-dollar',
    link: '/',
    text: 'Льготы и компенсации',
    id: 4,
  },
  { icon: 'fa-file', link: '/', text: 'Отчеты', id: 5 },
  { icon: 'fa-gear', link: '/', text: 'Настройки', id: 6 },
];

export const requiredFieldError = 'Заполните поле.';
