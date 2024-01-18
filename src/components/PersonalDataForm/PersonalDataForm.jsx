/* eslint-disable no-unused-vars */
import './PersonalDataForm.scss';
import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PersonalDataFormValidationSchema } from '../../utils/validation/PersonalDataFormValidation';
import PersonalDFOpenData from '../PersonalDFOpenData/PersonalDFOpenData';
import PersonalDFPassportData from '../PersonalDFPassportData/PersonalDFPassportData';
import PersonalDForeignEmployeetData from '../PersonalDForeignEmployeetData/PersonalDForeignEmployeetData';
import PersonalDOtherDocumentstData from '../PersonalDOtherDocumentstData/PersonalDOtherDocumentstData';

export default function PersonalDataForm() {
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date_of_birth: '1981-01-01',
      place_of_birth: 'г. Норильск',
      gender: 'Женский',
      registration_address: 'Россия, г. Москва, Остоженка ул., д.15, кв.25',
      residential_address: 'Россия, г. Москва, Мосфильмовская ул., д.11, кв.42',
      personalDFPassportCitizenshipFieldSet: [
        {
          citizenship: 'РФ',
          number: '1122303909',
          issued_date: '2001-12-12',
          issued_by: 'РОВД ПЛАНЕТЫ МАРС',
          department_code: '111-222',
          scan: false,
        },
      ],
      personalDFPassportForeignFieldSet: [
        {
          number: '7512347878',
          issued_date: '2024-01-16',
          expired: '2024-01-18',
        },
      ],
      personalDFPassportVisaFieldSet: [
        {
          issued_by: 'США',
          category: 'B-1',
          issued_date: '2024-01-16',
          expired: '2024-01-18',
        },
      ],
    },
    resolver: yupResolver(PersonalDataFormValidationSchema),
    mode: 'onChange',
  });

  function handleEditButton() {
    setIsEdit(true);
  }

  function onSubmit(data) {
    // eslint-disable-next-line no-console
    console.log(data);
    setIsEdit(false);
  }

  console.log(errors);

  return (
    <form
      action="#"
      method="post"
      className="personal-data-form form-active"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <input
        className={`personal-data-form__button${
          isEdit ? ' button-disabled' : ''
        }`}
        type="button"
        onClick={handleEditButton}
      />

      <PersonalDFOpenData
        isEdit={isEdit}
        errors={errors}
        register={register}
        getValues={getValues}
        setValue={setValue}
        watch={watch}
      />
      <PersonalDFPassportData
        isEdit={isEdit}
        errors={errors}
        register={register}
        control={control}
      />
      <PersonalDForeignEmployeetData
        isEdit={isEdit}
        errors={errors}
        register={register}
        control={control}
      />
      <PersonalDOtherDocumentstData isEdit={isEdit} />

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
