import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { MainButton } from '../../components/UI/Buttons/MainButton';
import { MainField } from '../../components/UI/Fields/MainField';
import { Logo } from '../../components/Logo/Logo';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <section className="login-page">
      <Logo />
      <form className="login-page__form">
        <h2 className="login-page__title">Добро пожаловать!</h2>
        <fieldset className="login-page__fieldset">
          <p className="login-page__fieldset-text">Электронная почта</p>
          <MainField
            type="email"
            theme="is-primary"
            size="is-normal"
            extraClass="is-fullwidth"
            placeholder="Введите E-mail"
          />
        </fieldset>
        <fieldset className="login-page__fieldset">
          <p className="login-page__fieldset-text">Пароль</p>
          <MainField
            type="password"
            theme="is-primary"
            size="is-normal"
            placeholder="Введите пароль"
          />
        </fieldset>
        <div className="login-page__submit-container">
          <Link to="/" className="login-page__restore-pass-link">
            Забыли пароль?
          </Link>
          <MainButton
            label="Войти"
            disabled={false}
            size="is-medium"
            theme="is-primary"
            extraClass="login-page__button"
            onClick={handleClick}
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

// <span className="icon has-text-success">
//   <i className="fas fa-check-square" style={{ width: '100%', height: '100%' }}/>
// </span>
