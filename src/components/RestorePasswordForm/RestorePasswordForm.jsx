import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MainButton } from '../UI/Buttons/MainButton';
import { MainField } from '../UI/Fields/MainField';
import { Icon } from '../UI/Icons/Icons';
import { restorePasswordSchema } from '../../utils/ValidationSchema';

export default function RestorePasswordForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(restorePasswordSchema),
    mode: 'onChange',
  });

  const [isFocusedEmail, setIsFocusedEmail] = useState(false);

  function onSubmit(data) {
    navigate('/success-sent-email', { state: { email: data.email } });
  }

  const handleFocus = () => {
    setIsFocusedEmail(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocusedEmail(false);
    }, 500);
  };

  const handleClickIconReset = () => {
    resetField('email');
  };

  return (
    <form className="restore-password" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="restore-password__title">Забыли пароль?</h2>

      <div>
        <p className="restore-password__annotation">
          Введите адрес электронной почты, на которую зарегистрирован аккаунт.
          Мы отправим на него ссылку для изменения пароля.
        </p>
        <p className="restore-password__authorization-error">
          Не удалось найти аккаунт с указанным email.
        </p>
      </div>

      <fieldset className="restore-password__fieldset">
        <p className="restore-password__fieldset-text">Электронная почта</p>
        <MainField
          type="email"
          theme="is-primary"
          size="is-normal"
          extraClass="is-fullwidth"
          placeholder="Введите E-mail"
          icon="has-icons-right"
          focus={handleFocus}
          blur={handleBlur}
          register={register('email')}
          errors={errors.email?.message}
        >
          {isFocusedEmail ? (
            <Icon
              icon="fa-xmark"
              size="is-small"
              position="is-right"
              onClick={handleClickIconReset}
            />
          ) : (
            <Icon icon="fa-envelope" size="is-small" position="is-right" />
          )}
        </MainField>
      </fieldset>
      <div className="restore-password__submit-container">
        <MainButton
          disabled={!isValid}
          size="is-medium"
          theme="is-primary"
          extraClass="login__button"
          type="submit"
        >
          Отправить
        </MainButton>
      </div>
    </form>
  );
}
