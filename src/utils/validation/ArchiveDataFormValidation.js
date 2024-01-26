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
        .min(
          'Jan 1 1900',
          'Дата начала работы не должна быть раньше 01.01.1900'
        )
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
        .min(
          'Jan 1 1900',
          'Дата начала работы не должна быть раньше 01.01.1900'
        )
        .max(
          Date(),
          `Дата начала не должна быть позднее ${trasnformDate(Date())}`
        ),
    })
  ),
  marriage: yup.object({
    status: yup.string().oneOf(['Да', 'Нет']).required(),
    certificate: yup.string().when('status', {
      is: (value) => value.includes('Да'),
      then: () => yup.string(),
    }),
    has_scan: yup.boolean().notRequired(),
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
  }),
});
