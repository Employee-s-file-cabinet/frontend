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

  function handleEditButton() {
    return isEdit === true ? setIsEdit(false) : setIsEdit(true);
  }

  return (
    <section className="profile">
      <h2 className="profile__title title is-2">Исаева Полина Артёмовна</h2>
      <div className="profile__container">
        <div className="profile__image-container">
          <img className="profile__image" alt="Логотип" src={ProfilePic} />
          <div
            className={`profile__file file ${
              isEdit === false ? 'profile__buttons-disabled' : ''
            }`}
          >
            <label className="profile__label file-label" htmlFor="profileImage">
              <input
                {...register('file')}
                className="file-input"
                type="file"
                name="profileImage"
              />
              <span className="profile__cta file-cta">
                <span className="profile__label file-label">
                  Загрузить фото
                </span>
                <span className="profile__icon file-icon">
                  <i className="fas fa-upload" />
                </span>
              </span>
            </label>
            <span className="profile__input-error">
              {errors.email?.message}
            </span>
          </div>
        </div>
        <form className="profile__form" id="submit" name="profile">
          <div className="columns">
            <div className="column profile__column">
              <div className="profile__input">
                <label className="profile__input-label" htmlFor="lastName">
                  Фамилия
                  <input
                    {...register('lastName')}
                    className="input profile__input"
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
              <div className="profile__input">
                <label className="profile__input-label" htmlFor="firstName">
                  Имя
                  <input
                    {...register('firstName')}
                    className="input profile__input"
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
              <div className="profile__input">
                <label className="profile__input-label" htmlFor="middleName">
                  Отчество
                  <input
                    {...register('middleName')}
                    className="input profile__input"
                    type="text"
                    minLength="2"
                    maxLength="150"
                    placeholder="Отчество"
                    value="Артемовна"
                    disabled={!isEdit}
                    required
                  />
                </label>
                <span className="profile__input-error profile__input-error_margin_custom">
                  {errors.middleName?.message}
                </span>
              </div>
            </div>
            <div className="profile__column column">
              <div className="profile__input">
                <label className="profile__input-label" htmlFor="department">
                  Отдел
                  <input
                    {...register('department')}
                    className="input profile__input"
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
              <div className="profile__input">
                <label className="profile__input-label" htmlFor="jobTitle">
                  Должность
                  <input
                    {...register('jobTitle')}
                    className="input profile__input"
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
              <div className="profile__input">
                <label className="profile__input-label" htmlFor="grade">
                  Грейд
                  <input
                    {...register('grade')}
                    className="input profile__input"
                    type="text"
                    minLength="2"
                    maxLength="150"
                    placeholder="Грейд"
                    value="4"
                    disabled={!isEdit}
                    required
                  />
                </label>
                <span className="profile__input-error profile__input-error_margin_custom">
                  {errors.grade?.message}
                </span>
              </div>
            </div>
            <div className="profile__column column">
              <div className="profile__input">
                <label className="profile__input-label" htmlFor="mobileNumber">
                  Мобильный телефон
                  <input
                    {...register('mobileNumber')}
                    className="input profile__input"
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
              <div className="profile__input">
                <label className="profile__input-label" htmlFor="extNumber">
                  Внутренний номер
                  <input
                    {...register('extNumber')}
                    className="input profile__input"
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
              <div className="profile__input">
                <label className="profile__input-label" htmlFor="email">
                  E-mail
                  <input
                    {...register('email')}
                    className="input profile__input"
                    type="text"
                    minLength="2"
                    maxLength="150"
                    placeholder="E-mail"
                    value="IsaevaPA@company.com"
                    disabled={!isEdit}
                    required
                  />
                </label>
                <span className="profile__input-error profile__input-error_margin_custom">
                  {errors.email?.message}
                </span>
              </div>
            </div>
          </div>
          <div
            className={`profile__buttons ${
              isEdit === false ? 'profile__buttons-disabled' : ''
            }`}
          >
            <button className="profile__button button is-primary">
              Сохранить
            </button>
            <button className="profile__button button is-primary is-light">
              Сбросить изменения
            </button>
          </div>
        </form>
        <div className="profile__button-edit">
          <Icon
            icon="fa-pen-to-square"
            size="is-small"
            onClick={() => handleEditButton()}
          />
        </div>
      </div>
    </section>
  );
}

export default ProfileInfo;
