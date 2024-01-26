/* eslint-disable no-console */
import './ProfileInfo.scss';
import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Icon } from '../UI/Icons/Icons';
import ProfilePic from '../../assets/images/profile.jpg';
import { ProfileInfoValidationSchema } from '../../utils/validation/ProfileInfoValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import { patchSelectEmployee } from '../../utils/api/UsersApi';

function ProfileInfo() {
  // eslint-disable-next-line
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);

  function transformPhone(number) {
    if (number?.includes('+')) {
      return number;
    }
    return `+${number}`;
  }

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors, isDirty },
  } = useForm({
    defaultValues: {
      last_name: 'Исаева',
      first_name: 'Полина',
      middle_name: 'Артемовна',
      department: 'Кадры',
      position: 'Менеджер',
      grade: '4',
      mobile_phone_number: '+79091114422',
      office_phone_number: '32-23',
      email: 'isaevaPA@company.com',
    },
    resolver: yupResolver(ProfileInfoValidationSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    reset({
      last_name: currentUser.last_name,
      first_name: currentUser.first_name,
      middle_name: currentUser.middle_name,
      department: 'Кадры',
      position: 'Менеджер',
      grade: currentUser.grade,
      mobile_phone_number: transformPhone(currentUser.mobile_phone_number),
      office_phone_number: '32-23',
      email: currentUser.email,
    });
  }, [currentUser, reset]);

  function onReset() {
    reset(undefined, { keepDirtyValues: false });
    setIsEdit(false);
  }

  function onSubmit(data) {
    // eslint-disable-next-line no-console
    console.log(data, 'data');

    // Not implemented in backend

    // patchSelectEmployee(currentUser.id,
    //   data).then((res)=>{
    //   setCurrentUser(res);
    //
    // }).catch((err) =>
    //   // eslint-disable-next-line no-console
    //   console.log(`Ошибка: ${err} Обратитесь в службу поддержки. Вы ввели ${data}`)
    // );

    setCurrentUser(data);
    setIsEdit(false);
  }
  return (
    <section className="profile">
      <h2 className="profile__title">{`${currentUser.first_name} ${currentUser.middle_name} ${currentUser.last_name}`}</h2>
      <div className="profile__container">
        <div className="profile__image-container">
          <img className="profile__image" alt="Логотип" src={ProfilePic} />
          {isEdit && (
            <div className="file profile__file-upload">
              <div className="profile__file-upload-container">
                <span className="profile__file-upload-label file-label">
                  Загрузить фото
                </span>
                <i className="fas fa-upload" />
              </div>
              <input
                {...register('picture')}
                className="file-input"
                type="file"
                accept=".jpg,,.png,.jpeg"
              />
            </div>
          )}
          <span className="profile__input-error">
            {errors.picture?.message}
          </span>
        </div>
        <form
          className="profile__form"
          id="submit"
          name="profile"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="profile__columns">
            <ul className="profile__column">
              <li className="profile__input-container">
                <label className="profile__input-label" htmlFor="last_name">
                  Фамилия
                  <input
                    {...register('last_name')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    } ${
                      errors.last_name?.message && 'profile__input_type_error'
                    }`}
                    type="text"
                    placeholder="Фамилия"
                    disabled={!isEdit}
                  />
                </label>
                <span className="profile__input-error">
                  {errors.last_name?.message}
                </span>
              </li>
              <li className="profile__input-container">
                <label className="profile__input-label" htmlFor="department">
                  Отдел
                  <input
                    {...register('department')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    } ${
                      errors.department?.message && 'profile__input_type_error'
                    }`}
                    type="text"
                    placeholder="Отдел"
                    disabled={!isEdit}
                  />
                </label>
                <span className="profile__input-error">
                  {errors.department?.message}
                </span>
              </li>
              <li className="profile__input-container">
                <span className="profile__input-label">
                  Мобильный телефон
                  <Controller
                    render={({ field }) => (
                      <input
                        {...field}
                        className={`profile__input ${
                          !isEdit && 'profile__input_type_disabled'
                        } ${
                          errors.mobile_phone_number?.message &&
                          'profile__input_type_error'
                        }`}
                        type="text"
                        placeholder="Мобильный телефон"
                        onChange={(e) =>
                          field.onChange(transformPhone(e.target.value))
                        }
                        disabled={!isEdit}
                      />
                    )}
                    name="mobile_phone_number"
                    control={control}
                  />
                </span>
                <span className="profile__input-error">
                  {errors.mobile_phone_number?.message}
                </span>
              </li>
            </ul>
            <ul className="profile__column">
              <li className="profile__input-container">
                <label className="profile__input-label" htmlFor="first_name">
                  Имя
                  <input
                    {...register('first_name')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    } ${
                      errors.first_name?.message && 'profile__input_type_error'
                    }`}
                    type="text"
                    placeholder="Имя"
                    disabled={!isEdit}
                  />
                </label>
                <span className="profile__input-error">
                  {errors.first_name?.message}
                </span>
              </li>
              <li className="profile__input-container">
                <label className="profile__input-label" htmlFor="position">
                  Должность
                  <input
                    {...register('position')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    } ${
                      errors.position?.message && 'profile__input_type_error'
                    }`}
                    type="text"
                    placeholder="Должность"
                    disabled={!isEdit}
                  />
                </label>
                <span className="profile__input-error">
                  {errors.position?.message}
                </span>
              </li>
              <li className="profile__input-container">
                <label
                  className="profile__input-label"
                  htmlFor="office_phone_number"
                >
                  Внутренний номер
                  <input
                    {...register('office_phone_number')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    } ${
                      errors.office_phone_number?.message &&
                      'profile__input_type_error'
                    }`}
                    type="text"
                    placeholder="Внутренний номер"
                    disabled={!isEdit}
                  />
                </label>
                <span className="profile__input-error">
                  {errors.office_phone_number?.message}
                </span>
              </li>
            </ul>
            <ul className="profile__column">
              <li className="profile__input-container">
                <label className="profile__input-label" htmlFor="middle_name">
                  Отчество
                  <input
                    {...register('middle_name')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    } ${
                      errors.middle_name?.message && 'profile__input_type_error'
                    }`}
                    type="text"
                    placeholder="Отчество"
                    disabled={!isEdit}
                  />
                </label>
                {isEdit && (
                  <span className="profile__input-error profile__input-error_margin_custom">
                    {errors.middle_name?.message}
                  </span>
                )}
              </li>
              <li className="profile__input-container">
                <label className="profile__input-label" htmlFor="grade">
                  Грейд
                  <input
                    {...register('grade')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    } ${errors.grade?.message && 'profile__input_type_error'}`}
                    type="text"
                    placeholder="Грейд"
                    disabled={!isEdit}
                  />
                </label>
                {isEdit && (
                  <span className="profile__input-error profile__input-error_margin_custom">
                    {errors.grade?.message}
                  </span>
                )}
              </li>
              <li className="profile__input-container">
                <label className="profile__input-label" htmlFor="email">
                  E-mail
                  <input
                    {...register('email')}
                    className={`profile__input profile__input_no-capital-letter ${
                      !isEdit && 'profile__input_type_disabled'
                    } ${errors.email?.message && 'profile__input_type_error'}`}
                    type="email"
                    placeholder="E-mail"
                    disabled={!isEdit}
                  />
                </label>
                {isEdit && (
                  <span className="profile__input-error profile__input-error_margin_custom">
                    {errors.email?.message}
                  </span>
                )}
              </li>
            </ul>
          </fieldset>
          {isEdit && (
            <div className="profile__buttons">
              <button
                type="submit"
                className="button is-primary profile__button"
                disabled={!isValid || !isDirty}
              >
                Сохранить
              </button>
              {isDirty ? (
                <button
                  type="button"
                  className="button is-primary is-light profile__button"
                  disabled={!isDirty}
                  onClick={onReset}
                >
                  Сбросить изменения
                </button>
              ) : (
                <button
                  type="button"
                  className="button is-primary is-light profile__button"
                  onClick={() => setIsEdit(false)}
                >
                  Отмена
                </button>
              )}
            </div>
          )}
        </form>
        {!isEdit && (
          <div className="profile__button-edit">
            <Icon
              icon="fa-pen-to-square"
              size="is-small"
              onClick={() => setIsEdit(true)}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default ProfileInfo;
