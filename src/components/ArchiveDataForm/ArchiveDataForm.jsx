/* eslint-disable no-unused-vars */
import './ArchiveDataForm.scss';
import 'bulma/css/bulma.min.css';
import { useState, useEffect } from 'react';
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
    watch,
    reset,
    resetField,
    setValue,
    formState: { errors, isValid, isDirty, isTouched },
  } = useForm({
    // defaultValues: {
    //   priorWorkExperienceFieldSet: [
    //     {
    //       companyName: 'Рeкрутинг Рус',
    //       position: 'Менеджер',
    //       beginDate: '1999-12-31',
    //       endDate: '2000-12-31',
    //       jobDescription: 'Счастье, радость он приносит людям',
    //     },
    //   ],
    //   awardsFieldSet: [
    //     {
    //       awardTitle: 'Совесть компании',
    //       awardDate: '2000-12-31',
    //     },
    //   ],
    //   marriage: {
    //     status: 'Да',
    //     certificate: 'I-МЮ № 111789',
    //     has_scan: true,
    //     scan: {},
    //     scan_name: 'marriage_cert.pdf',
    //   },
    //   spouse: {
    //     last_name: 'Смирнов',
    //     first_name: 'Андрей',
    //     middle_name: 'Владиленович',
    //     date_of_birth: '1989-02-24',
    //     is_employee: 'Да',
    //     department: 'Финансовый',
    //     position: 'Помощник директора',
    //     occupation: 'Биолог',
    //   },
    //   children: [
    //     {
    //       last_name: 'Ключникова',
    //       first_name: 'Маргарита',
    //       middle_name: 'Анатольевна',
    //       date_of_birth: '2021-07-17',
    //       birth_certificate: '123123123',
    //       has_scan: true,
    //       scan: {},
    //       scan_name: 'birth_certificate.png',
    //     },
    //     {
    //       last_name: 'Моськин',
    //       first_name: 'Геннадий',
    //       middle_name: 'Семенович',
    //       date_of_birth: '2009-05-01',
    //       birth_certificate: '456456456',
    //       has_scan: true,
    //       scan: {},
    //       scan_name: 'birth_certificate1.png',
    //     },
    //   ],
    //   father: {
    //     last_name: 'Криворучко',
    //     first_name: 'Кирилл',
    //     middle_name: 'Игоревич',
    //     date_of_birth: '1961-12-12',
    //     is_employee: 'Да',
    //     department: 'Доставка',
    //     position: 'Курьер',
    //     occupation: 'Художник',
    //   },
    //   mother: {
    //     last_name: 'Криворучко',
    //     first_name: 'Анна',
    //     middle_name: 'Сергеевна',
    //     date_of_birth: '1963-07-18',
    //     is_employee: 'Нет',
    //     department: 'Финансовый',
    //     position: 'Помощник директора',
    //     occupation: 'Кинокритик',
    //   },
    //   education: [
    //     {
    //       date_from: '2015-09-01',
    //       date_to: '2020-07-12',
    //       degree: 'Высшее',
    //       speciality: 'Филолог',
    //       issued_institution: 'МГУ',
    //       number: '123123123',
    //       has_scan: true,
    //       scan: {},
    //       scan_name: 'diploma.png',
    //     },
    //   ],
    //   military: {
    //     status: 'Да',
    //     category: 'Б',
    //     speciality: '879962',
    //     rank: 'Рядовой',
    //     number: ' АС № 1112233',
    //     has_scan: true,
    //     scan: {},
    //     scan_name: 'military.png',
    //     commissariat: 'Доп. информация про военкомат',
    //   },
    // },
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

  useEffect(() => {
    reset({
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
      children: [
        {
          last_name: 'Ключникова',
          first_name: 'Маргарита',
          middle_name: 'Анатольевна',
          date_of_birth: '2021-07-17',
          birth_certificate: '123123123',
          has_scan: true,
          scan: {},
          scan_name: 'birth_certificate.png',
        },
        {
          last_name: 'Моськин',
          first_name: 'Геннадий',
          middle_name: 'Семенович',
          date_of_birth: '2009-05-01',
          birth_certificate: '456456456',
          has_scan: true,
          scan: {},
          scan_name: 'birth_certificate1.png',
        },
      ],
      father: {
        last_name: 'Криворучко',
        first_name: 'Кирилл',
        middle_name: 'Игоревич',
        date_of_birth: '1961-12-12',
        is_employee: 'Да',
        department: 'Доставка',
        position: 'Курьер',
        occupation: 'Художник',
      },
      mother: {
        last_name: 'Криворучко',
        first_name: 'Анна',
        middle_name: 'Сергеевна',
        date_of_birth: '1963-07-18',
        is_employee: 'Нет',
        department: 'Финансовый',
        position: 'Помощник директора',
        occupation: 'Кинокритик',
      },
      education: [
        {
          date_from: '2015-09-01',
          date_to: '2020-07-12',
          degree: 'Высшее',
          speciality: 'Филолог',
          issued_institution: 'МГУ',
          number: '123123123',
          has_scan: true,
          scan: {},
          scan_name: 'diploma.png',
        },
      ],
      military: {
        status: 'Да',
        category: 'Б',
        speciality: '879962',
        rank: 'Рядовой',
        number: ' АС № 1112233',
        has_scan: true,
        scan: {},
        scan_name: 'military.png',
        commissariat: 'Доп. информация про военкомат',
      },
    });
  }, [reset]);

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
        control={control}
      />
      <ArhEducation
        isEdit={isEdit}
        errors={errors}
        register={register}
        control={control}
        getValues={getValues}
        watch={watch}
      />
      <ArhMilitaryRegistration
        isEdit={isEdit}
        errors={errors}
        register={register}
        getValues={getValues}
        watch={watch}
        reset={reset}
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
