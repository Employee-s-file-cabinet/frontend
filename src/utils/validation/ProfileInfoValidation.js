import * as yup from 'yup';
import { requiredFieldError } from '../constants';

export const ProfileInfoValidationSchema = yup
  .object({
    last_name: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/,
        'Используйте кириллицу, дефис и(или) апостроф.'
      ),
    first_name: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/,
        'Используйте кириллицу, дефис и(или) апостроф.'
      ),
    middle_name: yup
      .string()
      .required(requiredFieldError)
      .matches(/^(?=.{1,150}$)[а-яёА-ЯЁ]*$/, 'Используйте кириллицу.'),
    department: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^(?=.{2,150}$)[а-яёА-ЯЁ0-9]+(?:[-][а-яёА-ЯЁ0-9]+)*$/,
        'Используте кириллицу, цифры, дефис.'
      ),
    position: yup
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
    mobile_phone_number: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^([+]{1,1})([0-9]{11,14})$/,
        'Укажите телефон в формате "+79991110022". Длина номера от 11 до 14 цифр'
      ),
    office_phone_number: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^[0-9]{2,2}[-][0-9]{2,2}$/,
        'Укажите телефон в формате "00-00".'
      ),
    email: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^\S+@\S+\.[a-zA-Z]{2,}$/,
        'Введите корректный email. Пример: ru@ru.ru'
      ),

    picture: yup.lazy((value) => {
      if (value) {
        return value.length !== 0
          ? yup
              .mixed()
              .test(
                'fileSize',
                'Размер файла превышает 5 Мб.',
                (file) => file[0].size <= 5242880
              )
          : yup.mixed().notRequired();
      }
      return yup.mixed().notRequired();
    }),
  })
  .required();
