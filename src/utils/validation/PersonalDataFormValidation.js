/* eslint-disable no-unused-vars */
import * as yup from 'yup';
import { requiredFieldError } from '../constants';
import trasnformDate from './transformDate';

export const PersonalDataFormValidationSchema = yup
  .object()
  .shape({
    date_of_birth: yup
      .date()
      .typeError('Введите дату в формате ДД.ММ.ГГГГ')
      .required(requiredFieldError)
      .min('Jan 1 1900', 'Дата начала работы не должна быть раньше 01.01.1900')
      .max(
        new Date(new Date() - new Date(567993600000)),
        `Дата рождения не должна быть позже ${trasnformDate(
          new Date(new Date() - new Date(567993600000))
        )}`
      ),
    place_of_birth: yup
      .string()
      .required(requiredFieldError)
      .matches(/^(?=.{1,150}$)[а-яёА-ЯЁ0-9. -]*$/, 'Используйте кириллицу.'),
    gender: yup
      .string()
      .required(requiredFieldError)
      .oneOf(['Мужской', 'Женский']),
    registration_address: yup.string().required(requiredFieldError),
    residential_address: yup.string().required(requiredFieldError),

    personalDFPassportCitizenshipFieldSet: yup.array().of(
      yup.object({
        citizenship: yup
          .string()
          .required(requiredFieldError)
          .min(2, 'Минимальное кол-во символов 2')
          .max(60, 'Максимальное кол-во символов 60'),
        number: yup
          .string()
          .required(requiredFieldError)
          .min(2, 'Минимальное кол-во символов 2')
          .max(70, 'Максимальное кол-во символов 70'),
        issued_date: yup
          .date('Введите дату в формате ДД.ММ.ГГГГ')
          .typeError('Введите дату в формате ДД.ММ.ГГГГ')
          .required('Введите дату в формате ДД.ММ.ГГГГ')
          .min(
            'Jan 1 1900',
            'Дата выдачи работы не должна быть раньше 01.01.1900'
          )
          .max(
            Date(),
            `Дата выдачи не должна быть позднее ${trasnformDate(Date())}`
          ),
        issued_by: yup
          .string()
          .notRequired()
          .min(10, 'Минимальное кол-во символов 10')
          .max(200, 'Максимальное кол-во символов 200'),
        department_code: yup
          .string()
          .notRequired()
          .min(10, 'Минимальное кол-во символов 10')
          .max(200, 'Максимальное кол-во символов 200'),
        scan: yup.lazy((value) => {
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
    ),

    personalDFPassportForeignFieldSet: yup.array().of(
      yup.object({
        number: yup
          .string()
          .required(requiredFieldError)
          .min(2, 'Минимальное кол-во символов 2')
          .max(70, 'Максимальное кол-во символов 70'),
        issued_date: yup
          .date('Введите дату в формате ДД.ММ.ГГГГ')
          .typeError('Введите дату в формате ДД.ММ.ГГГГ')
          .required('Введите дату в формате ДД.ММ.ГГГГ')
          .min('Jan 1 1900', 'Дата выдачи не должна быть раньше 01.01.1900')
          .max(
            Date(),
            `Дата начала не должна быть позднее ${trasnformDate(Date())}`
          ),
        expired: yup
          .date()
          .typeError('Введите дату в формате ДД.ММ.ГГГГ')
          .when('issued_date', {
            is: (value) => value.toString().includes('GMT'),
            then: () =>
              yup
                .date()
                .typeError('Введите дату в формате ДД.ММ.ГГГГ')
                .required('Введите дату в формате ДД.ММ.ГГГГ')
                .min(
                  yup.ref('issued_date'),
                  ({ min }) =>
                    `Дата истечения срока не должна быть ранее ${trasnformDate(
                      min
                    )}`
                ),
          }),
      })
    ),

    personalDFPassportVisaFieldSet: yup.array().of(
      yup.object({
        number: yup
          .string()
          .required(requiredFieldError)
          .min(2, 'Минимальное кол-во символов 2')
          .max(70, 'Максимальное кол-во символов 70'),
        category: yup
          .string()
          .required(requiredFieldError)
          .min(1, 'Минимальное кол-во символов 2')
          .max(70, 'Максимальное кол-во символов 70'),
        issued_date: yup
          .date('Введите дату в формате ДД.ММ.ГГГГ')
          .typeError('Введите дату в формате ДД.ММ.ГГГГ')
          .required('Введите дату в формате ДД.ММ.ГГГГ')
          .min('Jan 1 1900', 'Дата выдачи не должна быть раньше 01.01.1900')
          .max(
            Date(),
            `Дата начала не должна быть позднее ${trasnformDate(Date())}`
          ),
        expired: yup
          .date()
          .typeError('Введите дату в формате ДД.ММ.ГГГГ')
          .when('issued_date', {
            is: (value) => value.toString().includes('GMT'),
            then: () =>
              yup
                .date()
                .typeError('Введите дату в формате ДД.ММ.ГГГГ')
                .required('Введите дату в формате ДД.ММ.ГГГГ')
                .min(
                  yup.ref('issued_date'),
                  ({ min }) =>
                    `Дата истечения срока не должна быть ранее ${trasnformDate(
                      min
                    )}`
                ),
          }),
      })
    ),
  })
  .required();
