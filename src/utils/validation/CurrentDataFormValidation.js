import * as yup from 'yup';
import { requiredFieldError } from '../constants';

export const CurrentDataFormValidationSchema = yup
  .object()
  .shape({
    employmentContract: yup.string().required(requiredFieldError),
    employmentContractDateBeg: yup
      .date()
      .typeError('Введите дату в формате ДД.ММ.ГГГГ')
      .required(requiredFieldError)
      .min('Jan 1 1900', 'Дата не должна быть раньше 01.01.1900'),
    employmentContractDateEnd: yup
      .date('Введите дату в формате ДД.ММ.ГГГГ')
      .typeError('Введите дату в формате ДД.ММ.ГГГГ')
      .required(requiredFieldError),
    employmentCost: yup.string().required(requiredFieldError),

    careerFieldSet: yup.array().of(
      yup.object({
        employeePosition: yup
          .string()
          .required(requiredFieldError)
          .min(2, 'Минимальное кол-во символов 2')
          .max(70, 'Максимальное кол-во символов 70'),
        employeePositionDateBeg: yup
          .date('Введите дату в формате ДД.ММ.ГГГГ')
          .typeError('Введите дату в формате ДД.ММ.ГГГГ')
          .required('Введите дату в формате ДД.ММ.ГГГГ')
          .min(
            'Jan 1 1900',
            'Дата начала работы не должна быть раньше 01.01.1900'
          ),
        employeePositionDateEnd: yup
          .date('Введите дату в формате ДД.ММ.ГГГГ')
          .typeError('Введите дату в формате ДД.ММ.ГГГГ')
          .required('Введите дату в формате ДД.ММ.ГГГГ')
          .min(
            'Jan 1 1900',
            'Дата начала работы не должна быть раньше 01.01.1900'
          ),
      })
    ),
  })
  .required();
