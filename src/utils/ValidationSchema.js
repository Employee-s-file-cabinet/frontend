// eslint-disable-next-line import/no-extraneous-dependencies
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
      .required('Поле "пароль" обязательно для заполнения.'),
    // .matches(
    //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,15}$/,
    //   'Пароль должен содержать от 8 до 15 символов, включая заглавную букву, прописную букву и цифру.'
    // ),
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
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,15}$/,
        'Пароль должен содержать от 8 до 15 символов, включая заглавную букву, прописную букву и цифру.'
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
