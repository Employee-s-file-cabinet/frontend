import './PersonalDataForm.scss';
import 'bulma/css/bulma.min.css';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PersonalDataFormValidationSchema } from '../../utils/validation/PersonalDataFormValidation';
import PersonalDFOpenData from '../PersonalDFOpenData/PersonalDFOpenData';
import PersonalDFPassportData from '../PersonalDFPassportData/PersonalDFPassportData';
import PersonalDForeignEmployeetData from '../PersonalDForeignEmployeetData/PersonalDForeignEmployeetData';
import PersonalDOtherDocumentstData from '../PersonalDOtherDocumentstData/PersonalDOtherDocumentstData';
import { Icon } from '../UI/Icons/Icons';

export default function PersonalDataForm() {
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    reset,
    formState: { errors, isValid, isDirty },
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
          has_scan: true,
          scan: '',
          scan_name: 'passport.pdf',
        },
      ],
      personalDFPassportForeignFieldSet: [
        {
          number: '751234787',
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
      personalDForeignEmployeeWorkVisaFieldSet: [
        {
          number: '001112233',
          category: 'Однократная',
          issued_date: '2024-01-16',
          expired: '2024-01-18',
        },
      ],
      personalDForeignEmployeeWorkPermitFieldSet: [
        {
          number: '770033117744',
          issued_date: '2024-01-16',
          expired: '2024-01-18',
        },
      ],
      taxpayer: {
        number: '771234345656',
        has_scan: true,
        scan: '',
        scan_name: 'inn.png',
      },
      insurance: {
        number: '253-333-671 00',
        scan: '',
        has_scan: true,
        scan_name: 'snils.png',
      },
      agreement: {
        has_scan: true,
        scan: '',
        scan_name: 'test.png',
      },
    },
    resolver: yupResolver(PersonalDataFormValidationSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    reset(undefined, { keepDirtyValues: false });
  }, [reset]);

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

  return (
    <form
      className="personal-data-form form-active"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      {!isEdit && (
        <div className="personal-data-form__button">
          <Icon
            icon="fa-pen-to-square"
            size="is-small"
            onClick={() => handleEditButton()}
          />
        </div>
      )}
      <PersonalDFOpenData
        isEdit={isEdit}
        errors={errors}
        register={register}
        getValues={getValues}
        setValue={setValue}
        watch={watch}
        reset={onReset}
      />
      <PersonalDFPassportData
        isEdit={isEdit}
        errors={errors}
        register={register}
        control={control}
        getValues={getValues}
      />
      <PersonalDForeignEmployeetData
        isEdit={isEdit}
        errors={errors}
        register={register}
        control={control}
      />
      <PersonalDOtherDocumentstData
        isEdit={isEdit}
        errors={errors}
        register={register}
        getValues={getValues}
      />
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
