import * as yup from 'yup';
import { requiredFieldError } from '../constants';
import trasnformDate from './transformDate';

export const ArchiveDataFormValidationSchema = yup.object().shape({
  priorWorkExperienceFieldSet: yup.array().of(
    yup.object({
      companyName: yup
        .string()
        .required(requiredFieldError)
        .min(2, 'Минимальное кол-во символов 2')
        .max(60, 'Максимальное кол-во символов 60'),
      position: yup
        .string()
        .required(requiredFieldError)
        .min(2, 'Минимальное кол-во символов 2')
        .max(70, 'Максимальное кол-во символов 70'),
      beginDate: yup
        .date('Введите дату в формате ДД.ММ.ГГГГ')
        .typeError('Введите дату в формате ДД.ММ.ГГГГ')
        .required('Введите дату в формате ДД.ММ.ГГГГ')
        .min('Jan 1 1900', 'Дата начала работы не должна быть ранее 01.01.1900')
        .max(
          Date(),
          `Дата начала не должна быть позднее ${trasnformDate(Date())}`
        ),
      endDate: yup
        .date()
        .typeError('Введите дату в формате ДД.ММ.ГГГГ')
        .when('beginDate', {
          is: (value) => value.toString().includes('GMT'),
          then: () =>
            yup
              .date()
              .typeError('Введите дату в формате ДД.ММ.ГГГГ')
              .required('Введите дату в формате ДД.ММ.ГГГГ')
              .min(
                yup.ref('beginDate'),
                ({ min }) =>
                  `Дата окончания не должна быть ранее ${trasnformDate(min)}`
              ),
        }),
      jobDescription: yup
        .string()
        .notRequired()
        .min(10, 'Минимальное кол-во символов 10')
        .max(200, 'Максимальное кол-во символов 200'),
    })
  ),
  awardsFieldSet: yup.array().of(
    yup.object({
      awardTitle: yup
        .string()
        .required(requiredFieldError)
        .min(2, 'Минимальное кол-во символов 2')
        .max(70, 'Максимальное кол-во символов 70'),
      awardDate: yup
        .date('Введите дату в формате ДД.ММ.ГГГГ')
        .typeError('Введите дату в формате ДД.ММ.ГГГГ')
        .required('Введите дату в формате ДД.ММ.ГГГГ')
        .min('Jan 1 1900', 'Дата начала работы не должна быть ранее 01.01.1900')
        .max(
          Date(),
          `Дата начала не должна быть позднее ${trasnformDate(Date())}`
        ),
    })
  ),
  marriage: yup.object({
    status: yup.string().oneOf(['Да', 'Нет']).required(requiredFieldError),
    certificate: yup.string().when('status', {
      is: (value) => value.includes('Да'),
      then: () =>
        yup
          .string()
          .required(requiredFieldError)
          .min(5, 'Введите номер свидетельства в формате "I-XX № 123456"'),
      otherwise: () => yup.string().notRequired(),
    }),
    has_scan: yup.boolean().notRequired(),
    scan: yup.lazy((value) => {
      if (value) {
        return value.length !== 0 && value.length !== undefined
          ? yup
              .mixed()
              .test(
                'fileSize',
                'Размер файла превышает 5 Мб.',
                (file) => file[0]?.size <= 5242880
              )
          : yup.mixed().notRequired();
      }
      return yup.mixed().notRequired();
    }),
  }),
  spouse: yup.object().when('marriage.status', {
    is: (value) => value.includes('Да'),
    then: () =>
      yup.object({
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
        date_of_birth: yup
          .date()
          .typeError('Введите дату в формате ДД.ММ.ГГГГ')
          .required(requiredFieldError)
          .min('Jan 1 1900', 'Дата рождения не должна быть ранее 01.01.1900')
          .max(
            new Date(new Date() - new Date(567993600000)),
            `Дата рождения не должна быть позже ${trasnformDate(
              new Date(new Date() - new Date(567993600000))
            )}`
          ),
        is_employee: yup
          .string()
          .oneOf(['Да', 'Нет'])
          .required(requiredFieldError),
        department: yup.string().required(requiredFieldError),
        position: yup.string().required(requiredFieldError),
        occupation: yup
          .string()
          .notRequired()
          .matches(
            /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[- ][а-яёА-ЯЁ]+)*$/,
            'Используйте кириллицу, дефис'
          ),
      }),
  }),
  children: yup.array().of(
    yup.object({
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
      date_of_birth: yup
        .date()
        .typeError('Введите дату в формате ДД.ММ.ГГГГ')
        .required(requiredFieldError)
        .min(
          new Date(new Date() - new Date(567993600000)),
          `Дата рождения не должна быть ранее ${trasnformDate(
            new Date(new Date() - new Date(567993600000))
          )}`
        )
        .max(
          Date(),
          `Дата рождения не должна быть позднее ${trasnformDate(Date())}`
        ),
      has_scan: yup.boolean().notRequired(),
      scan: yup.lazy((value) => {
        if (value) {
          return value.length !== 0 && value.length !== undefined
            ? yup
                .mixed()
                .test(
                  'fileSize',
                  'Размер файла превышает 5 Мб.',
                  (file) => file[0]?.size <= 5242880
                )
            : yup.mixed().notRequired();
        }
        return yup.mixed().notRequired();
      }),
    })
  ),
  father: yup
    .object({
      last_name: yup
        .string()
        .matches(
          /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/,
          'Используйте кириллицу, дефис и(или) апостроф.'
        ),
      first_name: yup
        .string()
        .matches(
          /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/,
          'Используйте кириллицу, дефис и(или) апостроф.'
        ),
      middle_name: yup
        .string()
        .matches(/^(?=.{1,150}$)[а-яёА-ЯЁ]*$/, 'Используйте кириллицу.'),
      date_of_birth: yup
        .date()
        .typeError('Введите дату в формате ДД.ММ.ГГГГ')
        .min('Jan 1 1900', 'Дата рождения не должна быть ранее 01.01.1900')
        .max(
          new Date(new Date() - new Date(567993600000)),
          `Дата рождения не должна быть позже ${trasnformDate(
            new Date(new Date() - new Date(567993600000))
          )}`
        ),
      is_employee: yup.string().oneOf(['Да', 'Нет']),
      department: yup.string(),
      position: yup.string(),
      occupation: yup
        .string()
        .notRequired()
        .matches(
          /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[- ][а-яёА-ЯЁ]+)*$/,
          'Используйте кириллицу, дефис'
        ),
    })
    .notRequired(),
  mother: yup
    .object({
      last_name: yup
        .string()
        .matches(
          /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/,
          'Используйте кириллицу, дефис и(или) апостроф.'
        ),
      first_name: yup
        .string()
        .matches(
          /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/,
          'Используйте кириллицу, дефис и(или) апостроф.'
        ),
      middle_name: yup
        .string()
        .matches(/^(?=.{1,150}$)[а-яёА-ЯЁ]*$/, 'Используйте кириллицу.'),
      date_of_birth: yup
        .date()
        .typeError('Введите дату в формате ДД.ММ.ГГГГ')
        .min('Jan 1 1900', 'Дата рождения не должна быть ранее 01.01.1900')
        .max(
          new Date(new Date() - new Date(567993600000)),
          `Дата рождения не должна быть позже ${trasnformDate(
            new Date(new Date() - new Date(567993600000))
          )}`
        ),
      is_employee: yup.string().oneOf(['Да', 'Нет']),
      department: yup.string(),
      position: yup.string(),
      occupation: yup
        .string()
        .notRequired()
        .matches(
          /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[- ][а-яёА-ЯЁ]+)*$/,
          'Используйте кириллицу, дефис'
        ),
    })
    .notRequired(),
  education: yup.array().of(
    yup.object({
      degree: yup
        .string()
        .required(requiredFieldError)
        .oneOf([
          'Среднее',
          'Среднее профессиональное',
          'Высшее',
          'Бакалавриат',
          'Специалитет/магистратура',
        ]),
      issued_institution: yup
        .string()
        .notRequired()
        .matches(
          /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[-"'. ][а-яёА-ЯЁ]+)*$/,
          'Используйте кириллицу, дефис, кавычки, точку и запятую'
        ),
      specialty: yup
        .string()
        .notRequired()
        .matches(
          /^(?=.{1,150}$)[а-яёА-ЯЁ]+(?:[- ][а-яёА-ЯЁ]+)*$/,
          'Используйте кириллицу, дефис'
        ),
      date_from: yup
        .date('Введите дату в формате ДД.ММ.ГГГГ')
        .typeError('Введите дату в формате ДД.ММ.ГГГГ')
        .required('Введите дату в формате ДД.ММ.ГГГГ')
        .min('Jan 1 1900', 'Дата поступления не должна быть ранее 01.01.1900')
        .max(
          Date(),
          `Дата поступления не должна быть позднее ${trasnformDate(Date())}`
        ),
      date_to: yup
        .date()
        .typeError('Введите дату в формате ДД.ММ.ГГГГ')
        .when('date_from', {
          is: (value) => value.toString().includes('GMT'),
          then: () =>
            yup
              .date()
              .typeError('Введите дату в формате ДД.ММ.ГГГГ')
              .required('Введите дату в формате ДД.ММ.ГГГГ')
              .min(
                yup.ref('date_from'),
                ({ min }) =>
                  `Дата окончания не должна быть ранее ${trasnformDate(min)}`
              ),
        }),
      number: yup
        .string()
        .required(requiredFieldError)
        .min(3, 'Минимальное кол-во символов 3')
        .max(20, 'Максимальное кол-во символов 20'),
      has_scan: yup.boolean().notRequired(),
      scan: yup.lazy((value) => {
        if (value) {
          return value.length !== 0 && value.length !== undefined
            ? yup
                .mixed()
                .test(
                  'fileSize',
                  'Размер файла превышает 5 Мб.',
                  (file) => file[0]?.size <= 5242880
                )
            : yup.mixed().notRequired();
        }
        return yup.mixed().notRequired();
      }),
    })
  ),
});
