import './ArchiveDataForm.scss';
import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { EmployeeArcInfoValidationSchema } from '../../utils/validation/EmployeeArcInfoValidation';

import ArhPriorWork from '../ArhPriorWork/ArhPriorWork';
import ArhFamily from '../ArhFamily/ArhFamily';
import ArhEducation from '../ArhEducation/ArhEducation';
import ArhMilitaryRegistration from '../ArhMilitaryRegistration/ArhMilitaryRegistration';

export default function ArchiveDataForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      priorWorkExperienceFieldSet: [
        {
          companyName: 'Рeкрутинг Рус',
          position: 'Менеджер',
          beginDate: '',
          endDate: '',
          jobDescription: 'Счастье, радость он приносит людям',
        },
      ],
      awardsFieldSet: [
        {
          awardTitle: '',
          awardDate: '',
        },
      ],
    },
    resolver: yupResolver(EmployeeArcInfoValidationSchema),
    mode: 'onChange',
  });
  const [isEdit, setIsEdit] = useState(false);

  function handleEditButton() {
    setIsEdit(true);
  }

  function onSubmit(data) {
    // eslint-disable-next-line no-console
    console.log(data);
    setIsEdit(false);
  }

  return (
    <form
      action="#"
      method="post"
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="archive-data-form form-active"
    >
      <input
        className={`archive-data-form__button${
          isEdit ? ' button-disabled' : ''
        }`}
        type="button"
        onClick={handleEditButton}
      />

      <ArhPriorWork
        isEdit={isEdit}
        errors={errors}
        register={register}
        control={control}
      />
      <ArhFamily isEdit={isEdit} />
      <ArhEducation isEdit={isEdit} />
      <ArhMilitaryRegistration isEdit={isEdit} />

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
