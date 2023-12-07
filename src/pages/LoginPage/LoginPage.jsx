import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MainButton } from '../../components/UI/Buttons/MainButton';
import { Logo } from '../../components/Logo/Logo';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <section className="login-page">
      <Logo />
      <form>
        <MainButton
          label="На главную"
          disabled={false}
          size="is-normal"
          theme="is-link"
          onClick={handleClick}
        />
      </form>
      <footer>
        <p>Политика конфиденциальности</p>
        <p>© Все права защищены</p>
      </footer>
    </section>
  );
}
