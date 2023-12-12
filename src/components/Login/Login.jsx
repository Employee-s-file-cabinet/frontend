import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/ValidationSchema';
import { MainButton } from '../UI/Buttons/MainButton';
import { MainField } from '../UI/Fields/MainField';
import { Icon } from '../UI/Icons/Icons';

export default function Login({ title, buttonLabel, flag }) {
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
  // STATE TO CHANGE VISIBLY IN PASSWORD FIELD
  const [passwordType, setPasswordType] = useState('password');
  // STATE TO CHANGE EYE ICON IN PASSWORD FIELD
  const [eyeType, setEyeType] = useState('fa-eye-slash');
  // STATES FOR WATCHING FOCUS ON FIELDS FOR CHANGE ICONS ON CROSS WHEN FIELD FOCUSED
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
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="login__title">{title}</h2>
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
      <div className="login__submit-container">
        {flag === 'login' && (
          <Link to="/accessrestore" className="login__restore-pass-link">
            Забыли пароль?
          </Link>
        )}

        <MainButton
          disabled={!isValid}
          size="is-medium"
          theme="is-primary"
          extraClass="login__button"
          type="submit"
        >
          {buttonLabel}
        </MainButton>
      </div>
    </form>
  );
}