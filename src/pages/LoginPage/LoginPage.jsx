import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/Reusable/Login/Login';
// import ReturnButton from '../../components/Reusable/ReturnButton/ReturnButton';

import { MainButton } from '../../components/UI/Buttons/MainButton';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <main>
      <section className="login-page">
        <h2 className="title is-4">СТРАНИЦА ЛОГИНА</h2>
        <Login />
        <MainButton
          label="На главную"
          disabled={false}
          size="is-normal"
          theme="is-link"
          onClick={handleClick}
        />
      </section>
    </main>
  );
}
