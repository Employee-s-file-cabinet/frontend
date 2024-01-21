import * as yup from 'yup';

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required('Поле "email" обязательно для заполнения.')
      .matches(
        /^\S+@\S+\.[a-zA-Z]{2,}$/,
        'Пожалуйста, введите корректный email.'
      ),
    password: yup
      .string()
      .required('Поле "пароль" обязательно для заполнения.')
      .matches(
        /^(?=.*?[a-zA-Z])(?=.*?[#?!@$%^&*-]).{8,15}$/,
        'Пароль должен содержать от 8 до 15 символов, включая прописную букву и спецсимвол.'
      ),
  })
  .required();

export const restorePasswordSchema = yup
  .object({
    email: yup
      .string()
      .required('Поле "email" обязательно для заполнения.')
      .matches(
        /^\S+@\S+\.[a-zA-Z]{2,}$/,
        'Пожалуйста, введите корректный email.'
      ),
  })
  .required();

export const resetPasswordSchema = yup
  .object({
    password: yup
      .string()
      .required('Поле "пароль" обязательно для заполнения.')
      .matches(
        /^(?=.*?[a-zA-Z])(?=.*?[#?!@$%^&*-]).{8,15}$/,
        'Пароль должен содержать от 8 до 15 символов, включая прописную букву и спецсимвол.'
      ),
    confirmPassword: yup
      .string()
      .required('Поле "подтверждение пароля" обязательно для заполнения.')
      .oneOf([yup.ref('password'), null], 'Пароли должны совпадать.'),
  })
  .required();

export const searchSchema = yup
  .object({
    search: yup.string().required('Задан пустой поисковой запрос'),
  })
  .required();
