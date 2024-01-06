/* eslint-disable react/jsx-curly-brace-presence */ // uses to wrap Controller by curly brace
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Icon } from '../UI/Icons/Icons';
import ProfilePic from '../../assets/images/profile.jpg';
import { EmployeeProfileSchema } from '../../utils/validation/EmployeeProfileValidation';
import './ProfileInfo.scss';

function ProfileInfo() {
  const [isEdit, setIsEdit] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmployeeProfileSchema),
    mode: 'onChange',
  });

  const VisuallyHiddenInput = styled('input')({
    width: 200,
  });

  function transformPhone(number) {
    if (number.includes('+')) {
      return number;
    }
    return `+${number}`;
  }

  function onSubmit(data) {
    // eslint-disable-next-line no-console
    console.log(data);
    setIsEdit(false);
  }

  return (
    <section className="profile">
      <h2 className="title is-2 profile__title">Исаева Полина Артёмовна</h2>
      <div className="profile__container">
        <div className="profile__image-container">
          <img className="profile__image" alt="Логотип" src={ProfilePic} />
          {isEdit && (
            <div className="profile__file">
              <Button component="label">
                <div className="profile__file-title">Загрузить фото</div>
                <VisuallyHiddenInput type="file" />
              </Button>
            </div>
          )}
        </div>
        <form
          className="profile__form"
          id="submit"
          name="profile"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="profile__columns">
            <div className="profile__column">
              <div className="profile__input-container">
                <label className="profile__input-label" htmlFor="lastName">
                  Фамилия
                  <input
                    {...register('lastName')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    }`}
                    type="text"
                    placeholder="Фамилия"
                    defaultValue="Исаева"
                    disabled={!isEdit}
                  />
                </label>
                <span className="profile__input-error">
                  {errors.lastName?.message}
                </span>
              </div>
              <div className="profile__input-container">
                <label className="profile__input-label" htmlFor="firstName">
                  Имя
                  <input
                    {...register('firstName')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    }`}
                    type="text"
                    placeholder="Имя"
                    defaultValue="Полина"
                    disabled={!isEdit}
                  />
                </label>
                <span className="profile__input-error">
                  {errors.firstName?.message}
                </span>
              </div>
              <div className="profile__input-container">
                <label className="profile__input-label" htmlFor="middleName">
                  Отчество
                  <input
                    {...register('middleName')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    }`}
                    type="text"
                    placeholder="Отчество"
                    defaultValue="Артемовна"
                    disabled={!isEdit}
                  />
                </label>
                {isEdit && (
                  <span className="profile__input-error profile__input-error_margin_custom">
                    {errors.middleName?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="profile__column">
              <div className="profile__input-container">
                <label className="profile__input-label" htmlFor="department">
                  Отдел
                  <input
                    {...register('department')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    }`}
                    type="text"
                    placeholder="Отдел"
                    defaultValue="Кадры"
                    disabled={!isEdit}
                  />
                </label>
                <span className="profile__input-error">
                  {errors.department?.message}
                </span>
              </div>
              <div className="profile__input-container">
                <label className="profile__input-label" htmlFor="jobTitle">
                  Должность
                  <input
                    {...register('jobTitle')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    }`}
                    type="text"
                    placeholder="Должность"
                    defaultValue="Менеджер"
                    disabled={!isEdit}
                  />
                </label>
                <span className="profile__input-error">
                  {errors.jobTitle?.message}
                </span>
              </div>
              <div className="profile__input-container">
                <label className="profile__input-label" htmlFor="grade">
                  Грейд
                  <input
                    {...register('grade')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    }`}
                    type="text"
                    placeholder="Грейд"
                    defaultValue="4"
                    disabled={!isEdit}
                  />
                </label>
                {isEdit && (
                  <span className="profile__input-error profile__input-error_margin_custom">
                    {errors.grade?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="profile__column">
              <div className="profile__input-container">
                <label className="profile__input-label" htmlFor="mobileNumber">
                  Мобильный телефон
                  {
                    <Controller
                      render={({ field }) => (
                        <input
                          {...field}
                          className={`profile__input ${
                            !isEdit && 'profile__input_type_disabled'
                          }`}
                          type="text"
                          placeholder="Мобильный телефон"
                          onChange={(e) =>
                            field.onChange(transformPhone(e.target.value))
                          }
                          disabled={!isEdit}
                        />
                      )}
                      name="mobileNumber"
                      control={control}
                      defaultValue="+79991112233"
                    />
                  }
                </label>
                <span className="profile__input-error">
                  {errors.mobileNumber?.message}
                </span>
              </div>
              <div className="profile__input-container">
                <label className="profile__input-label" htmlFor="extNumber">
                  Внутренний номер
                  <input
                    {...register('extNumber')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    }`}
                    type="text"
                    placeholder="Внутренний номер"
                    defaultValue="33-33"
                    disabled={!isEdit}
                  />
                </label>
                <span className="profile__input-error">
                  {errors.extNumber?.message}
                </span>
              </div>
              <div className="profile__input-container">
                <label className="profile__input-label" htmlFor="email">
                  E-mail
                  <input
                    {...register('email')}
                    className={`profile__input profile__input_no-capital-letter ${
                      !isEdit && 'profile__input_type_disabled'
                    }`}
                    type="email"
                    placeholder="E-mail"
                    defaultValue="isaevaPA@company.com"
                    disabled={!isEdit}
                  />
                </label>
                {isEdit && (
                  <span className="profile__input-error profile__input-error_margin_custom">
                    {errors.email?.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          {isEdit && (
            <div className="profile__buttons">
              <button className="profile__button button is-primary">
                Сохранить
              </button>
              <button className="profile__button button is-primary is-light">
                Сбросить изменения
              </button>
            </div>
          )}
        </form>
        <div className="profile__button-edit">
          {!isEdit && (
            <Icon
              icon="fa-pen-to-square"
              size="is-small"
              onClick={() => setIsEdit(true)}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default ProfileInfo;
