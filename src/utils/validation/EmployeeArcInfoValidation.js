import * as yup from 'yup';
import { requiredFieldError } from '../constants';

function formatDate(date) {
  return new Date(date).toLocaleDateString().replaceAll('/', '.');
}

export const EmployeeArcInfoValidationSchema = yup.object().shape({
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
          `Дата начала не должна быть позднее ${formatDate(Date())}`
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
                  `Дата окончания не должна быть ранее ${formatDate(min)}`
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
          `Дата начала не должна быть позднее ${formatDate(Date())}`
        ),
    })
  ),
});
