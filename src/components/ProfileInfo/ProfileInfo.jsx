import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Icon } from '../UI/Icons/Icons';
import ProfilePic from '../../assets/images/profile.jpg';
import { ProfileInfoValidationSchema } from '../../utils/validation/ProfileInfoValidation';
import './ProfileInfo.scss';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import { patchSelectEmployee } from '../../utils/api/UsersApi';

function ProfileInfo() {
  // eslint-disable-next-line
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  console.log(currentUser, 'currentUser.last_name');

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
      jobTitle: 'Менеджер',
      grade: '4',
      mobile: '+79091114422',
      extNumber: '32-23',
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
      department: currentUser.department,
      jobTitle: currentUser.position,
      grade: currentUser.grade,
      mobile: currentUser.mobile_phone_number,
      extNumber: currentUser.office_phone_number,
      email: currentUser.email,
    });
  }, [currentUser, reset]);

  const [isEdit, setIsEdit] = useState(false);

  function transformPhone(number) {
    if (number.includes('+')) {
      return number;
    }
    return `+${number}`;
  }

  function onReset() {
    reset(undefined, { keepDirtyValues: false });
    setIsEdit(false);
  }

  function onSubmit(data) {
    // eslint-disable-next-line no-console
    console.log(data, 'data');

    // Not implemented in backend

    // patchSelectEmployee(currentUser.id,
    //   {
    //     last_name: data.last_name,
    //     first_name: data.first_name,
    //     middle_name: data.middle_name,
    //     department: data.department,
    //     position: data.jobTitle,
    //     grade: data.grade,
    //     mobile_phone_number: data.mobile,
    //     office_phone_number: data.extNumber,
    //     email: data.email,
    //   }).then((res)=>{
    //   setCurrentUser(res);
    //
    // }).catch((err) =>
    //   // eslint-disable-next-line no-console
    //   console.log(`Ошибка: ${err} Обратитесь в службу поддержки. Вы ввели ${data}`)
    // );

    setCurrentUser({
      last_name: data.last_name,
      first_name: data.first_name,
      middle_name: data.middle_name,
      department: data.department,
      position: data.jobTitle,
      grade: data.grade,
      mobile_phone_number: data.mobile,
      office_phone_number: data.extNumber,
      email: data.email,
    });
    setIsEdit(false);
  }
  return (
    <section className="profile">
      <h2 className="profile__title">{`${currentUser.first_name} ${currentUser.middle_name} ${currentUser.last_name}`}</h2>
      <div className="profile__container">
        <div className="profile__image-container">
          <img className="profile__image" alt="Логотип" src={ProfilePic} />
          {isEdit && (
            <div className="file is-normal">
              <label className="file-label" htmlFor="picture">
                <input
                  {...register('picture')}
                  className="file-input"
                  type="file"
                  accept=".jpg,,.png,.jpeg"
                />
                <div className="profile__file-upload-container">
                  <span className="profile__file-upload-label file-label">
                    Загрузить фото
                  </span>
                  <span className="file-icon">
                    <i className="fas fa-upload" />
                  </span>
                </div>
              </label>
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
                        }`}
                        type="text"
                        placeholder="Мобильный телефон"
                        onChange={(e) =>
                          field.onChange(transformPhone(e.target.value))
                        }
                        disabled={!isEdit}
                      />
                    )}
                    name="mobile"
                    control={control}
                  />
                </span>
                <span className="profile__input-error">
                  {errors.mobile?.message}
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
                <label className="profile__input-label" htmlFor="jobTitle">
                  Должность
                  <input
                    {...register('jobTitle')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    }`}
                    type="text"
                    placeholder="Должность"
                    disabled={!isEdit}
                  />
                </label>
                <span className="profile__input-error">
                  {errors.jobTitle?.message}
                </span>
              </li>
              <li className="profile__input-container">
                <label className="profile__input-label" htmlFor="extNumber">
                  Внутренний номер
                  <input
                    {...register('extNumber')}
                    className={`profile__input ${
                      !isEdit && 'profile__input_type_disabled'
                    }`}
                    type="text"
                    placeholder="Внутренний номер"
                    disabled={!isEdit}
                  />
                </label>
                <span className="profile__input-error">
                  {errors.extNumber?.message}
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
                    }`}
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
                    }`}
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
              <button
                type="button"
                className="button is-primary is-light profile__button"
                disabled={!isDirty}
                onClick={onReset}
              >
                Сбросить изменения
              </button>
            </div>
          )}
        </form>
        <div className="profile__button-edit">
          <Icon
            icon="fa-pen-to-square"
            size="is-small"
            onClick={() =>
              isEdit === false ? setIsEdit(true) : setIsEdit(false)
            }
          />
        </div>
      </div>
    </section>
  );
}

export default ProfileInfo;
