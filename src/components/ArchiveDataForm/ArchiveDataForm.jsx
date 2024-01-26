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

export default function ArchiveDataForm() {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors },
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
        certificate: 'ОАЬД112121212',
        has_scan: true,
        scan: '',
        scan_name: 'marriage_cert.pdf',
      },
    },
    resolver: yupResolver(ArchiveDataFormValidationSchema),
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
      {!isEdit && (
        <div className="archive-data-form__button">
          <Icon
            icon="fa-pen-to-square"
            size="is-small"
            onClick={() => handleEditButton()}
          />
        </div>
      )}
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
      />
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
