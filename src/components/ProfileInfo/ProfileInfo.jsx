import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Icon } from '../UI/Icons/Icons';
import ProfilePic from '../../assets/images/profile.jpg';
import './ProfileInfo.scss';

function ProfileInfo() {
  const [isEdit, setIsEdit] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm();

  const VisuallyHiddenInput = styled('input')({
    width: 0,
  });

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
        <form className="profile__form" id="submit" name="profile">
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
                    minLength="2"
                    maxLength="150"
                    placeholder="Фамилия"
                    value="Исаева"
                    disabled={!isEdit}
                    required
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
                    minLength="2"
                    maxLength="150"
                    placeholder="Имя"
                    value="Полина"
                    disabled={!isEdit}
                    required
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
                    minLength="2"
                    maxLength="150"
                    placeholder="Отчество"
                    value="Артемовна"
                    disabled={!isEdit}
                    required
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
                    minLength="2"
                    maxLength="150"
                    placeholder="Отдел"
                    value="Кадры"
                    disabled={!isEdit}
                    required
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
                    minLength="2"
                    maxLength="150"
                    placeholder="Должность"
                    value="HR-менеджер"
                    disabled={!isEdit}
                    required
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
                    minLength="2"
                    maxLength="150"
                    placeholder="Грейд"
                    value="4"
                    disabled={!isEdit}
                    required
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
                <label className="profile__input-label" htmlFor="mobileNumber">
                  Мобильный телефон
                  <input
                    {...register('mobileNumber')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    }`}
                    type="text"
                    minLength="2"
                    maxLength="150"
                    placeholder="Мобильный телефон"
                    value="+79991000203"
                    disabled={!isEdit}
                    required
                  />
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
                    minLength="2"
                    maxLength="150"
                    placeholder="Внутренний номер"
                    value="33-33"
                    disabled={!isEdit}
                    required
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
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    }`}
                    type="email"
                    minLength="2"
                    maxLength="150"
                    placeholder="E-mail"
                    value="IsaevaPA@company.com"
                    disabled={!isEdit}
                    required
                  />
                </label>
                {isEdit && (
                  <span className="profile__input-error profile__input-error_margin_custom">
                    {errors.middleName?.message}
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
