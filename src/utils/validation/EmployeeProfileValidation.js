import * as yup from 'yup';
import { requiredFieldError } from '../constants';

export const EmployeeProfileSchema = yup
  .object({
    lastName: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/,
        'Используйте кириллицу, дефис и(или) апостроф.'
      ),
    firstName: yup
      .string()
      .required(requiredFieldError)
      .matches(
        /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/,
        'Используйте кириллицу, дефис и(или) апостроф.'
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

    picture: yup.mixed().test(
      'fileSize',
      'Размер файла не должен превышать 5 Мб.',
      (value) => value.length && value[0].size <= 5242880
      // {
      //   name: 'fileSize',
      //   skipAbsent: true,
      //   test(value, ctx) {
      //     if (!value.length) {
      //       ctx.createError({
      //         message: 'Размер файла не должен превышать 5 Мб.',
      //       });
      //     }
      //   },
      // }
    ),
    // .test('required', 'Загрузите фотографию', (value) => value > 0)

    test: yup.string().test({
      name: 'fileSize',
      skipAbsent: true,
      test(value, ctx) {
        if (!value.length) {
          ctx.createError({
            message: 'Размер файла не должен превышать 5 Мб.',
          });
        }
      },
    }),
  })
  .required();
