import * as yup from 'yup';
import { requiredFieldError } from '../constants';

const MAX_FILE_SIZE = 1024000;

const validFileExtensions = {
  image: ['jpg', 'jpeg', 'png', 'webp'],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
  );
}

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
        'Используте кириллицу, цифры, дефис.'
      ),
    jobTitle: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^(?=.{2,150}$)[а-яёА-ЯЁ0-9]+(?:[-][а-яёА-ЯЁ0-9]+)*$/,
        'Используте кириллицу, цифры, дефис.'
      ),
    grade: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^(?=.{1,3}$)[0-9]*$/,
        'Используте цифры. Макс. длина поля 3 символа.'
      ),
    mobileNumber: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^(?=.{12,15}$)[+]+[0-9]*$/,
        'Используйте формат записи номера "+79991110022". Макс. длина номера 14 цифр.'
      ),
    extNumber: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^[0-9]{2,2}[-][0-9]{2,2}$/,
        'Используйте формат записи номера "00-00".'
      ),
    email: yup
      .string()
      .required(requiredFieldError)
      .matches(/^\S+@\S+\.[a-zA-Z]{2,}$/, 'Введите корректный email.'),

    photoUpload: yup
      .mixed()
      .required('Required')
      .test('is-valid-type', 'Not a valid image type', (value) =>
        isValidFileType(value && value.name.toLowerCase(), 'image')
      )
      .test(
        'is-valid-size',
        'Max allowed size is 1000KB',
        (value) => value && value.size <= MAX_FILE_SIZE
      ),
  })
  .required();
