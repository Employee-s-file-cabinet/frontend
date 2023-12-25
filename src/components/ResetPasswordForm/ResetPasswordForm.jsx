import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MainButton } from '../UI/Buttons/MainButton';
import { MainField } from '../UI/Fields/MainField';
import { Icon } from '../UI/Icons/Icons';
import { resetPasswordSchema } from '../../utils/ValidationSchema';

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    mode: 'onChange',
  });

  const [passwordType, setPasswordType] = useState('password');
  const [eyeType, setEyeType] = useState('fa-eye-slash');
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] =
    useState(false);
  const [isExtraClassForPasswordIcon, setIsExtraClassForPasswordIcon] =
    useState('icon_margined');

  function onSubmit(data) {
    console.log(data);
    navigate('/reset-success');
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
    if (event.target.name === 'confirmPassword') {
      setIsFocusedConfirmPassword(true);
      setIsExtraClassForPasswordIcon('icon_margined icon__clickable');
    } else {
      setIsFocusedPassword(true);
      setIsExtraClassForPasswordIcon('icon_margined icon__clickable');
    }
  };

  const handleBlur = (event) => {
    if (event.target.name === 'confirmPassword') {
      setTimeout(() => {
        setIsFocusedConfirmPassword(false);
        setIsExtraClassForPasswordIcon('icon_margined');
      }, 500);
    } else {
      setTimeout(() => {
        setIsFocusedPassword(false);
        setIsExtraClassForPasswordIcon('icon_margined');
      }, 500);
    }
  };

  const handleClickIconReset = (event) => {
    const parentElement = event.currentTarget.parentNode;
    const inputElement = parentElement.querySelector('input');
    if (inputElement.name === 'confirmPassword') {
      resetField('confirmPassword');
    } else {
      resetField('password');
    }
  };

  return (
    <form className="reset-password" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="reset-password__title">Создайте новый пароль</h2>
      <p className="reset-password__authorization-error">
        Введены неверная почта и/или пароль
      </p>
      <fieldset className="reset-password__fieldset">
        <p className="reset-password__fieldset-text">Новый пароль</p>
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
            onClick={handleEyeClick}
            extraClass={isExtraClassForPasswordIcon}
          />
        </MainField>
      </fieldset>
      <fieldset className="reset-password__fieldset">
        <p className="reset-password__fieldset-text">Новый пароль ещё раз</p>
        <MainField
          type={passwordType}
          theme="is-primary"
          size="is-normal"
          placeholder="Введите пароль"
          icon="has-icons-right"
          focus={handleFocus}
          blur={handleBlur}
          register={register('confirmPassword')}
          errors={errors.confirmPassword?.message}
        >
          {isFocusedConfirmPassword ? (
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
            onClick={handleEyeClick}
            extraClass={isExtraClassForPasswordIcon}
          />
        </MainField>
      </fieldset>
      <div className="reset-password__submit-container">
        <MainButton
          disabled={!isValid}
          size="is-medium"
          theme="is-primary"
          extraClass="login__button"
          type="submit"
        >
          Сохранить
        </MainButton>
      </div>
    </form>
  );
}
