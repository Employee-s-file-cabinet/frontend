/* eslint-disable no-console */
import './CurrentDataForm.scss';
import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CurrentDataFormValidationSchema } from '../../utils/validation/CurrentDataFormValidation';

import CurrentDFFinance from '../CurrentDFFinance/CurrentDFFinance';
import CurrentDFVacation from '../CurrentDFVacation/CurrentDFVacation';
import CurrentDFTraining from '../CurrentDFTraining/CurrentDFTraining';
import CurrentDFBriefing from '../CurrentDFBriefing/CurrentDFBriefing';
import CurrentDFOptionally from '../CurrentDFOptionally/CurrentDFOptionally';

export default function CurrentDataForm() {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      employmentContract: '',
      employmentContractDateBeg: '2020-01-01',
      employmentContractDateEnd: '2020-01-01',
      employmentCost: 0,
      careerFieldSet: [
        {
          employeePosition: '',
          employeePositionDateBeg: '2020-01-01',
          employeePositionDateEnd: '2020-01-01',
        },
      ],
    },
    resolver: yupResolver(CurrentDataFormValidationSchema),
    mode: 'onChange',
  });

  const [isEdit, setIsEdit] = useState(false);

  function handleEditButton() {
    setIsEdit(true);
  }

  function onSubmit(data) {
    console.log('data = ', data);
    setIsEdit(false);
  }

  return (
    <form
      className="current-data-form form-active"
      onSubmit={handleSubmit((data) => onSubmit(data))}
      noValidate
    >
      <input
        className={`current-data-form__button${
          isEdit ? ' button-disabled' : ''
        }`}
        type="button"
        onClick={handleEditButton}
      />
      <CurrentDFFinance
        isEdit={isEdit}
        errors={errors}
        register={register}
        getValues={getValues}
        setValue={setValue}
        control={control}
        watch={watch}
        reset={reset}
      />
      <CurrentDFVacation isEdit={isEdit} />
      <CurrentDFTraining isEdit={isEdit} />
      <CurrentDFBriefing isEdit={isEdit} />
      <CurrentDFOptionally isEdit={isEdit} />
      <div className="buttons-group">
        <button className={` button-save${!isEdit ? ' button-disabled' : ''}`}>
          Сохранить
        </button>
        <button
          className={` button-reset${!isEdit ? ' button-disabled' : ''}`}
          type="button"
        >
          Сбросить изменения
        </button>
      </div>
    </form>
  );
}
