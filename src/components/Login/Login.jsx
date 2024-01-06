import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MainButton } from '../UI/Buttons/MainButton';
import { MainField } from '../UI/Fields/MainField';
import { Icon } from '../UI/Icons/Icons';
import { loginSchema } from '../../utils/ValidationSchema';
import * as auth from '../../utils/Auth';

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });
  // State to change visibly in password field
  const [passwordType, setPasswordType] = useState('password');
  // State to change eye icon in password field
  const [eyeType, setEyeType] = useState('fa-eye-slash');
  // States for watching focus on fields for change icons on cross when field focused
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const extraClassForPasswordIcon = isFocusedPassword
    ? 'icon_margined icon__clickable'
    : 'icon_margined';

  function onSubmit(data) {
    // eslint-disable-next-line no-console
    console.log(data);
    auth.authorize(data.email, data.password);
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
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="login__title">Добро пожаловать!</h2>

      <p className="login__authorization-error">
        Введены неверная почта и/или пароль
      </p>

      <fieldset className="login__fieldset">
        <p className="login__fieldset-text">Электронная почта</p>
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
              extraClass="icon__clickable"
            />
          ) : (
            <Icon icon="fa-envelope" size="is-small" position="is-right" />
          )}
        </MainField>
      </fieldset>

      <fieldset className="login__fieldset">
        <p className="login__fieldset-text">Пароль</p>

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
              extraClass="icon__clickable"
            />
          ) : (
            <Icon icon="fa-lock" size="is-small" position="is-right" />
          )}
          <Icon
            icon={eyeType}
            size="is-small"
            position="is-right"
            extraClass={extraClassForPasswordIcon}
            onClick={handleEyeClick}
          />
        </MainField>
      </fieldset>

      <div className="login__submit-container">
        <Link to="/access-restore" className="login__restore-pass-link">
          Забыли пароль?
        </Link>
        <MainButton
          disabled={!isValid}
          size="is-medium"
          theme="is-primary"
          extraClass="login__button"
          type="submit"
        >
          Войти
        </MainButton>
      </div>
    </form>
  );
}
