/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Icon } from '../UI/Icons/Icons';
import ProfilePic from '../../assets/images/profile.jpg';

function ProfileInfo() {
  const [isEdit, setIsEdit] = useState(false);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { isValid, errors },
  } = useForm();

  function handleEditButton() {
    // eslint-disable-next-line no-unused-expressions
    isEdit === true ? setIsEdit(false) : setIsEdit(true);
  }

  return (
    <section className="profile">
      <h2 className="title is-2">Исаева Полина Артёмовна</h2>
      <div className="profile__content">
        <div className="profile__image-container">
          <img className="profile__image" alt="Логотип" src={ProfilePic} />
          <div className="file profile__image-file">
            <label className="file-label" htmlFor="profileImage">
              <input
                {...register('file')}
                className="file-input"
                type="file"
                name="profileImage"
              />

              <span className="file-cta profile__image-cta">
                <span className="file-label profile__file-label">
                  Загрузить фото
                </span>
                <span className="file-icon">
                  <i className="fas fa-upload" />
                </span>
              </span>
            </label>
            <p className="error-text">{errors.email?.message}</p>
          </div>
        </div>

        <form className="profile__form" id="submit" name="profile">
          <div className="columns is-gapless">
            <div className="column is-one-third">
              <div className="field">
                <label className="label" htmlFor="lastName">
                  Фамилия
                  <div className="control profile__control">
                    <input
                      {...register('lastName')}
                      className="input"
                      type="text"
                      placeholder="Фамилия"
                      value="Исаева"
                      disabled={!isEdit}
                    />
                  </div>
                </label>
                <p className="error">{errors.lastName?.message}</p>
              </div>
            </div>

            <div className="column is-one-third">
              <div className="field">
                <label className="label" htmlFor="department">
                  Отдел
                  <div className="control profile__control">
                    <input
                      {...register('department')}
                      className="input"
                      type="text"
                      placeholder="Отдел"
                      value="Кадры"
                      disabled={!isEdit}
                    />
                  </div>
                </label>
                <p className="error">{errors.department?.message}</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="field">
                <label className="label" htmlFor="mobileNumber">
                  Мобильный телефон
                  <div className="control profile__control">
                    <input
                      {...register('mobileNumber')}
                      className="input"
                      type="text"
                      placeholder="Мобильный телефон"
                      value="+79991000203"
                      disabled={!isEdit}
                    />
                  </div>
                </label>
                <p className="error">{errors.mobileNumber?.message}</p>
              </div>
            </div>
          </div>

          <div className="columns is-gapless">
            <div className="column is-one-third">
              <div className="field">
                <label className="label" htmlFor="firstName">
                  Имя
                  <div className="control profile__control">
                    <input
                      {...register('firstName')}
                      className="input"
                      type="text"
                      placeholder="Имя"
                      value="Полина"
                      disabled={!isEdit}
                    />
                  </div>
                </label>
                <p className="error">{errors.firstName?.message}</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="field">
                <label className="label" htmlFor="jobTitle">
                  Должность
                  <div className="control profile__control">
                    <input
                      {...register('jobTitle')}
                      className="input"
                      type="text"
                      placeholder="Должность"
                      value="HR-менеджер"
                      disabled={!isEdit}
                    />
                  </div>
                </label>
                <p className="error">{errors.jobTitle?.message}</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="field">
                <label className="label" htmlFor="extNumber">
                  Внутренний номер
                  <div className="control profile__control">
                    <input
                      {...register('extNumber')}
                      className="input"
                      type="text"
                      placeholder="Внутренний номер"
                      value="33-33"
                      disabled={!isEdit}
                    />
                  </div>
                </label>
                <p className="error">{errors.extNumber?.message}</p>
              </div>
            </div>
          </div>

          <div className="columns is-gapless">
            <div className="column is-one-third">
              <div className="field">
                <label className="label" htmlFor="middleName">
                  Отчество
                  <div className="control profile__control">
                    <input
                      {...register('middleName')}
                      className="input"
                      type="text"
                      placeholder="Отчество"
                      value="Артемовна"
                      disabled={!isEdit}
                    />
                  </div>
                </label>
                <p className="error">{errors.middleName?.message}</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="field">
                <label className="label" htmlFor="grade">
                  Грейд
                  <div className="control profile__control">
                    <input
                      {...register('grade')}
                      className="input"
                      type="number"
                      placeholder="Грейд"
                      value="4"
                      disabled={!isEdit}
                    />
                  </div>
                </label>
                <p className="error">{errors.grade?.message}</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="field">
                <label className="label" htmlFor="email">
                  E-mail
                  <div className="control profile__control">
                    <input
                      {...register('email')}
                      className="input"
                      type="email"
                      placeholder="E-mail"
                      value="IsaevaPA@company.com"
                      disabled={!isEdit}
                    />
                  </div>
                </label>
                <p className="error">{errors.email?.message}</p>
              </div>
            </div>
          </div>

          <div
            className={`buttons ${
              isEdit === false ? 'profile__buttons-disabled' : ''
            }`}
          >
            <button className="button is-primary">Сохранить</button>
            <button className="button is-primary is-light">
              Сбросить изменения
            </button>
          </div>
        </form>
        <Icon
          icon="fa-pen-to-square"
          size="is-small"
          onClick={() => handleEditButton()}
        />
      </div>
    </section>
  );
}

export default ProfileInfo;
