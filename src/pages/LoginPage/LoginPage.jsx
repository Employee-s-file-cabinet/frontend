import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/ValidationSchema';
import { MainButton } from '../../components/UI/Buttons/MainButton';
import { MainField } from '../../components/UI/Fields/MainField';
import { Logo } from '../../components/Logo/Logo';
import { Icon } from '../../components/UI/Icons/Icons';

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  // СТЕЙТ ДЛЯ ИЗМЕНЕНИЯ ВИДИМОСТИ ПОЛЯ PASSWORD
  const [passwordType, setPasswordType] = useState('password');
  // СТЕЙТ ДЛЯ ИЗМЕНЕНИЯ ИКОНКИ В ПОЛЕ PASSWORD
  const [eyeType, setEyeType] = useState('fa-eye-slash');
  // СТЕЙТЫ ДЛЯ ОТСЛЕЖИВАНИЯ ФОКУСА НА ПОЛЯХ ДЛЯ ЗАМЕНЫ ИКОНКИ НА КРЕСТИК ПРИ ФОКУСЕ
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  function onSubmit(data) {
    console.log(data);
    navigate('/');
  }

  function handlePasswordType() {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  }

  function handleEyeType() {
    setEyeType(eyeType === 'fa-eye-slash' ? 'fa-eye' : 'fa-eye-slash');
  }

  const handleEyeClick = () => {
    handlePasswordType();
    handleEyeType();
  };

  const handleFocus = (event) => {
    if (event.target.type === 'email') {
      setIsFocusedEmail(true);
    } else {
      setIsFocusedPassword(true);
    }
  };

  const handleBlur = (event) => {
    if (event.target.type === 'email') {
      setTimeout(() => {
        setIsFocusedEmail(false);
      }, 500);
    } else {
      setTimeout(() => {
        setIsFocusedPassword(false);
      }, 500);
    }
  };

  const handleClickIconReset = (event) => {
    const parentElement = event.currentTarget.parentNode;
    const inputElement = parentElement.querySelector('input');
    if (inputElement.type === 'email') {
      resetField('email');
    } else {
      resetField('password');
    }
  };

  return (
    <section className="login-page">
      <Logo />
      <form className="login-page__form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="login-page__title">Добро пожаловать!</h2>
        <p className="login-page__authorization-error">
          Введены неверная почта и/или пароль
        </p>
        <fieldset className="login-page__fieldset">
          <p className="login-page__fieldset-text">Электронная почта</p>
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
        <fieldset className="login-page__fieldset">
          <p className="login-page__fieldset-text">Пароль</p>
          <MainField
            type={passwordType}
            theme="is-primary"
            size="is-normal"
            placeholder="Введите пароль"
            icon="has-icons-right"
            focus={handleFocus}
            blur={handleBlur}
            register={register('password')}
            errors={errors.password?.message}
          >
            {isFocusedPassword ? (
              <Icon
                icon="fa-xmark"
                size="is-small"
                position="is-right"
                onClick={handleClickIconReset}
              />
            ) : (
              <Icon icon="fa-lock" size="is-small" position="is-right" />
            )}
            <Icon
              icon={eyeType}
              size="is-small"
              position="is-right"
              extraClass="icon_margined"
              onClick={handleEyeClick}
            />
          </MainField>
        </fieldset>
        <div className="login-page__submit-container">
          <Link to="/" className="login-page__restore-pass-link">
            Забыли пароль?
          </Link>
          <MainButton
            label="Войти"
            disabled={!isValid}
            size="is-medium"
            theme="is-primary"
            extraClass="login-page__button"
            type="submit"
          />
        </div>
      </form>
      <footer className="login-page__footer">
        <p className="login-page__footer-text">Политика конфиденциальности</p>
        <p className="login-page__footer-text">© Все права защищены</p>
      </footer>
    </section>
  );
}
