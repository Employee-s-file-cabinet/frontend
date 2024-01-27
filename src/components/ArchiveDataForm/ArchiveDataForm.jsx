/* eslint-disable no-unused-vars */
import './ArchiveDataForm.scss';
import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArchiveDataFormValidationSchema } from '../../utils/validation/ArchiveDataFormValidation';
import ArhPriorWork from '../ArhPriorWork/ArhPriorWork';
import ArhFamily from '../ArhFamily/ArhFamily';
import ArhEducation from '../ArhEducation/ArhEducation';
import ArhMilitaryRegistration from '../ArhMilitaryRegistration/ArhMilitaryRegistration';
import { Icon } from '../UI/Icons/Icons';

let counter = 0;

export default function ArchiveDataForm() {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    watch,
    reset,
    resetField,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues: {
      priorWorkExperienceFieldSet: [
        {
          companyName: 'Рeкрутинг Рус',
          position: 'Менеджер',
          beginDate: '1999-12-31',
          endDate: '2000-12-31',
          jobDescription: 'Счастье, радость он приносит людям',
        },
      ],
      awardsFieldSet: [
        {
          awardTitle: 'Совесть компании',
          awardDate: '2000-12-31',
        },
      ],
      marriage: {
        status: 'Да',
        certificate: 'I-МЮ № 111789',
        has_scan: true,
        scan: {},
        scan_name: 'marriage_cert.pdf',
      },
      spouse: {
        last_name: 'Смирнов',
        first_name: 'Андрей',
        middle_name: 'Владиленович',
        date_of_birth: '1989-02-24',
        is_employee: 'Да',
        department: 'Финансовый',
        position: 'Помощник директора',
        occupation: 'Биолог',
      },
    },
    resolver: yupResolver(ArchiveDataFormValidationSchema),
    mode: 'onChange',
  });
  const [isEdit, setIsEdit] = useState(false);

  function handleEditButton() {
    setIsEdit(true);
  }
  const onReset = () => {
    reset(undefined, { keepDirtyValues: false });
    setIsEdit(false);
  };

  function onSubmit(data) {
    // eslint-disable-next-line no-console
    console.log(data);
    reset(undefined, { keepValues: true });
    setIsEdit(false);
  }

  // eslint-disable-next-line no-plusplus
  counter++;

  // console.log(isValid);

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="archive-data-form form-active"
    >
      {!isEdit && (
        <div className="archive-data-form__button">
          <Icon
            icon="fa-pen-to-square"
            size="is-small"
            onClick={() => handleEditButton()}
          />
        </div>
      )}
      <span>{counter}</span>
      <ArhPriorWork
        isEdit={isEdit}
        errors={errors}
        register={register}
        control={control}
      />
      <ArhFamily
        isEdit={isEdit}
        errors={errors}
        register={register}
        getValues={getValues}
        watch={watch}
        reset={reset}
        resetField={resetField}
        setValue={setValue}
      />
      <ArhEducation isEdit={isEdit} />
      <ArhMilitaryRegistration isEdit={isEdit} />
      <div className="buttons-group">
        <button
          className={`button-save${!isEdit ? ' button-disabled' : ''}`}
          type="submit"
          disabled={!isValid || !isDirty}
        >
          Сохранить
        </button>
        {isDirty ? (
          <button
            type="button"
            className={` button-reset${!isEdit ? ' button-disabled' : ''}`}
            disabled={!isDirty}
            onClick={onReset}
          >
            Сбросить изменения
          </button>
        ) : (
          <button
            type="button"
            className={` button-reset${!isEdit ? ' button-disabled' : ''}`}
            onClick={() => setIsEdit(false)}
          >
            Отмена
          </button>
        )}
      </div>
    </form>
  );
}
