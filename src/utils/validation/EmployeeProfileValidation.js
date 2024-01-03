import * as yup from 'yup';
import { requiredFieldError } from '../constants';

export const EmployeeProfileSchema = yup
  .object({
    lastName: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/,
        'Используйте кириллицу, а также дефис и(или) апостроф.'
      ),
    firstName: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/,
        'Используйте кириллицу, а также дефис и(или) апостроф.'
      ),
    middleName: yup
      .string()
      .required(requiredFieldError)
      .matches(/^(?=.*?[а-яёА-ЯЁ]).{1,150}$/, 'Используйте кириллицу.'),
    department: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^(?=.{2,150}$)[а-яёА-ЯЁ0-9]+(?:[-][а-яёА-ЯЁ0-9]+)*$/,
        'Используте не менее 2 символов: кириллица, цифры, дефис'
      ),
    jobTitle: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^(?=.{2,150}$)[а-яёА-ЯЁ0-9]+(?:[-][а-яёА-ЯЁ0-9]+)*$/,
        'Используте не менее 2 символов: кириллица, цифры, дефис'
      ),
    grade: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^(?=.{1,3}$)[0-9]*$/,
        'Используте цифры. Максимальная длина поля 3 символа'
      ),
    mobileNumber: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^(?=.{12,15}$)[+]+[0-9]*$/,
        'Используйте формат записи номера "+79991110022".'
      ),
    extNumber: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^[0-9]+[-]+[0-9]*$/,
        'Используйте формат записи номера "+79991110022". Макс. длина 15 символов.'
      ),
  })
  .required();
